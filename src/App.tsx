import React from 'react';
import { Record } from 'immutable'
import logo from './logo.svg';
import './App.css';

interface PersonProps {
  firstName: string
  lastName: string
}

const defaultPersonProps: PersonProps = {
  firstName: '',
  lastName: '',
}

class Person extends Record(defaultPersonProps) implements PersonProps {
  public readonly firstName!: string
  public readonly lastName!: string

  // public constructor(values?: Partial<PersonProps>) {
  //   values ? super(values) : super()
  // }

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim()
  }
}

const App: React.FC = () => {
  const jane = new Person({ firstName: 'Jane', lastName: 'Doe' })

  console.log(`Hi, this is ${jane.fullName}!`)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
