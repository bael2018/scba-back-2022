import { setCategory, setSubCategory } from '../../store/slices/app_slices/appSlice'
import cls from '../../scss/partials/_dropdown.module.scss'
import { useEffect, useState } from "react"
import { rootContant } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'

const Dropdown = ({ data , init , state }) => {
    const [view , setView] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        switch (init) {
            case rootContant.category:
                dispatch(setCategory({ category: 'Man' }))
                break
            case rootContant.subCategory:
                dispatch(setSubCategory({ subCategory: 'Jeans' }))
                break
            default:
                break;
        }
    } , [])

    const changeTextHandler = value => {    
        if(init === rootContant.category){
            setView(!view)
            dispatch(setCategory({ category: value }))
        }else{      
            setView(!view)
            dispatch(setSubCategory({ subCategory: value }))
        }
    }

    const viewHandler = () => {
        setView(!view)
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
                                            className={title === state ? cls.activeItem : ''}
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