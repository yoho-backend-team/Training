import React, { useRef, useState } from "react";

const Todo = () => {
  const [datas, setDatas] = useState([]);
  const task = useRef("")
  const [edit,setEdit] = useState(null)

  const Addtask=()=>{
    if(task.current.value.trim() == "")
        return;
    setDatas([...datas,task.current.value])
    task.current.value=""
  }

  const Deletedata=(index)=>{
    setDatas(datas.filter((_,i)=>i !==index))
  }

  const Editdata=(index)=>{
    task.current.value= datas[index]
    setEdit(index)
  }

  const UpdateTask=()=>{
    if(task.current.value.trim() == "")
        return;
   const UpdateTask = [...datas]
    UpdateTask[edit] = task.current.value
    setDatas(UpdateTask)
    setEdit(null)
    task.current.value=""
  }


  return (
    <div className="flex justify-center">
      <div className="bg-pink-300 m-5 p-5">
        <h1 className="ml-25 font-bold mb-3 mt-10">Todolist</h1>
        <div className="flex justify-between">
          <div>
            <input
              className="border rounded-md p-1"
              type="text"
              ref={task}
            />
          </div>
          <div>
            {
              edit === null?
              <button className="border ml-5 px-2 rounded-md p-1" onClick={Addtask}>Add</button>
              :
              <button className="border ml-5 px-2 rounded-md p-1" onClick={UpdateTask}>Update</button>
            }
          </div>
        </div>
        
        {datas.map((data,index)=>{
            return(
                <div key={index} className="mt-10">
                    <div className="border rounded-md flex justify-between">
                        <h1 className="p-2">{data}</h1>
                        <div>
                        <button className="border m-2 rounded-md p-1" onClick={()=>Editdata(index)}>Edit</button>
                        <button className="border m-2 rounded-md p-1" onClick={()=>Deletedata(index)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Todo;
