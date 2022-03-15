import { Link, useMatch } from "react-router-dom";
import cls from "../../scss/components/_customlink.module.scss";

const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch(to);

    return (
        <Link to={to} {...props} className={match && cls.active}>
            {children}
        </Link>
    );
};

export { CustomLink };
