import { publications, projects, cvEntries, type Publication, type InsertPublication, type Project, type InsertProject, type CVEntry, type InsertCVEntry } from "@shared/schema";

export interface IStorage {
  getPublications(): Promise<Publication[]>;
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  getCVEntries(): Promise<CVEntry[]>;
  createCVEntry(entry: InsertCVEntry): Promise<CVEntry>;
}

export class MemStorage implements IStorage {
  private publications: Map<number, Publication>;
  private projects: Map<number, Project>;
  private cvEntries: Map<number, CVEntry>;
  private currentId: number;

  constructor() {
    this.publications = new Map();
    this.projects = new Map();
    this.cvEntries = new Map();
    this.currentId = 1;
  }

  async getPublications(): Promise<Publication[]> {
    return Array.from(this.publications.values());
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentId++;
    const project: Project = {
      ...insertProject,
      id,
      link: insertProject.link ?? null,
      tags: insertProject.tags ?? null
    };
    this.projects.set(id, project);
    return project;
  }

  async getCVEntries(): Promise<CVEntry[]> {
    return Array.from(this.cvEntries.values());
  }

  async createCVEntry(insertEntry: InsertCVEntry): Promise<CVEntry> {
    const id = this.currentId++;
    const entry: CVEntry = {
      ...insertEntry,
      id,
      location: insertEntry.location ?? null,
      startDate: insertEntry.startDate ?? null,
      endDate: insertEntry.endDate ?? null,
      description: insertEntry.description ?? null,
      order: insertEntry.order ?? 0
    };
    this.cvEntries.set(id, entry);
    return entry;
  }
}

export const storage = new MemStorage();
