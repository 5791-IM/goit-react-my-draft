import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        // placeholder="Search contacts"
        className={css.searchBox}
      />
    </div>
  );
}
