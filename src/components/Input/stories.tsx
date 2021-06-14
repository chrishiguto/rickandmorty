import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />

Default.args = {
  placeholder: 'Select an item...'
}
