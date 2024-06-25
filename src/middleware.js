import { NextResponse ,NextRequest} from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

 const path = request.nextUrl.pathname
 const publicpath = path === '/login' || path === '/signup' || path==='/verifyemail' || path === '/'

 const token = request.cookies.get('token')?.value || ''
 if(publicpath && token){
    return NextResponse.redirect(new URL('/profile', request.nextUrl))
 }
 
 if(!publicpath && !token){
    return NextResponse.redirect(new URL('/' , request.nextUrl))
 }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ],
}