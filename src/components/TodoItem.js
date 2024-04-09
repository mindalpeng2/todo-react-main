import React from "react";
import styles from "@/styles/TodoList.module.css";

// 카테고리별 배경색 설정
const categoryStyles = {
  학교: { backgroundColor: "#fdd835" }, // 예시 색상
  알바: { backgroundColor: "#c0ca33" },
  친구: { backgroundColor: "#ffb300" },
  기타: { backgroundColor: "#eeeeee" }
};

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={styles.todoItem} style={categoryStyles[todo.category]}>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      {/* 할 일의 카테고리 표시 */}
      <span className={styles.todoCategory}>{todo.category}</span>
      <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
    </li>
  );
};

export default TodoItem;
