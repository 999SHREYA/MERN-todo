import { useState } from 'react';
import axios from 'axios'
import './create.css'
const Create = () => {

  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => {location.reload()
    })
    .catch(err => console.log(err))
    
  }

  
  return (
    <>
      <div className="create">
        <input type="text" placeholder='Enter Task' name="" id="" onChange={(e) => setTask(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}

export default Create