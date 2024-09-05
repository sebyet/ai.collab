import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { state } from "./state"


const buttonVariants = cva(
  "inline-flex items-center transition justify-center rounded-xl text-wrap",
  {
    variants: {
      variant: {
        default: cn( 
          state.buttonElement.primary.initial, 
          state.buttonElement.primary.hover, 
          state.buttonElement.primary.focusVisible, 
          state.buttonElement.primary.active,
        ),
        secondary: cn(
          state.buttonElement.secondary.initial, 
          state.buttonElement.secondary.hover, 
          state.buttonElement.secondary.focusVisible, 
          state.buttonElement.secondary.active,
        ),
        accent: cn(
          state.buttonElement.accent.initial, 
          state.buttonElement.accent.hover, 
          state.buttonElement.accent.focusVisible, 
          state.buttonElement.accent.active,
        ),
        outline: cn(
          state.buttonElement.outline.initial, 
          state.buttonElement.outline.hover, 
          state.buttonElement.outline.focusVisible, 
          state.buttonElement.outline.active,
        ),
        link: cn(
          state.buttonElement.link.initial, 
          state.buttonElement.link.hover, 
          state.buttonElement.link.focusVisible, 
          state.buttonElement.link.active,
        ),
      },
      size: {
        default: "h-12 px-4 py-2 text-base font-medium",
        sm: "h-9 px-3 text-base font-medium",
        lg: "h-16 px-8 text-lg font-medium",
        icon: "h-10 w-10 text-base font-medium",
        link: "px-0 py-0 text-base font-medium"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
