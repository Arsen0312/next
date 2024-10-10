import cls from "./TourCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import discountIcon from "@/assets/discount.svg"
import location from "@/assets/location.svg"

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
    const {title, rating, image, id, discount, description, price } = props

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
                    <h5>{rating}</h5>
                </div>
                <div className={cls.description}>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={cls.priceWithOrderTour}>
                    <span>от {price} сом</span>
                    <button>
                        Заказать
                    </button>
                </div>
                {
                    typeof discount === "number"
                        ? (<div className={cls.wrapperDiscountIcon}>
                            <div className={cls.wrapperForPositionDiscount}>
                                <Image width={1000} height={1000} src={discountIcon} alt={"скидка"}/>
                                <span>{discount}%</span>
                            </div>
                        </div>)
                        : <></>
                }
            </Link>

        </div>
    );
};

export default TourCard;