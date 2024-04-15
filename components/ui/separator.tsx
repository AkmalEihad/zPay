"use client"

import {cn} from "@/lib/utils"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as React from "react"

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
    (
        {className, orientation = "horizontal", decorative = true, ...props},
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
                "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 my-8 w-full",
                orientation === "horizontal" ? "h-[1.5px] w-full" : "h-full w-[1px]",
                className
            )}
            {...props}
        />
    )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export {Separator}
