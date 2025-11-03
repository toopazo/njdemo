'use server'

import { cookies } from 'next/headers'

async function setAuthToken(tokenValue) {
    const cookieStore = cookies() // Get the cookie store instance

    cookieStore.set('AUTH_TOKEN', tokenValue, {
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === 'production', // Use https in production
        sameSite: 'lax', // Or 'strict' or 'none' depending on your needs
        maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
        path: '/', // The path for which the cookie is valid
    })
}

async function getAuthToken() {
    const cookieStore = cookies()
    const token = cookieStore.get('AUTH_TOKEN')?.value

    // const res = await fetch('https://api.example.com/profile', {
    //     headers: {
    //         Cookie: `AUTH_TOKEN=${token}`,
    //         // Other headers
    //     },
    // })

    // ....
    return token
}