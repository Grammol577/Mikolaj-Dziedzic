import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Anime from './Anime.jsx'
import PrzedstawSie from './PrzedstawSie.jsx'
import './style.css'

const anime = [
  { tytul: 'Fullmetal Alchemist: Brotherhood', gatunek: 'Przygodowe · Fantasy', opis: 'Bracia Edward i Alphonse Elric wyruszają na poszukiwanie Kamienia Filozoficznego, który może pomóc im odzyskać utracone ciała. Po drodze odkrywają spisek zagrażający całemu państwu.' },
  { tytul: 'Your Lie in April', gatunek: 'Romans · Muzyczne', opis: 'Pianista Kosei po trudnych przeżyciach traci radość z muzyki i wycofuje się z życia. Spotkanie energicznej skrzypaczki Kaori pomaga mu stopniowo wrócić do gry i otworzyć się na innych.' },
  { tytul: 'Death Note', gatunek: 'Thriller · Psychologiczne', opis: 'Uczeń Light Yagami znajduje notes, który pozwala uśmiercić osobę, której imię zostanie w nim zapisane. Gdy zaczyna wymierzać własną sprawiedliwość, genialny detektyw L próbuje odkryć jego tożsamość.' },
  { tytul: 'Haikyuu!!', gatunek: 'Sportowe · Komedia', opis: 'Shoyo Hinata marzy o siatkówce mimo niskiego wzrostu i dołącza do szkolnej drużyny. Razem z kolegami, w tym dawnym rywalem Tobio Kageyamą, pracuje nad tym, by poprowadzić zespół do zwycięstw.' },
  { tytul: 'Berserk', gatunek: 'Dark fantasy · Akcja', opis: 'Guts, samotny najemnik z ogromnym mieczem, dołącza do oddziału dowodzonego przez charyzmatycznego Griffitha. W brutalnym świecie pełnym bitew i mrocznych sił walczy o własne cele oraz przetrwanie.' },
  { tytul: 'Spy x Family', gatunek: 'Komedia · Szpiegowskie', opis: 'Szpieg o pseudonimie Twilight tworzy fikcyjną rodzinę, by wykonać tajną misję. Nie wie, że jego żona jest zabójczynią, a adoptowana córka potrafi czytać w myślach — każde z nich ukrywa swój sekret.' },
  { tytul: 'Demon Slayer', gatunek: 'Akcja · Fantasy', opis: 'Po ataku demonów na rodzinę Tanjiro wyrusza, by znaleźć sposób na uratowanie swojej siostry Nezuko. Dołącza do oddziału łowców demonów i stawia czoła niebezpiecznym przeciwnikom.' },
  { tytul: 'Violet Evergarden', gatunek: 'Dramat · Obyczajowe', opis: 'Violet, była żołnierka, zaczyna pracę jako autorka listów na zamówienie. Poznając historie swoich klientów, próbuje zrozumieć ludzkie emocje i znaczenie słów, które usłyszała podczas wojny.' },
  { tytul: 'Dr. Stone', gatunek: 'Science fiction · Przygodowe', opis: 'Tajemnicze zjawisko zamienia ludzi w kamień, a po tysiącach lat budzi się Senku — młody miłośnik nauki. Postanawia odbudować cywilizację krok po kroku, wykorzystując wiedzę i pomysłowość.' },
  { tytul: 'Sailor Moon', gatunek: 'Magiczne dziewczynki · Romans', opis: 'Nieśmiała Usagi odkrywa, że jest wojowniczką Sailor Moon i ma chronić Ziemię przed kolejnymi zagrożeniami. Wraz z przyjaciółkami łączy szkolne życie z misją oraz odkrywaniem tajemnic swojej przeszłości.' },
  { tytul: 'High School DxD', gatunek: 'Akcja · Fantasy · Komedia', opis: 'Issei Hyodo zostaje wciągnięty w świat demonów i nadnaturalnych konfliktów. Pod opieką Rias Gremory poznaje nowe moce, dołącza do jej drużyny i uczy się mierzyć z niebezpiecznymi przeciwnikami.' },
  { tytul: 'Kaoru Hana wa Rin to Saku', gatunek: 'Romans · Obyczajowe', opis: 'Rintaro uczęszcza do szkoły znanej z trudnych uczniów, a Kaoruko do pobliskiej żeńskiej akademii. Mimo uprzedzeń dzielących ich szkoły, ich przypadkowa znajomość przeradza się w szczerą relację.' },
  { tytul: 'Call of the Night', gatunek: 'Romans · Nadnaturalne', opis: 'Kou Yamori ma problemy ze snem i zaczyna nocami włóczyć się po mieście, gdzie poznaje tajemniczą Nazunę. Ich spotkania prowadzą go do świata wampirów i pytań o to, czego naprawdę pragnie.' },
  { tytul: 'Clannad', gatunek: 'Dramat · Romans', opis: 'Tomoya, zniechęcony codziennością licealista, poznaje Nagisę i pomaga jej spełnić marzenie o szkolnym klubie teatralnym. Wspólne doświadczenia zbliżają ich do przyjaciół i zmieniają ich spojrzenie na rodzinę oraz przyszłość.' },
]

const ciekawostki = [
  'Wiele serii anime powstaje na podstawie mangi.',
  'Muzyka z anime często staje się równie znana jak sama seria.',
  'Za jedno z najstarszych zachowanych japońskich dzieł animowanych uważa się krótki film „Katsudō Shashin”, datowany na około 1907 rok.',
  '„Sazae-san” jest najdłużej emitowanym serialem anime — japońska telewizja pokazuje go od 1969 roku.',
  '„Sazae-san” jest również anime z największą liczbą odcinków; kolejne odcinki są emitowane od 1969 roku.',
  'Słowo „anime” to japoński skrót od „animēshon”, zapożyczonego z angielskiego słowa „animation”.',
  'Do najpopularniejszych anime na świecie należą między innymi „Pokémon”, „One Piece” i „Dragon Ball”.',
]

const ciekawostkaDnia = ciekawostki[Math.floor(Math.random() * ciekawostki.length)]

function App() {
  const [jasnyMotyw, ustawJasnyMotyw] = useState(false)
  const [szukanyTytul, ustawSzukanyTytul] = useState('')

  const fraza = szukanyTytul.trim().toLowerCase()
  const pasujeDoWyszukiwania = (pozycja) =>
    pozycja.tytul.toLowerCase().includes(fraza)
  const srodekListy = Math.ceil(anime.length / 2)
  const lewaKolumna = anime.slice(0, srodekListy).filter(pasujeDoWyszukiwania)
  const prawaKolumna = anime.slice(srodekListy).filter(pasujeDoWyszukiwania)
  const znalezionoAnime = lewaKolumna.length + prawaKolumna.length > 0

  return (
    <main className={jasnyMotyw ? 'strona jasna' : 'strona'}>
      <div className="kontener">
        <header className="naglowek">
          <h1>Portal Anime</h1>
          <div className="ustawienia">
            <PrzedstawSie />
            <input
              className="pole-szukania"
              type="search"
              placeholder="Szukaj anime"
              aria-label="Szukaj anime po tytule"
              value={szukanyTytul}
              onChange={(zdarzenie) => ustawSzukanyTytul(zdarzenie.target.value)}
            />
            <button
              className="przycisk"
              onClick={() => ustawJasnyMotyw(!jasnyMotyw)}
              type="button"
            >
              {jasnyMotyw ? 'Czarny motyw' : 'Jasny motyw'}
            </button>
          </div>
        </header>

        <section className="sekcja-katalogu">
          <h2>Lista anime</h2>
          <div className="kolumny-anime">
            <div className="lista-anime">
              {lewaKolumna.map((pozycja) => (
                <Anime key={pozycja.tytul} anime={pozycja} />
              ))}
            </div>
            <div className="lista-anime">
              {prawaKolumna.map((pozycja) => (
                <Anime key={pozycja.tytul} anime={pozycja} />
              ))}
            </div>
          </div>
          {!znalezionoAnime && <p>Nie znaleziono anime.</p>}
        </section>

        <section className="ciekawostka">
          <h2>Ciekawostka</h2>
          <p>{ciekawostkaDnia}</p>
        </section>
      </div>
    </main>
  )
}

export default App

createRoot(document.getElementById('root')).render(<App />)
