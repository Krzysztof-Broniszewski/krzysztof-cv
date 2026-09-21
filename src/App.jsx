import "./index.css";
import profileImage from "./assets/Base_00032_.png";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("pl");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "pl" ? "en" : "pl");

  const containerClass = darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-gray-900";
  const cardClass = darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900";
  const sidebarClass = darkMode ? "bg-gray-950 text-white" : "bg-slate-800 text-white";

  return (
    <div className={`min-h-screen ${containerClass} font-sans flex justify-center items-start py-10 px-4`}>
      <div className="absolute top-6 right-6 flex space-x-4">
        <button onClick={toggleDarkMode} className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={toggleLanguage} className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white">
          {language === "pl" ? "English" : "Polski"}
        </button>
      </div>

      <div className={`max-w-6xl mx-auto my-10 shadow-2xl ${cardClass} rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3`}>
        <aside className={`${sidebarClass} p-6 space-y-6 md:col-span-1`}>
          <img src={profileImage} alt="Krzysztof Broniszewski" className="rounded-lg w-full h-auto mb-4 shadow-md" />

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Dane kontaktowe" : "Contact Info"}</h2>
            <p><strong>Email:</strong> k.broniszewski@gmail.com</p>
            <p><strong>{language === "pl" ? "Telefon" : "Phone"}:</strong> +48 510 852 282</p>
            <p><strong>LinkedIn:</strong> <a className="text-blue-400" href="https://linkedin.com/in/krzysztof-b-602a45181" target="_blank" rel="noreferrer">linkedin.com/in/krzysztof</a></p>
            <p><strong>GitHub:</strong> <a className="text-blue-400" href="https://github.com/Krzysztof-Broniszewski" target="_blank" rel="noreferrer">github.com/Krzysztof-Broniszewski</a></p>
            <p><strong>Portfolio:</strong> <a className="text-blue-400 break-all" href="https://krzysztof-broniszewski.github.io/drone-ai-gallery/" target="_blank" rel="noreferrer">krzysztof-broniszewski.github.io/drone-ai-gallery/</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Umiejętności techniczne" : "Technical Skills"}</h2>
            <div className="text-sm space-y-3">
              <div><strong>{language === "pl" ? "Programowanie" : "Programming"}</strong><p>Python • SQL</p></div>
              <div><strong>Machine Learning</strong><p>scikit-learn • {language === "pl" ? "klasyfikacja • regresja • preprocessing • feature engineering • ewaluacja modeli" : "classification • regression • preprocessing • feature engineering • model evaluation"}</p></div>
              <div><strong>Deep Learning</strong><p>PyTorch • TensorFlow/Keras • CNN • transfer learning</p></div>
              <div><strong>Computer Vision</strong><p>OpenCV • YOLO • MediaPipe • {language === "pl" ? "przetwarzanie i analiza obrazu" : "image processing and analysis"}</p></div>
              <div><strong>Data & Visualization</strong><p>Pandas • NumPy • Matplotlib • Plotly</p></div>
              <div><strong>{language === "pl" ? "Bazy danych" : "Databases"}</strong><p>PostgreSQL • BigQuery</p></div>
              <div><strong>{language === "pl" ? "Aplikacje / narzędzia" : "Applications / Tools"}</strong><p>Dash • React • Flask • Git • GitHub • Docker • Jupyter Notebook • Google Colab</p></div>
              <div><strong>Generative AI / NLP / LLM</strong><p>ComfyUI • FLUX • Stable Diffusion / SDXL • ControlNet • LoRA • IP-Adapter • Inpainting • Upscaling • WAN Video</p></div>
              <div><strong>NLP</strong><p>{language === "pl" ? "tokenizacja • lematyzacja • analiza sentymentu • embeddings" : "tokenization • lemmatization • sentiment analysis • embeddings"} • BERT / Transformers</p></div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Języki" : "Languages"}</h2>
            <p>{language === "pl" ? "Polski: ojczysty" : "Polish: native"}</p>
            <p>{language === "pl" ? "Angielski: B1 (dobra znajomość dokumentacji technicznej)" : "English: B1 (good understanding of technical documentation)"}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Zainteresowania" : "Interests"}</h2>
            <p className="text-sm">{language === "pl"
              ? "Drony i fotografia lotnicza • Computer Vision • Generative AI • fotografia i postprodukcja • montaż wideo"
              : "Drones and aerial photography • Computer Vision • Generative AI • photography and post-production • video editing"}</p>
          </section>

          <div className="mt-6 space-y-3">
            <a href={`${import.meta.env.BASE_URL}CV_Krzysztof_Broniszewski_PL.pdf`} download rel="noopener" className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center">
              {language === "pl" ? "Pobierz CV (PL)" : "Download CV (PL)"}
            </a>
            <a href={`${import.meta.env.BASE_URL}CV_Krzysztof_Broniszewski_EN.pdf`} download rel="noopener" className="block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center">
              {language === "pl" ? "Pobierz CV (EN)" : "Download CV (EN)"}
            </a>
          </div>
        </aside>

        <main className="p-6 md:col-span-2 space-y-6">
          <section>
            <h1 className="text-4xl font-bold">Krzysztof Broniszewski</h1>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>AI / Machine Learning / Computer Vision Engineer</p>
            <p className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Kraków</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Profil zawodowy" : "Professional Profile"}</h2>
            <p>{language === "pl"
              ? "Rozwijam rozwiązania z obszaru Machine Learning, Computer Vision i AI, wykorzystując przede wszystkim Python, PyTorch, OpenCV oraz scikit-learn. Realizuję projekty obejmujące cały proces - od przygotowania i analizy danych, przez trenowanie oraz ocenę modeli, po tworzenie aplikacji prezentujących ich działanie. Szczególnie interesuje mnie Computer Vision i praktyczne zastosowanie AI w analizie obrazu. Łączę kompetencje techniczne z wieloletnim doświadczeniem w grafice, digital publishing i optymalizacji procesów produkcyjnych. Poszukuję możliwości dalszego rozwoju jako AI/ML lub Computer Vision Engineer."
              : "I develop Machine Learning, Computer Vision and AI solutions, primarily using Python, PyTorch, OpenCV and scikit-learn. My projects cover the full workflow - from data preparation and analysis, through model training and evaluation, to applications demonstrating model performance. I am particularly interested in Computer Vision and practical AI applications in image analysis. I combine technical skills with many years of experience in graphics, digital publishing and production process optimization. I am looking to further develop my career as an AI/ML or Computer Vision Engineer."}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-3">{language === "pl" ? "Projekty" : "Projects"}</h2>
            <div className="space-y-4">
              <div><p className="font-bold">01 Face Emotion Recognition — Deep Learning / Computer Vision</p><p>{language === "pl" ? "Model rozpoznawania emocji na podstawie obrazu twarzy z wykorzystaniem ResNet18 i transfer learningu. Przygotowanie pipeline'u przetwarzania danych, trening i ewaluacja modelu oraz implementacja predykcji na obrazie." : "Facial emotion recognition model using ResNet18 and transfer learning. Data-processing pipeline, model training and evaluation, and image prediction implementation."}</p><p className="text-sm mt-1"><strong>Technologie:</strong> Python • PyTorch • OpenCV • ResNet18</p></div>
              <a className="inline-block mt-1 text-blue-500 hover:text-blue-600 font-semibold" href="https://github.com/Krzysztof-Broniszewski/face-emotion-detection-best-ResNet18" target="_blank" rel="noreferrer">{language === "pl" ? "GitHub →" : "View on GitHub →"}</a>
              <div><p className="font-bold">02 Drone Image Quality Assessment — Deep Learning</p><p>{language === "pl" ? "System automatycznej oceny jakości zdjęć wykonanych dronem z wykorzystaniem deep learningu. Projekt łączy analizę obrazu z praktycznym zastosowaniem Computer Vision do selekcji materiału fotograficznego." : "Automatic quality assessment system for drone images using deep learning. The project combines image analysis with a practical Computer Vision application for selecting photographic material."}</p><p className="text-sm mt-1"><strong>Technologie:</strong> Deep Learning • Computer Vision • {language === "pl" ? "analiza jakości obrazu" : "image quality analysis"}</p></div>
              <a className="inline-block mt-1 text-blue-500 hover:text-blue-600 font-semibold" href="https://github.com/Krzysztof-Broniszewski/drone-quality-assessment" target="_blank" rel="noreferrer">{language === "pl" ? "GitHub →" : "View on GitHub →"}</a>
              <div><p className="font-bold">03 {language === "pl" ? "Analiza wypadków drogowych w Polsce 2004–2023" : "Road Accident Analysis in Poland 2004–2023"}</p><p>{language === "pl" ? "Interaktywny dashboard wykorzystujący dane Komendy Głównej Policji do analizy wypadków drogowych w Polsce. Przygotowanie i transformacja danych oraz stworzenie interaktywnych wizualizacji umożliwiających analizę zmian w czasie." : "Interactive dashboard using Polish Police Headquarters data to analyze road accidents in Poland. Data preparation and transformation and interactive visualizations for analyzing changes over time."}</p><p className="text-sm mt-1"><strong>Technologie:</strong> Python • Pandas • Plotly • Dash</p></div>
              <a className="inline-block mt-1 text-blue-500 hover:text-blue-600 font-semibold" href="https://github.com/Krzysztof-Broniszewski/plotly-dash" target="_blank" rel="noreferrer">{language === "pl" ? "GitHub →" : "View on GitHub →"}</a>
              <div><p className="font-bold">04 California Housing — Machine Learning</p><p>{language === "pl" ? "Projekt regresyjny obejmujący przygotowanie danych, analizę cech, trenowanie i porównanie modeli oraz ocenę ich jakości." : "Regression project covering data preparation, feature analysis, model training and comparison, and performance evaluation."}</p><p className="text-sm mt-1"><strong>Technologie:</strong> Python • Pandas • scikit-learn</p></div>
              <a className="inline-block mt-1 text-blue-500 hover:text-blue-600 font-semibold" href="https://github.com/Krzysztof-Broniszewski/california-housing-ml" target="_blank" rel="noreferrer">{language === "pl" ? "GitHub →" : "View on GitHub →"}</a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Doświadczenie zawodowe" : "Work Experience"}</h2>
            <p className="font-bold">Walstead Kraków Sp. z o.o. | Kraków</p>
            <p className="italic">{language === "pl" ? "Specjalista ds. Kalkulacji i Przygotowania Produkcji ISM" : "ISM Production Calculation and Preparation Specialist"} | 02.2023–11.2026</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>{language === "pl" ? "Przygotowywanie kalkulacji produkcyjnych w systemie Signa oraz analiza kosztów, materiałów, ofert dostawców i podwykonawców." : "Preparing production calculations in Signa and analyzing costs, materials, supplier and subcontractor offers."}</li>
              <li>{language === "pl" ? "Samodzielne stworzenie i rozwijanie w Excelu narzędzia do monitorowania zleceń, etapów produkcji, terminów i brakujących danych." : "Independently created and developed an Excel tool for monitoring orders, production stages, deadlines and missing data."}</li>
              <li>{language === "pl" ? "Koordynacja procesów produkcyjnych, planowanie zadań i terminów oraz współpraca z klientami, dostawcami i zespołami wewnętrznymi." : "Coordinating production processes, tasks and deadlines, and working with clients, suppliers and internal teams."}</li>
              <li>{language === "pl" ? "Techniczna weryfikacja i przygotowanie plików oraz montaży do druku, kontrola zgodności ze specyfikacją i przygotowanie materiałów do akceptacji." : "Technical verification and preparation of files and print layouts, specification compliance checks and preparation of materials for approval."}</li>
              <li>{language === "pl" ? "Analiza i usprawnianie procesów pracy, rozwiązywanie problemów technicznych oraz automatyzacja wybranych powtarzalnych zadań." : "Analyzing and improving workflows, solving technical problems and automating selected repetitive tasks."}</li>
            </ul>

            <p className="font-bold mt-4">{language === "pl" ? "Wcześniejsze doświadczenie zawodowe" : "Previous Professional Experience"} | 2005–2023</p>
            <p className="italic">DTP / Prepress / Digital Printing / Graphic Design</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>{language === "pl" ? "Wieloletnie doświadczenie w technicznym przygotowaniu i weryfikacji plików graficznych, DTP, prepress oraz produkcji cyfrowej i offsetowej." : "Extensive experience in technical preparation and verification of graphic files, DTP, prepress, digital and offset production."}</li>
              <li>{language === "pl" ? "Praca z zaawansowanymi systemami przygotowania produkcji i impozycji oraz oprogramowaniem Adobe, CorelDRAW i narzędziami kontroli plików." : "Work with advanced production preparation and imposition systems, Adobe and CorelDRAW software, and file-control tools."}</li>
              <li>{language === "pl" ? "Projektowanie materiałów graficznych i opakowań oraz przygotowywanie ich do różnych technologii produkcyjnych." : "Designing graphic materials and packaging and preparing them for various production technologies."}</li>
              <li>{language === "pl" ? "Doświadczenie w zarządzaniu produkcją, kilkuosobowym zespołem, magazynem i zaopatrzeniem." : "Experience managing production, a small team, warehouse and supplies."}</li>
              <li>{language === "pl" ? "Prowadzenie własnej działalności gospodarczej E-GRAPH - produkcja cyfrowa, projektowanie graficzne, obsługa klientów oraz zarządzanie działalnością." : "Ran E-GRAPH business - digital production, graphic design, customer service and business management."}</li>
            </ul>
            <p className="text-sm mt-2">{language === "pl" ? "Doświadczenie m.in.:" : "Experience includes:"} Mellow • Belcaro/Pasaż • Brillo • Legra • Alnus • Drukarnia GS • Naświetlarnia B1+/Djaf</p>
            <p className="text-sm">{language === "pl" ? "Własna działalność:" : "Own business:"} E-GRAPH</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Kursy i certyfikaty" : "Courses & Certificates"}</h2>
            <p className="font-bold">CodeBrainers — Data Science + AI Bootcamp</p>
            <p>12.2024–06.2025 | 260 {language === "pl" ? "godzin lekcyjnych" : "class hours"}</p>
            <p className="text-sm">Python • SQL • Pandas • scikit-learn • XGBoost • Machine Learning • Deep Learning • CNN • NLP • Spark • Databricks • BigQuery</p>

            <div className="mt-4">
              <p className="font-semibold mb-2">
                {language === "pl" ? "Certyfikat i szczegółowy zakres szkolenia" : "Certificate and detailed course syllabus"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a href={`${import.meta.env.BASE_URL}Certyfikat.jpg`} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={`${import.meta.env.BASE_URL}Certyfikat.jpg`}
                    alt={language === "pl" ? "Certyfikat ukończenia Data Science + AI Bootcamp" : "Data Science + AI Bootcamp completion certificate"}
                    className="w-full h-44 object-cover object-top rounded-lg shadow-md hover:opacity-90 transition"
                  />
                  <span className="block text-sm mt-1 text-blue-500 hover:text-blue-600 font-semibold">
                    {language === "pl" ? "Certyfikat — zobacz pełny rozmiar →" : "Certificate — view full size →"}
                  </span>
                </a>

                <a href={`${import.meta.env.BASE_URL}Zakres_p1.jpg`} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={`${import.meta.env.BASE_URL}Zakres_p1.jpg`}
                    alt={language === "pl" ? "Zakres szkolenia — strona 1" : "Course syllabus — page 1"}
                    className="w-full h-44 object-cover object-top rounded-lg shadow-md hover:opacity-90 transition"
                  />
                  <span className="block text-sm mt-1 text-blue-500 hover:text-blue-600 font-semibold">
                    {language === "pl" ? "Zakres szkolenia — strona 1 →" : "Course syllabus — page 1 →"}
                  </span>
                </a>

                <a href={`${import.meta.env.BASE_URL}Zakres_p2.jpg`} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={`${import.meta.env.BASE_URL}Zakres_p2.jpg`}
                    alt={language === "pl" ? "Zakres szkolenia — strona 2" : "Course syllabus — page 2"}
                    className="w-full h-44 object-cover object-top rounded-lg shadow-md hover:opacity-90 transition"
                  />
                  <span className="block text-sm mt-1 text-blue-500 hover:text-blue-600 font-semibold">
                    {language === "pl" ? "Zakres szkolenia — strona 2 →" : "Course syllabus — page 2 →"}
                  </span>
                </a>
              </div>
            </div>
            <p className="font-bold mt-3">{language === "pl" ? "Praktyczny Python | Kurs programowania Python" : "Practical Python | Python Programming Course"}</p>
            <p>05.2022–07.2022 | 8 {language === "pl" ? "tygodni" : "weeks"} | 8 {language === "pl" ? "projektów" : "projects"}</p>
            <p className="text-sm">Python • Pandas • Jupyter Notebook • Flask • {language === "pl" ? "analiza danych i Big Data • analiza tekstu i sentymentu • tworzenie aplikacji" : "data and Big Data analysis • text and sentiment analysis • application development"}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Edukacja" : "Education"}</h2>
            <p className="font-bold">{language === "pl" ? "Politechnika Krakowska" : "Cracow University of Technology"}</p>
            <p>{language === "pl" ? "Wydział Fizyki Technicznej i Modelowania Komputerowego" : "Faculty of Technical Physics and Computer Modelling"}</p>
            <p>{language === "pl" ? "Studia nieukończone" : "Studies not completed"} | 2002–2004</p>
            <p className="font-bold mt-3">{language === "pl" ? "Liceum Ogólnokształcące w Muszynie" : "General Secondary School in Muszyna"}</p>
            <p>{language === "pl" ? "Profil informatyczny" : "IT profile"} | 1996–2000</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Osiągnięcia" : "Achievements"}</h2>
            <p>{language === "pl"
              ? "Laureat konkursu „Damy Radę! Otwieramy własny biznes” - przygotowanie i obrona biznesplanu oraz pozyskanie pełnej dotacji na rozpoczęcie działalności E-GRAPH."
              : "Winner of the “Damy Radę! Otwieramy własny biznes” competition - preparation and defense of a business plan and obtaining full funding to launch E-GRAPH."}</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;