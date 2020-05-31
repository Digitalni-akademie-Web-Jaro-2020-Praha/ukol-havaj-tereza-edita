'use strict'

let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
}

let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
}

const cenaZajezdu = 100000
const pulkaCeny = 50000
const vysledek = document.querySelector('#vysledek')

if (
  osoba1.uspory + osoba2.uspory >= cenaZajezdu &&
  osoba1.uspory >= pulkaCeny &&
  osoba2.uspory >= pulkaCeny
) {
  vysledek.textContent = 'Jedeme, obě máme našetřeno dost! Ju-chů!'
} else if (
  osoba1.uspory + osoba2.uspory >= cenaZajezdu &&
  osoba1.uspory < pulkaCeny &&
  osoba2.uspory >= pulkaCeny
) {
  vysledek.textContent = `Pojedeme, ale jedna z nás je slabým článkem. Řekněme si to rovnou - je to ${
    osoba1.jmeno
  }. Bude kamarádce splácet ${pulkaCeny - osoba1.uspory},- Kč. `
} else if (
  osoba1.uspory + osoba2.uspory >= cenaZajezdu &&
  osoba1.uspory >= pulkaCeny &&
  osoba2.uspory < pulkaCeny
) {
  vysledek.textContent = `Pojedeme, ale jedna z nás je slabým článkem. Řekněme si to rovnou - je to ${
    osoba2.jmeno
  }. Bude kamarádce splácet  ${pulkaCeny - osoba2.uspory},- Kč. `
} else if (
  osoba1.uspory >= pulkaCeny &&
  osoba1.uspory + osoba2.uspory < cenaZajezdu
) {
  vysledek.textContent = `Pcha! Ju don't wanna wórk, ju wanna eat pork? Do dovolené vám dohromady chybí ještě ${cenaZajezdu -
    osoba1.uspory -
    osoba2.uspory},- Kč.

Kamarádka ${osoba2.jmeno} musí našetřit do cíle ještě ${pulkaCeny -
    osoba2.uspory},- Kč.`
} else if (
  osoba2.uspory >= pulkaCeny &&
  osoba1.uspory + osoba2.uspory < cenaZajezdu
) {
  vysledek.textContent = `Pcha! Ju don't wanna wórk, ju wanna eat pork? Do dovolené vám dohromady chybí ještě ${cenaZajezdu -
    osoba1.uspory -
    osoba2.uspory},- Kč.

Kamarádka ${osoba1.jmeno} musí našetřit do cíle ještě ${pulkaCeny -
    osoba1.uspory},- Kč.`
} else {
  vysledek.textContent = `Pcha! Ju don't wanna wórk, ju wanna eat pork? Do dovolené vám dohromady chybí ještě ${cenaZajezdu -
    osoba1.uspory -
    osoba2.uspory},- Kč.

Přesněji: ${osoba1.jmeno} dluží ${pulkaCeny - osoba1.uspory},- Kč a ${
    osoba2.jmeno
  } dluží ${pulkaCeny - osoba2.uspory},- Kč.`
}