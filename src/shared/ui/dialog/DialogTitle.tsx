import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react"

interface DialogTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
))

DialogTitle.displayName = DialogPrimitive.Title.displayName

export default DialogTitle
