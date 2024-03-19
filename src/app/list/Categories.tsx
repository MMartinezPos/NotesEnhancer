'use client'
import React,{useState} from 'react'
import Lists, {Task} from './Lists'
import Completed from './Completed';

interface Category {
    id: number;
    name: string;
    todoItems: Task[];
  }

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])
    const [newCategoryName, setNewCategoryName] = useState<string>('')
    const [completedTasks, setCompletedTasks] = useState<Task[]>([])

    const handleTaskCompleted = (completed: Task) => {
      setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, completed]);
    }
    const createCategory = () => {
      // the spread operator ... is used to copy the existing categories array and add the new category to the end
      if (newCategoryName.trim() === '') {
        return;
      }
    
      // create a new category object
      const newCategory: Category = {
        id: Date.now(),
        name: newCategoryName,
        todoItems: [],
      };
  
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
    }
    
    // this will delete the category with the given id from the categories array
    const deleteCategory = ( categoryID: any ) => {
      // the filter method is used to create a new array with all categories except the one with the provided id
      setCategories(categories.filter((category) => category.id !== categoryID));
    }
    
    const enterKey = (e: any) => {
      if (e.key === 'Enter') {
        createCategory();
      }
    }
    
  return (
<div>
      <div className="h-screen bg-cover bg-[url('https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')]">
          <div className='flex items-center justify-center p-10'>
              <input 
                  className="border-2 border-gray-300 p-2 rounded-md mb-2 bg-blue-50"
                  type="text" 
                  placeholder='enter new category name' 
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  onKeyUp={enterKey}
              />
              <button 
                  onClick={createCategory}
                  className="mb-2 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
              >Create Category</button>
              </div>
          <div className="flex flex-wrap pl-6">
              {categories.map((category) => (
                  <div key = {category.id} className="bg-gray-200 p-4 rounded-md mr-4 mb-4">
                      <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                      <Lists tasks={category.todoItems} onTaskCompleted={handleTaskCompleted}/> 
                      {/* this button creates a wrapper function for deleteCategory to call that function as well */}
                      <button onClick={() => deleteCategory(category.id)}
                      className="mb-2 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                      >Delete Category</button>
                  </div>
              ))}
          </div>
          <div>
          <Completed completed={completedTasks} />
          </div>
      </div>
</div>
  )
}
