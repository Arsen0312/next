import cls from "./page.module.scss";
import React from "react";
import SearchMainPage from "@/app/(Main)/(ui)/(SearchMainPage)/SearchMainPage";

export default async function Home() {

    return (
        <main className={cls.main}>
            <section className={cls.heroSection}>
                <div className={cls.wrapper}>
                    <h1>Авторские туры: Твое идеальное приключение</h1>
                    <SearchMainPage/>
                </div>
            </section>
        </main>
    );
}
