import { defineConfig, presetAttributify, presetIcons, presetMini, presetUno } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

const theme: Theme = {
  colors: {
    primary: '#cb0c9f',
    secondary: '#8392AB',
    info: '#17c1e8',
    success: '#82d616',
    warning: '#fbcf33',
    danger: '#ea0606',
  },
}

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetUno(),
  ],
  theme,
  rules: [],
})
