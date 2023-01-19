import express from "express";
import Vigenere from "../Vigenere";

const decodeExpress = express.Router();


decodeExpress.post('/', (req, res) => {
  const decoded = {
    decoded: Vigenere.decrypt(req.body.message, req.body.password)
  }

  res.send(decoded)
});

export default decodeExpress;