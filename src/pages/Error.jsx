import { Link } from "react-router-dom";
import cls from "./../scss/_error.module.scss";

const Error = () => {
    return (
        <div className={cls.error}>
            <h3>Page not found !</h3>
            <Link to={"/"}>Go back</Link>
        </div>
    );
};

export { Error };
