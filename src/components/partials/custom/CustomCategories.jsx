import { postProductSubCategoryApi } from '../../../store/slices/api_slices/categoryApiSlice'
import cls from '../../../scss/partials/custom/_customcategories.module.scss'
import { setCategory } from '../../../store/slices/app_slices/appSlice'
import { initCategory } from '../../../constants/init'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../../../hooks/useInput'
import { rootConstants } from '../../../constants'
import { Dropdown } from '../Dropdown'
import { useState } from 'react'

const initSubCategory = [
    {
        title: 'Jeans',
        id: 1
    },
    {
        title: 'Shorts',
        id: 2
    },
    {
        title: 'Caps',
        id: 3
    },
    {
        title: 'Shoes',
        id: 4
    },
    {
        title: 'Shirts',
        id: 5
    },
    {
        title: 'Underwear',
        id: 6
    },
]

const CustomCategories = () => {
    const { category , subCategory } = useSelector(state => state.app)
    const [edit , setEdit] = useState(false)
    const categoryFiller = useInput('')
    const dispatch = useDispatch()

    const setEditBtn = () => {
        setEdit(!edit)
    }

    const addBtnHandler = () => {
        if(categoryFiller.getter().value !== ''){
            const body = {
                category,
                subCategory: categoryFiller.getter().value
            }

            dispatch(postProductSubCategoryApi(body))
            categoryFiller.clearValue()
        }
    }
    
    return (
        <div className={cls.settings}>
            <div className={cls.settings__wrapper}>
                <h3>Choose category !</h3>
                <Dropdown 
                    data={initCategory}     
                    init={rootConstants.category}
                    state={category}
                />
            </div>
            <h3>
                <span onClick={setEditBtn} className={` ${!edit && cls.settings_active}`}>Add</span> | 
                <span onClick={setEditBtn} className={` ${edit && cls.settings_active}`}>Choose</span>
            </h3>
            {
                edit ? (
                    <div className={cls.settings__wrapper}>   
                        <h3>SubCategory !</h3>
                        <Dropdown 
                            data={initSubCategory} 
                            init={rootConstants.subCategory}
                            state={subCategory}
                        />
                    </div>
                ) : (
                    <div className={cls.settings__wrapper_edit}>   
                        <h3>SubCategory !</h3>
                        <input type="text" {...categoryFiller.getter()}/>
                        <button onClick={addBtnHandler}>Confirm</button>
                    </div>
                )
            }
        </div>
    )
}

export { CustomCategories }