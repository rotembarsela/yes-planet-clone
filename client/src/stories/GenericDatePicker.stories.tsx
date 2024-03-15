import { Meta, StoryObj } from "@storybook/react";
import { GenericDatePicker } from "@/components/datePicker/GenericDatePicker ";
import { Provider } from "react-redux";
import { store } from "@/lib/store/store";
import { utils } from "@/lib/utils";

/*
type GenericDatePickerPropsAndCustomArgs = React.ComponentProps<
  typeof GenericDatePicker
> &
  MovieHall;
*/

const meta = {
  title: "Components/GenericDatePicker",
  component: GenericDatePicker,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof GenericDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Title",
    info: "Default Info",
    minSelectDate: utils.dates.futureDateFromToday(),
    maxSelectDate: utils.dates.futureDateFromToday(8),
  },
};
