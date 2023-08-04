/* import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Card from "../card/Card";

const CardList = () => {
  const nCards = 8;
  const [dataCard, setDataCard] = useState([]);
  const [showCard, setShowCard] = useState(nCards);
  const [group, setGroup] = useState("all");

  useEffect(() => {
    fetch("https://api.npoint.io/61b9194876105bf370d1")
      .then((res) => res.json())
      .then((data) => setDataCard(data));
  }, []);

  const handleShowMore = () => {
    setShowCard((prevshowCard) => prevshowCard + nCards);
  };

  const handleGroupFilter = (e) => {
    setGroup(e.target.value);
    setShowCard(nCards);
  };

  const getPorts = () => {
    return dataCard.reduce((singlePort, card) => {
      if (!singlePort.includes(card.departure.Port)) {
        singlePort.push(card.departure.Port);
      }
      return singlePort;
    }, []);
  };

  const filteredData =
    group === "all"
      ? dataCard
      : dataCard.filter((card) => card.departure.Port === group);

  const renderCards = () => {
    return filteredData
      .slice(0, showCard)
      .map((card) => <Card key={card.id} card={card} />);
  };

  return (
    <div className={styles.CardList}>
      <div className={styles.__filter}>
        <select
          className={styles.__portFilter}
          onChange={handleGroupFilter}
          value={group}
        >
          <option value="all">Mostra per porto di partenza</option>
          {getPorts().map((port) => (
            <option key={port} value={port}>
              {port}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.__list}>{renderCards()}</div>
      {showCard < filteredData.length && (
        <button className={styles.__showMore} onClick={handleShowMore}>
          Mostra altro
        </button>
      )}
    </div>
  );
};

export default CardList; */

/* import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Card from "../card/Card";

const CardList = () => {
  const nCards = 8;
  const [dataCard, setDataCard] = useState([]);
  const [showCard, setShowCard] = useState(nCards);
  const [group, setGroup] = useState("all");

  useEffect(() => {
    fetch("https://api.npoint.io/61b9194876105bf370d1")
      .then((res) => res.json())
      .then((data) => setDataCard(data));
  }, []);

  const handleShowMore = () => {
    setShowCard((prevshowCard) => prevshowCard + nCards);
  };

  const handleGroupFilter = (e) => {
    setGroup(e.target.value);
    setShowCard(nCards);
  };

  const handleResetFilter = () => {
    setGroup("all");
    setShowCard(nCards);
  };

  const getPorts = () => {
    return dataCard.reduce((singlePort, card) => {
      if (!singlePort.includes(card.departure.Port)) {
        singlePort.push(card.departure.Port);
      }
      return singlePort;
    }, []);
  };

  const filteredData =
    group === "all"
      ? dataCard
      : dataCard.filter((card) => card.departure.Port === group);

  const renderCards = () => {
    return filteredData
      .slice(0, showCard)
      .map((card) => <Card key={card.id} card={card} />);
  };

  return (
    <div className={styles.CardList}>
      <div className={styles.__filter}>
        <select
          className={styles.__portFilter}
          onChange={handleGroupFilter}
          value={group}
        >
          <option value="all">Tutti</option>
          {getPorts().map((port) => (
            <option key={port} value={port}>
              {port}
            </option>
          ))}
        </select>
        <button className={styles.__resetFilter} onClick={handleResetFilter}>
          Reset
        </button>
      </div>

      <div className={styles.__list}>{renderCards()}</div>
      {showCard < filteredData.length && (
        <button className={styles.__showMore} onClick={handleShowMore}>
          Mostra altro
        </button>
      )}
    </div>
  );
};

export default CardList; 

/* import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Card from "../card/Card";

const CardList = () => {
  const nCards = 8;
  const [dataCard, setDataCard] = useState([]);
  const [showCard, setShowCard] = useState(nCards);
  const [selectedPort, setSelectedPort] = useState("Tutti");
  const [portsList, setPortsList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/61b9194876105bf370d1")
      .then((res) => res.json())
      .then((data) => {
        setDataCard(data);
        const ports = getPorts(data);
        setPortsList(ports);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    if (selectedPort === "Tutti") {
      setFilteredData(dataCard);
    } else {
      const filtered = dataCard.filter(
        (card) => card.departure.Port === selectedPort
      );
      setFilteredData(filtered);
    }
    setShowCard(nCards);
  }, [selectedPort, dataCard]);

  const handleShowMore = () => {
    setShowCard((prevshowCard) => prevshowCard + nCards);
  };

  const handlePortChange = (e) => {
    setSelectedPort(e.target.value);
  };

  const getPorts = (data) => {
    return data.reduce((singlePort, card) => {
      if (!singlePort.includes(card.departure.Port)) {
        singlePort.push(card.departure.Port);
      }
      return singlePort;
    }, []);
  };

  const renderCards = () => {
    return filteredData
      .slice(0, showCard)
      .map((card) => <Card key={card.id} card={card} />);
  };

  return (
    <div className={styles.CardList}>
      <div className={styles.__filter}>
        <select
          className={styles.__portFilter}
          value={selectedPort}
          onChange={handlePortChange}
        >
          <option value="Tutti">Tutti</option>
          <option value="Mostra per porto di partenza">
            Mostra per porto di partenza
          </option>
          {portsList.map((port) => (
            <option key={port} value={port}>
              {port}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.__list}>{renderCards()}</div>
      {showCard < filteredData.length && (
        <button className={styles.__showMore} onClick={handleShowMore}>
          Mostra altro
        </button>
      )}
    </div>
  );
};

export default CardList; */

import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Card from "../card/Card";

const CardList = () => {
  const nCards = 8;
  const [dataCard, setDataCard] = useState([]);
  const [showCard, setShowCard] = useState(nCards);
  const [group, setGroup] = useState("all");
  const [portsList, setPortsList] = useState([]);
  const [selectedPort, setSelectedPort] = useState("");

  useEffect(() => {
    fetch("https://api.npoint.io/61b9194876105bf370d1")
      .then((res) => res.json())
      .then((data) => {
        setDataCard(data);
        const ports = getPorts(data);
        setPortsList(ports);
      });
  }, []);

  useEffect(() => {
    setShowCard(nCards);
  }, [group]);

  const handleShowMore = () => {
    setShowCard((prevshowCard) => prevshowCard + nCards);
  };

  const handleGroupFilter = (e) => {
    const selectedPort = e.target.value;
    setSelectedPort(selectedPort);
    if (selectedPort === "all") {
      setGroup("all");
    } else {
      setGroup(selectedPort);
    }
  };

  const getPorts = (data) => {
    return data.reduce((singlePort, card) => {
      if (!singlePort.includes(card.departure.Port)) {
        singlePort.push(card.departure.Port);
      }
      return singlePort;
    }, []);
  };

  const filteredData =
    group === "all"
      ? dataCard
      : dataCard.filter((card) => card.departure.Port === group);

  const renderCards = () => {
    return filteredData
      .slice(0, showCard)
      .map((card) => <Card key={card.id} card={card} />);
  };

  return (
    <div className={styles.CardList}>
      <div className={styles.__filter}>
        <select
          className={styles.__portFilter}
          onChange={handleGroupFilter}
          value={selectedPort || "all"}
        >
          <option value="all">Tutti</option>
          <option value="Mostra per porto di partenza">
            Mostra per porto di partenza
          </option>
          {portsList.map((port) => (
            <option key={port} value={port}>
              {port}
            </option>
          ))}
        </select>
        {selectedPort === "Mostra per porto di partenza" && (
          <select
            className={styles.__portFilter}
            onChange={handleGroupFilter}
            value={group}
          >
            <option value="all">Tutti</option>
            {portsList.map((port) => (
              <option key={port} value={port}>
                {port}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className={styles.__list}>{renderCards()}</div>
      {showCard < filteredData.length && (
        <button className={styles.__showMore} onClick={handleShowMore}>
          Mostra altro
        </button>
      )}
    </div>
  );
};

export default CardList;
