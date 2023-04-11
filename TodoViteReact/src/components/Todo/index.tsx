import TodoList from '../CreateTodoList';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  name: string;
  date: string;
  description: string | undefined;
}

const Todo = ({ name, date, description}: Props) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-gray-800 w-60 rounded px-10 pt-2 mb-2'>
        <div className='mb-4'>
          <label
            className='block text-center text-white text-lg font-bold mb-2'
            htmlFor='username'
          >
            {name}
          </label>
          <div className='text-center rounded px-3 font-medium text-green-500'>
            {date}
          </div>
        </div>
        {description === undefined ? undefined : (
          <div className=' rounded w-full text-center text-gray-400 mb-4'>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
