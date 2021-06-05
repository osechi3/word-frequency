import { cleanText, getEveryWordCount } from './app.js'
import wordsToRemove from './words-to-remove.js'

const textUploader = document.getElementById('text-uploader')
const wordList = document.querySelector('.word-list')


const reader = new FileReader()
reader.addEventListener('loadend', handleFile)

function handleFile () {
    const text = cleanText(reader.result, wordsToRemove)
    const words = getEveryWordCount(text)
    displayWords(words)
}

function displayWords (words) {
    for (let i = 0; i < 100; i++) {
        const entry = document.createElement('li')
        entry.classList.add('entry')
        entry.textContent = words[i][0] + ' : ' + words[i][1]
        wordList.append(entry)
    }
}

/* Getting the user's file */
textUploader.addEventListener('change', e => {
    reader.readAsText(e.target.files[0])
})
