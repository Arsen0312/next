import cls from "./PourPayment.module.scss";

type TProps = {
    price: number;
    duration: number;
}

const PourPayment = (props: TProps) => {
    const { price, duration } = props

    return (

        <div className={cls.main}>
            <div className={cls.prices}>
                <h2>{price} сом</h2>
                <h3>{Number(price) / duration} сом<span>| В день * {duration} день</span></h3>
            </div>
            <div className={cls.selectionDataAndParticipants}>
                <div className={cls.data}>
                    <h6>Выберите дату</h6>
                    <h3>21 июня-28 июня</h3>
                </div>
                <div className={cls.participants}>
                    <h3>
                        Участников
                    </h3>
                    <div className={cls.meterChange}>
                        <button className={cls.buttonMinus}><hr/></button>
                        <div>0</div>
                        <button className={cls.buttonPlus}><hr className={cls.hr1}/><hr className={cls.hr2}/></button>
                    </div>
                </div>
                <div className={cls.orderPlacement}>
                    <button>
                        Оформить
                    </button>
                    <div className={cls.bookingCondition}>
                        Предоплата-13500cом <br/>
                        Полная отмена в течение 24 часов
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PourPayment;