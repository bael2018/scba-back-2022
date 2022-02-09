import { setCategory, setSubCategory } from '../../store/slices/app_slices/appSlice'
import cls from '../../scss/partials/_dropdown.module.scss'
import { useEffect, useState } from "react"
import { rootConstants } from '../../constants'
import { useDispatch } from 'react-redux'

const Dropdown = ({ data , init , state }) => {
    const [view , setView] = useState(false)
    const dispatch = useDispatch()

    const viewHandler = () => {
        setView(!view)
    }

    useEffect(() => {
        switch (init) {
            case rootConstants.category:
                dispatch(setCategory({ category: 'Man' }))
                break
            case rootConstants.subCategory:
                dispatch(setSubCategory({ subCategory: 'Jeans' }))
                break
            default:
                break;
        }
    } , [])

    const changeTextHandler = value => {    
        if(init === rootConstants.category){
            viewHandler()
            dispatch(setCategory({ category: value }))
        }else{      
            viewHandler()
            dispatch(setSubCategory({ subCategory: value }))
        }
    }

    return (
        <div className={cls.dropdown}>
            <div 
                className={cls.dropdown__header}
                onClick={viewHandler}
            >
            {state}
            </div>
            <div 
                className={
                    data.length > 5 ? (
                        view ? `${cls.dropdown__body} ${cls.dropdown__body_scroll}` : cls.dropdown__body
                    ) : (
                        view ? `${cls.dropdown__body} ${cls.dropdown__body_active}` : cls.dropdown__body
                    )
                }
            >
                {
                    data.length ? (
                        <ul>
                            {
                                data.map(({ title , id }) => {
                                    return (
                                        <li 
                                            className={` ${title === state && cls.activeItem}`}
                                            key={id}
                                            onClick={() => changeTextHandler(title)}
                                        >
                                            {title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ) : (
                        <h3>Empty !</h3>
                    )
                }
            </div>
        </div>
    )
}

export { Dropdown }