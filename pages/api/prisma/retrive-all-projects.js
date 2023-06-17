import prisma from "lib/prisma";

export default async function handler(req, res) {
  try {
    const res = await prisma.projects.findMany();

    res.status(200).json(res);
  } catch (e) {
    console.log(e);
  }
}