import { cn } from '@/lib/utils'
import React from 'react'

function Wrapper({ children, className, id }: {
    children: React.ReactNode,
    className?: string,
    id?: string,
}) {
    return (
        <div id={id} className={cn("h-full w-full mx-auto max-w-screen-xl px-4 md:px-0", className)}>
            {children}
        </div>
    )
}

export default Wrapper