import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState('All')

  const displayTasks = tasks.filter((task) => categories === 'All' || task.category === categories);

  function handleDelete(deletedTaskText){
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  }

  function handleSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={categories} onSelectedCategory={setCategories} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={displayTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
