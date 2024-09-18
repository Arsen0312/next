import { Metadata } from 'next';
import cls from "./tour.module.scss";

type TData = {
    count: number;
    next: null | string;
    previous: null | string;
    results: Array<{
        id: number;
        headline_img: string;
        title: string;
        description: string;
        participants_price: string;
        price: string;
        discount_price: string | null;
        author: {
            id: number;
            username: string;
            avatar: string;
        };
        rating_user: boolean;
        middle_star: number;
        date_tour: Array<{
            id: number;
            start_date: string;
            end_date: string;
        }>;
    }>;
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = params;

    const res = await fetch(`http://localhost:3000/api/tour/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error("Ошибка при получении данных");
    }

    const data: TData = await res.json();

    return {
        title: `${data.results[0].title}`,
        description: `${data.results[0].description}`,
    };
}

const TourPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

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

    const data: TData = await res.json();

    return (
        <div className={cls.main}>
            <div className={cls.allContent}>
                <div className={cls.boxImg} style={{ backgroundImage: `url(${data.results[0].headline_img})` }}>
                    <div className={cls.titleDate}>
                        <h1 className={cls.title}>{data.results[0].title}</h1>
                    </div>
                </div>
                <div className={cls.description}>
                    <p>{data.results[0].description}</p>
                </div>
            </div>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
};

export default TourPage;