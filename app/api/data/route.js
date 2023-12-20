import { connectMongoDB } from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import Info from '@/models/info'

export async function POST(req){
    const {email, country, city, date} = await req.json()

    try {
        await connectMongoDB()
        await Info.create({email, country, city, date})

        return NextResponse.json({
            info: ['Info send successfully'],
            success:true,
        })
    } catch (error) {
        if(error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors){
                errorList.push(e.info)
            }
            return NextResponse.json({info : errorList})
        }
        else{
            return NextResponse.json({error})
        }
    }

    return NextResponse.json({info: ['hi']})
}