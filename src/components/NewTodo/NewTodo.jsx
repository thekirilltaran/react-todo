import { useDispatch } from "react-redux";
import {addTodo} from 'store/todos-slice';
import {Input} from "../Form/Input/Input";

import styles from './styles.module.scss';
import {useState} from "react";

export const NewTodo = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData) {
      dispatch(addTodo(formData));
      setFormData("");
      event.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.circle}></div>
      <Input
        type="text"
        name="title"
        value={formData}
        placeholder="Create a new todo..."
        handleChange={(value) =>setFormData(prevValue => {return value})}
      />
    </form>
  );
};