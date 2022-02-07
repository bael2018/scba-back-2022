import { CustomCategories } from "../components/partials/custom/CustomCategories";
import { CustomContent } from "../components/partials/custom/CustomContent";
import { CustomInfo } from "../components/partials/custom/CustomInfo";
import cls from '../scss/_custom.module.scss'

const Custom = () => {
    return (
        <div className={cls.settings}>
            <CustomCategories/>
            <CustomInfo/>
            <CustomContent/>
        </div>
    )
}

export { Custom }