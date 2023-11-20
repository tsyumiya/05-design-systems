import { styled } from "../../styles"
import * as Tooltip from "@radix-ui/react-tooltip"
import { Box } from "../Box"

export const TooltipContainer = styled(Tooltip.Root, {
  all: "unset"
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: "4px",
  padding: "10px 15px",
  fontSize: "15px",
  lineHeight: "1",
  backgroundColor: "$gray500",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  animationDuration: "700ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  color: "$gray100",
  fontFamily: "$default"
})

export const DateNumber = styled("div", {
  padding: "$2",
  borderRadius: "$md",
  background: "$gray500",
  width: "$7",
  height: "$7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "$default",
  color: "$white"
})
