import prisma from 'lib/prisma'

export default async function handler(req, res) {
    res.send({message:'hello'})
}