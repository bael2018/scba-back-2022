export const productCode = () => {
    const random = Math.floor(Math.random() * (1000000 - 9999999) + 9999999)
    return random
}