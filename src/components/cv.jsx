import React from "react";

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto font-sans text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-1">Krzysztof Broniszewski</h1>
      <p className="text-lg mb-2">AI / Machine Learning / Computer Vision Engineer</p>
      <p className="mb-1">Kraków | +48 510 852 282 | k.broniszewski@gmail.com</p>
      <p className="mb-6">
        GitHub:{" "}
        <a className="text-blue-600" href="https://github.com/Krzysztof-Broniszewski" target="_blank" rel="noreferrer">
          github.com/Krzysztof-Broniszewski
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Profil zawodowy</h2>
      <p className="mb-4">
        Rozwijam rozwiązania z obszaru Machine Learning, Computer Vision i AI, wykorzystując przede wszystkim Python,
        PyTorch, OpenCV oraz scikit-learn. Realizuję projekty obejmujące cały proces - od przygotowania i analizy danych,
        przez trenowanie oraz ocenę modeli, po tworzenie aplikacji prezentujących ich działanie. Szczególnie interesuje
        mnie Computer Vision i praktyczne zastosowanie AI w analizie obrazu. Łączę kompetencje techniczne z wieloletnim
        doświadczeniem w grafice, digital publishing i optymalizacji procesów produkcyjnych.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Umiejętności techniczne</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Python, SQL</li>
        <li>scikit-learn, klasyfikacja, regresja, preprocessing, feature engineering, ewaluacja modeli</li>
        <li>PyTorch, TensorFlow/Keras, CNN, transfer learning</li>
        <li>OpenCV, YOLO, MediaPipe, przetwarzanie i analiza obrazu</li>
        <li>Pandas, NumPy, Matplotlib, Plotly</li>
        <li>PostgreSQL, BigQuery</li>
        <li>Dash, React, Flask, Git, GitHub, Docker, Jupyter Notebook, Google Colab</li>
        <li>ComfyUI, FLUX, Stable Diffusion / SDXL, ControlNet, LoRA, IP-Adapter, Inpainting, Upscaling, WAN Video</li>
        <li>NLP: tokenizacja, lematyzacja, analiza sentymentu, embeddings, BERT / Transformers</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Projekty</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Face Emotion Recognition</strong> — ResNet18, transfer learning, Python, PyTorch, OpenCV.</li>
        <li><strong>Drone Image Quality Assessment</strong> — Deep Learning, Computer Vision, analiza jakości obrazu.</li>
        <li><strong>Analiza wypadków drogowych w Polsce 2004–2023</strong> — Python, Pandas, Plotly, Dash.</li>
        <li><strong>California Housing</strong> — Python, Pandas, scikit-learn.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Doświadczenie zawodowe</h2>
      <p className="font-medium">02.2023–11.2026 | Walstead Kraków Sp. z o.o. — Specjalista ds. Kalkulacji i Przygotowania Produkcji ISM</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Kalkulacje produkcyjne w systemie Signa i analiza kosztów, materiałów oraz ofert.</li>
        <li>Stworzenie i rozwijanie narzędzia Excel do monitorowania zleceń i produkcji.</li>
        <li>Koordynacja procesów produkcyjnych, zadań i terminów.</li>
        <li>Techniczna weryfikacja i przygotowanie plików oraz montaży do druku.</li>
        <li>Analiza i usprawnianie procesów oraz automatyzacja wybranych zadań.</li>
      </ul>

      <p className="font-medium">2005–2023 | DTP / Prepress / Digital Printing / Graphic Design</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Techniczne przygotowanie plików, DTP, prepress oraz produkcja cyfrowa i offsetowa.</li>
        <li>Systemy przygotowania produkcji i impozycji, Adobe, CorelDRAW i narzędzia kontroli plików.</li>
        <li>Projektowanie materiałów graficznych i opakowań.</li>
        <li>Zarządzanie produkcją, zespołem, magazynem i zaopatrzeniem.</li>
        <li>Własna działalność E-GRAPH.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Kursy i certyfikaty</h2>
      <p><strong>CodeBrainers — Data Science + AI Bootcamp</strong> | 12.2024–06.2025 | 260 godzin lekcyjnych</p>
      <p className="mb-3">Python • SQL • Pandas • scikit-learn • XGBoost • ML • Deep Learning • CNN • NLP • Spark • Databricks • BigQuery</p>
      <p><strong>Praktyczny Python</strong> | 05.2022–07.2022 | 8 tygodni | 8 projektów</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Edukacja</h2>
      <p>Politechnika Krakowska — Wydział Fizyki Technicznej i Modelowania Komputerowego | studia nieukończone | 2002–2004</p>
      <p>Liceum Ogólnokształcące w Muszynie — profil informatyczny | 1996–2000</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Osiągnięcia</h2>
      <p>Laureat konkursu „Damy Radę! Otwieramy własny biznes” — przygotowanie i obrona biznesplanu oraz pozyskanie pełnej dotacji na rozpoczęcie działalności E-GRAPH.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Języki</h2>
      <p>Polski — ojczysty</p>
      <p>Angielski — B1 (dobra znajomość dokumentacji technicznej)</p>
    </div>
  );
}