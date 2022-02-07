import cls from '../../../scss/components/elements/ui/_masterlogo.module.scss';
import { FaChevronLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { sideBarAppear } from '../../../store/slices/app_slices/appSlice';

const MasterLogo = () => {
    const dispatch = useDispatch()

    return (
        <div className={cls.logo}>
            <span>
                SCBA
            </span>
            <button onClick={() => dispatch(sideBarAppear())}>
                <FaChevronLeft/>
            </button>
        </div>
    )
}

export { MasterLogo }