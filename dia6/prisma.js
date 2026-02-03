/* const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createUser() {
    const user = await prisma.user.create({
        data: {
            username: "john_doe",
            email: "john@example.com",
            password: "secret123"
        },
    });
    console.log("User created:", user);
}

createUser() */


import { PrismaClient } from './generated/prisma/client'

const prisma = new PrismaClient();

async function createUser() {
    const user = await prisma.user.create({
        data: {
            username: "john_doe",
            email: "john@example.com",
            password: "secret123"
        },
    });
    console.log("User created:", user);
}

createUser()