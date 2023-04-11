import { useState } from 'react';
import App from '../../App';
import { ITodoItem } from '../../types/todoitem';
import Todo from '../Todo';

interface INewTodo extends ITodoItem {}

const CreateTodoList = () => {
  const [newTodo, setNewTodo] = useState<INewTodo>({
    name: '',
    date: '',
    description: '',
  });
  const [teste, setTeste] = useState<ITodoItem[]>([]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewTodo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTeste((prev) => [...prev, newTodo]);
    console.log(teste);
  };

  // const CreateTodoList = () => {
  // const [newTodo, setNewTodo] = useState<INewTodo>({ name: '', date: '', description: '' });
  // const [teste, setTeste] = useState<ITodoItem[]>([]);

  // const handleChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setNewTodo((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   setTeste((prev) => [...prev, newTodo]);
  //   console.log(teste);
  // };

  return (
    <div>
      <div className='flex justify-center'>
        <form
          onSubmit={handleSubmit}
          className='bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4'
        >
          <div className='mb-4'>
            <label
              className='block text-center text-white text-lg font-bold mb-2'
              htmlFor='username'
            >
              Add a new Todo
            </label>
            <input
              name='name'
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='todo-name'
              type='text'
              placeholder='Name'
              required
            />
          </div>
          <input
            name='date'
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
            title='Date'
            type='text'
            placeholder='Date'
          />
          <textarea
            name='description'
            onChange={handleChange}
            rows={4}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='todo-description'
            placeholder='Description'
          />

          <div className='flex items-center justify-center mt-4'>
            <button
              className='bg-purple-700 hover:bg-purple-600 transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Create Todo
            </button>
          </div>
        </form>
      </div>
      {teste.map(({ name, date, description}) => (
        <Todo name={name} date={date} description={description}/>
      ))}
    </div>
  );
};

export default CreateTodoList;
