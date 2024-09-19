import cls from "./Nav.module.scss"
import Link from "next/link";
import Image from "next/image";
import searchSvgIcon from "@/assets/search.svg"

const Nav = () => {

    return (
        <nav className={cls.Nav}>
            <Link href="/">
                <h2>
                    TravelTok
                </h2>
            </Link>
            <div className={cls.centerContentHeaderNav}>
                <div>
                    <input id="inputForSearchHeader" placeholder="Поиск" type="text"/>
                    <label htmlFor="inputForSearchHeader">
                        <Image
                            width={20}
                            height={20}
                            src={searchSvgIcon} alt={"searchSvgIcon"}/>
                    </label>
                </div>
                <span>Бронь</span>
                <span>Помощь</span>
                <span>Топы</span>
                <select name="Категории" id="">
                    <option value="">Категории</option>
                    <option value="">Для детей</option>
                    <option value="">На неделю</option>
                </select>
            </div>
            <Link className={cls.profile} href="#">
                Профиль
            </Link>
        </nav>
    );
};

export default Nav;