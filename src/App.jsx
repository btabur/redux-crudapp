import AddForm from "./components/AddForm"
import ListTodo from "./components/ListTodo"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  
  return (
   <div className="d-flex flex-column gap-5 p-5 ">
    <h1 className="text-center">Redux Kullanımı</h1>
    <AddForm/>
    <ListTodo/>
   </div>
  )
}

export default App
