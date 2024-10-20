import cls from "./page.module.scss";
import React from "react";
import SevenOblastsOfKyrgyzstan from "./SevenOblastsOfKyrgyzstan/ui/SevenOblastsOfKyrgyzstan";
import Tours from "./Tours/Tours";
import Feedback from "./Feedback/Feedback";
import Search from "./Search/Search";
import FavoriteTours from "./FavoriteTours/FavoriteTours";

export default async function Home() {


    return (
        <main className={cls.main}>
            <div className={cls.bg}>
                <Search/>
            </div>
            <FavoriteTours/>
            <SevenOblastsOfKyrgyzstan/>
            <Tours/>
            <Feedback/>
        </main>
    );
}
