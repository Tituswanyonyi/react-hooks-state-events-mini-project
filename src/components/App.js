import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS);
  const [category,setCategory] = useState("All");

  function handleNewTask(newtask) {
    setTasks([...tasks, newtask])
  }

  function handleDeleteTask(deleteTask) {
    setTasks(tasks.filter((task) => task.text !== deleteTask))
  }

  const viewedTask = tasks.filter((task) => category === "All" || task.category === category)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categories = {CATEGORIES}
      selectedCategory = {category}
      onSelectCategory = {setCategory}
       />
      <NewTaskForm
      categories = {CATEGORIES.filter((categ)=> categ !=="All")}
      onTaskFormSubmit = {handleNewTask}
      />
      <TaskList
      onDeleteTask = {handleDeleteTask} tasks = {viewedTask} />
    </div>
  );
}

export default App;