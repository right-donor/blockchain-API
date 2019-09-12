/**
 *  ______   __                 __              __               _                  _       _______  _____  
 *|_   _ \ [  |               [  |  _         [  |             (_)                / \     |_   __ \|_   _| 
 *  | |_) | | |  .--.   .---.  | | / ]  .---.  | |--.   ,--.   __   _ .--.       / _ \      | |__) | | |   
 *  |  __'. | |/ .'`\ \/ /'`\] | '' <  / /'`\] | .-. | `'_\ : [  | [ `.-. |     / ___ \     |  ___/  | |   
 * _| |__) || || \__. || \__.  | |`\ \ | \__.  | | | | // | |, | |  | | | |   _/ /   \ \_  _| |_    _| |_  
 *|_______/[___]'.__.' '.___.'[__|  \_]'.___.'[___]|__]\'-;__/[___][___||__] |____| |____||_____|  |_____|
 * Built by: Fernando Martin Garcia Del Angel
 * Built on: September 12th, 2019                                                                                                        
 */
"use-strict"
 const express = require('express')
 const asyncHandler = require('express-async-handler')
 const query = require('./blockchain-functions/query')
 const app = express()
 const port = 80

 app.use(express.json())
 /**
  * Creates a new blood bag
  */
 app.post('/blood/createbloodbag/:bagId/:bagOriginID/:bagLocation/:bloodType/:bloodRH/:size', asyncHandler(async (req,res,next) =>{
    const receivedParams = req.params
    if(receivedParams.bagId == "" || receivedParams.bagOriginID == "" || receivedParams.bagLocation == "" || receivedParams.bloodType == "" || receivedParams.bloodRH == "" || receivedParams.size == ""){
        res.send(400)
    }
    const result = await query.main()
    console.log(result)
    res.send(200)
 }))

app.listen(port,()=>console.log(`Blockchain API listening on port ${port}!`))