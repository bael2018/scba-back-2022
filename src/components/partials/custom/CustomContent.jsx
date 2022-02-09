import { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../../../hooks/useInput'
import cls from '../../../scss/partials/custom/_customcontent.module.scss'
import { setProductImages } from '../../../store/slices/app_slices/productSlice'
import { InputChecker } from '../../elements/InputChecker'

const CustomContent = () => {
    const [secondPic , setSecondPic] = useState(false)
    const [thirdPic , setThirdPic] = useState(false)
    const [checker , setChecker] = useState(false)
    const mainImgFiller = useInput('')
    const secondImgFiller = useInput('')
    const thirdImgFiller = useInput('')
    const dispatch = useDispatch()

    const mainImage = mainImgFiller.getter().value;
    const secondImage = secondImgFiller.getter().value;
    const thirdImage = thirdImgFiller.getter().value;
    
    useEffect(() => {
        if(mainImgFiller.getter().value){
            setChecker(true)
        }

        if(checker){
            dispatch(setProductImages({ mainImage, secondImage, thirdImage }))
        }
    } , [mainImage , secondImage , thirdImage])

    return (
        <div className={cls.content}>
            <div className={cls.content__images}>
                <div className={cls.content__images__wrapper}>
                    <h3>Main Image</h3>
                    <input 
                        type="text"
                        {...mainImgFiller.getter()}
                    />

                    <InputChecker
                        title={'Image #2'}
                        hasTitle={'Has second image'}
                        state={secondPic}
                        setState={setSecondPic}
                        info={secondImgFiller}
                    />
                    {
                        secondPic && (
                            <InputChecker
                                title={'Image #3'}
                                hasTitle={'Has third image'}
                                state={thirdPic}
                                setState={setThirdPic}
                                info={thirdImgFiller}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export { CustomContent }