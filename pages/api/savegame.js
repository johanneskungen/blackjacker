import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const savedGame = await prisma.game.create({
    data: {
      cards: 132,
      blackjacks: 3,
      true: 3,
      running: 9,
      dcard: 17,
      pcard: 16,
    },
  });
  if(savedGame) return res.json({
    message: "Successfully updated Blackjacker Database."
  })
}
