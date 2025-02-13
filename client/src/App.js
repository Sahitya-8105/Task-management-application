import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/tasks")
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTask = () => {
    if (task.trim()) {
      axios.post("http://localhost:5000/tasks", { title: task, completed: false })
        .then(response => setTasks([...tasks, response.data]))
        .catch(error => console.error(error));
      setTask("");
    }
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error(error));
  };

  const toggleTask = (id, completed) => {
    axios.put(`http://localhost:5000/tasks/${id}`, { completed: !completed })
      .then(response => {
        setTasks(tasks.map(task => (task._id === id ? response.data : task)));
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📌 Task Manager</h1>
      <div style={styles.inputContainer}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a task..." 
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>➕ Add Task</button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map(task => (
          <li key={task._id} style={styles.taskItem}>
            <span 
              style={{ 
                textDecoration: task.completed ? "line-through" : "none", 
                cursor: "pointer", 
                flex: 1 
              }}
              onClick={() => toggleTask(task._id, task.completed)}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)} style={styles.deleteButton}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  heading: {
    fontSize: "24px",
    marginBottom: "15px"
  },
  inputContainer: {
    display: "flex",
    gap: "10px"
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px"
  },
  addButton: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  taskList: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px"
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    margin: "5px 0",
    borderRadius: "5px"
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default App;
