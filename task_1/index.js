import { encoded, translations } from './data.js'

// console.log("Let's rock")
// console.log(encoded, translations)

const decoded = encoded.map((obj) => {
  let result = {}
  for (const key in obj) {
    if (Object.keys(translations).includes(obj[key])) {
      result[key] = translations[obj[key]]
    } else {
      result[key] = obj[key]
    }
  }
  return result
})

console.log(decoded)

// Выводим список уникальных ID, если я верно понял задачу

const uniqueIds = new Set(
  encoded
    .map((obj) => {
      let result = []
      for (const key in obj) {
        if (key.toLowerCase().includes('id', key.length - 2)) {
          result.push(obj[key])
        } else {
          continue
        }
      }
      return result
    })
    .flat()
    .sort()
)

const uniqueIdsArr = Array.from(uniqueIds)

console.log(uniqueIdsArr)
