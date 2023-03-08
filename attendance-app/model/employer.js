
const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const employerSchema = mongoose.Schema({

    company_name : {
        type : String,
        minlength : 3,
        required : true
    },

    employer_name : {
        type : String,
        minlength : 3,
        required : true
    },

    phone : {
        type : Number,
        required : true
    },

    employer_id : {
        type : String,
        minlength : 4,
        required : true
    },

    password : {
        type : String,
        required : true,
        minlength : 4
    },
    
    // confirm_password : {
    //     type : String,
    //     required : true,
    //     minlength : 4
    // },

    tokens : [{
        token : {
            type : String,
        }
    }]

})


employerSchema.methods.generateAuthToken = async function () {
    const employer = this
    const token = jwt.sign({ _id: employer._id.toString() }, 'mysecreteapp')

    employer.tokens = employer.tokens.concat({token})

    await employer.save()

    return token
}

employerSchema.pre('save', async function(next){
    const employer = this

    if(employer.isModified('password')){
        employer.password = await bcrypt.hash(employer.password, 8)
    }

    // console.log(employer)
    next()

})

// employerSchema.statics.findCrendentials = async(phone, password) =>{

//     const employer = await Employer.findOne({phone})
//         // console.log(employer)
//     if(!employer)
//     {
//         throw new Error("employer not found")
//     }
//     const employerPassword = employer.password

//     const isMatch = await bcrypt.compare(password, employerPassword)

//     console.log(isMatch)

//     if(!isMatch){
//         throw new Error("Incorrect password")
//     }

//     console.log(employer)

//     return employer
// }

const employer = mongoose.model('Employer', employerSchema)

module.exports = employer;