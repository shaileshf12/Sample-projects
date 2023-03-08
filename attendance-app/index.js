const express = require("express");
require("./db-connection/mongoose");
const Employer = require("./model/employer");
const bcrypt = require("bcryptjs");

const port = 4500;

const app = express();
app.use(express.json());

const findCrendentials = (phone, password) => {
  return new Promise(async (resolve, reject) => {
    const employer = await Employer.findOne({ phone });
    console.log(employer);
    if (!employer) {
      reject("Employer not found");
    }
    const employerPassword = employer.password;

    const isMatch = await bcrypt.compare(password, employerPassword);

    console.log(isMatch);

    if (!isMatch) {
      reject("Password not matched");
    }

    resolve(employer);
  });
};

app.post("/employer", async (req, res) => {
  const employer = new Employer(req.body);

  try {
    const emp = await Employer.findOne({ phone: employer.phone });
    console.log(emp);
    if (emp) {
      throw new Error("Employer already exist");
    }
    const token = employer.generateAuthToken();
    const newEmployer = await employer.save();
    res.status(201).send(newEmployer);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/employer/login", async (req, res) => {
  try {
    const employer = await findCrendentials(req.body.phone, req.body.password);
    console.log(employer);
    const token = await employer.generateAuthToken();
    res.status(200).send(employer);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/employer/logout", async (req, res)=>{


    try {
        const user = req.body.user
        user.tokens = user.tokens.filter((each)=>{
            return each.token!==req.body.token
        })

        const employer = new Employer(user)

        await employer.save()

        res.send(employer)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
  console.log("Listening to port", port);
});
