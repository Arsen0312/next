'use client';
import React, { useState } from 'react';
import cls from './Search.module.scss';
import Image from 'next/image';

import list from "@/assets/list.svg";
import vector from "@/assets/Vector 6902.svg";
import ellipse from "@/assets/ellipse.svg";
import calendar from "@/assets/calendar-02.svg";
import oblast from "@/assets/oblast.svg";
import cost from "@/assets/cost.svg";
import vector2 from "@/assets/Vector.svg";

const Search: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={cls.main}>
      <div className={cls.searchContainer}>
        <div className={cls.categoryDropdown}>
          <button className={cls.dropdownButton} onClick={toggleDropdown}>
            <div>
              <Image className={cls.listSvg} src={list} alt="list" />
              Все категории
            </div>
            <Image className={cls.vectorSvg} src={vector} alt="vector" />
          </button>
          {isDropdownOpen && (
            <div className={cls.dropdownContent}>
              <button className={cls.dropdownItem}>
                <Image src={calendar} alt='calendar' width={16} height={16}/>
                Дата начала
                <Image src={vector2} alt='calendar' width={16} height={16}/>
              </button>
              <button className={cls.dropdownItem}>
                <Image src={calendar} alt='calendar' width={16} height={16}/>
                Дата конца
                <Image src={vector2} alt='calendar' width={16} height={16}/>  
              </button>
              <button className={cls.dropdownItem}>
                <Image src={oblast} alt='oblast' width={16} height={16}/>
                Область
                <Image src={vector2} alt='calendar' width={16} height={16}/>
              </button>
              <button className={cls.dropdownItem}>
                <Image src={cost} alt='cost' width={16} height={16}/>
                Цена
                <Image src={vector2} alt='calendar' width={16} height={16}/>
              </button>
            </div>
          )}
        </div>
        <div className={cls.searchInputWrapper}>
          <Image className={cls.ellipseSvg} src={ellipse} alt="ellipse" />
          <input
            type="text"
            placeholder="Я ищу"
            className={cls.searchInput}
          />
          <button className={cls.searchButton}>
            Поиск
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
