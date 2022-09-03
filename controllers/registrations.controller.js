const { Registrations } = require('../models/registrations.model');

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();

    res.status(200).json({
      status: 'succes',
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegistrationsById = async (req, res) => {
  try {
    const { id } = req.params;

    const registrations = await Registrations.findOne({ where: { id } });

    res.status(200).json({
      status: 'succes',
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistrations = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registrations.create({ entranceTime });

    res.status(200).json({
      status: 'succes',
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { exitTime, status } = req.body;
    const { registration } = req;

    await registration.update({ exitTime, status });

    res.status(200).json({
      status: 'success',
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { registration } = req;

    await registration.update({ status: 'cancelled' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistrations,
  getRegistrationsById,
  createRegistrations,
  updateRegistration,
  deleteRegistration,
};
