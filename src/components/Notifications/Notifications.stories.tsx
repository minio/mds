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
import Checkbox from "../Checkbox/Checkbox";
import { BellIcon } from "../Icons/NewDesignIcons";
import Select from "../Select/Select";
import { NotificationVariant } from "../NotificationAlert/NotificationAlert.types";

type DemoProps = {
  message: string;
  children?: string;
  maxNotifications: number;
};

const Demo: React.FC<DemoProps> = ({ message, children }) => {
  const notification = useNotification();

  const [displayPosition, setDisplayPosition] =
    useState<NotificationPosition>("top-center");
  const [displayVariant, setDisplayVariant] =
    useState<NotificationVariant>("success");
  const [displayDuration, setDisplayDuration] =
    useState<NotificationDuration>(5000);
  const [displayAction, setDisplayAction] = useState<
    React.ReactNode | undefined
  >(undefined);

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

    notification[displayVariant](message, options);
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
        id="variant"
        name="variant"
        label="Variant"
        currentValue={displayVariant}
        selectorOptions={[
          { value: "success", label: "Success" },
          { value: "danger", label: "Danger" },
          { value: "warning", label: "Warning" },
          { value: "information", label: "Information" },
          { value: "neutral", label: "Neutral" },
        ]}
        onChange={(e) =>
          setDisplayVariant(e.target.value as NotificationVariant)
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

const Template: Story<DemoProps> = (args) => <NotificationsWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Heads up!",
  children: "This is a notification message.",
};
