import './App.css'
import './Add.css';
import {useState} from 'react';
import axios from 'axios'

const Add=()=>
{
  const [name,newname]=useState('');
  const [address,newadddress]=useState('');
  const[designation,newdesignation]=useState('');
  const[salary,newsalary]=useState(0);
  const [filee,setfilee]=useState("");
 //Add a New Data to THe Database
  const add=(e)=>
  {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("file",filee);
//Check User Enter Any Null Values
    let reg=/\d+/g;
    if(name==="" || address==="" ||designation==="")
    {
      alert("Enter Any Value..")
    }
    else
    {
      //Check User Enter Any Number or Other Unwanted Data
    if(isNaN(name) && isNaN(address) && isNaN(designation)){
      if(name.match(reg) || address.match(reg) || designation.match(reg))
      {
        alert("Can't enter numbers with letters");
      }
      else
      {
    //User Don't Select Any Image Set Default Image And Store Other Updated Data 
    if(filee=="")
    {
      const val="default.png";
      axios.post("http://localhost:4545/Add/emtupimg",{file:val}).then((err)=>{if(err)throw err})
      axios.post('http://localhost:4545/Add/insert',{
        name:name,
        address:address,
        designation:designation,
        salary:salary
      }).then((err)=>{
          console.log(err);
        })
        alert("insert");
        window.location.reload(true);
    }
    //User Update New Image This code executed And Other Updated Data
    else
    {
      axios.post("http://localhost:4545/Add/upimg",formdata).then((err)=>{if(err)throw err})
     axios.post('http://localhost:4545/Add/insert',{
     name:name,
     address:address,
     designation:designation,
     salary:salary
   }).then((err)=>{
       console.log(err);
     })
     alert("insert");
     window.location.reload(true);
    }
      }
  }
    else
    {
      alert("Not enter numbers..")
    }
  }
  }
  return (
      <div>
         <div className='row'>
           {/*---------------------------------------------------Naigation Section Start----------------------------------------------------------*/}
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <nav className='navbar nav'>
            <h2>Employee Management System</h2>
          </nav>
        </div>
        {/*------------------------------------------------------Navigation Section End-----------------------------------------------------------*/}
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 in'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
          {/*------------------------------------------------Update Fields Starts----------------------------------------------------*/}
          <form encType="multipart/form-data">
            <input className="inputbox1" type="file" name="img" onChange={(e)=>{setfilee(e.target.files[0])}} accept="image/jpeg,image/jpg,image/png"/>
            <input className='inputbox' type='text' placeholder='Enter Employee Name' onChange={(e)=>{newname(e.target.value)}}/>
            <input className='inputbox' type='text' placeholder='Enter Employee Designation' onChange={(e)=>{newdesignation(e.target.value)}}/>
            <input className='inputbox' type='text' placeholder='Enter Employee Address' onChange={(e)=>{newadddress(e.target.value)}}/>
            <input className='inputbox' type='number' placeholder='Enter Employee Salary' onChange={(e)=>{newsalary(e.target.value)}}/>
            <button className='btn btn-success bt'  onClick={add}>Add New Employee</button>
            </form>
            {/*------------------------------------------Update Field End-------------------------------------------------------------------*/}
            </div>
          </div>
        </div>
       
      </div>
  );
}
export default Add;