const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/usuarios", (req, res) => {
  console.log("Rota GET chamada");

  db.query("SELECT * FROM usuarios", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

router.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;

  db.query(
    "INSERT INTO usuarios(nome, email) VALUES (?, ?)",
    [nome, email],
    (err, result) => {
      if (err) return res.json(err);
      res.json("Usuário criado");
    }
  );
});

router.put("/usuarios/:id", (req, res) => {
  const { nome, email } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?",
    [nome, email, id],
    (err, result) => {
      if (err) return res.json(err);
      res.json("Usuário atualizado");
    }
  );
});

router.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM usuarios WHERE id = ?",
    [id],
    (err, result) => {
      if (err) return res.json(err);
      res.json("Usuário deletado");
    }
  );
});

module.exports = router;