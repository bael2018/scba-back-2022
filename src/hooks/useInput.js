import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useInput = initial => {
    const [value , setValue] = useState(initial)
    const { valueCleaner } = useSelector(state => state.product)

    useEffect(() => {
        setValue('')
    } , [valueCleaner])

    return {
        getter: () => {
            return {
                value,
                onChange: e => setValue(e.target.value),
            }
        },
        clearValue: () => {
            setValue('')
        }
    }
}

export { useInput }