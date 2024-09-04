import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const plusIcon = "/svgs/icon-plus.svg";
const minusIcon = "/svgs/icon-minus.svg";

const queAns = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "Why use React?",
    answer: "React allows you to create reusable UI components and manage state efficiently."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like."
  },
  {
    question: "How do you create a React component?",
    answer: "You can create a React component by defining a JavaScript function or class that returns a React element, typically using JSX."
  },
  {
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates and rendering by minimizing direct manipulation of the real DOM."
  },
  {
    question: "What are props in React?",
    answer: "Props (short for properties) are a way to pass data from parent to child components in React. They are read-only and help make components reusable."
  },
  {
    question: "What is state in React?",
    answer: "State is an object that holds data that may change over the lifecycle of a component. It is managed within the component and can influence what is rendered."
  },
  {
    question: "What is a React hook?",
    answer: "React hooks are functions that let you use state and other React features in functional components. Examples include useState and useEffect."
  },
  {
    question: "What is the difference between a class component and a functional component?",
    answer: "Class components are ES6 classes that extend React.Component and have lifecycle methods. Functional components are simpler and use hooks to manage state and lifecycle."
  },
  {
    question: "How do you handle events in React?",
    answer: "Events in React are handled using camelCase syntax and passing a function as the event handler. For example, onClick={handleClick}."
  }
];

function Header() {
  return (
    <header className='header'>
      <img src='/svgs/icon-star.svg' alt='star-icon' className='faq-icon'/>
      <h1>FAQs</h1>
    </header>
  )
}

function Question({ faqObject: { question, answer } }) {
  const [currentIcon, setIcon] = useState(plusIcon);
  const handleOnClick = () => {
    setIcon(currentIcon === plusIcon ? minusIcon : plusIcon);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOnClick();
    }
  };

  return (
    <div className="faq-box">
      <h4>{question}</h4>
      <img
        className="icon"
        src={currentIcon}
        alt="icon plus"
        onClick={handleOnClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={currentIcon === minusIcon}
      />
      <p className={`answer ${currentIcon === plusIcon ? "hidden" : ""}`}>
        {answer}
      </p>
    </div>
  );
}

function Main() {
  return (
    <section>
      {queAns.map((que) => (
        <Question faqObject={que} key={que.question} />
      ))}
    </section>
  )
}

function MyApp(){
  return (
    <main className='container'>
      <Header/>
      <Main/>
    </main>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp/>);
