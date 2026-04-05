// import prisma adapter mariadb
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// import prisma client
import { PrismaClient } from "./generated/prisma/client";

// ensure only a single instance of prisma client is created
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function createPrismaClient() {
  const url = process.env.DATABASE_URL;
  if (!url?.trim()) {
    throw new Error(
      "DATABASE_URL is not set. Add it to your .env file (see prisma.config.ts).",
    );
  }

  const adapter = new PrismaMariaDb(url);

  return new PrismaClient({
    adapter,
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
