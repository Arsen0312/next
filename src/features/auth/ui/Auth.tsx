import cls from './Auth.module.scss';
import React, {useState, useEffect} from "react";
import key from '../assets/key.svg'
import mail from '../assets/Mail.svg'
import visibility from '../assets/visibility.svg'
import visibility_off from '../assets/visibility_off.svg'
import Image from "next/image";

type Props = {
    style: any;
    repeat: boolean;
    initialActiveButton: "login" | "register";
    onSubmit: (type: "login" | "register", data: { email: string; password: string; confirmPassword?: string }) => void;
};

const Auth = ({style, initialActiveButton, onSubmit}: Props) => {
    const [activeButton, setActiveButton] = useState<"login" | "register">(initialActiveButton);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPas, setRepPas] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setActiveButton(initialActiveButton);
    }, [initialActiveButton]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (activeButton === "register") {
            onSubmit("register", {email, password, confirmPassword});
        } else {
            onSubmit("login", {email, password});
        }
    };

    const [type, setType] = useState('password')
    const [switchImg , setSwitchImg] = useState(visibility)
    const [repeat, setRepeat] = useState('password')
    const [imgVisibility , setImgVisibility] = useState(visibility)

    function visibilityOn() {
        setType(prevType => prevType === 'password' ? 'text' : 'password')
        setSwitchImg(prevVis  => prevVis === visibility ? visibility_off : visibility  )
    }

    function visibilityRepeat() {
        setRepeat(prevType => prevType === 'password' ? 'text' : 'password')
        setImgVisibility(prevVis  => prevVis === visibility ? visibility_off : visibility  )
    }
    return (
        <form style={
            activeButton === 'register' ? {border: '2px solid #FF9914'} : {border: '2px solid #1D4ED8'} ||
            activeButton === 'login' ? {border: '2px solid #1D4ED8'} : {border: '2px solid #FF9914'}
        } className={cls.form} onSubmit={handleSubmit}>
            <div className={cls.authBtn}>

                <button
                    type="button"
                    style={
                        activeButton === 'register' ? {color: '#FF6A00'} : {color: '#6B7466'}
                    }
                    onClick={() => setActiveButton("register")}
                >
                    Регистрация
                </button>

                <button
                    type="button"
                    style={
                        activeButton === 'login' ? {color: '#1D4ED8'} : {color: '#6B7466'}
                    }
                    onClick={() => setActiveButton("login")}
                >
                    Вход
                </button>

                <div
                    className={cls.underline}
                    style={
                        activeButton === 'register' ? {left: '0', background: '#FF9914'} : {
                            left: '148px',
                            transition: 'left 0.3s ease',
                        } ||
                        activeButton === 'login' ? {left: '148px', background: '#1D4ED8'} : {
                            left: '0',
                            transition: 'left 0.3s ease',
                        }
                    }
                />
            </div>

            <div className={cls.form_inputs}>
               <div className={cls.email_group}>
                   <div className={cls.element}>
                       <Image
                           src={mail}
                           alt='photo'
                           layout="fill"
                           objectFit="contain"
                       />
                   </div>
                   <input
                       type="email"
                       placeholder='E-mail'
                       className={cls.email}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                   />
               </div>

                <div className={cls.passwords}>
                    <div className={cls.element}>
                        <Image
                            src={key}
                            alt='photo'
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <input
                        type={type}
                        placeholder='Пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={visibilityOn} >
                        <Image
                            src={switchImg}
                            alt="visibility"
                            layout="fill"
                            objectFit="contain"
                        />
                    </button>

                </div>

                {activeButton === 'register' ? (
                   <div className={cls.passwords}>
                       <div className={cls.element}>
                           <Image
                               src={key}
                               alt='photo'
                               layout="fill"
                               objectFit="contain"
                           />
                       </div>
                       <input
                           type={repeat}
                           placeholder='Пароль'
                           value={repPas}
                           onChange={(e) => setRepPas(e.target.value)}
                       />
                       <button onClick={visibilityRepeat} >
                           <Image
                               src={imgVisibility}
                               alt="visibility"
                               layout="fill"
                               objectFit="contain"
                           />
                       </button>
                   </div>

                ) : (
                    <div>
                        <a style={style.link} href="">Забыли пароль?</a>
                    </div>
                )
                ||
                activeButton === 'register' ? (
                    <div>
                        <a style={style.link} href="">Забыли пароль?</a>
                    </div>) : (
                    <input
                        type="password"
                        placeholder='Пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                )
                }

            </div>

            <button
                style={
                    activeButton === "register" ? {background: '#FF9914'} : {background: '#0697E9'} ||
                    activeButton === 'login' ? {background: '#0697E9'} : {background: '#FF9914'}
                }
                className={cls.submit}
            >
                {activeButton === "register" ? "Зарегистрироваться" : "Войти"}
            </button>
        </form>
    );
};

export default Auth;
