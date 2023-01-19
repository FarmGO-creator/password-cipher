import express from "express";
import Vigenere from "../Vigenere";

const encodeExpress = express.Router();

encodeExpress.post('/', (req, res) => {
  const encode = {
    encoded: Vigenere.encrypt(req.body.message, req.body.password)
  }

   res.send(encode);
});

export default encodeExpress;