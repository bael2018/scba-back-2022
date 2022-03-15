import { useEffect } from "react";
import { useSelector } from "react-redux";
import cls from "../../scss/components/elements/_inputcheker.module.scss";

const InputChecker = ({ state, setState, title, hasTitle, info, styles }) => {
    const { valueCleaner } = useSelector((state) => state.product);

    useEffect(() => {
        if (!state) {
            info.clearValue();
        }
    }, [state]);

    useEffect(() => {
        info.clearValue();
    }, [valueCleaner]);

    return (
        <>
            {state ? (
                <div className={` ${styles && cls.checker}`}>
                    <h3>{title}</h3>
                    <input
                        className={` ${styles && cls.checker_input}`}
                        type="text"
                        {...info.bind()}
                    />
                    <span onClick={() => setState(false)}>remove</span>
                </div>
            ) : (
                <div className={`${cls.checker} ${cls.checker_alt}`}>
                    <p>{hasTitle} ?</p>
                    <button onClick={() => setState(true)}>Yes</button>
                </div>
            )}
        </>
    );
};

export { InputChecker };
