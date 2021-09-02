import { Link}from 'react-router-dom'
import { useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {connect} from "react-redux";

function App(Props){
  var [datas,setdatas]=useState([]);
  var [img,setimg]=useState([]); 
  //Load the Data To The User From Database 
  useEffect(()=>{
    axios.get("http://localhost:4545/App/get").then((res)=>
    {
      console.log("from api",res.data);  
      setdatas(res.data);
    })
   axios.get("http://localhost:4545/App/profileimage").then((ress)=>
    { 
     setimg(ress.data);
    })
  },[])
 //When User Click Delete
  const  deletes=(id)=>{  
    axios.delete("http://localhost:4545/App/del/"+id+"").then((res)=>{console.log(res)})
    window.location.reload(true);
  }
  //Sent the Data To Redux Function
  const senttostore=(name,id)=>
  {
    Props.add(name,id);
  }

  return (
     <div> 
       {/*------------------------------Navigation Section start---------------------------------------------------*/}
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <nav className='navbar nav'>
            <h2>Employee Management System</h2>
            <ul className='list'>
              <button className=' btn btn-success button'><Link className='button1' exact to='/add'>Add New Employee</Link></button>
            </ul>
          </nav>
        </div>
      </div>
      {/*-------------------------------Navigation Section Close-------------------------------------------------------*/}
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <table className='table table-striped'>
             {/*--------------------Table Header Section Start---------------------------------------------------------*/}
            <thead className='thead-light'>
            <tr>
              <th>Serial No</th>
              <th>Emp Name</th>
              <th>Emp Image</th>
              <th>Location</th>
              <th>Emp Designation</th>
              <th>Emp Salary</th>
              <th>Modify</th>
            </tr>
            </thead>
            {/*------------------------------------Table Header Section Close----------------------------------------------------------------*/}
            {/*-----------------------------------Table Main Body Section Start-------------------------------------------------*/}
            <tbody>
              {/*Display Data From Database*/}
                {datas.map((val,index) =>
                {
                return(  
                <tr key={index}>
               <td >{index+1}</td>
               <td>{val.name}</td>
               {/*Display Images From Database*/}
              { img.map((imgs)=>{
                    if(val.id===imgs.id){  
                      if(imgs.profileimage==="default.png"){
                        return (<td><img  className="imgdiv rounded-circle"  src={require("./uploads/default.png").default}/></td>);
                      }
                      else{
                        return (<td><img  className="imgdiv rounded-circle" src={require("./uploads/"+imgs.profileimage).default}/></td>);
                      }
              }
            })}
                <td>{val.address}</td>
                <td >{val.designation}</td>
                <td >{val.salary}</td>
                <td>
                  <button className=' btn btn-success button'><Link exact to="/edit" onClick={(e)=>{senttostore(val.name,val.id)}} className='button1'>Edit</Link></button>
                  <button className=' btn btn-success button' onClick={(e)=>{e.preventDefault();deletes(val.id)}}>Delete</button>
                </td>
                </tr>
                );
              
              })

                } 
            </tbody>
            {/*---------------------------------------Table Main Body Section Close--------------------------------------------------------*/}
             </table>
        </div>
      </div>
      </div>
  );
}
//Function For Dispatch The Values For The Rudex
const mapDispatchToProps=(dispatch)=>
{
  return {
    add:(name,id)=>{
    dispatch({type:"Add",value1:name,value2:id})
    }
  }
}

export default connect(null,mapDispatchToProps)(App);
