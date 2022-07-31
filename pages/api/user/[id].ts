import type { NextApiRequest, NextApiResponse } from "next"
import type { User } from "@prisma/client"

import prisma from "../../../prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>
) {
  const { id } = req.query

  if (!id) {
    return res.status(400).json(null)
  }

  const user = await prisma.user.findFirst({
    where: {
      id: id as string,
    },
  })

  if (!user) {
    return res.status(403).json(null)
  }

  return res.status(200).json(user)
}
