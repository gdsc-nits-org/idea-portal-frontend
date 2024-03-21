import styles from "./IdeaCard.module.scss";
import React from "react";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.heart}>💛</div>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
            laboriosam nihil quos sit magni ab?
          </p>
        </div>
        <div className={styles.read}>
          {" "}
          <div className={styles.container2}>
            <div className={styles.innerdiv}>
              <div className={styles.text}>Read more Read more</div>
            </div>
          </div>
          <div className={styles.arrow}>→</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
