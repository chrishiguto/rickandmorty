import { Story, Meta } from '@storybook/react/types-6-0'
import Pagination, { PaginationProps } from '.'

export default {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    onChange: { action: 'page clicked' }
  }
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)

Default.args = {
  prev: 4,
  next: 6,
  pages: 10,
  activePage: 5
}
