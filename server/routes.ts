import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.publications.list.path, async (req, res) => {
    const publications = await storage.getPublications();
    res.json(publications);
  });



  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.projects.create.path, async (req, res) => {
    const input = api.projects.create.input.parse(req.body);
    const project = await storage.createProject(input);
    res.status(201).json(project);
  });

  return httpServer;
}
