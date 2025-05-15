import Contact from "../model/Contact.js";

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });

    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully", contact: newContact });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form", error: error.message });
  }
};

export { createContact}