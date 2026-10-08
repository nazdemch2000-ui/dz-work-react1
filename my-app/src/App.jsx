import { Component } from "react";
import './App.css'

//Main taks

function GreetingCard({ name }) {
  return <h1>Hello, {name}</h1>;
}

//Bonus task 1
function BookInfo() {
  return (
    <div>
      <h1>1984</h1>

      <p><strong>Автор:</strong> Джордж Орвелл</p>
      <p><strong>Жанр:</strong> Антиутопія, соціальна фантастика</p>
      <p><strong>Кількість сторінок:</strong> 328</p>

      <h2>Рецензії</h2>

      <p>
        Дуже цікава та атмосферна книга, яка змушує замислитися
        про свободу людини та контроль суспільства.
      </p>

      <p>
        Сильний сюжет і незвичайний світ. Книга залишається
        актуальною навіть через багато років після написання.
      </p>

      <p>
        Один із найкращих прикладів жанру антиутопії.
        Рекомендую всім, хто любить серйозні та захопливі історії.
      </p>
    </div>
  );
}


//Bonus task 3
class Counter extends Component
{
    constructor() {
    super();

    this.state = {
      count: 0
    };
    this.iterator = this.iterator.bind(this);
  }
  iterator() {
  this.setState((prevState) => {
  return {
    count: prevState.count + 1
  };
});
  }
render() {
    return (
     <div> <h1 className='counter'>Count: {this.state.count}</h1>
      <button onClick = {this.iterator}>Add</button></div>
    );
  }
  
}


//Task 4
import { useState } from "react";

function ButtonWithLimit({ limit }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    if (clicks < limit) {
      setClicks(clicks + 1);
    }
  }

  return (
    <div>
      <h2>Clicks: {clicks}</h2>

      <button
        onClick={handleClick}
        disabled={clicks >= limit}
      >
        Збільшити
      </button>
    </div>
  );
}






function App() {
   return (
     <div>
      {/* <GreetingCard name="Nazar" /> */}
      {/* <BookInfo/> */}
      {/* <Counter/> */}
       <ButtonWithLimit limit={5} />
      
      

      
      </div>
);
}


export default App

