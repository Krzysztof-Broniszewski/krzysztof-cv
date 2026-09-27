import "./index.css";
import profileImage from "./assets/Base_00032_.png";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("pl");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "pl" ? "en" : "pl");

  const containerClass = `${darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-gray-900"}`;
  const cardClass = `${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`;
  const sidebarClass = `${darkMode ? "bg-gray-950 text-white" : "bg-slate-800 text-white"}`;

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
            <p><strong>LinkedIn:</strong> <a className="text-blue-400" href="https://www.linkedin.com/in/krzysztof-b-602a45181/" target="_blank" rel="noreferrer">linkedin.com/in/krzysztof-b-602a45181</a></p>
            <p><strong>GitHub:</strong> <a className="text-blue-400" href="https://github.com/Krzysztof-Broniszewski" target="_blank" rel="noreferrer">github.com/Krzysztof-Broniszewski</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Umiejętności" : "Skills"}</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Python, SQL</li>
              <li>PyTorch, TensorFlow/Keras, scikit-learn, XGBoost</li>
              <li>Computer Vision, OpenCV, YOLO, MediaPipe, CNN</li>
              <li>RAG, LLM, NLP, embeddings, FAISS, Ollama, FastAPI</li>
              <li>ComfyUI, FLUX, Stable Diffusion / SDXL, ControlNet, LoRA</li>
              <li>Pandas, NumPy, Matplotlib, Plotly, Dash</li>
              <li>PostgreSQL, BigQuery</li>
              <li>React, Flask, Git, GitHub, Docker, Jupyter, Google Colab</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Zainteresowania" : "Interests"}</h2>
            <p>{language === "pl" ? "Drony i fotografia lotnicza, Computer Vision, Generative AI, fotografia i postprodukcja, montaż wideo" : "Drones and aerial photography, Computer Vision, Generative AI, photography and post-production, video editing"}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Języki" : "Languages"}</h2>
            <p>{language === "pl" ? "Polski: ojczysty" : "Polish: native"}</p>
            <p>{language === "pl" ? "Angielski: B1 (dobra znajomość dokumentacji technicznej)" : "English: B1 (good understanding of technical documentation)"}</p>
          </section>

          <a href={language === "pl" ? "CV_Krzysztof_Broniszewski_PL.pdf" : "CV_Krzysztof_Broniszewski_EN.pdf"} target="_blank" rel="noopener noreferrer" type="application/pdf" className="block mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center">
            {language === "pl" ? "Pobierz CV (PDF)" : "Download CV (PDF)"}
          </a>
        </aside>

        <main className="p-6 md:col-span-2 space-y-6">
          <section>
            <h1 className="text-4xl font-bold">Krzysztof Broniszewski</h1>
            <p className="text-lg text-gray-600">AI / Machine Learning / Computer Vision Engineer</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Profil zawodowy" : "Professional Profile"}</h2>
            <p>{language === "pl"
              ? "Rozwijam rozwiązania z obszaru Machine Learning, Computer Vision i AI, wykorzystując przede wszystkim Python, PyTorch, OpenCV oraz scikit-learn. Realizuję projekty obejmujące cały proces - od przygotowania i analizy danych, przez trenowanie oraz ocenę modeli, po tworzenie aplikacji prezentujących ich działanie. Szczególnie interesuje mnie Computer Vision, Generative AI oraz systemy RAG/LLM i praktyczne zastosowanie AI. Łączę kompetencje techniczne z wieloletnim doświadczeniem w grafice, digital publishing i optymalizacji procesów produkcyjnych."
              : "I develop Machine Learning, Computer Vision and AI solutions using primarily Python, PyTorch, OpenCV and scikit-learn. My projects cover the full process - from data preparation and analysis, through model training and evaluation, to applications demonstrating their capabilities. I am particularly interested in Computer Vision, Generative AI, RAG/LLM systems and practical AI applications. I combine technical skills with many years of experience in graphics, digital publishing and production workflow optimization."}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Doświadczenie zawodowe" : "Work Experience"}</h2>
            <p className="font-bold">Walstead Kraków Sp. z o.o. | Kraków</p>
            <p className="italic">{language === "pl" ? "Specjalista ds. Kalkulacji i Przygotowania Produkcji ISM | 02.2023-11.2026" : "Calculation and Production Preparation Specialist ISM | 02.2023-11.2026"}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{language === "pl" ? "Kalkulacje produkcyjne, analiza kosztów, materiałów oraz ofert dostawców i podwykonawców" : "Production calculations and analysis of costs, materials, supplier and subcontractor offers"}</li>
              <li>{language === "pl" ? "Stworzenie i rozwijanie narzędzia Excel do monitorowania zleceń, etapów produkcji i terminów" : "Created and developed an Excel tool for monitoring orders, production stages and deadlines"}</li>
              <li>{language === "pl" ? "Koordynacja procesów produkcyjnych i współpraca z klientami, dostawcami oraz zespołami wewnętrznymi" : "Production process coordination and cooperation with clients, suppliers and internal teams"}</li>
              <li>{language === "pl" ? "Techniczna weryfikacja plików oraz usprawnianie i automatyzacja procesów pracy" : "Technical file verification, workflow improvement and automation"}</li>
            </ul>

            <p className="font-bold mt-4">{language === "pl" ? "Wcześniejsze doświadczenie zawodowe | 2005-2023" : "Previous professional experience | 2005-2023"}</p>
            <p className="italic">DTP / Prepress / Digital Printing / Graphic Design</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{language === "pl" ? "Wieloletnie doświadczenie w DTP, prepress oraz produkcji cyfrowej i offsetowej" : "Extensive experience in DTP, prepress, digital and offset production"}</li>
              <li>{language === "pl" ? "Projektowanie materiałów graficznych i przygotowanie do różnych technologii produkcyjnych" : "Graphic design and preparation for various production technologies"}</li>
              <li>{language === "pl" ? "Zarządzanie produkcją, zespołem, magazynem i własną działalnością E-GRAPH" : "Production, team and warehouse management, including own E-GRAPH business"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Projekty" : "Projects"}</h2>
            <ul className="space-y-3">
              <li><strong>RAV4 RAG Assistant - Generative AI / RAG / LLM</strong><br />{language === "pl" ? "Asystent RAG odpowiadający na pytania techniczne na podstawie dokumentacji Toyoty RAV4. Pipeline: PDF, chunking, E5 embeddings, FAISS, BGE reranking, Bielik 11B, Ollama, FastAPI i Web UI." : "RAG assistant answering technical questions based on Toyota RAV4 documentation. Pipeline: PDF, chunking, E5 embeddings, FAISS, BGE reranking, Bielik 11B, Ollama, FastAPI and Web UI."} <a className="text-blue-500" href="https://github.com/Krzysztof-Broniszewski/rav4-rag-assistant" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><strong>Face Emotion Recognition - Deep Learning / Computer Vision</strong><br />{language === "pl" ? "Rozpoznawanie emocji twarzy z wykorzystaniem ResNet18, transfer learningu, PyTorch i OpenCV." : "Facial emotion recognition using ResNet18, transfer learning, PyTorch and OpenCV."} <a className="text-blue-500" href="https://github.com/Krzysztof-Broniszewski/face-emotion-detection-best-ResNet18" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><strong>Drone Image Quality Assessment - Deep Learning</strong><br />{language === "pl" ? "Automatyczna ocena jakości zdjęć wykonanych dronem z wykorzystaniem Deep Learning i Computer Vision." : "Automatic quality assessment of drone imagery using Deep Learning and Computer Vision."} <a className="text-blue-500" href="https://github.com/Krzysztof-Broniszewski/drone-quality-assessment/tree/main" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><strong>{language === "pl" ? "Analiza wypadków drogowych w Polsce 2004-2023" : "Polish Road Accident Analysis 2004-2023"}</strong><br />{language === "pl" ? "Interaktywny dashboard: Python, Pandas, Plotly i Dash." : "Interactive dashboard built with Python, Pandas, Plotly and Dash."} <a className="text-blue-500" href="https://github.com/Krzysztof-Broniszewski/plotly-dash" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><strong>California Housing - Machine Learning</strong><br />{language === "pl" ? "Projekt regresyjny: przygotowanie danych, analiza cech, trening, porównanie i ewaluacja modeli." : "Regression project covering data preparation, feature analysis, model training, comparison and evaluation."} <a className="text-blue-500" href="https://github.com/Krzysztof-Broniszewski/california-housing-ml" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Edukacja i kursy" : "Education & Courses"}</h2>
            <ul className="list-disc list-inside ml-4">
              <li>CodeBrainers - Data Science + AI Bootcamp | 12.2024-06.2025 | 260 {language === "pl" ? "godzin lekcyjnych" : "lesson hours"}</li>
              <li>{language === "pl" ? "Praktyczny Python | 05.2022-07.2022 | 8 tygodni | 8 projektów" : "Practical Python | 05.2022-07.2022 | 8 weeks | 8 projects"}</li>
              <li>{language === "pl" ? "Politechnika Krakowska - Wydział Fizyki Technicznej i Modelowania Komputerowego | studia nieukończone | 2002-2004" : "Cracow University of Technology - Faculty of Technical Physics and Computer Modelling | unfinished studies | 2002-2004"}</li>
              <li>{language === "pl" ? "Liceum Ogólnokształcące w Muszynie - profil informatyczny | 1996-2000" : "High School in Muszyna - IT profile | 1996-2000"}</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
