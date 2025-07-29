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
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
        >
          {language === "pl" ? "English" : "Polski"}
        </button>
      </div>

      <div className={`max-w-6xl mx-auto my-10 shadow-2xl ${cardClass} rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3`}>

        {/* Lewa kolumna */}
        <aside className={`${sidebarClass} p-6 space-y-6 md:col-span-1`}>
          <img
            src={profileImage}
            alt="Krzysztof Broniszewski"
            className="rounded-lg w-full h-auto mb-4 shadow-md"
          />

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Dane kontaktowe" : "Contact Info"}</h2>
            <p><strong>Email:</strong> k.broniszewski@gmail.com</p>
            <p><strong>{language === "pl" ? "Telefon" : "Phone"}:</strong> +48 510 852 282</p>
            <p><strong>LinkedIn:</strong> <a className="text-blue-400" href="https://linkedin.com/in/krzysztof-b-602a45181" target="_blank">linkedin.com/in/krzysztof</a></p>
            <p><strong>GitHub:</strong> <a className="text-blue-400" href="https://github.com/Krzysztof-Broniszewski" target="_blank">github.com/Krzysztof-Broniszewski</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Umiejętności" : "Skills"}</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Python, JavaScript, SQL, Bash</li>
              <li>Scikit-learn, PyTorch, TensorFlow, XGBoost, CNN, NLP</li>
              <li>HTML, CSS, React</li>
              <li>Pandas, NumPy, Jupyter, BigQuery, Spark, Excel</li>
              <li>Seaborn, Matplotlib, Plotly, Dash</li>
              <li>Darktable, DaVinci Resolve, LUT, Gamma</li>
              <li>Git, GitHub, VSCode, Anaconda, Linux, JIRA</li>
              <li>Adobe Acrobat, CorelDRAW, Illustrator, Signa Station</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Zainteresowania" : "Interests"}</h2>
            <p>ML/AI, Drones FPV/Cinematic, grading, ComfyUI, {language === "pl" ? "licencjonowany pilot BSP" : "licensed UAV pilot"}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">{language === "pl" ? "Języki" : "Languages"}</h2>
            <p>{language === "pl" ? "Polski: ojczysty" : "Polish: native"}</p>
            <p>{language === "pl" ? "Angielski: B2+/C1" : "English: B2+/C1"}</p>
          </section>

          <a
            href="/Cv%20Krzysztof%20Ds%20(1).pdf"
            download
            className="block mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center"
          >
            {language === "pl" ? "Pobierz CV (PDF)" : "Download CV (PDF)"}
          </a>
        </aside>

        {/* Prawa kolumna */}
        <main className="p-6 md:col-span-2 space-y-6">
          <section>
            <h1 className="text-4xl font-bold">Krzysztof Broniszewski</h1>
            <p className="text-lg text-gray-600">Data Scientist / Machine Learning Engineer</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Profil zawodowy" : "Professional Profile"}</h2>
            <p>
              {language === "pl"
                ? "Data Scientist i twórca technologiczno-wizualny z doświadczeniem w grafice, analizie danych i postprodukcji multimediów. Łączę precyzję inżyniera z kreatywnością twórcy. Praktykuję ML, analizę obrazu i grading."
                : "Data Scientist and visual-technological creator with experience in graphics, data analysis, and multimedia postproduction. I combine engineering precision with creative flair. I specialize in ML, image analysis, and grading."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Doświadczenie zawodowe" : "Work Experience"}</h2>
            <p className="font-bold">Walstead Kraków — 02.2023 – {language === "pl" ? "obecnie" : "present"}</p>
            <p className="italic">Koordynator Produkcji ISM</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{language === "pl" ? "Automatyzacja raportów i optymalizacja procesów produkcyjnych" : "Automation of reports and production process optimization"}</li>
              <li>{language === "pl" ? "Tworzenie kalkulacji i analiz kosztowych" : "Creating cost calculations and analyses"}</li>
              <li>{language === "pl" ? "Weryfikacja i poprawa plików graficznych" : "Verification and improvement of graphic files"}</li>
              <li>{language === "pl" ? "Współpraca z planowaniem i produkcją" : "Cooperation with planning and production"}</li>
            </ul>

            <p className="font-bold mt-4">LEGRA, ALNUS, E-GRAPH, {language === "pl" ? "własna działalność" : "self-employment"} – 2008–2023</p>
            <p className="italic">{language === "pl" ? "Operator DTP" : "DTP Operator"}</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{language === "pl" ? "Obsługa CTP, drukarek cyfrowych, impozycja" : "Operating CTP, digital printers, imposition"}</li>
              <li>Adobe Acrobat, Photoshop, Illustrator, Corel</li>
              <li>{language === "pl" ? "Zarządzanie zespołem, optymalizacja druku" : "Team management, print optimization"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Projekty" : "Projects"}</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Backpack price prediction (Kaggle S5E2) – XGBoost, RMSE: 0.82</li>
              <li>Age and gender classifier – CNN, PyTorch, 89% accuracy</li>
              <li>Titanic survival analysis – pandas, regression</li>
              <li>Drone shot IQA model – PyTorch, KonIQ-10k</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">{language === "pl" ? "Edukacja" : "Education"}</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Data Science & AI Bootcamp (2024–2025)</li>
              <li>JavaScript + React Course (2023)</li>
              <li>{language === "pl" ? "LO Muszyna – profil informatyczny" : "High School Muszyna – IT profile"}</li>
              <li>{language === "pl" ? "Studia techniczne – PK, AGH (nieukończone)" : "Technical studies – PK, AGH (unfinished)"}</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;