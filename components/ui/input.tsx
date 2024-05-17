import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    onEnter?: () => void; // Add a prop to handle Enter key press
    focusOnEnter?: React.RefObject<HTMLElement>; // Add a ref to focus on another element
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, onEnter, focusOnEnter, ...props }, ref) => {
        const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter" && onEnter) {
                onEnter();
                if (focusOnEnter && focusOnEnter.current) {
                    focusOnEnter.current.focus();
                }
            }
        };

        return (
            <input
                type={type}
                className={cn(
                    "flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                onKeyPress={handleKeyPress} // Attach key press event handler
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
