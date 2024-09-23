import cls from "./page.module.scss";
import React from "react";
import SearchMainPage from "@/app/(Main)/(ui)/(SearchMainPage)/SearchMainPage";
import SevenOblastsOfKyrgyzstan from "./SevenOblastsOfKyrgyzstan/ui/SevenOblastsOfKyrgyzstan";

export default async function Home() {

    return (
        <main className={cls.main}>
            <section className={cls.heroSection}>
                <div className={cls.wrapper}>
                    <h1>Авторские туры: Твое идеальное приключение</h1>
                    <div className={cls.searchMainPage}>
                        <SearchMainPage/>
                    </div>
                </div>
            </section>
            <SevenOblastsOfKyrgyzstan/>
        </main>
    );
}
