import React, { useState } from "react";
import "./styles.css";

const TodoApp = () => {
  const itemList = [
    { id: 1, text: "Learn JavaScript", done: false },
    { id: 2, text: "Learn React", done: false },
    { id: 3, text: "Play around in JSFiddle", done: true },
    { id: 4, text: "Build something awesome", done: true }
  ];
  let [timer, setTimer] = useState(null);
  const [items, setItems] = useState(itemList);

  const handleChange = (checked, id) => {
    const stuff = [...items];
    const match = items.findIndex(item => item.id === id);
    if (match >= 0) {
      stuff[match].done = checked;
      setItems(stuff);
      // handleProgress();
    }
  };

  const handleProgress = () => {
    const len = items.length;
    const completed = items.filter(it => it.done).length;
    const percentDone = Math.round((completed / len) * 100);
    const progressNode = document.querySelector(".progress-inner");
    progressNode.style.width = `${percentDone}%`;
  };

  const debounce = (e, id) => {
    const checked = e.target.checked;
    if (!timer) handleChange(checked, id);
    const t = setTimeout(() => {
      clearTimeout(timer);
      setTimer(null);
    }, 2000);
    setTimer(t);
  };

  handleProgress();

  return (
    <div>
      <h2>Todos:</h2>
      <ol>
        {items.map(item => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.done}
                onChange={e => debounce(e, item.id)}
              />
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
      </ol>
      <div className="progress">
        <div className="progress-inner" />
      </div>
    </div>
  );
};

export default TodoApp;
