import type { Preview } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-styling'
import { useArgs } from '@storybook/preview-api'
import '../src/style.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light'
    }),

    /**
     * Support `v-model` for vue
     * @see {@link https://craigbaldwin.com/blog/updating-args-storybook-vue/}
     */
    (story, context) => {
      const [args, updateArgs] = useArgs()
      if ('modelValue' in args) {
        const update = args['onUpdate:model-value'] || args['onUpdate:modelValue']
        args['onUpdate:model-value'] = undefined
        args['onUpdate:modelValue'] = (...vals) => {
          update?.(...vals)
          /**
           * Arg with `undefined` will be deleted by `deleteUndefined()`, then loss of reactive
           * @see {@link https://github.com/storybookjs/storybook/blob/next/code/lib/preview-api/src/modules/store/ArgsStore.ts#L63}
           */
          const modelValue = vals[0] === undefined ? null : vals[0]
          updateArgs({ modelValue })
        }
      }
      return story({ ...context, updateArgs })
    }
  ]
}

export default preview
