import cls from "./Details.module.scss";
import { getNormalData } from "@/app/(Tours)/tour/[id]/helper/getNormalMoth";
import { getFullLang } from "@/app/(Tours)/tour/[id]/helper/getFullLang";
import userDefaultAvatar from "@/assets/user.jpg";
import carIcon from "@/assets/car.svg";
import { TourMember } from "@/app/api/tours/type";

interface DetailsProps {
    language: "ru" | "en" | "kg";
    members: TourMember[];
}

const Details = ({ language, members }: DetailsProps) => {
    return (
        <div className={cls.tourDetails}>
            <div className={cls.leftDetails}>
                <div className={cls.wrapperData}>
                    <div className={cls.startTour}>
                        <span>Старт</span>
                        <div>
                            none
                        </div>
                    </div>
                    <div className={cls.endTour}>
                        <span>Конец</span>
                        <div>
                            none
                        </div>
                    </div>
                </div>
                <div className={cls.lang}>
                    <h4>Язык</h4>
                    <div>{getFullLang[language]}</div>
                </div>
                <div className={cls.comfort}>
                    <h4>Комфорт</h4>
                    <div>Уникальное жилье</div>
                    <h5>Где будем жить?</h5>
                </div>
            </div>
            <div className={cls.rightDetails}>
                <div className={cls.participantsTour}>
                    <h4>Кто уже едет</h4>
                    <div className={cls.containerPhotoParticipants}>
                        {members.length > 4 ? (
                            <>
                                {members.slice(0, 3).map((member) => (
                                    <img
                                        width={42}
                                        height={42}
                                        src={`${member.avatar ? member.avatar : userDefaultAvatar.src}`}
                                        alt="avatar"
                                    />
                                ))}
                                <div className={cls.otherMembers}>+ {members.length - 3}</div>
                            </>
                        ) : (
                            members.map((member) => (
                                <img
                                    width={42}
                                    height={42}
                                    src={`${member.avatar ? member.avatar : userDefaultAvatar.src}`}
                                    alt="avatar"
                                />
                            ))
                        )}
                    </div>
                    <h5>Смотреть участников</h5>
                </div>
                <div className={cls.routeTour}>
                    <h4>Маршрут</h4>
                    <div className={cls.logoRoute}>
                        <div>A</div>
                        <div className={cls.line}>
                            <img width={22} height={14} src={carIcon.src} alt=""/>
                        </div>
                        <div>B</div>
                    </div>
                    <h5>смотреть</h5>
                </div>
            </div>
        </div>
    );
};

export default Details;