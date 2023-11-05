const express = require('express');
const {HistoryModel} = require('../model/historyModel')

const historyRouter = express.Router();

historyRouter.post("/data",async(req,res)=>{
    const {data }= req.body;
    try {
        const newData = await HistoryModel({data});
        newData.save();
        res.status(200).json({"msg":"Data added to the server"});
    } catch (error) {
        res.status(500).json("Internal server Issue")
    }
})

module.exports={historyRouter};