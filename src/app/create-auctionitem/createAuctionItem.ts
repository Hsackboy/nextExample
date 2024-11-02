"use server"
import { randomInt } from "crypto"
import { prisma } from "../prisma"


export async function CreateAutionItem() {
    await prisma.auksjonsObjekt.create({
        data: {
            approved: true,
            autorId: 2,
            autorName: "Fredrik",
            description: "Huset mitt, det er veldig pent",
            pris: randomInt(100),
            lastSellTime: new Date("2022-03-25"),
            sistBud: new Date("2022-03-25")

        }
    })
}