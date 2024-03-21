import { ReactNode } from "react"

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
            <header>[Header]</header>
                { children }
            <footer>[Footer]</footer>
            </body>
        </html>
    )
}