import {Metadata} from 'next';
import cls from "./tour.module.scss";
import {Tour} from "@/app/api/tours/type";

import location from "@/assets/location.svg"
import heartIcon from "@/assets/heart.svg"
import searchIcon from "@/assets/search.svg"
import startIcon from "@/assets/star.svg"
import Details from "@/app/(Tours)/tour/[id]/(ui)/(Details)/Details";
import PourPayment from './(PourPayment)/PourPayment';

export async function generateMetadata({params}: { params: { id: string } }): Promise<Metadata> {
    const {id} = params;

    const res = await fetch(`http://localhost:3000/api/tour/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        console.log(res)
        throw new Error("Ошибка при получении данных");
    }

    const data: Tour = await res.json();

    return {
        title: `${data.title}`,
        description: `${data.description}`,
    };
}

const TourPage = async ({params}: { params: { id: string } }) => {
    const {id} = params;

    const res = await fetch(`http://localhost:3000/api/tour/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return (
            <div className={cls.error}>
                <h1>Ошибка при получении данных</h1>
            </div>
        );
    }

    const data: Tour = await res.json();

    return (
        <div className={cls.main}>
            <div className={cls.content}>
                <div className={cls.headContent}>
                    <h2>
                        <img width={24} height={24} src={location.src} alt={"location icon"}/>
                        {data.title}
                    </h2>
                    <div className={cls.rating}>
                        <img width={34} height={34} src={startIcon.src} alt=""/>
                        <h3>{data.average_rating}</h3>
                    </div>
                </div>
                <div className={cls.mainContent}>
                    <div className={cls.descriptionContent}>
                        <div className={cls.wrapperBanner}>
                            <img
                                width={1000} height={1000}
                                src={data.banner} alt={"banner"}/>
                            <button className={cls.buttonSave}>
                                Сохранить
                                <img
                                    width={24} height={24}
                                    src={heartIcon.src} alt={"heartIcon"}/>
                            </button>
                            <button className={cls.btnGallery}>
                                Галерея
                                <img width={24} height={24}
                                       src={searchIcon.src} alt={"searchIcon"}/>
                            </button>
                        </div>
                        <div className={cls.description}>
                            <h4>{data.title}</h4>
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <div className={cls.rightContent}>
                        <div className={cls.wrapperRightContent}>
                            <Details
                                language={data.language}
                                members={data.members}
                            />
                            <PourPayment
                                duration={data.duration}
                                price={data.price} />
                        </div>
                    </div>
                </div>
            </div>
            <pre>
                {JSON.stringify(data, null, 4)}
            </pre>

        </div>
    );
};

export default TourPage;