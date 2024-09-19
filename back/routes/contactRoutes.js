import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phoneNumber } = req.body;

  try {
    const newContact = new Contact({ firstName, lastName, email, phoneNumber });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving contact' });
  }
});

export default router;
