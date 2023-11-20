import type { StoryObj, Meta } from "@storybook/react"
import { Toast, ToastProps } from "@ignite-ui/react"

export default {
  title: "Surfaces/Toast",
  component: Toast,
  args: {
    title: "Agendamento realizado!",
    description: "Quarta-feira, 14 de abril às 16h",
    duration: 6000,
    open: true,
    type: "normal",
    color: "normal"
  },
  argTypes: {
    type: {
      options: ["normal", "success", "error", "warning", "info"],
      control: {
        type: "inline-radio"
      }
    }
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {}
}

export const Success: StoryObj<ToastProps> = {
  args: {
    type: "success"
  }
}

export const Error: StoryObj<ToastProps> = {
  args: {
    type: "error"
  }
}

export const Warning: StoryObj<ToastProps> = {
  args: {
    type: "warning"
  }
}

export const Info: StoryObj<ToastProps> = {
  args: {
    type: "info"
  }
}
