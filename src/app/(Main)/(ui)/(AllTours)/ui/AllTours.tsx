import cls from "./AllTours.module.scss"
import TourCard from "@/app/(Tours)/tour/(TourCurd)/TourCard";
import {Tour} from "@/app/api/tours/type";

const AllTours = async () => {

    try {
        const allTours = await fetch("http://localhost:3000/api/tours")

        if (!allTours.ok) {
            return (
                <section className={cls.errors}>
                    <h1>Данные пришли но с ними что то не так</h1>
                    <pre>
                         {JSON.stringify(allTours, null, 4)}
                    </pre>
                </section>
            );
        }

        const allToursData: Tour[] = await allTours.json();

        return (
            <section className={cls.main}>
                <h1>Все туры</h1>
                <div className={cls.wrapTourCard}>
                    {allToursData.map((tour: Tour) => (
                        <div className={cls.tourCard}>
                            <TourCard
                                id={tour.id} title={tour.title}
                                description={tour.description} image={tour.banner} rating={1}
                                discount={10} price={tour.price}/>
                        </div>
                    ))}
                </div>
            </section>
        );

    } catch (e) {

        return (
            <section className={cls.errors}>
                <h1>Ошибка с получением данных о туре</h1>
                <pre>
                    {JSON.stringify(e, null, 4)}
                </pre>
            </section>
        );
    }
};

export default AllTours;