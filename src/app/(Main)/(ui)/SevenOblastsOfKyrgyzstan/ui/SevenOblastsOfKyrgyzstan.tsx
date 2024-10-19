import cls from "./SevenOblastsOfKyrgyzstan.module.scss"
import Image from "next/image";

import IssykKul from "@/assets/issyk-kol.png"
import Bishkek from "@/assets/bishkek.png"
import batken from "@/assets/batken.png"
import Naryn from "@/assets/naryn.png"
import Talaska from "@/assets/talas.png"
import Osh from "@/assets/osh.jpeg"
import JalalAbad from "@/assets/jalal-abad.png"
import Chuy from "@/assets/chuy.png"
import svg1 from "@/assets/Icon.svg"
import svg2 from "@/assets/Icon (1).svg"
import svg3 from "@/assets/Icon (2).svg"


const SevenOblastsOfKyrgyzstan = () => {

    return (
            <section className={cls.main}>
                <h2>
                    Области
                </h2>
                <h3>
                    Все направления в которые можно отправится
                </h3>
                <div className={cls.boxGridImages}>
                    <div className={cls.oblastCard}>
                        <Image className={cls.gridImage} width={295} height={295} src={Bishkek} alt={'chui'}/>
                        <div className={cls.title}>
                            <h4>Бишкек</h4>
                        </div>
                    </div>
                    <div className={cls.oblastCard}>
                        <Image className={cls.gridImage} width={295} height={295} src={Naryn} alt={'chui'}/>
                        <div className={cls.title}>
                            <h4>Нарын</h4>
                        </div>
                    </div>
                    <div className={cls.oblastCard}>
                        <Image className={cls.gridImage} width={295} height={295} src={IssykKul} alt={'chui'}/>
                        <div className={cls.title}>
                            <h4>Ыссык-Куль</h4>
                        </div>
                    </div>
                    <div className={cls.oblastCard}>
                        <Image className={cls.gridImage} width={295} height={295} src={JalalAbad} alt={'batken'}/>
                        <div className={cls.title}>
                            <h4>Жалал-Абад</h4>
                        </div>
                    </div>
                    <div className={cls.oblastCard}>
                        <Image className={cls.gridImage} width={295} height={295} src={Osh} alt={'Naryn'}/>
                        <div className={cls.title}>
                            <h4>Ош</h4>
                        </div>
                    </div>
                    <div className={cls.oblastCard}>
                        <Image className={cls.gridImage} width={295} height={295} src={Chuy} alt={'Talaska'}/>
                        <div className={cls.title}>
                            <h4>Чуй</h4>
                        </div>
                    </div>
                    <div className={cls.oblastCard}>
                        <Image className={cls.gridImage} width={295} height={295} src={Talaska} alt={'Osh'}/>
                        <div className={cls.title}>
                            <h4>Талас</h4>
                        </div>
                    </div>
                    <div className={cls.oblastCard}>
                        <Image className={cls.gridImage} width={295} height={295} src={batken} alt={'JalalAbad'}/>
                        <div className={cls.title}>
                            <h4 className={cls.name}>Баткен</h4>
                        </div>
                    </div>
                </div>

                <div className={cls.mainBottom}>
                    <div className={cls.mainBottomBox}>
                        <Image className={cls.svgImg} width={72} height={72} src={svg1} alt={'svg'}/>
                        <h5>
                            Удобство
                        </h5>
                        <p>
                            Заказ туров через наш сайт экономит время, 
                            позволяя быстро забронировать туры в разные области Кыргызстана
                        </p>
                    </div>
                    <div className={cls.mainBottomBox}>
                        <Image className={cls.svgImg} width={72} height={72} src={svg2} alt={'svg'}/>
                        <h5>
                            Широкий выбор
                        </h5>
                        <p>
                            Большие разнообразные туры от различных мест дает возможность найти досуг 
                            на любой вкус и пропробовать новые виды отдыха
                        </p>
                    </div>
                    <div className={cls.mainBottomBox}>
                        <Image className={cls.svgImg} width={72} height={72} src={svg3} alt={'svg'}/>
                        <h5>
                            Акции  и скидки
                        </h5>
                        <p>
                            Сайты с нашими услугами предлагают выгодные скидки, акции, 
                            бонусы и кэшбеки если будете платить через DemirBank
                        </p>
                    </div>
                </div>
                <h2>
                    Популярные туры
                </h2>
                <h3>
                    Топ часто покупаемых туров в нашем каталоге
                </h3>
            </section>
    );
};

export default SevenOblastsOfKyrgyzstan;