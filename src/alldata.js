//import UserContext from "./context";
//import { useContext } from "react";
import axios from "axios";
import { useState,useEffect } from "react"
export default function Alldata(){
//let users=useContext(UserContext)
//console.log("hii",users.users[0].amount)
let [data,setData]=useState([])
async function handleClick(e){
  e.preventDefault();
  try{
    
 let result= await axios.get('https://bank-server-01u1.onrender.com/data')
 setData(result.data)}
 catch(error){
  console.error("Error fetching data:",error);
  
}
}

async function handleDelete(id) {
  try{
    await axios.delete(`https://bank-server-01u1.onrender.com/delete/${id}`)
    setData(data.filter(item=> item._id !== id));
  }catch(error){
    console.error("Error deleting:",error);
    
  }
}
return(
<>
<h1>ALL-DATA</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">E-MAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">HANDLE</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   { data.map((item)=>(
   <tr key={item._id}>
    <td>{item.name}</td>
   <td>{item.email}</td>
   <td>{item.password}</td>
   <td>{item.amount}</td>
    <td>
      <button onClick={()=>handleDelete(item._id)}>DELETE</button>
    </td>
   </tr>
  ))}
    
  </tbody>
</table>
<button onClick={handleClick}>FETCH</button>
</>)
}