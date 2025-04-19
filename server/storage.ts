import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact 
} from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from 'pg';
const { Pool } = pkg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Successfully connected to PostgreSQL database');
    release();
  }
});

const db = drizzle(pool);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
}

export class PostgresStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where({ id }).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where({ username }).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const timestamp = new Date();
    const contact = { ...insertContact, createdAt: timestamp, status: "new" };
    const result = await db.insert(contacts).values(contact).returning();
    return result[0];
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getContact(id: number): Promise<Contact | undefined> {
    const result = await db.select().from(contacts).where({ id }).limit(1);
    return result[0];
  }
}

export const storage = new PostgresStorage();
