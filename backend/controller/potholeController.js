const Pothole = require('../model/pothole')

//Route to report a new pothole
exports.reportPothole = async (req, res, next) => {
    try{

    }catch(err){
        console.log(err)
        res.status(404).json({'message': 'Error reporting'})
    }
}