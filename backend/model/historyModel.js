const mongoose = require("mongoose");

const HistorySchema = mongoose.Schema(
  {
   data:{type:String,required:true}
  },
  {
    versionKey: false,
  }
);

const HistoryModel = mongoose.model("history", HistorySchema);

module.exports = { HistoryModel };