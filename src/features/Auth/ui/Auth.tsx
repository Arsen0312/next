"use client"

import cls from "./Auth.module.scss";
import {useState, ChangeEvent, FormEvent} from "react";
import EyesOpen from "@/assets/EyesOpen";
import EyesClose from "@/assets/EyesClose";

type AuthState = {
    username: string,
    email: string,
    password: string,
    passwordConfirmation: string,
}

type statePasswords = {
    password: boolean,
    passwordConfirmation: boolean
}

const Auth = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [stateInp, setStateInp] = useState<AuthState>({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [statePassword, setStatePassword] = useState<statePasswords>({
        password: false,
        passwordConfirmation: false,
    })

    const togglePasswordVisibility = (field: "password" | "passwordConfirmation") => {
        setStatePassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    // Обработчик изменения инпутов
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setStateInp((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        setErrors((prevState) => ({
            ...prevState,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!stateInp.email) {
            newErrors.email = "Email обязателен";
        } else if (!/\S+@\S+\.\S+/.test(stateInp.email)) {
            newErrors.email = "Неверный формат email";
        }

        if (!stateInp.password) {
            newErrors.password = "Пароль обязателен";
        } else if (stateInp.password.length < 6) {
            newErrors.password = "Пароль должен содержать минимум 6 символов";
        }

        if (!isLogin) {
            if (!stateInp.username) {
                newErrors.name = "Имя обязательно";
            }
            if (!stateInp.passwordConfirmation) {
                newErrors.passwordConfirmation = "Подтверждение пароля обязательно";
            } else if (stateInp.password !== stateInp.passwordConfirmation) {
                newErrors.passwordConfirmation = "Пароли не совпадают";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validate()) {

            if (isLogin) {
                console.log("Вход:", stateInp);
            } else {
                console.log("Регистрация:", stateInp);
            }
        }
    };

    const toggleLogin = () => {
        setIsLogin(!isLogin);
        setErrors({});
    };

    return (
        <div className={cls.main}>
            <h3>
                {isLogin ? "Войти" : "Зарегистрироваться"}
            </h3>
            <form onSubmit={handleSubmit}>
                <div className={cls.inputsContainer}>
                    {
                        !isLogin &&
                        <>
                            <input
                                className={errors.name && cls.noValidate}
                                name="name"
                                value={stateInp.username}
                                onChange={handleChange}
                                type="text"
                                placeholder="Имя"
                            />
                            <input
                                name="lastName"
                                type="text"
                                placeholder="Фамилия"
                            />
                        </>
                    }
                    <input
                        className={errors.email && cls.noValidate}
                        name="email"
                        value={stateInp.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                    />
                    <span className={cls.wrapperInpForPositionLabelInInp}>
                        <label htmlFor="password">
                        {
                            statePassword.password
                                ? <span onClick={() => togglePasswordVisibility("password")}>
                                    <EyesOpen/>
                                </span>
                                : <span onClick={() => togglePasswordVisibility("password")}>
                                    <EyesClose/>
                                </span>
                        }
                    </label>
                        <input
                            id="password"
                            className={errors.password && cls.noValidate}
                            name="password"
                            value={stateInp.password}
                            onChange={handleChange}
                            type={statePassword.password ? "text" : "password" }
                            placeholder="Пароль"
                            minLength={6}
                        />
                    </span>
                    {
                        !isLogin &&
                        <span className={cls.wrapperInpForPositionLabelInInp}>
                                <label htmlFor="passwordConfirmation">
                                {
                                    statePassword.passwordConfirmation
                                        ? <span onClick={() => togglePasswordVisibility("passwordConfirmation")}>
                                            <EyesOpen/>
                                        </span>
                                        : <span onClick={() => togglePasswordVisibility("passwordConfirmation")}>
                                            <EyesClose/>
                                        </span>
                                }
                            </label>
                            <input
                                id="passwordConfirmation"
                                className={errors.passwordConfirmation && cls.noValidate}
                                name="passwordConfirmation"
                                value={stateInp.passwordConfirmation}
                                onChange={handleChange}
                                type={statePassword.passwordConfirmation ? "text" : "password" }
                                placeholder="Подтвердите пароль"
                                minLength={6}
                            />
                            </span>
                    }
                </div>
                <button type="submit">
                    Продолжить
                </button>
            </form>
            <div className={cls.wrapperToggleLoginBtn}>
                {
                    !isLogin
                        ? <div>
                            <span>Уже есть аккаунт</span>
                            <button type="button" onClick={toggleLogin}>Войти</button>
                        </div>
                        : <div>
                            <span>Нет аккаунта</span>
                            <button type="button" onClick={toggleLogin}>Создать</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Auth;