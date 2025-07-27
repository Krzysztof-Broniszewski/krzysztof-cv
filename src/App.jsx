import "./index.css";
import profileImage from "./assets/Base_00032_.png"; // zdjęcie profilowe

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-gray-900 font-sans flex justify-center items-start py-10 px-4">
      <div className="max-w-6xl mx-auto my-10 shadow-xl bg-white text-gray-900 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-3">

        {/* Lewa kolumna */}
        <aside className="bg-slate-800 text-white p-6 space-y-6 md:col-span-1">
          <img
            src={profileImage}
            alt="Krzysztof Broniszewski"
            className="rounded-lg w-full h-auto mb-4 shadow-md"
          />

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">Dane kontaktowe</h2>
            <p><strong>Email:</strong> k.broniszewski@gmail.com</p>
            <p><strong>Telefon:</strong> 510 882 733</p>
            <p><strong>LinkedIn:</strong> <a className="text-blue-400" href="https://linkedin.com/in/krzysztof-b-602a45181" target="_blank">linkedin.com/in/krzysztof</a></p>
            <p><strong>GitHub:</strong> <a className="text-blue-400" href="https://github.com/Krzysztof-Broniszewski" target="_blank">github.com/Krzysztof-Broniszewski</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">Umiejętności</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Python, JavaScript, SQL, Bash</li>
              <li>scikit-learn, PyTorch, TensorFlow, XGBoost, CNN, NLP</li>
              <li>HTML, CSS, React</li>
              <li>Pandas, NumPy, Jupyter, BigQuery, Spark, Excel</li>
              <li>Seaborn, matplotlib, Plotly, Dash</li>
              <li>Darktable, DaVinci Resolve, LUT, gamma</li>
              <li>Git, GitHub, VSCode, Anaconda, Linux, JIRA</li>
              <li>Adobe Acrobat, CorelDRAW, Illustrator, Signa Station</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">Zainteresowania</h2>
            <p>ML/AI, FPV drony, grading, ComfyUI</p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-2">Języki</h2>
            <p>Polski: ojczysty</p>
            <p>Angielski: B2+/C1</p>
          </section>

          <a
            href="/Cv%20Krzysztof%20Ds%20(1).pdf"
            download
            className="block mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center"
          >
            Pobierz CV (PDF)
          </a>
        </aside>

        {/* Prawa kolumna */}
        <main className="p-6 md:col-span-2 space-y-6">
          <section>
            <h1 className="text-4xl font-bold">Krzysztof Broniszewski</h1>
            <p className="text-lg text-gray-600">Data Scientist / Machine Learning Engineer</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Profil zawodowy</h2>
            <p>
              Data Scientist i twórca technologiczno-wizualny z doświadczeniem w grafice, analizie danych i postprodukcji multimediów. Łączę precyzję inżyniera z kreatywnością twórcy. Praktykuję ML, analizę obrazu i grading.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Doświadczenie zawodowe</h2>
            <p className="font-bold">Walstead Kraków — 02.2023 – obecnie</p>
            <p className="italic">Koordynator Produkcji ISM</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Automatyzacja raportów i optymalizacja procesów produkcyjnych</li>
              <li>Weryfikacja i poprawa plików graficznych</li>
              <li>Współpraca z planowaniem i produkcją</li>
            </ul>

            <p className="font-bold mt-4">LEGRA, ALNUS, E-GRAPH, własna działalność – 2008–2023</p>
            <p className="italic">Operator DTP</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Obsługa CTP, drukarek cyfrowych, impozycja</li>
              <li>Adobe Acrobat, Photoshop, Illustrator, Corel</li>
              <li>Zarządzanie zespołem, optymalizacja druku</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Projekty</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Predykcja cen plecaków (Kaggle S5E2) – XGBoost, RMSE: 0.82</li>
              <li>Klasyfikator wieku i płci – CNN, PyTorch, 89% accuracy</li>
              <li>Analiza przeżywalności pasażerów Titanica – pandas, regresja</li>
              <li>Model IQA do selekcji ujęć z drona – PyTorch, KonIQ-10k</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Edukacja</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Data Science & AI Bootcamp (2024–2025)</li>
              <li>Kurs JavaScript + React (2023)</li>
              <li>LO Muszyna – profil informatyczny</li>
              <li>Studia techniczne – PK, AGH (nieukończone)</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;