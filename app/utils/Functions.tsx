const copyArray = (value: any[]) => {
    return [...value]
}

const copyAndReverseArray = (value: any[]) => {
    return copyArray(value).reverse()
}

module.exports = {
    copyArray,
    copyAndReverseArray
}