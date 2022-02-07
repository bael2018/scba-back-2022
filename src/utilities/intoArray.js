export const intoArray = item => {
    if(!item) return item

    return Object.entries(item).map(item => {
        const id = item[0]

        return {
            ...item[1],
            id
        }
    })
}

export const intoDoubleArray = res => {
    if(!res) return res

    const result = []

    Object.entries(res).map(item => {
        const fid = item[0] // fid => firebase_id

        const insideArray = Object.entries(item[1]).map(elem => {
            const pid = elem[0] // pid => product_id

            return {
                ...elem[1],
                pid: pid,
                fid: fid
            }
        })

        result.push(...insideArray)
    })

    return result
}