/**
 * ?? TEST D’API AVEC JEST + SUPERTEST
 * Objectif : vérifier que les routes / et /users fonctionnent correctement.
 */

import request from "supertest"; // pour simuler des requêtes HTTP
import express from "express"; // pour créer une instance de ton app
import { db } from "../db.js"; // pour interagir avec ta base MySQL

// ? Création d’une application Express de test
const app = express();
app.use(express.json());
router.get("/", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur" });
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { title, user_id } = req.body;
  const sql = "INSERT INTO tasks (title, user_id) VALUES (?, ?)";
  db.query(sql, [title, user_id], (err, result) => {
    if (err) return res.status(500).json({ message: "Erreur serveur" });
    res.json({ id: result.insertId, title });
  });
});
