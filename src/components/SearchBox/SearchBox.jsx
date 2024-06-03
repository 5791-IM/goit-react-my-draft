import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  console.log("SearchBox value:", value);
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        // placeholder="Search contacts"
        className={css.searchBox}
      />
    </div>
  );
}
