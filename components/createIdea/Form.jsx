import React, { useState } from "react";
import styles from "./From.module.scss";
import { IoMdClose } from "react-icons/io";

const Form = () => {
  const [close, setClose] = useState(false);
  const [tags, setTags] = useState([]);

  const [formData, setFormData] = useState({
    overview: "",
    desc: "",
    tags: "",
    progress: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setClose(true);
    alert("successfully Added");
  };
  return (
    <div className={`${styles.modal} ${close ? styles.close : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <div className={styles.heading}>
            <h1>Submit Idea</h1>
            <div
              className={styles.cross}
              onClick={() => {
                setClose(true);
              }}
            >
              <IoMdClose />
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <label className={styles.label}>
              Overview Of The Idea
              <input
                onChange={changeHandler}
                value={formData.overview}
                name="overview"
                type="text"
              ></input>
            </label>

            <label className={styles.label}>
              Description
              <input
                onChange={changeHandler}
                value={formData.desc}
                name="desc"
                type="text"
              ></input>
            </label>

            <label className={styles.label} id={styles.addP}>
              Tags
              <input
                onChange={changeHandler}
                value={formData.tags}
                name="tags"
                type="text"
              ></input>
              <div
                type="text"
                className={styles.add}
                onClick={() => {
                  formData.tags &&
                    (setTags([...tags, formData.tags]),
                    setFormData({ ...formData, tags: "" }));
                }}
              >
                Add
              </div>
            </label>
            {tags && (
              <div className={styles.tagsWrapper}>
                {tags.map((tag) => (
                  <span className={styles.tags}>
                    {tag}
                    <div
                      className={styles.delete}
                      onClick={(e) => {
                        setTags(tags.filter((t) => t !== tag));
                      }}
                    >
                      <IoMdClose />
                    </div>
                  </span>
                ))}
              </div>
            )}

            <label className={styles.label}>
              Progress
              <input
                onChange={changeHandler}
                value={formData.progress}
                name="progress"
                type="text"
              ></input>
            </label>

            <button type="submit">Submit Idea</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
