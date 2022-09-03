const { Registrations } = require("../models/registrations.model");

const registrationExist = async (req, res, next) => {

    const { id } = req.params;
    const registration = await Registrations.findOne( { where: { id } });

    try {
        if(!registration){
            return res.status(404).json({
                status: "error",
                message: `The register whit ID ${id} doesent exist`
            })
        };

        req.registration = registration;

        next();

    } catch (error) {
        console.log(error);
    }


};

module.exports = { registrationExist };