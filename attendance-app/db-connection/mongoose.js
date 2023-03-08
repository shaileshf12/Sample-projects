const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

// const url = 'mongodb+srv://shaileshf12:AttendanceApp@cluster0.816ipcx.mongodb.net/?retryWrites=true&w=majority/attendance-app'

const url = 'mongodb+srv://shaileshf12:AttendanceApp@cluster0.816ipcx.mongodb.net/attendance-app'

mongoose.connect(url, {useNewUrlParser : true}).then(()=>{
    console.log("Connection successfull")
})

