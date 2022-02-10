import { setCategory, setSubCategory } from '../../store/slices/app_slices/appSlice'
import cls from '../../scss/partials/_dropdown.module.scss'
import { useEffect, useState } from "react"
import { rootConstants } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { setDropDownViewFailure } from '../../store/slices/app_slices/productSlice'

const Dropdown = ({ data , init , state ,}) => {
    const { category } = useSelector(state => state.app)
    const [view , setView] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        switch (init) {
            case rootConstants.category:
                dispatch(setCategory({ category: category }))
                break
            case rootConstants.subCategory:
                dispatch(setSubCategory({ subCategory: data[0]?.subCategory }))
                break
            default:
                break;
        }
    } , [])

    const changeTextHandler = value => {    
        if(init === rootConstants.category){
            setView(!view)
            dispatch(setCategory({ category: value }))
            dispatch(setDropDownViewFailure())
        }else{      
            setView(!view)
            dispatch(setSubCategory({ subCategory: value }))
        }
    }

    return (
        <div className={cls.dropdown}>
            <div 
                className={cls.dropdown__header}
                onClick={() => setView(!view)}
            >
            {state}
            </div>
            <div 
                className={
                    data?.length > 3 ? (
                        view ? `${cls.dropdown__body} ${cls.dropdown__body_scroll}` : cls.dropdown__body
                    ) : (
                        view ? `${cls.dropdown__body} ${cls.dropdown__body_active}` : cls.dropdown__body
                    )
                }
            >
                {
                    data?.length ? (
                        <ul>
                            {
                                data.map(({ subCategory , id }) => {
                                    return (
                                        <li 
                                            className={` ${subCategory === state && cls.activeItem}`}
                                            key={id}
                                            onClick={() => changeTextHandler(subCategory)}
                                        >
                                            {subCategory}
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