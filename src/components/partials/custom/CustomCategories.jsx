import { useSelector } from 'react-redux'
import { rootContant } from '../../../constants'
import { initCategory } from '../../../constants/init'
import cls from '../../../scss/partials/custom/_customcategories.module.scss'
import { Dropdown } from '../Dropdown'

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
    
    return (
        <div className={cls.settings}>
            <div className={cls.settings__wrapper}>
                <h3>Choose category !</h3>
                <Dropdown 
                    data={initCategory}     
                    init={rootContant.category}
                    state={category}
                />
            </div>
            <div className={cls.settings__wrapper}>   
                <h3>Choose subCategory !</h3>
                <Dropdown 
                    data={initSubCategory} 
                    init={rootContant.subCategory}
                    state={subCategory}
                />
            </div>
        </div>
    )
}

export { CustomCategories }