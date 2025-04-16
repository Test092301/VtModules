import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact inquiry
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({
        message: "Contact inquiry submitted successfully",
        id: contact.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
