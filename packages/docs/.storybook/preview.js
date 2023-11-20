import { themes } from "@storybook/theming"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    parameters: {
      backgrounds: {
        values: [
          { name: "dark", value: "#191b1c" },
          { name: "light", value: "#fff" }
        ]
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme: themes.dark
    }
  }
}

export default preview
