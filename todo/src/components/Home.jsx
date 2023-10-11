import { useState,useEffect } from "react";
import Create from "./Create";
import './Home.css'
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
   axios
     .get("http://127.0.0.1:3001/get")
     .then((result) => setTodos(result.data))
     .catch(err => console.log(err)
      )
  
   
  }, [])
  const handleEdit = (id) => {
     axios.put("http://127.0.0.1:3001/update/"+id)
     .then((result) => {
      location.reload()
    })
     .catch(err => console.log(err)
      )
  }
  
  const handleDelete = (id) => {
      axios
        .delete("http://127.0.0.1:3001/delete/"+id)
        .then((result) => {
          location.reload();
        })
        .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="home">
        <h2>TODO LIST</h2>
        <Create />
        {todos.length === 0 ? (
          <div>
            {" "}
            <h2>No Records Entered</h2>
          </div>
        ) : (
          todos.map((todo) => (
            // eslint-disable-next-line react/jsx-key
            <div className="task">
              <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                {todo.done ? <div className="icon">✅</div> : <div className="icon">⬜</div>}

                <p className={todo.done ? "linethrough":""}> {todo.task}</p>
              </div>
              <div>
                <button className="icon" onClick={() => handleDelete(todo._id)}>❌</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
