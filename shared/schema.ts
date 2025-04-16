import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User Schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact Schema
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  inquiryType: varchar("inquiry_type", { length: 50 }).notNull(),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactSchema = createInsertSchema(contacts).pick({
  name: true,
  company: true,
  email: true,
  phone: true,
  inquiryType: true,
  message: true,
}).extend({
  // Privacy policy acceptance is required but not stored in DB
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

export type InsertContact = z.infer<typeof contactSchema>;
export type Contact = typeof contacts.$inferSelect;
