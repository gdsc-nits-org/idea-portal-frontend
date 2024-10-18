"use client";

import React, { useState } from "react";
import styles from "./From.module.scss";
import { IoMdClose } from "react-icons/io";
import { Toaster, toast } from "sonner";
import { z } from "zod";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const IdeaSchema = z.object({
  overview: z.string().nonempty("Overview is required"),
  description: z.string().nonempty("Description is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  progress: z.string().nonempty("Progress is required"),
});

const Form = ({ closeState, setCloseState, onIdeaCreated }) => {
  const [_user] = useAuthState(auth);
  const [tags, setTags] = useState([]);
  const [tagField, setTagField] = useState("");
  const [errorFields, setErrorFields] = useState({});
  const [user, setUser] = useState("barnilsarma@gmail.com");
  const [overview, setOverview] = useState("");
  const [desc, setDesc] = useState("");
  const [progress, setProgress] = useState("");

  const addTags = (e) => {
    e.preventDefault();
    if (tagField) {
      setTags((prevTags) => [...prevTags, tagField]);
      setTagField("");
    }
  };

  const changeHandler = (e) => {
    setTagField(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      overview,
      description: desc,
      tags,
      progress,
    };

    const result = IdeaSchema.safeParse(formData);

    if (!result.success) {
      const errors = result.error.format();
      setErrorFields(errors);
      toast.error("Please fill out all required fields.");
      return;
    }
    if (_user) {
      setUser(_user?.email);
    }

    const createIdea = async () => {
      const act = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/idea/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          overview,
          description: desc,
          tags,
          progress,
        }),
      });

      if (act.status === 200) {
        const newIdea = await act.json();
        toast.success("Successfully submitted idea!!");
        setCloseState(true);
        onIdeaCreated(newIdea);
      } else {
        toast.error("Failed to create the idea!!");
      }
    };

    createIdea();
  };

  return (
    <div className={`${styles.modal} ${closeState ? styles.close : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <div className={styles.heading}>
            <h1>Submit Idea</h1>
            <div
              className={styles.cross}
              onClick={() => {
                setCloseState(true);
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
                style={{ borderColor: `${errorFields?.overview ? "red" : ""}` }}
                className={styles.commField}
              />
              {errorFields?.overview && (
                <span className={styles.errorText}>Overview is required</span>
              )}
            </label>

            <label className={styles.label}>
              Description
              <input
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                name="desc"
                type="text"
                style={{
                  borderColor: `${errorFields?.description ? "red" : ""}`,
                }}
                className={styles.commField}
              />
              {errorFields?.description && (
                <span className={styles.errorText}>
                  Description is required
                </span>
              )}
            </label>

            <label className={styles.label} id={styles.addP}>
              <label>Tags</label>
              <div className={styles.tagInner}>
                <input
                  onChange={changeHandler}
                  value={tagField}
                  name="tags"
                  type="text"
                  style={{ borderColor: `${errorFields?.tags ? "red" : ""}` }}
                />
                <button type="text" className={styles.add} onClick={addTags}>
                  Add
                </button>
              </div>
              {errorFields?.tags && (
                <span className={styles.errorText}>
                  At least one tag is required
                </span>
              )}
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
                style={{ borderColor: `${errorFields?.progress ? "red" : ""}` }}
                className={styles.commField}
              />
              {errorFields?.progress && (
                <span className={styles.errorText}>Progress is required</span>
              )}
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
