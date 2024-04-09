"use client"

import React, { useState } from "react";
import TodoItem from "@/components/TodoItem";
import styles from "@/styles/TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("기타"); // 카테고리 상태 추가

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false, category: category }]); // 카테고리 속성 추가
    setInput("");
    setCategory("기타"); // 할 일 추가 후 카테고리 초기화
  };

  // 생략...

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <input
        type="text"
        className={styles.itemInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* 카테고리 선택 드롭다운 추가 */}
      <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.categoryDropdown}>
        <option value="학교">학교</option>
        <option value="알바">알바</option>
        <option value="친구">친구</option>
        <option value="기타">기타</option>
      </select>
      <button className={styles.addButton} onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
