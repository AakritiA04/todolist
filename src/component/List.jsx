import React from 'react'

const List = ({data,setListData}) => {

    const handleDelete = (id) =>{
       const filterData = data.filter((fitem) => fitem.id !== id )
       console.log(filterData)
       setListData(filterData)
    }
  return (
    <div>
      <ul>
       {data.map((item, idx)=>
        <li key={idx}>
        <p>{item.text}</p>
        <button onClick={()=> handleDelete(item.id)}>delete</button>
    </li>
        
       )}
       
      </ul>
    </div>
  )
}

export default List
