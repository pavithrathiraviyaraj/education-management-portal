const mongoose=require("mongoose");

const subjectMarkSchema = new mongoose.Schema({
    subject_code: String,
    subject_name: String,
    assignment_score: { type: Number, default: 0 },
    midterm_score: { type: Number, default: 0 },
    endterm_score: { type: Number, default: 0 },
    total_score: { type: Number, default: 0 },
    grade: { type: String, default: "N/A" }
});

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    rollNumber:{
        type:String,
        required:true,
        unique:true
    },
    course:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    attendance_pct: { type: Number, default: 80.0 },
    assignment_avg: { type: Number, default: 75.0 },
    midterm_score: { type: Number, default: 70.0 },
    endterm_score: { type: Number, default: 72.0 },
    previous_gpa: { type: Number, default: 7.5 },
    subject_marks: [subjectMarkSchema]
},{timestamps:true});

module.exports=mongoose.model("Student",studentSchema);