import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <p className={`${css.text} ${css.name}`}>{name}</p>
      <p className={`${css.text} ${css.number}`}>{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
