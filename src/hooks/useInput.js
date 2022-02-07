import { useState } from "react"

const useInput = initial => {
    const [value , setValue] = useState(initial)

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