import { setDropDownLink } from '../../store/slices/app_slices/productSlice'
import cls from '../../scss/components/_sidebarcategory.module.scss'
import { useState , useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { intoArray } from '../../utilities/intoArray'

const SidebarCategory = ({ index }) => {
    const { sidebarCategory } = useSelector(state => state.app)
    const { categories } = useSelector(state => state.category)
    const [data , setData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const filteredArray = intoArray(categories)?.filter(item => item.category === index)
        setData(filteredArray)
    } , [sidebarCategory])

    const linkHandler = e => {
        dispatch(setDropDownLink(e))
    }

    return (
        <div className={ sidebarCategory === index ? `${cls.category} ${cls.category_active}`: cls.category }>
            {
                data.length ? (
                    data.map(item => {
                        return (
                            <p onClick={() => linkHandler(item.subCategory)} key={item.id}>{item.subCategory}</p>
                        )
                    })
                ) : (
                    <h4>Empty</h4>
                )
            }
        </div>
    )
}

export { SidebarCategory }