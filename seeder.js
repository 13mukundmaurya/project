const fs = require("fs")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const User = require("./models/user.model")
const Package = require("./models/package.model")
const Destination = require("./models/destination.model")

mongoose.connect(process.env.MONGODB_URI)

const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8"))

const packages = JSON.parse(fs.readFileSync(`${__dirname}/_data/packages.json`, "utf-8"))

const destinations = JSON.parse(fs.readFileSync(`${__dirname}/_data/destinations.json`, "utf-8"))

const importData = async () => {
  try {
    await User.create(users)
    await Destination.create(destinations)
    await Package.create(packages)

    console.log("Data imported successfully")
    process.exit()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const deleteData = async () => {
  try {
    await User.deleteMany()
    await Destination.deleteMany()
    await Package.deleteMany()

    console.log("Data destroyed successfully")
    process.exit()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

if (process.argv[2] === "-i") {
  importData()
} else if (process.argv[2] === "-d") {
  deleteData()
} else {
  console.log("Please use -i to import or -d to delete data")
  process.exit()
}

