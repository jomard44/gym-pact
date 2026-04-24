import Pact from "../models/pact.js";

export const getPacts = async (req, res) => {
  try {
    const pacts = await Pact.find().populate("users");
    if (pacts.length === 0) {
      return res.status(404).json({ message: "no pacts avilable" });
    }
    res.status(200).json({ pacts });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const createPact = async (req, res) => {
  try {
    const newPact = req.body;
    if (!newPact) {
      return res.status(400).json({ message: "something went wrog" });
    }
    const pact = await Pact.create(newPact);
    res.status(201).json({ message: "pact has been created", pact });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const getPact = async (req, res) => {
  try {
    const { id } = req.params;
    const pact = await Pact.findOne({ _id: id });
    if (!pact) {
      return res.status(404).json({ message: "this pact does not exist" });
    }
    res.status(200).json({ message: "found it", pact: pact });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};
export const updatePact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPact = await Pact.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!updatedPact) {
      return res.status(404).json({ message: "this pact does not exist" });
    }
    res.status(200).json({ message: "update succesfully", updatedPact });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};
export const deletePact = async (req, res) => {
  try {
    const { id } = req.params;
    const pact = await Pact.findOneAndDelete({ _id: id });
    if (!pact) {
      return res.status(404).json({ message: "this pact does not exist" });
    }
    res.status(204);
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};
