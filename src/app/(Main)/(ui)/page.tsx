import cls from "./page.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TourCard from "@/app/(Tours)/tour/(TourCurd)/TourCard";

export default async function Home() {

    return (
        <main className={cls.main}>
            <section className={cls.heroSection}>
                <span>
                    <h1>Авторские туры: Твое идеальное приключение</h1>
                </span>
            </section>
            <TourCard
                selected={false}
                rating={4.5}
                id={"12"}
                title={"Сары челек"}
                image={"https://baktyiar.pythonanywhere.com/media/headline_img/dzhalal-abad-sary-chelek-1.webp"}/>
        </main>
    );
}
