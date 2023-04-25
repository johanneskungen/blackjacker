import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { player, dealer } = req.body;
  const savedGame = await prisma.game.create({
    data: {
      win: true, 
      dcard: parseInt(dealer),
      pcard: parseInt(player),
    },
  });
  if (savedGame)
    return res.json({
      message: "Successfully updated Blackjacker Database.",
    });
  return res.json({
    message: "Error while trying to update Blackjacker Database.",
  });
}
