import React from 'react'

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto font-sans text-gray-900">
      <h1 className="text-3xl font-bold mb-2">Krzysztof Broniszewski</h1>
      <p className="mb-4">Muszyna | krzysztof@email.com | 500-000-000</p>
      <p className="mb-6">GitHub: <a className="text-blue-600" href="https://github.com/Krzysztof-Broniszewski" target="_blank" rel="noreferrer">github.com/Krzysztof-Broniszewski</a></p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Profil zawodowy</h2>
      <p className="mb-4">
        Jestem absolwentem intensywnego kursu Data Science i AI, łączącym naukę Pythona, statystyki, Machine Learningu i Deep Learningu. 
        Posiadam wieloletnie doświadczenie w branży technicznej (druk, grafika, DTP), a obecnie rozwijam się w obszarze analizy danych, automatyzacji produkcji i sztucznej inteligencji.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Umiejętności techniczne</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Python, pandas, numpy, matplotlib, seaborn</li>
        <li>Machine Learning: scikit-learn, TensorFlow, PyTorch</li>
        <li>SQL, Bash, Git, GitHub, Jupyter, VSCode</li>
        <li>Excel (formuły, tabele przestawne), Google Colab</li>
        <li>React, TailwindCSS, Vite</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Doświadczenie zawodowe</h2>
      <p className="font-medium">2023 – obecnie | Walstead Kraków – Koordynator Produkcji ISM</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Kalkulacja zleceń, weryfikacja plików graficznych</li>
        <li>Tworzenie montaży, harmonogramów produkcji</li>
        <li>Automatyzacja raportów i analiza danych</li>
      </ul>

      <p className="font-medium">2008–2023 | Operator DTP, CTP, Druk cyfrowy</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Obsługa maszyn i oprogramowania Adobe/Corel</li>
        <li>Zarządzanie zespołem i produkcją</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Projekty ML/AI</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Model Titanic (EDA, klasyfikacja, walidacja krzyżowa)</li>
        <li>Predykcja cen plecaków – RMSE 0.82 (TOP 15%)</li>
        <li>Rozpoznawanie wieku i płci ze zdjęć (CNN, PyTorch)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Edukacja</h2>
      <p>2024–2025 | Bootcamp Data Science & AI (CodeBrainers / Future Collars)</p>
    </div>
  )
}