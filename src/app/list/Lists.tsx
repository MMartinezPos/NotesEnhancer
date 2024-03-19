'use client'
import React, {useState} from 'react'


export interface Task {
    id: number;
    name: string;
    completed: boolean;
  }

interface ListsProps {
    tasks: Task[];
    onTaskCompleted: (completed: Task) => void;
  }

  const Lists: React.FC<ListsProps> = ({ tasks, onTaskCompleted }) => {
    const [currentTasks, setCurrentTasks] = useState<Task[]>([])
    const [newTaskName, setNewTaskName] = useState<string>('')
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)

    const handleItemAdd = (completed: Task) => {
        setSelectedTask(completed)
        onTaskCompleted(completed)
    }

    const deleteCompletedTask = (delCompleted: Task ) => {
        handleItemAdd(delCompleted)
        deleteTask(delCompleted.id)
    }

    const createTask = () => {
        if(newTaskName.trim() === '') {
            return;
        }

        const newTask: Task = {
            id: Date.now(),
            name: newTaskName,
            completed: false
        }

        setCurrentTasks([...currentTasks, newTask])
        setNewTaskName('')
    }

    const deleteTask = (taskID: any) => {
        setCurrentTasks(currentTasks.filter((task) => task.id !== taskID))
    }

    const updateTask = (taskID: any) => {

    }

    const enterKey = (e: any) => {
        if (e.key === 'Enter') {
          createTask();
        }
      }
      
    return (
      <div>
            <div className='flex items-center justify-center p-10'>
                <input 
                    className="border-2 border-gray-300 p-2 rounded-md mb-2 bg-blue-50"
                    type="text" 
                    placeholder='enter new item name' 
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    onKeyUp={enterKey}
                />
                <button 
                    onClick={createTask}
                    className="mb-2 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                >Create Item</button>
            </div>
            <ul>
                {currentTasks.map((task) => (
                    <li key={task.id} className="bg-gray-200 rounded-md mr-4 mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold mb-2 pr-6">{task.name}</h2>
                        {/* this button creates a wrapper function for deleteCategory to call that function as well */}
                        <button onClick={() => deleteCompletedTask(task)}
                            className="mb-2 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded">
                            Completed</button>
                        <button onClick={() => deleteTask(task.id)}
                            className="mb-2 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                            >Delete</button>
                    </li>
                ))}    
            </ul>
      </div> 
    )
}

export default Lists;

function onTaskCompleted(completed: Task) {
    throw new Error('Function not implemented.');
}
