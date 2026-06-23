export function shuffleDomNodeArray(array: Array<HTMLElement>) {
    var copy = array.map((el) => el.cloneNode(true))

    for (var i = copy.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = copy[i]
        copy[i] = copy[j]
        copy[j] = temp
    }

    return copy
}
