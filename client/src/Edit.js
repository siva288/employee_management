import './Add.css'
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Edit=(props)=>
{
  const [name,setname]=useState("");
  const [field,setfield]=useState("");
  const [input,setinput]=useState("");
  const [id,setid]=useState(0);
  const [updateimage,setupdateimage]=useState("");
  const [proname,setproname]=useState("");

//Store Data From Redux
  useEffect(()=>{
        setname(props.name);
        setid(props.id);
  },[])
  //Filder User Given Data Is Not Contain Numbers and Empty and Other Unwanted Data
  const check=(e)=>{
    if(field==="salary")
    {
     if(isNaN(e.target.value)===false)
     {
      setinput(e.target.value);
     }
     else
     {
       alert("Not Enter Letters")
     }
    }
    else
    {
      switch(field)
      {
        case "name":
          if(isNaN(e.target.value)){
           setinput(e.target.value);
          } 
          else{
           setinput("numberval")
            alert("Not enter Numbers")
           }
           break;
           case "address":
             if(isNaN(e.target.value)){
              setinput(e.target.value);
             } 
             else{
              setinput("numberval")
               alert("Not enter Numbers")
              }
              break;
              case "designation":
               if(isNaN(e.target.value)){
                setinput(e.target.value);
               } 
               else{
                setinput("numberval")
                 alert("Not enter Numbers")
                }
                break;
          default :
          setinput(e.target.value);
          break;
      }
    }
   }
   //Delete The Profile Image
   const delpro=()=>
   {
    axios.put("http://localhost:4545/edit/delproname/"+id+"").then((err,res)=>{
      if(err)
      {
        throw err
    }
  });
  alert("profile image delete")
   }
  //Save Button Clicked Function
  const save =()=>
  {
    const fromdatas = new FormData();
    fromdatas.append("updateimage",updateimage);
    //Check User Enter Numbers and Empty Fields and Other Unwanted Data
    if(updateimage==="")
    {
        if(field==="")
        {
          alert("Select any Field");
        }
        else
        {
          if(input==="")
          {
            alert("Enter any value");
          }
          else
          {
            if(input==="numberval")
            {
              alert("Not enter Numbers");
            }
            else
            {
              switch(field)
              {
                //User Choose Salary Field When Update This Function Executed
                case "salary":
                  axios.put("http://localhost:4545/edit/update",{input:input,names:id,fields:field})
                  alert("edited successfully..");  
                break;
                default:
                //User Choose Other Fields When Update This Function executed
                  let reg=/\d+/g;
                  if(input.match(reg))
                  {
                    alert("Can't Enter Numbers with Letters");
                  }
                  else
                {
                  //User Don't Choose Any Image When Update This Function Executed 
                  if(updateimage==="")
                  {
                    axios.get("http://localhost:4545/edit/getidupdate/"+id+"").then((err,res)=>{
                      if(err)
                      {
                        throw err
                      }
                      else
                      {
                        const ooldimage=res.data;
                        axios.put("http://localhost:4545/edit/oldimageupdate",{oldimg:ooldimage,id:id}).then((err)=>{if(err)throw err})
                      }
                    })
                  }
                  //User Choose New Image For Update Our Profile This Code Executed
                  else
                  {
                    axios.put("http://localhost:4545/edit/imageupdate/"+id+"",fromdatas).then((err)=>{if(err)throw err})
                  }
                  //User Update Any Our data This Code executed
                  axios.put("http://localhost:4545/edit/update",{input:input,names:id,fields:field}).then((err)=>{console.log(err)})
                    alert("edited successfully..");
                }
                break;
              }
            }
          }
        }
    }
    else
    {
      if(field==="")
      {
        axios.put("http://localhost:4545/edit/imageupdate/"+id+"",fromdatas).then((err)=>{if(err)throw err})
        alert("Profile Picture Update")
      }
      else
      {
          if(input==="")
          {
            alert("Enter any value");
          }
          else
          {
            if(input==="numberval")
            {
              alert("Not enter Numbers");
            }
            else
            {
              switch(field)
              {
                //User Choose Salary Field When Update This Function Executed
                case "salary":
                  axios.put("http://localhost:4545/edit/update",{input:input,names:id,fields:field})
                  alert("edited successfully..");  
                break;
                default:
                //User Choose Other Fields When Update This Function executed
                  let reg=/\d+/g;
                  if(input.match(reg))
                  {
                    alert("Can't Enter Numbers with Letters");
                  }
                  else
                  {
                    axios.put("http://localhost:4545/edit/imageupdate/"+id+"",fromdatas).then((err)=>{if(err)throw err})
                    axios.put("http://localhost:4545/edit/update",{input:input,names:id,fields:field}).then((err)=>{console.log(err)})
                    alert("edited successfully..");
                  }
               }
             }
            }
          }
      }
  }
  
  return(
    <div>
       <div className='row'>
          {/*---------------------------------------------Navigation Section Start-------------------------------------------------------------*/}
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <nav className='navbar nav'>
            <h2>Employee Management System</h2>
          </nav>
        </div>
        {/*--------------------------------------------Navigation Section End-------------------------------------------------------------------*/}
        </div>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 in'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              {/*User Choose Image For Update*/}
              <input type="file" className="inputbox" onChange={(e)=>{setupdateimage(e.target.files[0])}} accept="image/jpg,image/jpeg,image/png"/>
            <select className="s1" >
              {/*Automatically Show User Name From Redux*/}
            <option >{props.name}</option>
            </select>
            {/*For Choose Field For Update*/}
            <select className="s1" onChange={(e)=>{
              setfield(e.target.value)
              {/*Check User Select Salary Field or Not For Avoid Unwanted Data*/}
              if(e.target.value ==="salary")
              {
                document.getElementById("inputbox").type="number";
              }
              else
              {
                document.getElementById("inputbox").type="text";
              }
            }
              } >
            <option >Choose Any Field</option>
              <option  value="name">Name</option>
              <option  value="address">Address</option>
              <option  value="designation">Designation</option>
              <option  value="salary">Salary</option>
            </select>
            {/*Get User New Data For Update*/}
         <input className="inputbox" id="inputbox" onChange={check} placeholder="Enter Correction Value"/>
            <button className='btn btn-success bt bt1' onClick={save}>Save</button>
            <button className='btn btn-success bt bt1'>Cancel</button>
            <button className='btn btn-success bt bt2' id="delpros" onClick={delpro}>Remove profile Image</button>
            </div>
          </div>
        </div>
    </div>
  );
}
//Get The Data From Redux
const mapStateToProps=(state)=>
{
return{
  name:state.add.name,
  id:state.add.id,
  imagename:state.add.imagename
}
}
export default connect(mapStateToProps,null)(Edit);