/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Too short")
      .max(50, "Too long"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Too short")
      .max(50, "Too long"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: Math.random().toString(36).slice(2, 11),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.ContactForm}>
        <label className={css.ContactFormLabel} htmlFor="name">
          <span className={css.ContactFormSpan}>Name:</span>
          <Field
            className={css.ContactFormField}
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage
            className={css.ContactFormSpan}
            name="name"
            component="div"
          />
        </label>
        <label className={css.ContactFormLabel} htmlFor="number">
          <span className={css.ContactFormSpan}>Number:</span>
          <Field
            className={css.ContactFormField}
            type="text"
            id="number"
            name="number"
          />
          <ErrorMessage
            className={css.ContactFormSpan}
            name="number"
            component="div"
          />
        </label>
        <button className={css.ContactFormBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
