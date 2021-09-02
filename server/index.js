const sql =require("mysql");
const express = require('express');
const app= express();
const bodyparse = require('body-parser');
const cors=require('cors');
const fileupload=require("express-fileupload");
const path=require('path');

// Create Database Connection
const con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

//Connect the Database
con.connect(function(err)
{
if(err)
{
     console.log("connection error..")
throw err;
}
else{
    console.log("db connect..")
}
});

//Some file running configuraitons
app.use(bodyparse.urlencoded({extended:true}));
 app.use(cors());
 app.use(express.json());
app.use(fileupload());

//Insert User Profile Image to Database
app.post("/Add/upimg",(req,res)=>{
  const file=req.files.file;
        const filename=Date.now()+"-"+file.name;
        const paths="../client/src/uploads/"+filename;
        file.mv(paths,(err)=>{
            if(err)
            {
                throw err;
            }
            else
            {
                console.log("file upload..");
            }
        })
        en5="INSERT INTO employeeprofile (profileimage) VALUES('"+filename+"')";
        con.query(en5,(err)=>{
            if(err)throw err;
        })
        
})

 //Insert User Data to Database
 app.post('/Add/insert',(req,res)=>
 {
         const name=req.body.name;
         const address=req.body.address;
         const designation=req.body.designation;
         const salary=req.body.salary;
       const en="INSERT INTO employee (name,address,designation,salary) VALUES('"+name+"','"+address+"','"+designation+"','"+salary+"')";
         con.query(en,(err)=>
         {
             if(err)
             {
             console.log("error in insert..")
             console.log(err);
             }
         })
 })

 //Don't Choose Any Image When User Update 
 app.post("/Add/emtupimg",(req,res)=>
 {
     const filename=req.body.file;
     en11="INSERT INTO employeeprofile(profileimage) VALUES('"+filename+"')";
     con.query(en11,(err)=>
     {
         if(err)
         {
             throw err;
         }
         else
         {
             console.log("default image upload in database...")
         }
     })
 })

 //Get the user profile Image From Database For Display
 app.get("/App/profileimage",(req,res) =>
 {
         en6="SELECT * FROM employeeprofile";
        con.query(en6,(error,result)=>{
            if(error)
            {
                throw error;
            }
            else
            {
                console.log(result);
                res.send(result);
            }
        })
})

//Get the User Data From Database For Display
app.get("/App/get",(req,res)=>
{
    en1="SELECT * FROM employee";
    con.query(en1,(err,result)=>
    {
        if(err)
        {
        console.log("error in get data");
        console.log(err);
        }
        else
        {
            console.log(result);
        res.send(result);
        }
    })
})

//Get the User Proile Photo 
app.get("/edit/getidupdate",(req,res)=>{
    const id=req.body.id;
    en10="SELECT * FROM employeeprofile WHERE id="+id+"";
    con.query(en10,(err,ress)=>
    {
        if(err)
        {
            throw err;
        }
        else
        {
            res.send(ress.data);
        }
    })
})

//Delete the User From Database
app.delete("/App/del/:id",(req,res)=>{
 const id=req.params.id;
 console.log(id);
 const en4="DELETE FROM employee WHERE id="+id+"";
 con.query(en4,(res)=>{
     console.log(res);
 })
})
//Delete The User Profile Photo
app.put("/edit/delproname/:id",(req,res)=>{
    const id=req.params.id;
    en14="UPDATE employeeprofile SET profileimage='default.png' WHERE id="+id+"";
    con.query(en14,(err)=>
    {
        if(err) 
        {
            throw err;
            
        }
        else
        {
            console.log("profile image delete");
        }
});
   
})
//Update the User profile photo
app.put("/edit/imageupdate/:id",(req,res)=>{
    const file=req.files.updateimage;
    const id=req.params.id;
    const filename=Date.now()+"-"+file.name;
    const paths="../client/src/uploads/"+filename;
    file.mv(paths,(err)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("update upload..");
        }
    })
    en8="UPDATE employeeprofile SET profileimage='"+filename+"' WHERE id="+id+"";
    con.query(en8,(err)=>{
        if(err)throw err;
    })
})

//User Don't choose Image When update Keep Old Image In Database
app.put("/edit/oldimageupdate",(req,res)=>{
    const oldimagename=req.body.oldimg;
    const id=req.body.id;
    console.log(id);
    console.log(oldimagename);
    en9="UPDATE employeeprofile SET profileimage='"+oldimagename+"' WHERE id="+id+"";
    con.query(en9,(err)=>
    {
        if(err)
       {
           throw err;
       } 
    })
})
//Update the User Data To Database
app.put("/edit/update",(req,res)=>{
const idd=req.body.names;
const nameee=req.body.fields;
const designationn=req.body.input;

en3="UPDATE  employee SET "+nameee+"='"+designationn+"' WHERE id="+idd+"";
con.query(en3,(result)=>
{
console.log(result);
})
});

//Port Configuration
app.listen(4545,(err,req)=>
{
    if(err) throw err;
    else
    {
        console.log('ports listen')
    }
});