import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Notifications from "./Notifications";
import { useNotification } from "./Notifications.hooks";
import Button from "../Button/Button";
import {
  durations,
  NotificationDuration,
  NotificationOptions,
  NotificationPosition,
  positions,
} from "./Notifications.types";
import RadioGroup from "../RadioGroup/RadioGroup";
import Box from "../Box/Box";
import InputBox from "../InputBox/InputBox";
import Checkbox from "../Checkbox/Checkbox";
import { BellIcon } from "../Icons/NewDesignIcons";
import Select from "../Select/Select";

type DemoProps = {
  notificationType: "success" | "error" | "warning" | "information" | "neutral";
  message: string;
  children?: string;
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  duration?: NotificationDuration;
  action?: React.ReactNode;
  maxNotifications: number;
};

const Demo: React.FC<DemoProps> = ({
  notificationType = "success",
  message,
  children,
  position = "top-center",
  duration = 5000,
  action,
}) => {
  const notification = useNotification();
  const [displayPosition, setDisplayPosition] = useState(position);
  const [displayType, setDisplayType] = useState(notificationType);
  const [displayDuration, setDisplayDuration] = useState(duration);
  const [displayAction, setDisplayAction] = useState(action);

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
      position: displayPosition,
      duration: displayDuration,
      action: displayAction,
    };

    notification[displayType](message, options);
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
        currentValue={displayPosition}
        selectorOptions={positions.map((value) => ({
          value,
          label: value,
        }))}
        onChange={(e) =>
          setDisplayPosition(e.target.value as NotificationPosition)
        }
      />

      <RadioGroup
        id="type"
        name="type"
        label="Type"
        currentValue={displayType}
        selectorOptions={[
          { value: "success", label: "Success" },
          { value: "error", label: "Error" },
          { value: "warning", label: "Warning" },
          { value: "information", label: "Information" },
          { value: "neutral", label: "Neutral" },
        ]}
        onChange={(e) =>
          setDisplayType(e.target.value as DemoProps["notificationType"])
        }
      />

      <Select
        id="duration"
        label="Duration (ms)"
        options={durations.map((value) => ({
          value: value.toString(),
          label: value === 0 ? "0 (No auto-dismiss)" : value.toString(),
        }))}
        value={displayDuration.toString()}
        onChange={(val) =>
          setDisplayDuration(Number(val) as NotificationDuration)
        }
      />

      <Checkbox
        id="action"
        label="Show Action"
        checked={!!displayAction}
        onChange={() =>
          setDisplayAction((prev) => (prev ? undefined : defaultAction))
        }
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
      <GlobalStyles />
      <Notifications maxNotifications={props.maxNotifications} />
      <Demo {...props} />
    </StoryThemeProvider>
  );
};

export default {
  title: "MDS/Information/Notifications",
  component: NotificationsWrapper,
  argTypes: {
    notificationType: {
      control: {
        type: "select",
        options: ["success", "error", "warning", "information", "neutral"],
      },
      description: "Type of notification to trigger",
      defaultValue: "success",
    },
    message: {
      control: "text",
      description: "The main message of the notification",
      defaultValue: "This is a notification message!",
    },
    children: {
      control: "text",
      description: "Additional content for the notification",
      defaultValue: "This is additional content.",
    },
    position: {
      control: {
        type: "select",
        options: [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
          "top-center",
          "bottom-center",
        ],
      },
      description: "Position of the notification",
      defaultValue: "top-right",
    },
    duration: {
      control: {
        type: "number",
      },
      description: "Duration before the notification auto-dismisses (ms)",
      defaultValue: 5000,
    },
    action: {
      control: "text",
      description: "Optional action element inside the notification",
      defaultValue: "<a href='#'>Retry</a>",
    },
    maxNotifications: {
      control: {
        type: "number",
      },
      description: "Maximum number of notifications to display at once",
      defaultValue: 5,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<DemoProps> = (args) => <NotificationsWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Heads up!",
  children: "This is a notification message.",
};
