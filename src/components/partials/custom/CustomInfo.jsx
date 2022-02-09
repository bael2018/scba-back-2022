import { useEffect , useState } from "react"
import { useDispatch } from "react-redux"
import { useInput } from "../../../hooks/useInput"
import cls from '../../../scss/partials/custom/_custominfo.module.scss'
import { setProductInfo } from "../../../store/slices/app_slices/productSlice"
import { InputChecker } from "../../elements/InputChecker"

const CustomInfo = () => {
    const [discountPrice , setDiscountPrice] = useState(false)
    const [isColor , setIsColor] = useState(false)
    const [isSize , setIsSize] = useState(false)
    const [checker , setChecker] = useState(false)
    const dispatch = useDispatch()

    const descriptionFiller = useInput('')
    const discountfiller = useInput('')
    const sizeFiller = useInput('')
    const colorFiller = useInput('')
    const titleFiller = useInput('')
    const priceFiller = useInput('')

    const descriptionR = descriptionFiller.getter().value
    const titleR = titleFiller.getter().value
    const priceR = priceFiller.getter().value

    useEffect(() => {
        if(titleR && descriptionR && priceR){
            setChecker(true)
        }

        if(checker){
            dispatch(setProductInfo({
                title: titleR,
                description: descriptionR,
                price: priceR,
                discountPrice: discountfiller.getter().value,
                size: sizeFiller.getter().value,
                color: colorFiller.getter().value
            }))
        }
    } , [titleR , descriptionR , priceR])

    return (
        <div className={cls.settings__middle}>
            <div>
                <h3>Title</h3>
                <input 
                    className={cls.settings__input}
                    type="text" 
                    {...titleFiller.getter()}
                />
            </div>
            <div className={cls.settings__container}>
                <div>
                    <h3>Price (RUB)</h3>
                    <input 
                        className={cls.settings__input}
                        type="text" 
                        {...priceFiller.getter()}
                    />
                </div>
                <InputChecker
                    styles={true}
                    title={'DiscountPrice'}
                    hasTitle={'Has discount'}
                    state={discountPrice}
                    setState={setDiscountPrice}
                    info={discountfiller}
                />
            </div>
            <div className={cls.settings__container}>
                <InputChecker
                    styles={true}
                    title={'Size'}
                    hasTitle={'Has size'}
                    state={isSize}
                    setState={setIsSize}
                    info={sizeFiller}
                />
                <InputChecker
                    styles={true}
                    title={'Color'}
                    hasTitle={'Has color'}
                    state={isColor}
                    setState={setIsColor}
                    info={colorFiller}
                />
            </div>
            <div className={cls.settings__description}>
                <h3>Description</h3>
                <textarea {...descriptionFiller.getter()}></textarea>
            </div>
        </div>
    )
}

export { CustomInfo }