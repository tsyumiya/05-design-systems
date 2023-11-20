import { styled } from "../../styles"
import * as Toast from "@radix-ui/react-toast"

export const ToastContainer = styled(Toast.Root, {
  all: "unset",
  width: "$80",
  color: "white",
  fontFamily: "$default",
  background: "$gray600",
  border: "1px solid",
  borderRadius: "6px",
  padding: "$5",
  display: "flex",
  justifyContent: "space-between",

  variants: {
    type: {
      normal: {},
      success: {
        background: "#17ad07"
      },
      error: {
        background: "#ff002a"
      },
      warning: {
        background: "#f36119"
      },
      info: {
        background: "#5472ff"
      }
    }
  }
})

export const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$2"
})

export const Title = styled(Toast.Title, {
  fontWeight: "$bold",
  fontSize: "$lg"
})

export const Description = styled(Toast.Description, {
  color: "$gray200",
  variants: {
    color: {
      normal: {
        color: "$gray200"
      },
      white: {
        color: "white"
      }
    }
  }
})

export const CloseButton = styled(Toast.Close, {
  all: "unset",
  display: "flex",
  color: "$gray200"
})
