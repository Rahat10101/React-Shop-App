import React from 'react';
import './Answers.css';

const Answers = () => {
    return (
        <div className='answers'>
            <h1>
                Answers
            </h1>
            <details>
                <summary>How react works</summary>
                <p>
                    React uses a declarative paradigm that makes it easier to think about your application and aims to be  efficient and flexible.
                    Designing a simple view for each state of your application, React efficiently updates and renders the appropriate components as the data changes.
                    Declarative views make your code more predictable and easier to debug.
                    React applications are made up of multiple components, each responsible for rendering  small, reusable HTML elements.
                    You can nest components within other components so that you can build complex applications from simple building blocks.
                    Components can also maintain their internal state.
                    For example, the TabList component can store variables that correspond to the currently open tab.
                </p>
            </details>
            <details>
                <summary>How usestate works</summary>
                <p>
                    The useState() is a Hook that allows you to have state variables in functional components.
                    React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components.
                    Class components a Component and can have state and lifecycle methods: class Message extends React.
                    The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.
                </p>
            </details>
        </div>
    );
};

export default Answers;