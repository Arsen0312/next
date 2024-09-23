import cls from "./SevenOblastsOfKyrgyzstan.module.scss"
import Image from "next/image";

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
            <Image
                width={1000} height={1000}
                src={IssykKul} alt={"IssykKul"}/>
            <div className={cls.boxGridImages}>
                <div className={cls.oblastCard}>
                    <Image className={cls.gridImage} width={1000} height={1000} src={chui} alt={'chui'}/>
                    <div className={cls.title}>
                        <h4>Чуйская</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <Image className={cls.gridImage} width={1000} height={1000} src={batken} alt={'batken'}/>
                    <div className={cls.title}>
                        <h4>Баткенская</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <Image className={cls.gridImage} width={1000} height={1000} src={Naryn} alt={'Naryn'}/>
                    <div className={cls.title}>
                        <h4>Нарын</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <Image className={cls.gridImage} width={1000} height={1000} src={Talaska} alt={'Talaska'}/>
                    <div className={cls.title}>
                        <h4>Талас</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <Image className={cls.gridImage} width={1000} height={1000} src={Osh} alt={'Osh'}/>
                    <div className={cls.title}>
                        <h4>Ош</h4>
                        <span>
                            экскурсий
                        </span>
                    </div>
                </div>
                <div className={cls.oblastCard}>
                    <Image className={cls.gridImage} width={1000} height={1000} src={JalalAbad} alt={'JalalAbad'}/>
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