"use client"
import cls from "./Nav.module.scss";

import Link from "next/link";
import dynamic from 'next/dynamic';

import { useRef, useState } from "react";
import UserIcon from "@/assets/UserIcon";
import ChatIcon from "@/assets/ChatIcon";
import useOutsideClick from "@/shared/utils/useOutsideClick";
import Modal from "@/shared/ui/Modal/ui/Modal"
import CloseIcon from "@/assets/CloseIcon";

const LazyAuth = dynamic(() => import('@/features/Auth/ui/Auth'));

const Nav = () => {
    const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const openModal = () => {
        setIsActiveModal(true);
    };

    const offModal = () => setIsActiveModal(false);

    useOutsideClick(ref, offModal);

    return (
        <nav className={cls.Nav}>
            <Link href="/">
                <h1>
                    TravelTok
                </h1>
            </Link>
            <div className={cls.centerContentHeaderNav}>
                <Link href="/chat">
                    Чат
                    <ChatIcon color={"white"} />
                </Link>
                <Link href="/forAvotrs">
                    Для авторов
                    <UserIcon color={"white"} />
                </Link>
                <button className={cls.profile} onClick={openModal}>
                    Войти
                    <UserIcon />
                </button>
            </div>
            {isActiveModal && (
                <Modal ref={ref} closeModal={() => setIsActiveModal(false)}>
                    <LazyAuth />
                </Modal>
            )}
        </nav>
    );
};

export default Nav;