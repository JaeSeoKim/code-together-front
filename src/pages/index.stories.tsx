import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Home from "./index";

export default {
  title: "Example/Home",
  component: Home,
} as Meta;

const Template: Story = (args) => <Home {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
