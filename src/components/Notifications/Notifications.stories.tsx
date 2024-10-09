import React, { useEffect } from "react";
import { Meta, Story } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Notifications from "./Notifications";
import { useNotification } from "./Notifications.hooks";
import Button from "../Button/Button";

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
  duration?: number;
  action?: React.ReactNode;
  maxNotifications: number;
};

const Demo: React.FC<DemoProps> = ({
  notificationType,
  message,
  children,
  position,
  duration,
  action,
  maxNotifications,
}) => {
  const notification = useNotification();

  const handleNotification = () => {
    const options = {
      children,
      position,
      duration,
      action,
    };

    switch (notificationType) {
      case "success":
        notification.success(message, options);
        break;
      case "error":
        notification.error(message, options);
        break;
      case "warning":
        notification.warning(message, options);
        break;
      case "information":
        notification.information(message, options);
        break;
      case "neutral":
        notification.neutral(message, options);
        break;
      default:
        notification.success(message, options);
    }
  };

  useEffect(() => {
    return notification.clear();
  }, [notification]);

  return (
    <div style={{ margin: "10px 0" }}>
      <button onClick={handleNotification}>
        Show {notificationType} Notification
      </button>
    </div>
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
  message: "This is a notification!",
  maxNotifications: 5,
};

export const Success = Template.bind({});
Success.args = {
  notificationType: "success",
  message: "Well done!",
  children: "This is a success message.",
};

export const WithMaxNotifications = Template.bind({});
WithMaxNotifications.args = {
  notificationType: "information",
  message: "Did you know?",
  children: "You can customize the maximum number of notifications displayed.",
  maxNotifications: 2,
};

export const ErrorWithAction = Template.bind({});
ErrorWithAction.args = {
  notificationType: "error",
  message: "Could not complete action",
  children: "Something went wrong. Please try again.",
  position: "bottom-right",
  action: <Button id="retry">Retry</Button>,
};

export const ShortWarning = Template.bind({});
ShortWarning.args = {
  notificationType: "warning",
  message: "Warning Notification",
  children: "This is a warning message with a short duration.",
  duration: 3000,
  position: "top-left",
};

export const LongInformation = Template.bind({});
LongInformation.args = {
  notificationType: "information",
  message: "Information Notification",
  children: "This is an informative message with a long duration.",
  duration: 15000,
  position: "top-right",
  action: (
    <Button id="learn-more" variant="primary-ghost" compact>
      Learn More
    </Button>
  ),
};

export const Neutral = Template.bind({});
Neutral.args = {
  notificationType: "neutral",
  message: "Neutral Notification",
  children: "This is a neutral message.",
  position: "bottom-left",
};
