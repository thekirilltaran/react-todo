import {useDispatch} from 'react-redux'

import {resetToDefault} from '../../store/actions/reset-action'

import styles from './styles.module.scss';
import {useMediaQuery} from "react-responsive";

export const ResetApp = () => {
  const dispatch = useDispatch();
  const isMobileLaptop = useMediaQuery({
    query: '(max-width: 576px)'
  })

  return (
    <div className={styles.block}>
      <button className={styles.reset_btn} onClick={() => dispatch(resetToDefault())}>
        {isMobileLaptop ? (
          'Clear'
        ) : (
          'Clear Completed'
        )}
      </button>
    </div>
  )
}