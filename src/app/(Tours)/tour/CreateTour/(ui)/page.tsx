import cls from "./CreateTour.module.scss"

const Page = () => {

    return (
        <div className={cls.main}>
            <h1>
                Создание тура
            </h1>
            <input type="text" placeholder="Название"/>
            <textarea placeholder="Описание"/>
            <select name="" id="">
                <option value="Категория">Категория</option>
                <option value="Приключенческий">Приключенческий</option>
                <option value="Экскурсионный">Экскурсионный</option>
                <option value="Культурный">Культурный</option>
                <option value="Пляжный отдых">Пляжный отдых</option>
                <option value="Оздоровительный">Оздоровительный</option>
            </select>
            <select name="" id="">
                <option value="Регион">Регион</option>
                <option value="Чуйская область">Чуйская область</option>
                <option value="Иссик-Кульская область">Иссик-Кульская область</option>
                <option value="Нарынская область">Нарынская область</option>
                <option value="Таллаская область">Таллаская область</option>
                <option value="Джалал-Абадская область">Джалал-Абадская область</option>
                <option value="Ошская область">Ошская область</option>
                <option value="Баткенская область">Баткенская область</option>
            </select>
            <select name="" id="">
                <option value="Язык тура">Язык тура</option>
                <option value="Русский">Русский</option>
                <option value="Киргизкий">Киргизкий</option>
                <option value="Англиский">Англиский</option>
            </select>
            <input type="number" placeholder="Длительность тура"/>
            <input type="number" placeholder="Стоимость"/>
            <input type="number" placeholder="Макс количество участников"/>
            <textarea placeholder="Условия бронирование"/>

        </div>
    );
};

export default Page;