import React from 'react';
import styles from './ContactMe.module.css';
import BlockTitle from "../projects/BlockTitle";
import Fade from "react-reveal/Fade";
import {Field, reduxForm} from "redux-form";
import emailjs from 'emailjs-com';


const ContactMeForm = (props) => {
    return (
        <form className={styles.formWrapper} onSubmit={props.handleSubmit}>
            <Field className={styles.formArea} placeholder="Имя" component={"input"} name={"user_name"}/>
            <Field className={styles.formArea} placeholder="e-mail"  component={"input"} name={"user_email"}/>
            <Field className={styles.messageArea} placeholder="message" component={"textarea"} name={"message"}/>
            <button className={styles.btnSubmit}>send</button>
        </form>
    )
}

const ContactReduxForm = reduxForm({form:'contact'})(ContactMeForm)

const ContactMe = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

  return (
    <div id={"contacts"} className={styles.contacts}>
      <Fade clear>
      <div className={styles.container}>
        <BlockTitle title={"Email me"}/>
        <ContactReduxForm onSubmit={onSubmit}/>
      </div>
      </Fade >
    </div>
  );
}

export default ContactMe;
