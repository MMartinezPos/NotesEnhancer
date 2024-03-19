'use client'
import React from 'react'
import {Task} from './Lists'

export interface CompletedProps {
    completed: Task[];
}

const Completed: React.FC<CompletedProps> = ({ completed }) => {

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Completed Items</h1> 
        <ul>
            {completed.map((task) => (
                <li key={task.id} className="bg-gray-200 p-4 rounded-md mb-2">
                    <span className="text-lg font-semibold">{task.name}</span>
                    <span className="text-sm text-green-500 ml-2">Completed</span>
                </li>
            ))}    
        </ul>
    </div>
  )
}

export default Completed;