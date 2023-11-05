const mongoose = require("mongoose");

const HistorySchema = mongoose.Schema(
  {
   data:{type:String,required:true},
   userID: String,
   username: String,
  },
  {
    versionKey: false,
  }
);

const HistoryModel = mongoose.model("history", HistorySchema);

module.exports = { HistoryModel };