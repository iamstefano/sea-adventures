import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Card from "../card";

const RandomList = () => {
  const [dataCard, setDataCard] = useState([]);

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const r = array[i];
      array[i] = array[j];
      array[j] = r;
    }
    return array;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/87533bc829c8f6f6e760"
        );
        if (!response.ok) {
          throw new Error("no response sorry!");
        }
        const data = await response.json();
        const shuffledData = shuffleCards(data);
        setDataCard(shuffledData);
      } catch (error) {
        console.error("Error fetching the random data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.RandomList}>
      <h1>Avventure da Scoprire</h1>
      <div className={styles.__list}>
        {dataCard.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default RandomList;
