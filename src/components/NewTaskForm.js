import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const categoryList = categories.filter((category) => category !== 'All').map((category =><option>{category}</option>))

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({text, category})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} value={text} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)} value={category}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
