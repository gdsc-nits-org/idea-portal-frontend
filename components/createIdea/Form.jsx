import React, { useState } from "react";
import styles from "./From.module.scss";
import { IoMdClose } from "react-icons/io";

const Form = () => {
  const [close, setClose] = useState(false);
  const [tags, setTags] = useState([]);
  const [errorFields , setErrorFields] = useState({})

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

  //form validation check
  //validate function check if there exist empty field then update the errorField as true
  const validate = (value) =>{
    const errors = {}
    if(!value.overview){
      errors.overview = true
    }
    else{
      errors.overview = false
    }
    if(!value.desc){
      errors.desc = true
    }
    else{
      errors.desc = false
    }
    if(tags.length === 0){
      errors.tags = true
    }
    else{
      errors.tags = false
    }
    if(!value.progress){
      errors.progress = true
    }
    else{
      errors.progress = false
    }

    return errors;
  }


  const submitHandler = (e) => {
    e.preventDefault();
    const errors = validate(formData);

    if(errors.overview || errors.desc || errors.tags || errors.progress){
      setErrorFields(errors);
      alert("all fields are required")
      return ;
    }
    alert("successfully Added");
    setClose(true);
    //send data to the backend
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
                style={{borderColor : `${errorFields.overview ? "red" : ""}`}}
              ></input>
            </label>

            <label className={styles.label}>
              Description
              <input
                onChange={changeHandler}
                value={formData.desc}
                name="desc"
                type="text"
                style={{borderColor : `${errorFields.desc ? "red" : ""}`}}
              ></input>
            </label>

            <label className={styles.label} id={styles.addP}>
              Tags
              <input
                onChange={changeHandler}
                value={formData.tags}
                name="tags"
                type="text"
                style={{borderColor : `${errorFields.tags ? "red" : ""}`}}
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
                {tags.map((tag , index) => (
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
                onChange={changeHandler}
                value={formData.progress}
                name="progress"
                type="text"
                style={{borderColor : `${errorFields.progress ? "red" : ""}`}}
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
