import { prisma } from "db";

const user = await prisma.user.findUniqueOrThrow({ where: { id: "123" } });
