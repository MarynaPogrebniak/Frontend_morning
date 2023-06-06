import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Counter1 from "./components/FuncComponent";
import UserList from "./components/JsonPlaceHolder";


function App() {
  return (
    <div className="App">
      {/*  От родительского компонента App передаем набор информации через 
      props дочерним компонентам. Передача props возможна только от родителя к ребенку(!)
      Props записываются как "атрибут" "тега" компонента */}
      <Counter initialValue={0} />
      <Counter initialValue={100} />
      <Counter initialValue={1000} />
      <Counter1 />
      <UserList />
    </div>
  );
}

export default App;
