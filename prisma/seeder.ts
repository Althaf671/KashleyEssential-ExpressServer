import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Password yang mau di-hash
  const plainPassword = "Kashy24!";

  // Hash password, misal saltRounds = 10
  const hashedPassword = await bcrypt.hash(plainPassword, 12);

  // Insert user
  const user = await prisma.user.create({
    data: {
      email: "kashgallery24@gmail.com",
      name: "Kashley",
      password: hashedPassword,// simpan yang sudah di-hash
    },
  });

  console.log("User created:", user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });