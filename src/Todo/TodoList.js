import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.protoTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired, // массив из объектов, required - необходим для работы данного компонента
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
