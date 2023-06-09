import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CreateTodoList from './components/CreateTodoList'
import { ITodoItem } from './types/todoitem';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';

const MOCKLISTA: ITodoItem[] = [
  {
    name: 'Psiquiatra',
    date: '25/04',
    id: uuidv4(),
  },
  {
    name: 'Ir no super',
    date: '26/09',
    description: 'não sei bem o que eu estou fazendo',
    id: uuidv4(),
  },
  {
    name: 'Andar de bike',
    date: '18h 30/11',
    id: uuidv4(),
  },
  {
    name: 'Massagem',
    date: '30/02 às 25h',
    id: uuidv4(),
  },
];

function App() {

  return (
    <div>
      <CreateTodoList />
    </div>
  );
}

export default App
