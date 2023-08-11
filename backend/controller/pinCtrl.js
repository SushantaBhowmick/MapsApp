const Pin = require('../models/pinModel')
exports.createPin= async(req,res)=>{
   
    try {
        const newPin = await Pin.create(req.body);

        res.status(201).json(newPin)
        
    } catch (err) {
        res.status(500).json(err)
        
    }
}
// exports.createPin= async(req,res)=>{
   
//     const newPin = new Pin(req.body);
//     try {
//         const savedPin = await newPin.save()

//         res.status(201).json(savedPin)
        
//     } catch (err) {
//         res.status(500).json(err)
        
//     }
// }


exports.getAllPin= async(req,res)=>{
   
    try {
        const pin = await Pin.find();

        res.status(200).json(pin)
        
    } catch (error) {
        res.status(500).json(err)
        
    }
}