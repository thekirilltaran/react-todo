import clsx from "clsx";

import styles from './styles.module.scss';

export function Container({size = 'md', children}) {

  const sizeContainer = size === "lg" ? "lg" : "md";
  return (
    <div className={clsx(styles.container, styles[sizeContainer])}>{children}</div>
  )
}