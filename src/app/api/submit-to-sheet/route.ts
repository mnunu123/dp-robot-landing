import { NextRequest, NextResponse } from 'next/server'

const GAS_URL = process.env.GOOGLE_SCRIPT_WEB_APP_URL

export async function POST(req: NextRequest) {
  if (!GAS_URL) {
    console.error('GOOGLE_SCRIPT_WEB_APP_URL is not set')
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    )
  }

  try {
    const body = await req.json()
    const { name, phone } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const payload = {
      name: String(name).trim(),
      phone: String(phone).trim(),
    }

    const res = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('GAS error:', res.status, text)
      return NextResponse.json(
        { error: 'Failed to submit to sheet' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
