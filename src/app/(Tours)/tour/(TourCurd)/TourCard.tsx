import cls from "./TourCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import location from "@/assets/location.svg"
import star from "@/assets/star.svg"

type TTourCard = {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    discount: number | null;
    price: number;

}

const TourCard = (props: TTourCard) => {
    const {title, rating, image, id, description, price } = props

    return (
        <div className={cls.main}>
            <Link href={`/tour/${id}`} passHref={true}>

                <div className={cls.wrapperImage}>
                    <Image
                        width={1000} height={1000}
                        src={image} alt={"картинка"}/>
                </div>
                <div className={cls.title}>
                    <h4>
                        <Image
                            width={16} height={16}
                            src={location} alt={"location"}/>
                        {title}
                    </h4>
                    <h4>
                        <Image width={24} height={24} src={star} alt={"star"}/>
                        {rating}
                    </h4>
                </div>
                <div className={cls.description}>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={cls.priceWithOrderTour}>
                    <span>{price}сом за одного</span>
                </div>
            </Link>

        </div>
    );
};

export default TourCard;