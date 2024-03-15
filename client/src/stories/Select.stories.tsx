import { Meta, StoryObj } from "@storybook/react";

import { Select } from "@/components/select/Select";
import { mocks } from "@/lib/mocks";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Planets: Story = {
  args: {
    items: mocks.planets,
    value: mocks.planets[0],
    valueId: "planetId" as never,
    valueLabel: "planetValue" as never,
    onSelect: () => {},
  },
};
