import { SideBar } from './components/shared/Sidebar';
import { Main } from './pages/Main';
import cls from './scss/style.module.scss';

const App = () => {
    return (
        <section className={cls.root}>
            <SideBar/>
            <Main/>
        </section>
    )
}

export { App }