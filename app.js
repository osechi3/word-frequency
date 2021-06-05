export function cleanText(text, wordsToRemove) {
    const replacedText = text
        .replace(/\b[’']ll\b/gi, ' will')
        .replace(/\b[’']ve\b/gi, ' have')
        .replace(/\b[’']re\b/gi, ' are')

    const regexRemove = new RegExp(`\\b(${wordsToRemove.join('|')})\\b`, 'gi')
    return replacedText.replace(regexRemove, '')
}

export function getEveryWordCount (text) {
    const regex = /[a-zA-Z]{2,}[’-]?\w*/gi

    const words = text.match(regex)
    const wordsCopy = words

    const wordInfo = {}
    words.forEach(word => {
        let count = 1
        for (let i = 0; i < wordsCopy.length; i++) {
            if (wordsCopy[i].toLowerCase() == word) {
                count++
            }
        }
        wordInfo[word.toLowerCase()] = count
    })

    const wordsDescending = Object.entries(wordInfo).sort((a, b) => b[1] - a[1])
    return wordsDescending
}
