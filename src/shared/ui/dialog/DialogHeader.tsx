import { forwardRef } from "react"

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
))

DialogHeader.displayName = "DialogHeader"

export default DialogHeader
