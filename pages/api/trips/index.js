// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from 'lib/prisma'


export default async function handler(req, res) {
  if(req.method == 'GET') {
    const trips = await prisma.Trip.findMany()

    await Promise.all(
      trips.map(async (trip) => {
        trip.expenses = await prisma.Expense.findMany({
          where: {
            trip:trip.id
          }
        })
      })
    )

    res.status(200).json(trips)
    return
  }

  if(req.method === 'POST') {
    const {user, name, start_date, end_date} = req.body
  
    if(!user) {
      return res
      .status(400)
      .json({message:'Missing required params `user` '})
    }
    if(!name) {
      return res
      .status(400)
      .json({message:'Missing required params `name` '})
    }
    console.log(user,name)
    await prisma.Trip.create({
      data:{
        user,
        name,
        start_date,
        end_date,
      }
    })

    return res.status(200).end()
 
  }

  res.status(405).json({message:'Method Not Allowed'})

}
