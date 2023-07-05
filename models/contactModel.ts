import mongoose from "mongoose"

const contactSchema: any = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema)
