import cls from "./page.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

    return (
        <main className={cls.main}>
            <section className={cls.heroSection}>
                <span>
                    <h1>Авторские туры: Твое идеальное приключение</h1>
                </span>
            </section>
        </main>
    );
}
