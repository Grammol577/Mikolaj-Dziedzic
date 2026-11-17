# Anime na marginesie

Prosty polskojęzyczny mini-portal o anime. Zawiera czternaście tytułów z różnych gatunków, wyszukiwarkę, przełącznik jasnego i ciemnego motywu, losową ciekawostkę oraz zapamiętywanie imienia w `localStorage`.

Główna aplikacja znajduje się w `src/main.jsx`, a pozostałe komponenty w `src/Anime.jsx` i `src/PrzedstawSie.jsx`.

## Uruchomienie lokalne

1. Zainstaluj Node.js.
2. W terminalu PowerShell, w folderze projektu, uruchom `npm.cmd install`.
3. Uruchom stronę poleceniem `npm.cmd run dev` i otwórz adres pokazany w terminalu.
4. Przed publikacją sprawdź wersję produkcyjną poleceniem `npm.cmd run build`.

## Publikacja przez Vercel

1. Umieść folder projektu w repozytorium na GitHubie.
2. Zaloguj się do [Vercel](https://vercel.com/), wybierz **Add New Project** i zaimportuj repozytorium.
3. Wybierz framework **Vite**. Ustawienia budowania to `npm run build`, a folder wynikowy to `dist`.
4. Wybierz **Deploy**. Po zakończeniu wdrożenia Vercel pokaże publiczny adres strony.

Projekt jest prostą aplikacją frontendową i nie wymaga dodatkowego serwera ani zmiennych środowiskowych. Po każdej zmianie wypchniętej do podłączonego repozytorium Vercel może automatycznie opublikować nową wersję.

## Spakowanie projektu

Archiwum do wysłania można przygotować z plików projektu, pomijając `node_modules` i folder wynikowy `dist`. Nazwij je swoim imieniem i nazwiskiem, np. `Jan-Kowalski.zip`.
