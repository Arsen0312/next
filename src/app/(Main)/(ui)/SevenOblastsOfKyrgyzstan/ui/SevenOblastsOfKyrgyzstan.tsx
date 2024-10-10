import cls from "./SevenOblastsOfKyrgyzstan.module.scss"

import IssykKul from "@/assets/IssykKul.png"
import chui from "@/assets/chui.png"
import batken from "@/assets/batken.png"
import Naryn from "@/assets/Naryn.png"
import Talaska from "@/assets/Talaska.png"
import Osh from "@/assets/Osh.png"
import JalalAbad from "@/assets/JalalAbad.png"

const SevenOblastsOfKyrgyzstan = () => {

    return (
        <section className={cls.main}>
            <h2>
                7 Областей Кыргыстана
            </h2>
            <img
                width={1000} height={1000}
                src={IssykKul.src} alt={"IssykKul"}/>
            <div className={cls.boxGridImages}>
                <div className={cls.oblastCard}>
                    <img className={cls.gridImage} width={1000} height={1000} src={chui.src} alt={'chui'}/>
                    <div className={cls.title}>
                        <h4>Чуйская</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <img className={cls.gridImage} width={1000} height={1000} src={batken.src} alt={'batken'}/>
                    <div className={cls.title}>
                        <h4>Баткенская</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <img className={cls.gridImage} width={1000} height={1000} src={Naryn.src} alt={'Naryn'}/>
                    <div className={cls.title}>
                        <h4>Нарын</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <img className={cls.gridImage} width={1000} height={1000} src={Talaska.src} alt={'Talaska'}/>
                    <div className={cls.title}>
                        <h4>Талас</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <img className={cls.gridImage} width={1000} height={1000} src={Osh.src} alt={'Osh'}/>
                    <div className={cls.title}>
                        <h4>Ош</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <img className={cls.gridImage} width={1000} height={1000} src={JalalAbad.src} alt={'JalalAbad'}/>
                    <div className={cls.title}>
                        <h4>Жала-бад</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SevenOblastsOfKyrgyzstan;