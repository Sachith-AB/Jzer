import type { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="px-8 md:px-16 lg:px-24">
            {children}
        </div>
    )
}
