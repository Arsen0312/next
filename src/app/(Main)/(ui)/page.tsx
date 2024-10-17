import cls from "./page.module.scss";
import SearchMainPage from "@/app/(Main)/(ui)/(SearchMainPage)/SearchMainPage";
import SevenOblastsOfKyrgyzstan from "./SevenOblastsOfKyrgyzstan/ui/SevenOblastsOfKyrgyzstan";
import AllTours from "@/app/(Main)/(ui)/(AllTours)/ui/AllTours";
import TourCard from "@/app/(Tours)/tour/(TourCurd)/TourCard";
import img from "@/assets/Osh.png"

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
            <AllTours/>
            <TourCard id={0} title={"title"} description={"Тур-приключение: на внедорожниках к заброшенному городу Эныльчек"}
                      image={img.src} rating={0.5} discount={50} price={12000}
            />
        </main>
    );
}
