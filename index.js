class Formatter {
  static capitalize(string) {
    let thing = string.split('')
    thing[0] = thing[0].toUpperCase()
    return thing.join('')
  }

  static sanitize(string){
    let desiredArray = string.match(/[\w- ']/g)
    let array = []
    for (const key in desiredArray) {
      array.push(desiredArray[key])
    }
    return array.join("")
  }

  static titleize(string) {
    let empty = []
    let arrayOfWords = string.split(' ')
    arrayOfWords.each(word => {
      const wanted = word.charAt(0).toUpperCase() + word.slice(1)
      empty.push(wanted)
    })
    return empty.join()
  }
}