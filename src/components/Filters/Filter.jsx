import { useSelector, useDispatch } from "react-redux";
import {setFilter} from 'store/filter-slice';
import clsx from "clsx";

import styles from './styles.module.scss';

export const FilterTodo = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.filter);

  const handleFilter = (val) => dispatch(setFilter(val));

  return (
    <div className={styles.block}>
      <button
        className={clsx(styles[activeFilter === 'all' ? 'active' : ''])}
        onClick={() => handleFilter('all')}>all</button>
      <button
        className={clsx(styles[activeFilter === 'active' ? 'active' : ''])}
        onClick={() => handleFilter('active')}>active</button>
      <button
        className={clsx(styles[activeFilter === 'completed' ? 'active' : ''])}
        onClick={() => handleFilter('completed')}>completed</button>
    </div>
  );
}