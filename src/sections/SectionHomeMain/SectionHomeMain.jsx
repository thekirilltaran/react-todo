import {Banner} from "../../components/Banner/Banner";
import {Container} from "../../components/Container/Container";
import {NewTodo} from "../../components/NewTodo/NewTodo";
import {TodoList} from "../../components/Todos/TodoList";

import urlBg from "../../assets/images/bg.jpg";
import styles from './styles.module.scss';
import {Switcher} from "../../components/Switcher/Switcher";

export function SectionHomeMain() {
  return (
    <section className={styles.section}>
      <Banner urlImage={urlBg} position={"absolute"}/>
      <Container>
        <div className={styles.block}>
          <div className={styles.info}>
            <div className={styles.title}>
              <h1>Todo</h1>
            </div>
            <Switcher/>
          </div>
          <NewTodo/>
          <TodoList/>
        </div>
      </Container>
    </section>
  );
}