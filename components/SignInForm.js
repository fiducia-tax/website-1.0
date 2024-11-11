import Logo from '@/constants/Logo'
import GoogleIcon from '@/icons/GoogleIcon'
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const SignInForm = () => {
    return (
        <div className='flex justify-center mt-12'>
            <div className='flex justify-center bg-secondary border-b-8 border-b-accent p-9 w-full max-w-md'>
                <form>
                    <div className='flex justify-center p-3'>
                        <Logo />
                    </div>
                    <div className='flex justify-center'>
                        <h1 className='text-2xl font-bold py-2'>Sign In</h1>
                    </div>
                    <div>
                        <div className="relative flex items-center py-2">
                            <span class="absolute p-2">
                                <AtSymbolIcon className='size-6' />
                            </span>

                            <input type="email" required className="block w-full px-10 py-3 border rounded-lg" placeholder="Email ID" />
                        </div>

                        <div className="relative flex items-center py-2">
                            <span class="absolute p-2">
                                <LockClosedIcon className='size-6' />
                            </span>

                            <input type="password" required className="block w-full px-10 py-3 border rounded-lg" placeholder="Password" />
                        </div>
                        <div>
                            <span className='text-sm'>
                                <Link href={"/"}>
                                    Forgot Password?
                                </Link>
                            </span>
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-10 py-3 bg-primary text-background rounded-lg hover:scale-105 transition easy-in-out">
                                Sign in
                            </button>

                            <p className="mt-4 text-center">or sign in with</p>

                            <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 border rounded-lg hover:scale-105 transition easy-in-out">
                                <GoogleIcon />
                                <span className="mx-2">Sign in with Google</span>
                            </a>

                            <div className="mt-6 text-center hover:scale-105 transition easy-in-out">
                                <a href={"/signup"} className="text-sm">
                                    Don’t have an account yet? <span className='font-bold'>Sign up</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInForm