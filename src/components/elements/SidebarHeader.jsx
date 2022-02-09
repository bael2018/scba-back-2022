import cls from '../../scss/components/elements/_sidebarheader.module.scss';
import { MdDoubleArrow } from 'react-icons/md'
import { useDispatch , useSelector } from 'react-redux';
import { sideBarAppear } from '../../store/slices/app_slices/appSlice';

const SidebarHeader = () => {
    const { sideBarView } = useSelector(state => state.app)
    const dispatch = useDispatch()

    return (
        <div className={sideBarView ? `${cls.header} ${cls.header_active}` : cls.header}>
            <span onClick={() => dispatch(sideBarAppear())}>
                <MdDoubleArrow/>
            </span>
        </div>
    )
}

export { SidebarHeader }