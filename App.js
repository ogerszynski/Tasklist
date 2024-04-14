import React, { useState } from 'react';

function App() {
  // wyjsciowa lista 2 zadan
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Zajęcia na uczelni',
      completed: true
    },
    {
      id: 2,
      text: 'Odkurzanie auta',
      completed: false
    }
  ]);

  //dodawanie tekstu
  const [text, setText] = useState('');

  // funkcja dodawania zadania
  const addTask = () => {
    if (text.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text,
        completed: false
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setText('');
    }
  };

  // f. usuwanie zadania
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // zmiana stanu zakonczenia
  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  };

  // liczniki - do zrobienia i zrobione
  const tasksToDo = tasks.filter(task => !task.completed).length;
  const tasksDone = tasks.filter(task => task.completed).length;

  return (
    <div className="App">
      <h1>Lista zadań</h1>
      {/* wyswietlanie licznikow */}
      <div className="task-counters">
        <p>Zadania do zrobienia: {tasksToDo}</p>
        <p>Zadania wykonane: {tasksDone}</p>
      </div>
      {/* task lista */}
      <div className="task-list">
        {tasks.map(task => (
          <div className="task" key={task.id}>
            {/* checkbox stanu */}
            <input 
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            {/* tresc zadania */}
            <p>{task.text}</p>
            {/* przycisk usuwania */}
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        ))}
        {/* wprowadzanie nowego */}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter task..."
        />
        {/* przycisk dodaj zadanie */}
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
}

export default App;
