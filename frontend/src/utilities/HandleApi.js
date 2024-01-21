import axios from 'axios'

const baseUrl = "https://todo-zel0.onrender.com/"

const getAllToDo = (setToDo) => {
  axios.get(baseUrl)
    .then(({ data }) => {
      console.log('data ---> ', data);
      setToDo(data)
    })
    .catch(error => {
      console.error('Error fetching ToDo items:', error);

    });
}

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/saveTodo`, { text })
    .then((data) => {
      console.log(data);
      setText("")
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}


const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .put(`${baseUrl}/updateTodo`, { _id: toDoId, text })
    .then((data) => {
      setText("")
      setIsUpdating(false)
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}


const deleteToDo = (toDoId, setToDo) => {
  axios
    .delete(`${baseUrl}/delete/${toDoId}`)
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err))
}

export { getAllToDo, addToDo, updateToDo, deleteToDo }
