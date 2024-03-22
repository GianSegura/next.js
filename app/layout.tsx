import Link from "next/link";
import { ReactNode } from "react"

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    console.log('RootLayout Log')
    return (
        <html lang="en">
            <body>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
                { children }
            <footer>[Footer]</footer>
            </body>
        </html>
    )
}