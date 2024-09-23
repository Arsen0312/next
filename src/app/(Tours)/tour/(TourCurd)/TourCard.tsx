"use client"

import { useState, useEffect } from "react";
import cls from "./TourCard.module.scss";
import Image from "next/image";

type TProps = {
    image: string;
    title: string;
    id: string;
    rating: number;
    selected: boolean;
};

const TourCard = (props: TProps) => {
    const { title, image, rating } = props;

    const [starImages, setStarImages] = useState({
        fullStar: "",
        halfStar: "",
        emptyStar: "",
    });

    useEffect(() => {
        // Запрос к API для получения ссылок на изображения звёзд
        fetch("https://traveltok.pythonanywhere.com/tour/api/star-images/")
            .then((response) => response.json())
            .then((data) => {
                setStarImages({
                    fullStar: data.fullStar,  // ссылка на полную звезду
                    halfStar: data.halfStar,  // ссылка на половинную звезду
                    emptyStar: data.emptyStar, // ссылка на пустую звезду
                });
            })
            .catch((error) => console.error("Ошибка загрузки изображений:", error));
    }, []);

    const fullStars = Math.floor(rating); // Полные звезды
    const hasHalfStar = rating - fullStars >= 0.5; // Проверка, есть ли половинная звезда
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Пустые звезды

    return (
        <div className={cls.tourCards}>
            <Image className={cls.cardImage} width={1000} height={1000} src={image} alt={image} />
            <div>
                <h4>{title}</h4>
                <div className={cls.rating}>
                    {/* Рендерим полные звезды */}
                    {Array(fullStars).fill(0).map((_, index) => (
                        <Image
                            key={`full-${index}`}
                            className={cls.fullStar}
                            width={20}
                            height={20}
                            src={starImages.fullStar}
                            alt="Полная звезда"
                        />
                    ))}

                    {/* Рендерим половинную звезду, если нужно */}
                    {hasHalfStar && (
                        <Image
                            className={cls.star}
                            width={20}
                            height={20}
                            src={starImages.halfStar}
                            alt="Половинная звезда"
                        />
                    )}

                    {/* Рендерим пустые звезды */}
                    {Array(emptyStars).fill(0).map((_, index) => (
                        <Image
                            key={`empty-${index}`}
                            className={cls.star}
                            width={20}
                            height={20}
                            src={starImages.emptyStar}
                            alt="Пустая звезда"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourCard;
