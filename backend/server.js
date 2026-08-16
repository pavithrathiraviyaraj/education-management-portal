const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const Student=require("./models/Student");
const Admin=require("./models/Admin");
const authMiddleware=require("./middleware/authMiddleware");
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"Education Management Portal API is running"});
});

app.post("/api/students",authMiddleware,async(req,res)=>{
    try{
        const student=new Student(req.body);
        const savedStudent=await student.save();
        res.status(201).json(savedStudent);
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

app.get("/api/students",authMiddleware,async(req,res)=>{
    try{
        const students=await Student.find();
        res.json(students);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

app.get("/api/students/:id",authMiddleware,async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id);

        if(!student){
            return res.status(404).json({message:"Student not found"});
        }

        res.json(student);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

app.put("/api/students/:id",authMiddleware,async(req,res)=>{
    try{
        const student=await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        );

        if(!student){
            return res.status(404).json({message:"Student not found"});
        }

        res.json(student);
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

app.delete("/api/students/:id",authMiddleware,async(req,res)=>{
    try{
        const student=await Student.findByIdAndDelete(req.params.id);

        if(!student){
            return res.status(404).json({message:"Student not found"});
        }

        res.json({message:"Student deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

app.post("/api/auth/register",async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        if(!name||!email||!password){
            return res.status(400).json({
                message:"Name, email and password are required"
            });
        }

        const existingAdmin=await Admin.findOne({email});

        if(existingAdmin){
            return res.status(400).json({
                message:"Admin already exists"
            });
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const admin=new Admin({
            name,
            email,
            password:hashedPassword
        });

        const savedAdmin=await admin.save();

        res.status(201).json({
            message:"Admin registered successfully",
            admin:{
                id:savedAdmin._id,
                name:savedAdmin.name,
                email:savedAdmin.email
            }
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

app.post("/api/auth/login",async(req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email||!password){
            return res.status(400).json({
                message:"Email and password are required"
            });
        }

        const admin=await Admin.findOne({email});

        if(!admin){
            return res.status(401).json({
                message:"Invalid email or password"
            });
        }

        const passwordMatch=await bcrypt.compare(
            password,
            admin.password
        );

        if(!passwordMatch){
            return res.status(401).json({
                message:"Invalid email or password"
            });
        }

        const token=jwt.sign(
            {
                id:admin._id,
                email:admin.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        );

        res.json({
            message:"Login successful",
            token,
            admin:{
                id:admin._id,
                name:admin.name,
                email:admin.email
            }
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB Connected Successfully");
    })
    .catch((err)=>{
        console.log("MongoDB Connection Error:",err.message);
    });

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});