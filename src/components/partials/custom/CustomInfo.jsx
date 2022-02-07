import { useState } from "react"
import { useInput } from "../../../hooks/useInput"
import cls from '../../../scss/partials/custom/_custominfo.module.scss'

const CustomInfo = () => {
    const [discountPrice , setDiscountPrice] = useState(false)
    const inpTitle = useInput('')
    const inpContent = useInput('')

    const submitHandler = () => {
        if(inpTitle.getter().value){
            inpTitle.clearValue()
        }else{
            console.log('Something went wrong');
        }
    }

    return (
        <div className={cls.settings__middle}>
            <div>
                <h3>Title</h3>
                <input 
                    className={cls.settings__input}
                    type="text" 
                    {...inpTitle.getter()}
                />
            </div>
            <div className={cls.settings__container}>
                <div>
                    <h3>Price</h3>
                    <input 
                        className={cls.settings__input}
                        type="text" 
                        {...inpContent.getter()}
                    />
                </div>
                {
                    discountPrice ? (
                        <div>
                            <h3>DiscountPrice</h3>
                            <input 
                                 className={cls.settings__input}
                                type="text" 
                                {...inpContent.getter()}
                            />
                            <span onClick={() => setDiscountPrice(false)}>remove</span>
                        </div>
                    ) : (
                        <div>
                            <p>Has discountPrice ?</p>
                            <button onClick={() => setDiscountPrice(true)}>Yes</button>
                        </div>
                    )
                }
            </div>
            <button onClick={submitHandler}>SUBMIT</button>
        </div>
    )
}

export { CustomInfo }