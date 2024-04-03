import styles from "./IdeaCard.module.scss";
import React from "react";
import { Poppins } from "next/font/google";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.heart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 36 36"
          >
            <path
              fill="#fdcb58"
              d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242"
            />
          </svg>
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>TAGS</span>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.nameBox}>NAME</div>
        <div className={styles.dateBox}>31/10/24</div>
      </div>
      <div className={styles.lower}>
        <div className={styles.lowerTitle}>Title of the Idea</div>
        <div>
          <p className={styles.lowerPara}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            recusandae, numquam facilis, odio aspernatur laborum minima unde
            quis ut officiis.
          </p>
        </div>
      </div>
      <div className={styles.read}>
        <div className={styles.container2}>
          <div className={styles.innerdiv}>
            <div className={styles.text}>Read more Read more</div>
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
