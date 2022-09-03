const express = require('express');

const {
  getAllRegistrations,
  getRegistrationsById,
  createRegistrations,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registrations.controller');

const registrationsRouter = express.Router();

const {
  registrationExist,
} = require('../middlewares/registrations.middleweares');

registrationsRouter.get('/', getAllRegistrations);

registrationsRouter.get('/:id', registrationExist, getRegistrationsById);

registrationsRouter.post('/', createRegistrations);

registrationsRouter.patch('/:id', registrationExist, updateRegistration);

registrationsRouter.delete('/:id', registrationExist, deleteRegistration);

module.exports = { registrationsRouter };
