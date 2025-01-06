import {useDispatch, useSelector} from "react-redux";

import {selectVisibleTodos, updateOrderItems} from '../../store/todos-slice';

import {FilterTodo} from "../Filters/Filter";
import {ResetApp} from "../Reset/ResetApp";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  MouseSensor, TouchSensor
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {TodoItem} from "./ToDo";

import styles from './styles.module.scss';

import {AnimatePresence, motion} from "framer-motion";

export const TodoList = () => {
  const activeFilter = useSelector(state => state.filter)
  const todos = useSelector(state => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();
  const total = todos.length;

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = todos.findIndex((v) => v.id === active.id);
      const newIndex = todos.findIndex((v) => v.id === over.id);
      dispatch(updateOrderItems(arrayMove(todos, oldIndex, newIndex)));
    }
  };

  return (
    <div className={styles.block_todo}>
      {todos.length === 0 && activeFilter === 'all' && (
        <div className={styles.message}>
          <p>Add your first task</p>
        </div>
      )}
      {todos.length === 0 && activeFilter === 'active' && (
        <div className={styles.message}>
          <p>Sorry you don't have any todo in {activeFilter}</p>
        </div>
      )}
      {todos.length === 0 && activeFilter === 'completed' && (
        <div className={styles.message}>
          <p>Sorry you don't have any todo in {activeFilter}</p>
        </div>
      )}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          <ul>
              <AnimatePresence initial={false}>
                {todos.map((todo) => (
                  <motion.li
                    key={todo.id}
                    initial={{ opacity: 0, y: 50, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.3, transition: { duration: 0.1 } }}
                  >
                    <TodoItem key={todo.id} todo={todo}/>
                  </motion.li>
                ))}
              </AnimatePresence>
          </ul>
        </SortableContext>
      </DndContext>

      <div className={styles.actions}>
        <span className={styles.total_count}>{total} items left</span>
        <FilterTodo/>
        <ResetApp/>
      </div>
    </div>
  );
};
