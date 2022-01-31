import cls from '../../scss/partials/_sidebarcontent.module.scss';
import { AiOutlineMan, AiOutlineSetting, AiOutlineWoman } from 'react-icons/ai'
import { MdToys } from 'react-icons/md';
import { BsHandbagFill } from 'react-icons/bs';
import { CustomLink } from '../elements/CustomLink';

const SidebarContent = () => {
    return (
        <div className={cls.content}>
            <div className={cls.content_wrapper}>
                <ul>
                    <CustomLink to={'/'}>
                        <AiOutlineSetting/>
                        SETTINGS
                    </CustomLink>
                    <CustomLink to={'/woman'}>
                        <AiOutlineWoman/>
                        WOMAN
                    </CustomLink>
                    <CustomLink to={'/man'}>
                        <AiOutlineMan/>
                        MAN
                    </CustomLink>
                    <CustomLink to={'/kid'}>
                        <MdToys/>
                        KID
                    </CustomLink>
                    <CustomLink to={'/accessories'}>
                        <BsHandbagFill/>
                        ACCESSORIES
                    </CustomLink>
                </ul>
            </div>
        </div>
    )
}

export { SidebarContent }