import { prisma } from '@/app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const teams = await prisma.club.findMany()
		console.log(teams)
		return NextResponse.json({ teams }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ status: 500 })
	}
}
