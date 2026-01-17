import { useState, useEffect } from 'react'

export default function useIsMobile(breakpoint: number = 768) {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        // Check initial screen size
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint)
        }

        // Set initial value
        checkMobile()

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile)

        // Cleanup event listener
        return () => window.removeEventListener('resize', checkMobile)
    }, [breakpoint])

    return isMobile
}
