import React,{useState} from 'react'
import List from './List'

const Todolist = () => {
   const [newdata, setNewData]= useState({});
   const [listData, setListData] = useState([]);

   const handleAdd = ()=>{
    const obj = {
        id: Date.now(),
        text: newdata

    }
    setListData([...listData,obj])
   }

   console.log("listData",listData)

  return (
    <div>
      <input placeholder="add your text" onChange={(e)=>setNewData(e.target.value)}></input>
      <button onClick={()=>handleAdd()}>Add</button>
      <List data={listData} setListData={setListData}/>

    </div>
  )
}

export default Todolist
