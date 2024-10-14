const Appointment = require("../database/model/appointment");


const bookingController  = async (req, res, next) => {
  try {
    
    const {name, email , phone, subject , date, time, description} = req.body
    
    if(!name || !email || !phone || !subject || !date || !time ||  !description){
        return res.status(404).send("All Field are Required")
    }

    //  const sameDate = await Appointment.findOne({
    //   where:{
    //     date:date
    //   } 
    //  })
    //  if(existingDateAndTime){
    //   return res.status(404).send("Appointment not available!")
    //  }

     const booking =  await Appointment.create({name, email , phone, subject , date, time, description})
     res.status(200).send({
      message:"success",
      booking
     })



  } catch (error) {
    next(error)
  }

}


const getBookingContoller  =  async (req, res, next) => {
    try {
        const customer  = await Appointment.findAll()
        res.status(200).send(customer)
     
    } catch (error) {
      next(error);
    }
}


const removeBooking = async(req, res, next) =>{

  try {
    const {id} = req.params
    console.log(id)
  
  const booking = Appointment.findOne({
    where:{
      id:id
    }
  })

  if(!booking){
    return res.status(404).send(next("Booking Not Found!"))
  }
  

  await Appointment.destroy({
    where:{
      id:id
    }
  })
  res.send("Delete successfully")
  
    
  } catch (error) {
    next(error)
  }
}

module.exports = {bookingController, getBookingContoller , removeBooking}

