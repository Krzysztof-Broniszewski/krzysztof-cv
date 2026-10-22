# CV — Black & Gold (React + Vite)

## Uruchomienie
`npm install` i `npm run dev` w katalogu projektu.

## Wersja osadzona w portfolio
Użyj adresu strony CV z parametrem `?embed=1`, np.
`https://krzysztof-broniszewski.github.io/krzysztof-cv/?embed=1`.
Ukrywa to duży nagłówek „CV & RESUME” i stopkę, ale zachowuje zakładki,
przełącznik motywu i tłumaczenie. Jeśli portfolio już dodaje swój nagłówek,
osadź tylko ten wariant. Wersja bez parametru nadal działa samodzielnie.

## Profile
- Pełne CV — startowy profil PL z pełnymi umiejętnościami, projektami i linkami.
- AI / ML Engineer
- Data Science / Analytics
- Zakupy / Kalkulacja

Każdy profil ma PDF w PL i EN, łącznie 8 plików w `public/`.
Zawartość WWW edytuje się w `src/cvData.json`; PDF-y należy odświeżyć
osobno na podstawie tych danych (skrypt `build_cv_v28.py` w paczce).

## Wdrożenie
Sprawdź lokalnie działanie i linki, następnie dopiero wykonaj commit/push.
GitHub Pages aktualizuje się według istniejącego workflow projektu.

## Uwaga
Treść jest publicznym CV na podstawie dostarczonego v27 i dyspozycji.
A1/A3 jest wpisane jako posiadane, A2 nie jest wymieniane.
