import Pact from "../models/pact.js";

export const getPacts = async (req, res) => {
  res.send("get all pacts");
};

export const createPact = async (req, res) => {
  res.send("created a pact");
};
export const getPact = async (req, res) => {
  res.send("get a pact");
};
export const updatePact = async (req, res) => {
  res.send("update a pact");
};
export const deletePact = async (req, res) => {
  res.send("delete a pact");
};
