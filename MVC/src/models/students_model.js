const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
      roll_number: { type: Number, required: true },
      batch_id: { type:mongoose.Schema.Types.ObjectId,ref:"batch", required: true },   
    //   branchId:{type:mongoose.Schema.Types.ObjectId,ref:"branch",required:true},  
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

module.exports = mongoose.model("student",studentSchema);