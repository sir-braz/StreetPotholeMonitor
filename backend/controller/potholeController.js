const Pothole = require('../model/pothole')

//Route to report a new pothole
exports.reportPothole = async (req, res, next) => {
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({'message': 'Error reporting'})
    }
}