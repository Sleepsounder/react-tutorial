import React from "react"
// import NavBar from "./components/NavBar"
// import ToDoItem from "./components/ToDoItem"
import ContactCard from "./components/ContactCard"

import "./App.css"

function App() {
  return(
    // <div className="todo-list">
    //   <NavBar />
    //   <ToDoItem />
    //   <ToDoItem />
    //   <ToDoItem />
    //   <ToDoItem />
    // </div>
    <div>
      <ContactCard 
        contact={
          {
            name: "Mr. Whiskerson",
            imgURL: "http://placekitten.com/300/200",
            phone: "(212)-555-0092",
            email: "whiskers@jojo.com"
          }
        }
      />
      <ContactCard 
        contact={
          {
            name: "Tybalt",
            imgURL: "http://placekitten.com/400/200",
            phone: "(919)-000-0000",
            email: "bone@jojo.com" 
          }
        }
      />
      <ContactCard 
        contact={
          {
            name: "Shy-man",
            imgURL: "http://placekitten.com/400/300",
            phone: "(828)-666-6666",
            email: "toops@jojo.com" 
          }
        }
      />
      <ContactCard 
        contact={
          {
            name: "Hardly a dog",
            imgURL: "http://placekitten.com/200/100",
            phone: "(415)-555-5555",
            email: "flips@jojo.com" 
          }
        }
      />
    </div>
  )
}

export default App