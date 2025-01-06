import clsx from "clsx";

import CheckSVG from "../../svg/check";

import styles from "./styles.module.scss";

export const Checkbox = ({id, type, checked, onChange}) => {
  return (
    <label htmlFor={id} className={clsx(styles.label, styles[checked ? "checked":""])}>
      <input
        id={id}
        type={type}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.indicator}>
        <CheckSVG/>
      </div>
    </label>
  );
};