import { ComponentProps, ElementType } from "react"
import { ToastContainer, TextContainer, Title, Description, CloseButton } from "./styles"
import { X } from "phosphor-react"
import * as ToastComponent from "@radix-ui/react-toast"

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  open: boolean
  duration: number
}

export function Toast({ title, description, open, duration, ...props }: ToastProps) {
  return (
    <ToastComponent.Provider swipeDirection="right" duration={duration} label="Notification">
      <ToastContainer open={open} {...props}>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
        <CloseButton>
          <X size={18} />
        </CloseButton>
      </ToastContainer>

      <ToastComponent.Viewport />
    </ToastComponent.Provider>
  )
}

Toast.displayName = "Toast"
