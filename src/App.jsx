import { Main } from './components/shared/Main';
import { SideBar } from './components/shared/Sidebar';
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