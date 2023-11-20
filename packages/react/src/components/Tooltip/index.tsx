import { ComponentProps, ElementType } from "react"
import { DateNumber, TooltipContainer, TooltipContent } from "./styles"
import { X } from "phosphor-react"
import * as TooltipComponent from "@radix-ui/react-tooltip"
import { Box } from "../Box"
import { Text } from "../Text"

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  delayDuration: number
  dateNumber: number
  dateMonth:
    | "Janeiro"
    | "Fevereiro"
    | "Março"
    | "Abril"
    | "Maio"
    | "Junho"
    | "Julho"
    | "Agosto"
    | "Setembro"
    | "Outubro"
    | "Novembro"
    | "Dezembro"
  status: "Disponível" | "Indisponível"
}

export function Tooltip({ dateNumber, dateMonth, status, delayDuration, ...props }: TooltipProps) {
  return (
    <TooltipComponent.Provider delayDuration={delayDuration}>
      <TooltipContainer {...props}>
        <TooltipComponent.Trigger asChild>
          <DateNumber>{dateNumber}</DateNumber>
        </TooltipComponent.Trigger>
        <TooltipComponent.Portal>
          <TooltipContent sideOffset={5}>
            {dateNumber} de {dateMonth} - {status}
          </TooltipContent>
        </TooltipComponent.Portal>
      </TooltipContainer>
    </TooltipComponent.Provider>
  )
}
