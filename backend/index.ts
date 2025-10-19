import { prisma } from "db";

const some = await prisma.user.findUniqueOrThrow({ where: { id: "123" } });
