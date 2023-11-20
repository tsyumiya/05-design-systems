import type { StoryObj, Meta } from "@storybook/react"
import { Tooltip, TooltipProps } from "@ignite-ui/react"

export default {
  title: "Surfaces/Tooltip",
  component: Tooltip,
  args: {
    delayDuration: 500,
    dateNumber: 23,
    dateMonth: "Abril",
    status: "Disponível"
  },
  argTypes: {
    status: {
      options: ["Disponível", "Indisponível"],
      control: {
        type: "inline-radio"
      }
    },
    dateMonth: {
      options: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto"],
      control: {
        type: "select"
      }
    }
  }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {}
}
