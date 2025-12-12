import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer text-nowrap justify-center rounded-full font-medium transition-all duration-300 ease-in-out uppercase",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background px-6 py-4 rounded-full font-medium tracking-wide",
        primary:
          "bg-foreground text-white px-6 py-4 shadow-md btn-primary-elegant relative overflow-hidden",
        secondary:
          "bg-background border-1 px-6 py-4 border-foreground text-foreground hover:border-black",
        outline:
          "bg-transparent border-2 border-white text-white hover:bg-white hover:text-green hover:border-white",
        ghost:
          "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:shadow-xl",
        under:
          "bg-transparent text-foreground pb-2 btn-underline hover:text-foreground/90 transition-colors duration-300"
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 px-3 text-sm",
        xl: "h-12 px-6 text-xl lg:text-xl",
        lg: "h-14 px-8 text-lg lg:text-lg",
        icon: "h-10 w-10",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


