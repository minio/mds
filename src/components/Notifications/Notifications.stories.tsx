import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useNotification } from "./Notifications.hooks";
import {
  NotificationDuration,
  NotificationOptions,
  NotificationPosition,
} from "./Notifications.types";
import { NotificationVariant } from "../NotificationAlert/NotificationAlert.types";
import Button from "../Button";
import Box from "../Box";
import RadioGroup from "../RadioGroup";
import Select from "../Select";
import Checkbox from "../Checkbox";
import BellIcon from "../../icons/BellIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import Notifications from "./index";

const positions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top-center",
  "bottom-center",
];

const durations = [0, 3000, 5000, 10000];

interface DemoProps {
  message: string;
  children?: string;
  maxNotifications: number;
}

const Demo: React.FC<DemoProps> = ({ message, children }) => {
  const notification = useNotification();

  const [position, setPosition] = useState<NotificationPosition>("top-center");
  const [variant, setVariant] = useState<NotificationVariant>("success");
  const [duration, setDuration] = useState<NotificationDuration>(5000);
  const [action, setAction] = useState<React.ReactNode | undefined>(undefined);

  const defaultAction = (
    <Button
      id="view-details"
      variant="primary-ghost"
      compact
      onClick={() => alert("Clicked!")}
    >
      View Details
    </Button>
  );

  const handleNotification = () => {
    const options: NotificationOptions = {
      children,
      position,
      duration,
      action,
    };

    notification[variant](message, options);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "flex-start",
      }}
    >
      <RadioGroup
        id="position"
        name="position"
        label="Position"
        currentValue={position}
        selectorOptions={positions.map((value) => ({
          value,
          label: value,
        }))}
        onChange={(e) => setPosition(e.target.value as NotificationPosition)}
      />

      <RadioGroup
        id="variant"
        name="variant"
        label="Variant"
        currentValue={variant}
        selectorOptions={[
          { value: "success", label: "Success" },
          { value: "danger", label: "Danger" },
          { value: "warning", label: "Warning" },
          { value: "information", label: "Information" },
          { value: "neutral", label: "Neutral" },
        ]}
        onChange={(e) => setVariant(e.target.value as NotificationVariant)}
      />

      <Select
        id="duration"
        label="Duration (ms)"
        options={durations.map((value) => ({
          value: value.toString(),
          label: value === 0 ? "0 (No auto-dismiss)" : value.toString(),
        }))}
        value={duration.toString()}
        onChange={(val) => setDuration(Number(val) as NotificationDuration)}
      />

      <Checkbox
        id="action"
        label="Show Action"
        checked={!!action}
        onChange={() => setAction((prev) => (prev ? undefined : defaultAction))}
      />

      <Button
        id="show-notification"
        onClick={handleNotification}
        icon={<BellIcon />}
      >
        Show Notification
      </Button>
    </Box>
  );
};

const NotificationsWrapper: React.FC<DemoProps> = (props) => {
  return (
    <StoryThemeProvider>
      <Notifications maxNotifications={props.maxNotifications} />
      <Demo {...props} />
    </StoryThemeProvider>
  );
};

export default {
  title: "MDS/Information/Notifications",
  component: NotificationsWrapper,
  argTypes: {
    message: {
      control: "text",
      description: "The main message of the notification",
    },
    children: {
      control: "text",
      description: "Additional content for the notification",
    },
    maxNotifications: {
      control: {
        type: "number",
      },
      description: "Maximum number of notifications to display at once",
    },
  },
  args: {
    message: "This is a notification message!",
    children: "This is additional content.",
    maxNotifications: 5,
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: StoryFn<DemoProps> = (args) => (
  <NotificationsWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: "Heads up!",
  children: "This is a notification message.",
};
