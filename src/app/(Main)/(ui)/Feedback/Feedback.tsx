import Image from 'next/image'
import cls from './Feedback.module.scss'

import star from "@/assets/Star 3.svg"
import media from "@/assets/mediaContent.jpeg"

const Feedback = () => {
    return (
        <div className={cls.main}>
            <h2>
                Как получить cashback?
            </h2>
            <h3>
                Напишите отзыв к туру, скинь медиаконтент с тура и получи cashback
            </h3>
            <div className={cls.wrapper}>
                <div className={cls.review}>
                    <div className={cls.mediaContent}>
                        <Image className={cls.mediaImg} src={media} alt='media-content' width={280} height={265}/>
                    </div>
                    <div className={cls.reviewWrapper}>
                        <div className={cls.reviewHeader}>
                            <Image className={cls.image} src={star} alt="Павел Нечаев" width={40} height={40}/>
                            <div className={cls.userInfo}>
                                <div className={cls.name}>Павел Нечаев</div>
                            </div>
                            <div className={cls.rating}>
                                <span>5</span>
                                <Image className={cls.star} src={star} alt="Star" />
                            </div>
                        </div>
                        <div className={cls.reviewBody}>
                            <div className={cls.tourTitle}>Тур-приключение: на внедорожниках к заброшенному городу Эныльчек</div>
                            <p>
                                Мой отдых в горах Кыргызстана превзошел все ожидания. Организаторы учли все мои пожелания, даже самые мелкие детали,
                                что сделало поездку максимально комфортной. Я постоянно был на связи с гидом и мог следить за маршрутом и планом тура через специальный сайт — очень удобно…
                            </p>
                        </div>
                    </div>
                    <div className={cls.reviewDate}>2 августа, 2019</div>
                </div>
                <div className={cls.review}>
                    <div className={cls.mediaContent}>
                        <Image className={cls.mediaImg} src={media} alt='media-content' width={280} height={265}/>
                    </div>
                    <div className={cls.reviewWrapper}>
                        <div className={cls.reviewHeader}>
                            <Image className={cls.image} src={star} alt="Павел Нечаев" width={40} height={40}/>
                            <div className={cls.userInfo}>
                                <div className={cls.name}>Павел Нечаев</div>
                            </div>
                            <div className={cls.rating}>
                                <span>5</span>
                                <Image className={cls.star} src={star} alt="Star" />
                            </div>
                        </div>
                        <div className={cls.reviewBody}>
                            <div className={cls.tourTitle}>Тур-приключение: на внедорожниках к заброшенному городу Эныльчек</div>
                            <p>
                                Мой отдых в горах Кыргызстана превзошел все ожидания. Организаторы учли все мои пожелания, даже самые мелкие детали,
                                что сделало поездку максимально комфортной. Я постоянно был на связи с гидом и мог следить за маршрутом и планом тура через специальный сайт — очень удобно…
                            </p>
                        </div>
                    </div>
                    <div className={cls.reviewDate}>2 августа, 2019</div>
                </div>
                <div className={cls.review}>
                    <div className={cls.mediaContent}>
                        <Image className={cls.mediaImg} src={media} alt='media-content' width={280} height={265}/>
                    </div>
                    <div className={cls.reviewWrapper}>
                        <div className={cls.reviewHeader}>
                            <Image className={cls.image} src={star} alt="Павел Нечаев" width={40} height={40}/>
                            <div className={cls.userInfo}>
                                <div className={cls.name}>Павел Нечаев</div>
                            </div>
                            <div className={cls.rating}>
                                <span>5</span>
                                <Image className={cls.star} src={star} alt="Star" />
                            </div>
                        </div>
                        <div className={cls.reviewBody}>
                            <div className={cls.tourTitle}>Тур-приключение: на внедорожниках к заброшенному городу Эныльчек</div>
                            <p>
                                Мой отдых в горах Кыргызстана превзошел все ожидания. Организаторы учли все мои пожелания, даже самые мелкие детали,
                            </p>
                        </div>
                    </div>
                    <div className={cls.reviewDate}>2 августа, 2019</div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;