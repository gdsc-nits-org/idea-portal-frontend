import React from "react";
import styles from "./detailed.module.scss";
import Image from "next/image";
import user from "./user.png";

const Detailed = () => {
  return (
    <div className={styles.biggest}>
      <div className={styles.containerNew}>
        <div className={styles.start}>
          <div className={styles.left}>
            <div className={styles.name}>NAME</div>
            <div className={styles.date}>12/02/2024</div>
          </div>

          <div className={styles.right}>
            <div className={styles.heartIcon}>💛</div>
            <span className={styles.tag1}>TAGS</span>
          </div>
        </div>

        <div className={styles.titleSection}>
          <div className={styles.title}>Title of the idea</div>
          <div className={styles.contentIdea}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sit,
            vero a est voluptate nihil eveniet consequuntur dolorem maxime
            corrupti quibusdam repellendus provident beatae voluptatibus,
            deserunt porro sint? Dignissimos incidunt possimus sapiente sequi
            vero inventore quasi eveniet obcaecati laborum distinctio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
        </div>

        <div className={styles.writecomment}>
          <div className={styles.texts}>
            <input
              type="text"
              className={styles.inputs}
              placeholder={"Write Your Thoughts"}
            />
          </div>

          <div className={styles.buttons}>
            <button className={styles.add}>ADD COMMENT</button>
          </div>
        </div>

        <div className={styles.commentbox}>
          <div className={styles.corner}>2 Comments</div>

          <div className={styles.comments}>
            <div className={styles.side}>
              <div className={styles.icon}>
                <Image
                  alt="logo"
                  src={user}
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>

              <div className={styles.info}>
                <div className={styles.name1}>Name</div>
                <div className={styles.date1}>12/02/2024</div>
              </div>
            </div>

            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nostrum, dolor quas quod aspernatur aliquam totam tenetur
              doloremque officia blanditiis obcaecati eos temporibus sint
              eligendi, voluptatem maxime culpa!
            </div>
          </div>

          <div className={styles.comments}>
            <div className={styles.side}>
              <div className={styles.icon}>
                <Image
                  alt="logo"
                  src={user}
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>

              <div className={styles.info}>
                <div className={styles.name1}>Name</div>
                <div className={styles.date1}>12/02/2024</div>
              </div>
            </div>

            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nostrum, dolor quas quod aspernatur aliquam totam tenetur
              doloremque officia blanditiis obcaecati eos temporibus sint
              eligendi, voluptatem maxime culpa!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
