require('dotenv').config();

const ENV ={
     PORT : process.env.PORT || 5000,
     DBNAME:process.env.DBNAME || 'blush',
     DBUSERNAME:process.env.DBUSERNAME || "root",
     DBPASSWORD:process.env.DBPASSWORD || '',

}

 module.exports = ENV