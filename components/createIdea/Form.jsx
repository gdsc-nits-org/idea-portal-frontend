"use client";

import React, { useState } from "react";
import styles from "./From.module.scss";
import { IoMdClose } from "react-icons/io";
import { Toaster, toast } from "sonner";
import axios from "axios";

const Form = () => {
  const [close, setClose] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagField, setTagField] = useState("");
  const [errorFields, setErrorFields] = useState({});
  const [user, setUser] = useState("barnilsarma@gmail.com");
  const [overview, setOverview] = useState("");
  const [desc, setDesc] = useState("");
  const [progress, setProgress] = useState("");
  const addTags = (e) => {
    e.preventDefault();
    var temp = [];
    temp = tags;
    temp.push(tagField);
    setTags(temp);
    setTagField("");
  };
  const changeHandler = (e) => {
    setTagField(e.target.value);
  };

  //form validation check
  //validate function check if there exist empty field then update the errorField as true
  const validate = (value) => {
    const errors = {};
    if (!value.overview) {
      errors.overview = true;
    } else {
      errors.overview = false;
    }
    if (!value.desc) {
      errors.desc = true;
    } else {
      errors.desc = false;
    }
    if (tags.length === 0) {
      errors.tags = true;
    } else {
      errors.tags = false;
    }
    if (!value.progress) {
      errors.progress = true;
    } else {
      errors.progress = false;
    }

    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const createIdea = async () => {
      console.log(process.env.NEXT_PUBLIC_API_URL);
      const health = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
      );
      console.log(health);
      // const act=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/idea/add`,{
      //   user:user,overview:overview,desc:desc,tags:tags,progress:progress
      // });
      const act = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/idea/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          overview,
          desc,
          tags,
          progress,
        }),
      });
      console.log(act);
      return act;
    };

    console.log("start");
    createIdea();
    console.log("ed");
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
          <form>
            <label className={styles.label}>
              Overview Of The Idea
              <input
                onChange={(e) => setOverview(e.target.value)}
                value={overview}
                name="overview"
                type="text"
                style={{ borderColor: `${errorFields.overview ? "red" : ""}` }}
              ></input>
            </label>

            <label className={styles.label}>
              Description
              <input
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                name="desc"
                type="text"
                style={{ borderColor: `${errorFields.desc ? "red" : ""}` }}
              ></input>
            </label>

            <label className={styles.label} id={styles.addP}>
              <label>Tags</label>
              <div className={styles.tagInner}>
                <input
                  onChange={changeHandler}
                  value={tagField}
                  name="tags"
                  type="text"
                  style={{ borderColor: `${errorFields.tags ? "red" : ""}` }}
                ></input>
                <button type="text" className={styles.add} onClick={addTags}>
                  Add
                </button>
              </div>
            </label>
            {tags && (
              <div className={styles.tagsWrapper}>
                {tags.map((tag, index) => (
                  <span className={styles.tags} key={index}>
                    {tag}
                    <div
                      className={styles.delete}
                      onClick={() => {
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
                onChange={(e) => setProgress(e.target.value)}
                value={progress}
                name="progress"
                type="text"
                style={{ borderColor: `${errorFields.progress ? "red" : ""}` }}
              ></input>
            </label>

            <button onClick={submitHandler}>Submit Idea</button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Form;
