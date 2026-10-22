import { useEffect, useState } from 'react';
import profileImage from './assets/Base_00032_.png';
import data from './cvData.json';
import './index.css';

const labels = {
 pl: {eyebrow:'PROFIL / DOŚWIADCZENIE', heading:'CV & RESUME', subtitle:'Doświadczenie, projekty i kompetencje zawodowe.',themeLight:'Light Mode',themeDark:'Dark Mode',lang:'English',choose:'WYBIERZ PROFIL',contact:'KONTAKT I LINKI',skills:'UMIEJĘTNOŚCI',experience:'DOŚWIADCZENIE ZAWODOWE',profile:'PROFIL ZAWODOWY',projects:'PROJEKTY',education:'WYKSZTAŁCENIE I KURSY',additional:'INFORMACJE DODATKOWE',download:'Pobierz PDF',period:'02.2023–11.2026',all:'Pełny profil',back:'2005–2023',pdfNote:'Wersja PDF dopasowana do wybranego profilu',certificate:'CERTYFIKAT I ZAKRES SZKOLENIA',certificateHint:'Kliknij miniaturę, aby otworzyć dokument',close:'Zamknij podgląd',docs:['Certyfikat ukończenia kursu','Zakres szkolenia — strona 1','Zakres szkolenia — strona 2'], groups:{business:'BIZNES I OPERACJE',data:'ANALIZA DANYCH',ai:'AI / MACHINE LEARNING',creative:'GENERATIVE AI / GRAFIKA / DRONY',software:'SOFTWARE / NARZĘDZIA'}},
 en: {eyebrow:'PROFILE / EXPERIENCE', heading:'CV & RESUME', subtitle:'Professional experience, projects and technical skills.',themeLight:'Light Mode',themeDark:'Dark Mode',lang:'Polski',choose:'CHOOSE A PROFILE',contact:'CONTACT & LINKS',skills:'SKILLS',experience:'WORK EXPERIENCE',profile:'PROFESSIONAL PROFILE',projects:'PROJECTS',education:'EDUCATION & COURSES',additional:'ADDITIONAL INFORMATION',download:'Download PDF',period:'02.2023–11.2026',all:'Full profile',back:'2005–2023',pdfNote:'PDF tailored to the selected profile',certificate:'CERTIFICATE & COURSE SYLLABUS',certificateHint:'Select a thumbnail to view the document',close:'Close preview',docs:['Course completion certificate','Course syllabus — page 1','Course syllabus — page 2'],groups:{business:'BUSINESS & OPERATIONS',data:'DATA ANALYTICS',ai:'AI / MACHINE LEARNING',creative:'GENERATIVE AI / DESIGN / DRONES',software:'SOFTWARE / TOOLS'}}
};
const embed = new URLSearchParams(window.location.search).get('embed') === '1';
const courseDocs = ['Certyfikat.jpg', 'Zakres_p1.jpg', 'Zakres_p2.jpg'];
const projectById = Object.fromEntries(data.projects.map(p=>[p.id,p]));
export default function App(){
 const [dark,setDark] = useState(true);
 const [lang,setLang] = useState('pl');
 const [selected,setSelected] = useState('all');
 const [activeDoc,setActiveDoc] = useState(null);
 useEffect(() => {
   if (!embed || window.parent === window) return;
   const targetOrigin = window.location.ancestorOrigins?.[0] || '*';
   const sendHeight = () => {
     const height = Math.ceil(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
     window.parent.postMessage({type:'KRZYSZTOF_CV_HEIGHT', height}, targetOrigin);
   };
   const observer = new ResizeObserver(sendHeight);
   observer.observe(document.documentElement);
   const appRoot = document.getElementById('root');
   if (appRoot) observer.observe(appRoot);
   window.addEventListener('load', sendHeight);
   document.fonts?.ready.then(sendHeight);
   requestAnimationFrame(sendHeight);
   return () => {observer.disconnect();window.removeEventListener('load', sendHeight);};
 }, []);
 useEffect(()=>{if(activeDoc===null)return;const onKey=e=>{if(e.key==='Escape')setActiveDoc(null);if(e.key==='ArrowRight')setActiveDoc(i=>(i+1)%courseDocs.length);if(e.key==='ArrowLeft')setActiveDoc(i=>(i+courseDocs.length-1)%courseDocs.length)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[activeDoc]);
 const t=labels[lang], v=data.variants[selected], exp=data.experience[lang];
 const pdf=`${import.meta.env.BASE_URL}CV_Krzysztof_Broniszewski_${selected.toUpperCase()}_${lang.toUpperCase()}.pdf`;
 return <div className={`cv-site ${dark?'dark':'light'} ${embed?'embedded':''}`}>
  <div className="site-wrap">
   {!embed && <header className="hero"><div className="eyebrow">{t.eyebrow}</div><h1>{t.heading}</h1><p>{t.subtitle}</p><div className="hero-line"/></header>}
   <div className="toolbar"><div className="toolbar-title">{t.choose}</div><div className="actions"><button type="button" onClick={()=>setDark(!dark)} aria-label="Toggle color theme">{dark?'☼':'☾'} {dark?t.themeLight:t.themeDark}</button><button type="button" onClick={()=>setLang(lang==='pl'?'en':'pl')}>◎ {t.lang}</button></div></div>
   <nav className="tracks" aria-label={t.choose}>{Object.entries(data.variants).map(([id,item])=><button type="button" key={id} aria-current={selected===id?'page':undefined} className={selected===id?'active':''} onClick={()=>setSelected(id)}>{item[lang]}</button>)}</nav>
   <div className="resume">
    <aside className="sidebar"><img src={profileImage} alt="Krzysztof Broniszewski" className="portrait"/><h2>{t.contact}</h2>
     <a href="mailto:k.broniszewski@gmail.com">k.broniszewski@gmail.com</a><a href="tel:+48510852282">+48 510 852 282</a>
     {['portfolio','github','linkedin','youtube'].map(id=><a key={id} target="_blank" rel="noreferrer" href={data.urls[id]}>{id==='github'?'GitHub':id==='linkedin'?'LinkedIn':id==='youtube'?'YouTube · King of Drone':'Portfolio'} ↗</a>)}
     <h2>{t.skills}</h2>{v.skillGroups.map(id=><div className="skill-group" key={id}><h4>{t.groups[id]}</h4><ul>{data.skills[id][lang].map(x=><li key={x}>{x}</li>)}</ul></div>)}
     <h2>{t.additional}</h2><ul>{data.additional[lang].map(x=><li key={x}>{x}</li>)}</ul>
     <a className="download" href={pdf} download>{t.download} · {v[lang]} ↗</a><p className="download-note">{t.pdfNote}</p>
    </aside>
    <main className="content"><div className="identity"><div className="small-label">KRZYSZTOF BRONISZEWSKI</div><h2>{v[lang==='pl'?'titlePl':'titleEn']}</h2><span className="location">KRAKÓW · POLAND</span></div>
     <section><h3>{t.profile}</h3><p>{v[lang==='pl'?'profilePl':'profileEn']}</p></section>
     <section><h3>{t.experience}</h3><div className="entry"><div className="entry-meta">{t.period}</div><h4>Walstead Kraków Sp. z o.o.</h4><em>{exp.walsteadTitle}</em><ul>{exp.walstead.map(x=><li key={x}>{x}</li>)}</ul></div><div className="entry"><div className="entry-meta">{t.back}</div><h4>{exp.previousTitle}</h4><ul>{exp.previous.map(x=><li key={x}>{x}</li>)}</ul></div><div className="entry"><h4>{exp.egraphTitle}</h4><ul>{exp.egraph.map(x=><li key={x}>{x}</li>)}</ul></div></section>
     <section><h3>{t.projects}</h3><div className="project-list">{v.order.map((id,i)=>{const p=projectById[id];return <div className="project" key={id}><span className="project-number">{String(i+1).padStart(2,'0')}</span><div><a className="project-title" href={p.url} target="_blank" rel="noreferrer">{lang==='en'&&p.titleEn?p.titleEn:p.title} ↗</a><p>{p[lang]}</p></div></div>})}</div></section>
     <section><h3>{t.education}</h3><ul>{data.education[lang].map(x=><li key={x}>{x}</li>)}</ul>
      <div className="certificate-section"><h4>{t.certificate}</h4><p className="certificate-hint">{t.certificateHint}</p>
       <div className="certificate-grid">{courseDocs.map((filename,i)=><button type="button" className="certificate-card" key={filename} onClick={()=>setActiveDoc(i)} aria-label={t.docs[i]}><span className="certificate-image"><img src={`${import.meta.env.BASE_URL}${filename}`} alt={t.docs[i]} loading="lazy"/></span><span className="certificate-caption">{t.docs[i]}</span></button>)}</div>
      </div></section>
    </main>
   </div>{activeDoc!==null && <div className="document-lightbox" role="dialog" aria-modal="true" aria-label={t.docs[activeDoc]} onClick={()=>setActiveDoc(null)}><div className="document-viewer" onClick={e=>e.stopPropagation()}><div className="document-viewer-bar"><span>{t.docs[activeDoc]} · {activeDoc+1}/{courseDocs.length}</span><button type="button" onClick={()=>setActiveDoc(null)} aria-label={t.close}>✕ {t.close}</button></div><img src={`${import.meta.env.BASE_URL}${courseDocs[activeDoc]}`} alt={t.docs[activeDoc]}/><div className="document-viewer-nav"><button type="button" onClick={()=>setActiveDoc(i=>(i+courseDocs.length-1)%courseDocs.length)} aria-label="Previous document">←</button><button type="button" onClick={()=>setActiveDoc(i=>(i+1)%courseDocs.length)} aria-label="Next document">→</button></div></div></div>}{!embed && <footer>© 2026 KRZYSZTOF BRONISZEWSKI <span>CV · PORTFOLIO · EXPERIENCE</span></footer>}
  </div>
 </div>;
}
