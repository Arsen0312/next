import React from 'react';

import cls from "./SearchMainPage.module.scss"
import Image from "next/image";
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
                <Image
                    width={20}
                    height={20}
                    src={searchSvgIcon} alt={"searchSvgIcon"}/>
                Найти
            </button>
        </span>
    );
};

export default SearchMainPage;