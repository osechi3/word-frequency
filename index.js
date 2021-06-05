import { cleanText, getEveryWordCount } from './app.js'
import wordsToRemove from './words-to-remove.js'

const textUploader = document.getElementById('text-uploader')
const wordContainer = document.querySelector('.word-container')


const reader = new FileReader()
reader.addEventListener('loadend', handleFile)

function handleFile () {
    const text = cleanText(reader.result, wordsToRemove)
    const words = getEveryWordCount(text)
    displayWords(words)
}

function displayWords (words) {
    for (let i = 0; i < 100; i++) {
        const entry = document.createElement('div')
        entry.classList.add('entry')

        const frequency = document.createElement('div')
        frequency.classList.add('entry__frequency')
        frequency.textContent = '#' + words[i][1]
        entry.append(frequency)

        const word = document.createElement('div')
        word.classList.add('entry__word')
        word.textContent = words[i][0]
        entry.append(word)

        wordContainer.append(entry)
    }
}

/* Getting the user's file */
textUploader.addEventListener('change', e => {
    reader.readAsText(e.target.files[0])
})
