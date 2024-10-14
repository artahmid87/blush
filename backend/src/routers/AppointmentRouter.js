const express = require('express')
const { bookingController,getBookingContoller,removeBooking } = require('../controllers/AppointmentController')
const AppointmentRouter = express.Router()


AppointmentRouter.post('/booking', bookingController)
AppointmentRouter.get('/get/customer', getBookingContoller)
AppointmentRouter.delete('/delete/booking/:id', removeBooking)

module.exports = {AppointmentRouter}