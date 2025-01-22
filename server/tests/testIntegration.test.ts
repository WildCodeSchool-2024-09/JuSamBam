import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import supertest from "supertest";
import databaseClient from "../database/client";
import app from "../src/app";

describe("Videogame API Endpoints", () => {
  // Test GET /api/videogames : vérifier la récupération des jeux
  test("GET /api/videogames doit retourner la liste des jeux vidéo", async () => {
    const response = await supertest(app).get("/api/videogames");

    // Vérification de la réponse
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("title");
    expect(response.body[0]).toHaveProperty("img");
  });
  // Après tous les tests, fermer la connexion à la base
  afterAll(async () => {
    await databaseClient.end();
  });
});
