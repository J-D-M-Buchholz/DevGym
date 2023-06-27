import mongoose from "mongoose"

const contactSchema: any = new mongoose.Schema({
  name: {
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
  message: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema)
