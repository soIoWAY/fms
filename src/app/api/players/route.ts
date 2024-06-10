import { prisma } from '@/app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const players = await prisma.player.findMany()
		return NextResponse.json({ players }, { status: 200 })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ status: 500 })
	}
}
