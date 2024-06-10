import { prisma } from '@/app/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const transferPlayers = await prisma.transferMarket.findMany()
		return NextResponse.json({ transferPlayers }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ status: 500 })
	}
}
