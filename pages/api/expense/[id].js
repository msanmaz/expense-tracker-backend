import prisma from 'lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const trip = await prisma.expense.findUnique({
        where:{
         id:parseInt(req.query.id)
        }
    }) 
    if (!trip) {
        return res.status(404).json({ message: 'Not Found' })
      }
      
    res.status(200).json(trip)
  }
	if (req.method === 'PUT') {
        if (req.method === 'PUT') {
            const { trip, name, date, amount, currency } = req.body
          
            await prisma.Expense.update({
              data: {
                trip,
                name,
                date,
                amount,
                currency,
              },
              where: {
                id: parseInt(req.query.id),
              },
            })
          
            return res.status(200).end()
          }
  }
  if (req.method === 'DELETE') {
    await prisma.Expense.delete({
      where: {
        id: parseInt(req.query.id),
      },
    })
  
    return res.status(200).end()
  }
}