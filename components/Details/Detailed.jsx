import React from "react";
import styles from "./Detailed.module.scss";
import Image from "next/image";
import user from "./user.png";
import { useState } from "react";

import { Poppins } from "next/font/google";

const paragraphStyle = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-Webkit-box",
};

const Detailed = () => {
  const [isopen1, setisopen1] = useState(false);
  const [isopen2, setisopen2] = useState(false);

  return (
    <div className={styles.biggest}>
      <div className={styles.containerNew}>
        <div className={styles.start}>
          <div className={styles.left}>
            <div className={styles.name}>NAME</div>
            <div className={styles.date}>12/02/2024</div>
          </div>

          <div className={styles.right}>
            <div className={styles.heartIcon}>
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

            <div className={styles.totalcontent}>
              <input id={"ch"} type={"checkbox"} className={styles.nw} />
              <p
                className={styles.content}
                style={isopen1 ? null : paragraphStyle}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                nihil laborum? Explicabo voluptate dicta corporis eaque aliquid
                est ipsum laborum rem iure a expedita accusantium quis cumque,
                quia facilis omnis obcaecati sed sapiente nihil earum vitae id
                unde impedit deserunt. Aliquam fugiat autem praesentium
                repudiandae perspiciatis distinctio magni dolor modi?Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi optio, quasi
                eveniet doloremque eius impedit illum alias ab officiis nobis?
              </p>

              <span
                className={styles.read}
                onClick={() => setisopen1(!isopen1)}
                style={{ color: "orange" }}
              >
                {isopen1 ? "Read less..." : "Read more..."}
              </span>
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

            <div className={styles.totalcontent}>
              <p
                className={styles.content}
                style={isopen2 ? null : paragraphStyle}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                nihil laborum? Explicabo voluptate dicta corporis eaque aliquid
                est ipsum laborum rem iure a expedita accusantium quis cumque,
                quia facilis omnis obcaecati sed sapiente nihil earum vitae id
                unde impedit deserunt. Aliquam fugiat autem praesentium
                repudiandae perspiciatis distinctio magni dolor modi?Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi optio, quasi
                eveniet doloremque eius impedit illum alias ab officiis nobis?
              </p>

              <span
                className={styles.read}
                onClick={() => setisopen2(!isopen2)}
                style={{ color: "orange" }}
              >
                {" "}
                {isopen2 ? "Read less..." : "Read more..."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
