"use client";
import cls from "./FAQ.module.scss";
import Accordion from "./Accordion/Accordion"

const FAQ = () => {
  return (
    <div className={cls.main}>
      <div className={cls.a}>
        <a href="#">
          <p>
            Главная/<span className={cls.sspan}>Q&A</span>
          </p>
        </a>
      </div>
      <h1>Q&A</h1>
      <Accordion />
      </div>
  );
};

export default FAQ;
