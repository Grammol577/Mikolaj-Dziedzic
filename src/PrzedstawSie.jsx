import { useState } from 'react'

function PrzedstawSie() {
  const [imie, ustawImie] = useState(localStorage.getItem('imieUzytkownika') || '')

  function przedstawSie() {
    const odpowiedz = window.prompt('Jak masz na imię?')
    if (!odpowiedz) return

    const noweImie = odpowiedz.trim()
    if (!noweImie) return
    localStorage.setItem('imieUzytkownika', noweImie)
    ustawImie(noweImie)
  }

  return (
    <div className="powitanie-uzytkownika">
      <p>{imie ? `Witaj ponownie, ${imie}!` : 'Witaj ponownie!'}</p>
      <button className="przycisk-przedstaw" onClick={przedstawSie} type="button">
        Przedstaw się
      </button>
    </div>
  )
}

export default PrzedstawSie
