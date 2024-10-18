import styles from "./IdeaCard.module.scss";
import { useState } from "react";

const Card = (props) => {
  const [read, setRead] = useState(false);
  const handleReadMore = () => {
    setRead(!read);
  };
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.tags}>
          {props.tags.map((item, id) => (
            <span className={styles.tag} key={id}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.lowerTitle}>{props.overview}</div>
        <div>
          <p className={styles.lowerPara}>
            {props.description.slice(0, 30)}
            {props.description.length >= 30 && <span>...</span>}
          </p>
        </div>
      </div>
      <div className={styles.read}>
        <div className={styles.container2}>
          <div className={styles.innerdiv}>
            <div className={styles.text} onClick={handleReadMore}>
              Read more Read more
            </div>
          </div>
          <div
            className={styles.readMore}
            style={{
              zIndex: `${read ? 2 : -1}`,
              opacity: `${read ? 1 : 0}`,
              transition: "ease 500ms",
            }}
          >
            <div>
              <button
                onClick={() => setRead(false)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
            <h1 className={styles.readHead}>{props.overview}</h1>
            <p className={styles.readDesc}>{props.description}</p>
            <h3 className={styles.progress}>{props.progress}</h3>
          </div>
        </div>
        <div className={styles.arrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12 19l7-7l-7-7m7 7H5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
