import styles from "./styles.module.scss";

export const Input = ({value='', type="text", name="title", placeholder="", handleChange}) => {
  return (
    <div className={styles.input}>
      <input value={value} onChange={e => handleChange(e.target.value)} type={type} name={name} placeholder={placeholder} />
    </div>
  );
};