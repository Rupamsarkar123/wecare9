import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true,unique: true },
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
