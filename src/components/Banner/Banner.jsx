import clsx from "clsx";

import styles from "./styles.module.scss";

export const Banner = ({urlImage, position=""}) => {

    if (!urlImage) return null;
    return (
        <div className={clsx(styles.banner, styles[position])} style={{backgroundImage: `url(${urlImage})`}}></div>
    );
}