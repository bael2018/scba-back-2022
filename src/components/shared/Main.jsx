import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Error } from '../../pages/Error';
import { Product } from '../../pages/Product';
import { Settings } from '../../pages/Settings';
import cls from '../../scss/_main.module.scss';
import { MainLayout } from '../layouts/MainLayout';

const Main = () => {
    const { sideBarView } = useSelector(state => state.app)

    return (
        <div className={sideBarView ? `${cls.main} ${cls.main_active}` : cls.main}>
            <div className={cls.main_wrapper}>
                <Routes>
                    <Route path='/' element={<MainLayout/>}>
                        <Route index element={<Settings/>}/>
                        <Route path='product/:id' element={<Product/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export { Main }