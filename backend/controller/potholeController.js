const Pothole = require('../model/pothole')

//Route to report a new pothole
exports.reportPothole = async (req, res, next) => {
    try{
        const {latitude, longitude, description} = req.body
        // Create a new Pothole object
        const pothole = new Pothole({
            latitude,
            longitude,
            description
        })
        //Save the pothole to the database
        const savedPothole = await pothole.save()
        res.status(200).json({error: 'Pothole reported successfully.'})
    }catch(err){
        console.log(err)
        res.status(500).json({'message': 'Error reporting'})
    }
}