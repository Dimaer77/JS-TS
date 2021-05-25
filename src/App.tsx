import React from 'react';
import './App.css';



function App() {
    const names = ["Dimych", "Sveta","Ktya", "Viktor", "Ignat"]
    const namesUsers = [{name: "Dimych"}, {name: "Sveta"},{name: "Ktya"}]
    let liElements = names.map(el=> <li>{el}</li>)
    let usersLiElements = namesUsers.map(el=> <li>{el.name}</li>)
  return (
    <div className="App">
        {/*<ManComponent/>*/}
{/*<ul>тут ли*/}
{/*    {usersLiElements}*/}
{/*</ul>*/}
    </div>
  );
}

export default App;
