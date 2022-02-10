import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { rootStatusNames } from "../constants"
import { getProductApi } from "../store/slices/api_slices/productApiSlice"
import { intoArray } from "../utilities/intoArray"

const Product = () => {
    const { dropDownCategoryLink } = useSelector(state => state.product)
    const { products , status } = useSelector(state => state.productApi)
    const dispatch = useDispatch()
    const [data , setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        dispatch(getProductApi())
    } , [])

    useEffect(() => {
        const filteredArray = intoArray(products).filter(({ subCategory , category }) => 
            category === id && subCategory === dropDownCategoryLink
        )
        setData(filteredArray)
    } , [dropDownCategoryLink])

    if(status === rootStatusNames.LOADING){
        return <h3>Loading</h3>
    }else{
        return (
            <div>
                {
                    data.length ? (
                        data.map(({ title , id }) => {
                            return (
                                <h2 key={id}>
                                    {title}
                                </h2>
                            )
                        })
                    ) : (
                        <h3>Empty category</h3>
                    )
                }
            </div>
        )
    }
}

export { Product }