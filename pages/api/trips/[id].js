import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const trip = await prisma.Trip.findUnique({
        where:{
         id:parseInt(req.query.id)
        }
    })
    res.status(200).json(trip)
  }
	if (req.method === 'PUT') {
    
  }
	if (req.method === 'DELETE') {
    
  }
}