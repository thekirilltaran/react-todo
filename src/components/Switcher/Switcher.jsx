import {useTheme} from "../../hook/useTheme";

import SunSVG from "../svg/sun";
import MoonSVG from "../svg/moon";

import styles from './styles.module.scss';
import {AnimatePresence, motion} from "framer-motion";

export const Switcher = () => {
  const [theme, handleChange] = useTheme('light');

  return (
    <div className="container-switch">
      <label className={styles.switch} htmlFor="switcher-theme" onChange={handleChange} >
        <input id="switcher-theme" type="checkbox"/>
        <AnimatePresence mode="wait">
          <motion.div
            key={theme === 'light' ? '1' : "0"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? (
              <SunSVG
                width={26}
                height={26}
              />
            ) : (
              <MoonSVG/>
            )}
          </motion.div>
        </AnimatePresence>
      </label>
    </div>
  );
};