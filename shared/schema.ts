import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const publications = pgTable("publications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  venue: text("venue").notNull(),
  year: integer("year").notNull(),
  link: text("link"),
  abstract: text("abstract"),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  link: text("link"),
  tags: text("tags").array(),
});

export const cvEntries = pgTable("cv_entries", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'education', 'experience', 'award'
  title: text("title").notNull(), // Degree, Job Title, Award Name
  organization: text("organization").notNull(), // University, Company, Institution
  location: text("location"),
  startDate: text("start_date"),
  endDate: text("end_date"), // "Present" or date
  description: text("description"), // Bullet points or text
  order: integer("order").default(0),
});

export const insertPublicationSchema = createInsertSchema(publications).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertCVEntrySchema = createInsertSchema(cvEntries).omit({ id: true });

export type Publication = typeof publications.$inferSelect;
export type InsertPublication = z.infer<typeof insertPublicationSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type CVEntry = typeof cvEntries.$inferSelect;
export type InsertCVEntry = z.infer<typeof insertCVEntrySchema>;
