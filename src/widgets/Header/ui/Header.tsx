// 'use client';
//
// import cls from "./Header.module.scss";
// import Nav from "@/widgets/Header/ui/Nav/ui/Nav";
// import { useState } from "react";
// import Modal from "@/features/modal/Modal";
// import Auth from "../../../features/auth/ui/Auth";
//
// const Header = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [modalContent, setModalContent] = useState<"login" | "register">("login");
//
//     const handleOpenModal = (type: "login" | "register") => {
//         setModalContent(type);
//         setModalOpen(true);
//     };
//
//     const handleCloseModal = () => setModalOpen(false);
//
//     const handleSubmit = async (type: "login" | "register", data: { email: string; password: string; confirmPassword?: string }) => {
//         const url = type === "register"
//             ? "https://traveltok.pythonanywhere.com/auth-api/register/"
//             : "https://traveltok.pythonanywhere.com/auth-api/login/";
//
//         const payload = type === "register"
//             ? {
//                 username: data.email,  // Здесь можно сделать уникальный username
//                 email: data.email,
//                 password: data.password,
//                 confirm_password: data.confirmPassword,
//             }
//             : {
//                 email: data.email,
//                 password: data.password,
//             };
//
//         try {
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(payload),
//             });
//
//             const result = await response.json();
//             console.log(result);
//             if (response.ok) {
//                 alert(`${type === "register" ? "Регистрация" : "Вход"} прошел успешно`);
//                 handleCloseModal();
//             } else {
//                 alert("Ошибка: " + result.detail);
//             }
//         } catch (error) {
//             console.error("Ошибка запроса:", error);
//         }
//     };
//
//     const styleRegister = {
//         link: { color: '#1D4ED8', marginTop: '61px', fontSize: '12px', fontWeight: '400' }
//     };
//
//     const styleLogin = {
//         link: { color: '#1D4ED8', marginTop: '61px', fontSize: '12px', fontWeight: '400' }
//     };
//
//     return (
//         <header className={cls.header}>
//             <Nav onOpenModal={handleOpenModal} />
//             <Modal show={isModalOpen} onClose={handleCloseModal}>
//                 <Auth
//                     style={modalContent === "register" ? styleRegister : styleLogin}
//                     onSubmit={handleSubmit}
//                     initialActiveButton={modalContent}
//                     repeat={modalContent === "register"}
//                 />
//             </Modal>
//         </header>
//     );
// };
//
// export default Header;

'use client';

import cls from "./Header.module.scss";
import Nav from "@/widgets/Header/ui/Nav/ui/Nav";
import { useState } from "react";
import Modal from "@/features/modal/Modal";
import Auth from "../../../features/auth/ui/Auth";

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<"login" | "register">("login");

    // Открыть модалку с заданным типом формы
    const handleOpenModal = (type: "login" | "register") => {
        setModalContent(type);
        setModalOpen(true);
    };

    const handleCloseModal = () => setModalOpen(false);

    // Обработчик отправки данных формы регистрации или входа
    const handleSubmit = async (type: "login" | "register", data: { email: string; password: string; confirmPassword?: string }) => {
        const url = type === "register"
            ? "https://traveltok.pythonanywhere.com/auth-api/register/"
            : "https://traveltok.pythonanywhere.com/auth-api/login/";

        const payload = type === "register"
            ? {
                username: data.email.split('@')[0],  // Генерируем username на основе email
                email: data.email,
                password: data.password,
                confirm_password: data.confirmPassword,
            }
            : {
                email: data.email,
                password: data.password,
            };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            console.log(result);
            if (response.ok) {
                alert(`${type === "register" ? "Регистрация" : "Вход"} прошел успешно`);
                handleCloseModal();
            } else {
                alert("Ошибка: " + (result.detail || "Неизвестная ошибка"));
            }
        } catch (error) {
            console.error("Ошибка запроса:", error);
        }
    };

    const styleRegister = {
        link: { color: '#1D4ED8', marginTop: '61px', fontSize: '12px', fontWeight: '400' }
    };

    const styleLogin = {
        link: { color: '#1D4ED8', marginTop: '61px', fontSize: '12px', fontWeight: '400' }
    };

    return (
        <header className={cls.header}>
            <Nav onOpenModal={handleOpenModal} />
            <Modal show={isModalOpen} onClose={handleCloseModal}>
                <Auth
                    style={modalContent === "register" ? styleRegister : styleLogin}
                    onSubmit={handleSubmit}
                    initialActiveButton={modalContent}
                    repeat={modalContent === "register"}
                />
            </Modal>
        </header>
    );
};

export default Header;
