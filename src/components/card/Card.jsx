import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

//image
import rightarrow from "../../assets/icons/rightarrow.svg";

const Card = ({ card }) => {
  return (
    <>
      <div className={styles.Card} key={card.id}>
        <div className={styles.Card__Card__upper}>
          <p>
            <span>
              {card.budget.value}
              {card.budget.currencyCode}
            </span>{" "}
            a cabina
          </p>
          <h2>{card.title}</h2>
        </div>

        <div className={styles.Card__Card__info}>
          <div className={styles.Card__Card__info__left}>
            <span>Partenza da:</span>
            <p className={styles.Card__Card__info__left__port}>
              {card.departure.Port}
            </p>
          </div>
          <div className={styles.Card__Card__info__right}>
            <p>{card.boatType}</p>
            <p>{card.numberOfDays} Giorni</p>
          </div>
        </div>

        <div className={styles.Card__Card__dates}>
          <div className={styles.Card__Card__dates__left}>
            <p>{card.departureDate.slice(0, 10)}</p>
            <p>{card.departureDate.slice(10, 16)}</p>
          </div>
          <Image
            src={rightarrow}
            width={30}
            height={30}
            alt="Right arrow"
          ></Image>
          <div className={styles.Card__Card__dates__right}>
            <p>{card.arrivalDate.slice(0, 10)}</p>
            <p>{card.arrivalDate.slice(10, 16)}</p>
          </div>
        </div>

        <div className={styles.Card__Card__reservations}>
          <div className={styles.Card__Card__reservations__wrapper}>
            <p>{card.reservations} Cabine</p>
            <div>
              <span>Disponibilità</span>{" "}
              <span>{card.reservationsAvailable}</span>
            </div>
          </div>
        </div>
        <button className={styles.Card__Card__button}>Prenota</button>
      </div>
    </>
  );
};

export default Card;
