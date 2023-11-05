const express = require('express');
const {HistoryModel} = require('../model/historyModel')

const historyRouter = express.Router();

historyRouter.post("/add",async(req,res)=>{
    const {data }= req.body;
    try {
        const newData = new HistoryModel({data});
        newData.save();
        res.status(200).json({"msg":"Data added to the server",newData});
    } catch (error) {
        res.status(500).json("Internal server Issue")
    }
})

historyRouter.get("/",async(req,res)=>{
    try {
        const data = await HistoryModel.find()
        res.status(200).json({"msg":"data got successfully",data})

    } catch (error) {
        res.status(500).json("Internal server Error")
    }
})

module.exports={historyRouter};