import cls from "./Tours.module.scss"
import Image from "next/image"

import image from '@/assets/cards.png'
import svg from "@/assets/Star 3.svg"
import heart from "@/assets/favorite.svg"

const Tours = () => {
    return (
        <div className={cls.container}>
    <div className={cls.main}>
        <div className={cls.cards}>
            <div className={cls.cardItem}>
                <Image className={cls.image} width={400} height={227} src={image} alt={'picture'}/>
                <Image className={cls.heart} width={19} height={18} src={heart} alt={'heart'}/>
                <div className={cls.description}>
                    <div className={cls.tour}>
                        Тур-приключение: на внедорожниках к заброшенному городу Энылчек
                    </div>
                    <div className={cls.type}>
                        тип: групповой
                    </div>
                    <Image className={cls.svg} width={20} height={20} src={svg} alt={'svg'}/>
                    <div className={cls.numbers}>
                        <div className={cls.sum}>
                        $230
                        </div>
                        <div className={cls.rating}>
                            <Image src={svg} alt="svg" width={20} height={20}/>
                            <span>4.3</span>
                        </div>
                    </div>
                    <button>
                        Подробнее
                    </button>
                </div>
            </div>
            <div className={cls.cardItem}>
                <Image className={cls.image} width={400} height={227} src={image} alt={'picture'}/>
                <Image className={cls.heart} width={19} height={18} src={heart} alt={'heart'}/>
                <div className={cls.description}>
                    <div className={cls.tour}>
                        Тур-приключение: на внедорожниках к заброшенному городу Энылчек
                    </div>
                    <div className={cls.type}>
                        тип: групповой
                    </div>
                    <Image className={cls.svg} width={20} height={20} src={svg} alt={'svg'}/>
                    <div className={cls.numbers}>
                        <div className={cls.sum}>
                        $230
                        </div>
                        <div className={cls.rating}>
                            <Image src={svg} alt="svg" width={20} height={20}/>
                            <span>4.3</span>
                        </div>
                    </div>
                    <button>
                        Подробнее
                    </button>
                </div>
            </div>
            <div className={cls.cardItem}>
                <Image className={cls.image} width={400} height={227} src={image} alt={'picture'}/>
                <Image className={cls.heart} width={19} height={18} src={heart} alt={'heart'}/>
                <div className={cls.description}>
                    <div className={cls.tour}>
                        Тур-приключение: на внедорожниках к заброшенному городу Энылчек
                    </div>
                    <div className={cls.type}>
                        тип: групповой
                    </div>
                    <Image className={cls.svg} width={20} height={20} src={svg} alt={'svg'}/>
                    <div className={cls.numbers}>
                        <div className={cls.sum}>
                        $230
                        </div>
                        <div className={cls.rating}>
                            <Image src={svg} alt="svg" width={20} height={20}/>
                            <span>4.3</span>
                        </div>
                    </div>
                    <button>
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className={cls.more}>
                Развернуть
    </div>
    </div>
    )
}

export default Tours;