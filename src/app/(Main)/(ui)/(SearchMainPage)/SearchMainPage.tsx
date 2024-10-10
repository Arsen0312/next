import cls from "./SearchMainPage.module.scss"
import searchSvgIcon from "./assets/search.svg"

const SearchMainPage = () => {

    return (
        <span className={cls.main}>
            <span className={cls.wrapper}>
                <span>
                    <input type="text" placeholder="Куда отправимся?"/>
                    <input type="date" placeholder="ДД.ММ.ГГГГ"/>
                </span>
            </span>
            <button>
                <img
                    width={20}
                    height={20}
                    src={searchSvgIcon.src} alt={"searchSvgIcon"}/>
                Найти
            </button>
        </span>
    );
};

export default SearchMainPage;