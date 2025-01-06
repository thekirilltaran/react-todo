import {useSortable} from "@dnd-kit/sortable";
import {Checkbox} from "../Form/Checkbox/Checkbox";
import {useDispatch} from "react-redux";
import clsx from "clsx";
import { CSS } from "@dnd-kit/utilities";
import {removeTodo, toggleTodo} from "../../store/todos-slice";
import TrashSVG from "../svg/trash";
import {useDraggable} from "@dnd-kit/core";
import styles from "./styles.module.scss";

export const TodoItem = ({todo}) => {
  const dispatch = useDispatch();
  const {isDragging } = useDraggable({
    id: todo.id,
  });
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: todo.id });

  const style = {
    cursor: "pointer",
    zIndex: isDragging ? 1 : 0,
    position: 'relative',
    boxShadow: isDragging ? "rgb(17 18 21 / 25%) 0px 8px 24px" : "rgba(149, 157, 165, 0) 0px 8px 24px",
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div style={style} className={styles.todo_item} ref={setNodeRef} {...attributes} {...listeners}>
      <Checkbox
        id={`todo-${todo.id}}`}
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span className={clsx(styles[todo.completed ? "completed" : ""], styles.text)}>{todo.title}{" "}</span>
      <button
        className={styles.remove}
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        <TrashSVG/>
      </button>
    </div>
  )
}