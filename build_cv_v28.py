from pathlib import Path
import json, re
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, KeepTogether, PageBreak, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
root=Path(__file__).parent/'krzysztof-cv-final'; public=root/'public'
d=json.loads((root/'src/cvData.json').read_text(encoding='utf8'))
pdfmetrics.registerFont(TTFont('DejaVu','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuBold','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
navy=HexColor('#16253B'); teal=HexColor('#238D91')
s={
'name':ParagraphStyle('name',fontName='DejaVuBold',fontSize=17,leading=21,textColor=navy,spaceAfter=3),
'sub':ParagraphStyle('sub',fontName='DejaVu',fontSize=9,leading=13,textColor=teal,spaceAfter=8),
'contact':ParagraphStyle('contact',fontName='DejaVu',fontSize=7.6,leading=12,spaceAfter=9),
'h':ParagraphStyle('h',fontName='DejaVuBold',fontSize=9.4,leading=13,textColor=navy,spaceBefore=11,spaceAfter=5,borderBottomWidth=.9,borderBottomColor=teal,borderPadding=4,keepWithNext=True),
'p':ParagraphStyle('p',fontName='DejaVu',fontSize=8.1,leading=12.5,spaceAfter=3),
'job':ParagraphStyle('job',fontName='DejaVuBold',fontSize=8.1,leading=12,spaceBefore=5,spaceAfter=2,keepWithNext=True),
'bullet':ParagraphStyle('bullet',fontName='DejaVu',fontSize=7.9,leading=11.8,leftIndent=12,firstLineIndent=-9,spaceAfter=2.5),
'proj':ParagraphStyle('proj',fontName='DejaVuBold',fontSize=8.1,leading=12,spaceBefore=5,spaceAfter=2,keepWithNext=True),
'link':ParagraphStyle('link',fontName='DejaVu',fontSize=7.6,leading=11,textColor=teal,spaceAfter=4),
'footer':ParagraphStyle('footer',fontName='DejaVu',fontSize=7,leading=10,textColor=navy),
}
def p(txt,sty):return Paragraph(escape(txt),s[sty])
def hyperlink(text,url,style):return Paragraph(f'<link href="{escape(url, {"\"":"&quot;"})}" color="#238D91">{escape(text)}</link>',s[style])
def make(lang,variant):
 v=d['variants'][variant]; pl=lang=='pl'
 title=v['titlePl' if pl else 'titleEn']; profile=v['profilePl' if pl else 'profileEn']; exp=d['experience'][lang]
 H={'pl':['PROFIL ZAWODOWY','DOŚWIADCZENIE ZAWODOWE','UMIEJĘTNOŚCI','UMIEJĘTNOŚCI TECHNICZNE','PROJEKTY','WYKSZTAŁCENIE I KURSY','INFORMACJE DODATKOWE'], 'en':['PROFESSIONAL PROFILE','WORK EXPERIENCE','SKILLS','TECHNICAL SKILLS','PROJECTS','EDUCATION & COURSES','ADDITIONAL INFORMATION']}[lang]
 group_names={'business':('Biznes i operacje','Business & operations'),'data':('Analiza danych','Data analytics'),'ai':('Python / ML / CV / RAG','Python / ML / CV / RAG'),'creative':('Generative AI / Grafika / Wideo','Generative AI / Design / Video'),'software':('Software / Cloud','Software / Cloud')}
 story=[p('Krzysztof Broniszewski','name'),p(title,'sub'),p('Kraków | +48 510 852 282 | k.broniszewski@gmail.com','contact')]
 link_labels={'cv':'CV online','linkedin':'LinkedIn','github':'GitHub','portfolio':'Portfolio','youtube':'YouTube'}
 story.append(Paragraph('    '.join(f'<link href="{d["urls"][k]}" color="#238D91">{label}</link>' for k,label in link_labels.items()),s['contact']))
 story += [p(H[0],'h'),p(profile,'p'),p(H[1],'h')]
 story.append(p(f'Walstead Kraków Sp. z o.o. | {exp["walsteadTitle"]} | 02.2023–11.2026','job'))
 story.extend(p('• '+x,'bullet') for x in exp['walstead'])
 story.append(p(f'{exp["previousTitle"]} | 2005–2023','job'))
 story.extend(p('• '+x,'bullet') for x in exp['previous'])
 story.append(p(exp['egraphTitle'],'job'))
 story.extend(p('• '+x,'bullet') for x in exp['egraph'])
 story.append(p(H[2],'h'))
 for group in v['skillGroups']:
  if group in ['ai','creative','software'] and group==next((x for x in v['skillGroups'] if x in ['ai','creative','software']),None):
   story.append(p(H[3],'h'))
  titleg=group_names[group][0 if pl else 1]
  story.append(p(titleg,'job'))
  story.extend(p('• '+x,'bullet') for x in d['skills'][group][lang])
 story.append(p(H[4],'h'))
 lookup={x['id']:x for x in d['projects']}
 for i,pid in enumerate(v['order'],1):
  proj=lookup[pid]; nm=proj.get('titleEn',proj['title']) if not pl else proj['title']
  story.append(KeepTogether([p(f'{i:02d} | {nm}','proj'),p(proj[lang],'p'),hyperlink('Zobacz projekt ↗' if pl else 'View project ↗',proj['url'],'link')]))
 story.append(p(H[5],'h'))
 story.extend(p('• '+x,'bullet') for x in d['education'][lang])
 story.append(p(H[6],'h'))
 story.extend(p('• '+x,'bullet') for x in d['additional'][lang])
 target=public/f'CV_Krzysztof_Broniszewski_{variant.upper()}_{lang.upper()}.pdf'
 def footer(canvas,doc):
  canvas.saveState(); canvas.setStrokeColor(teal); canvas.setLineWidth(.6);canvas.line(43,32,552,32)
  canvas.setFont('DejaVu',7);canvas.setFillColor(navy);canvas.drawString(44,20,f'Krzysztof Broniszewski | {v[lang]} | CV publiczne');canvas.drawRightString(550,20,str(doc.page));canvas.restoreState()
 lined=[]
 for el in story:
  lined.append(el)
  if isinstance(el,Paragraph) and el.style.name=='h':
   lined.append(HRFlowable(width='100%',thickness=.8,color=teal,spaceBefore=0,spaceAfter=4))
 story=lined
 SimpleDocTemplate(str(target),pagesize=A4,leftMargin=44,rightMargin=44,topMargin=34,bottomMargin=46,title=f'Krzysztof Broniszewski — {title}',author='Krzysztof Broniszewski').build(story,onFirstPage=footer,onLaterPages=footer)
 return target
for v in d['variants']:
 for lang in ['pl','en']:
  print(make(lang,v))
