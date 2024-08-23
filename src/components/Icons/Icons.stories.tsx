// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { Fragment, ReactNode, useState } from "react";
import { Meta, Story } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import Box from "../Box/Box";
import Button from "../Button/Button";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Grid from "../Grid/Grid";
import * as nvicons from "./NewDesignIcons";

export default {
  title: "MDS/Graphics/Icons",
  component: Fragment,
  argTypes: {},
} as Meta;

const IconDisplay = ({
  children,
  applyColor,
}: {
  children: ReactNode | ReactNode[];
  applyColor: boolean;
}) => {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        gap: 8,
      }}
      sx={{
        "& .story-icon": {
          flex: "1 1 125px",
          textAlign: "center",
          paddingTop: 8,
          wordBreak: "break-word",
          "& .min-icon": {
            height: 24,
            color: applyColor ? "red" : "black",
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

const Template: Story = (args) => {
  const [color, setColor] = useState<boolean>(false);

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Button
              id={"colorToggle"}
              variant={color ? "destructive" : "secondary"}
              onClick={() => {
                setColor(!color);
              }}
            >
              {color ? "Red (Colored Icon)" : "Default Color"}
            </Button>
          </Grid>
          <h1>New Design Icons</h1>
          <IconDisplay applyColor={color}>
            <div className="story-icon">
              <nvicons.AArrowDownIcon />
              <br />
              AArrowDownIcon
            </div>
            <div className="story-icon">
              <nvicons.AArrowUpIcon />
              <br />
              AArrowUpIcon
            </div>
            <div className="story-icon">
              <nvicons.ALargeSmallIcon />
              <br />
              ALargeSmallIcon
            </div>
            <div className="story-icon">
              <nvicons.AccessibilityIcon />
              <br />
              AccessibilityIcon
            </div>
            <div className="story-icon">
              <nvicons.ActivityIcon />
              <br />
              ActivityIcon
            </div>
            <div className="story-icon">
              <nvicons.AirVentIcon />
              <br />
              AirVentIcon
            </div>
            <div className="story-icon">
              <nvicons.AirplayIcon />
              <br />
              AirplayIcon
            </div>
            <div className="story-icon">
              <nvicons.AlarmClockCheckIcon />
              <br />
              AlarmClockCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.AlarmClockMinusIcon />
              <br />
              AlarmClockMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.AlarmClockOffIcon />
              <br />
              AlarmClockOffIcon
            </div>
            <div className="story-icon">
              <nvicons.AlarmClockPlusIcon />
              <br />
              AlarmClockPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.AlarmClockIcon />
              <br />
              AlarmClockIcon
            </div>
            <div className="story-icon">
              <nvicons.AlarmSmokeIcon />
              <br />
              AlarmSmokeIcon
            </div>
            <div className="story-icon">
              <nvicons.AlbumIcon />
              <br />
              AlbumIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignCenterHorizontalIcon />
              <br />
              AlignCenterHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignCenterVerticalIcon />
              <br />
              AlignCenterVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignCenterIcon />
              <br />
              AlignCenterIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignEndHorizontalIcon />
              <br />
              AlignEndHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignEndVerticalIcon />
              <br />
              AlignEndVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignHorizontalDistributeCenterIcon />
              <br />
              AlignHorizontalDistributeCenterIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignHorizontalDistributeEndIcon />
              <br />
              AlignHorizontalDistributeEndIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignHorizontalDistributeStartIcon />
              <br />
              AlignHorizontalDistributeStartIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignHorizontalJustifyCenterIcon />
              <br />
              AlignHorizontalJustifyCenterIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignHorizontalJustifyEndIcon />
              <br />
              AlignHorizontalJustifyEndIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignHorizontalJustifyStartIcon />
              <br />
              AlignHorizontalJustifyStartIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignHorizontalSpaceAroundIcon />
              <br />
              AlignHorizontalSpaceAroundIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignHorizontalSpaceBetweenIcon />
              <br />
              AlignHorizontalSpaceBetweenIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignJustifyIcon />
              <br />
              AlignJustifyIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignLeftIcon />
              <br />
              AlignLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignRightIcon />
              <br />
              AlignRightIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignStartHorizontalIcon />
              <br />
              AlignStartHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignStartVerticalIcon />
              <br />
              AlignStartVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignVerticalDistributeCenterIcon />
              <br />
              AlignVerticalDistributeCenterIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignVerticalDistributeEndIcon />
              <br />
              AlignVerticalDistributeEndIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignVerticalDistributeStartIcon />
              <br />
              AlignVerticalDistributeStartIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignVerticalJustifyCenterIcon />
              <br />
              AlignVerticalJustifyCenterIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignVerticalJustifyEndIcon />
              <br />
              AlignVerticalJustifyEndIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignVerticalJustifyStartIcon />
              <br />
              AlignVerticalJustifyStartIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignVerticalSpaceAroundIcon />
              <br />
              AlignVerticalSpaceAroundIcon
            </div>
            <div className="story-icon">
              <nvicons.AlignVerticalSpaceBetweenIcon />
              <br />
              AlignVerticalSpaceBetweenIcon
            </div>
            <div className="story-icon">
              <nvicons.AmazonEksSiteIcon />
              <br />
              AmazonEksSiteIcon
            </div>
            <div className="story-icon">
              <nvicons.AmbulanceIcon />
              <br />
              AmbulanceIcon
            </div>
            <div className="story-icon">
              <nvicons.AmpersandIcon />
              <br />
              AmpersandIcon
            </div>
            <div className="story-icon">
              <nvicons.AmpersandsIcon />
              <br />
              AmpersandsIcon
            </div>
            <div className="story-icon">
              <nvicons.AnchorIcon />
              <br />
              AnchorIcon
            </div>
            <div className="story-icon">
              <nvicons.AngryIcon />
              <br />
              AngryIcon
            </div>
            <div className="story-icon">
              <nvicons.AnnoyedIcon />
              <br />
              AnnoyedIcon
            </div>
            <div className="story-icon">
              <nvicons.AntennaIcon />
              <br />
              AntennaIcon
            </div>
            <div className="story-icon">
              <nvicons.AnvilIcon />
              <br />
              AnvilIcon
            </div>
            <div className="story-icon">
              <nvicons.ApertureIcon />
              <br />
              ApertureIcon
            </div>
            <div className="story-icon">
              <nvicons.AppWindowMacIcon />
              <br />
              AppWindowMacIcon
            </div>
            <div className="story-icon">
              <nvicons.AppWindowIcon />
              <br />
              AppWindowIcon
            </div>
            <div className="story-icon">
              <nvicons.AppleIcon />
              <br />
              AppleIcon
            </div>
            <div className="story-icon">
              <nvicons.ArchiveRestoreIcon />
              <br />
              ArchiveRestoreIcon
            </div>
            <div className="story-icon">
              <nvicons.ArchiveXIcon />
              <br />
              ArchiveXIcon
            </div>
            <div className="story-icon">
              <nvicons.ArchiveIcon />
              <br />
              ArchiveIcon
            </div>
            <div className="story-icon">
              <nvicons.AreaChartIcon />
              <br />
              AreaChartIcon
            </div>
            <div className="story-icon">
              <nvicons.ArmchairIcon />
              <br />
              ArmchairIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowBigDownDashIcon />
              <br />
              ArrowBigDownDashIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowBigDownIcon />
              <br />
              ArrowBigDownIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowBigLeftDashIcon />
              <br />
              ArrowBigLeftDashIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowBigLeftIcon />
              <br />
              ArrowBigLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowBigRightDashIcon />
              <br />
              ArrowBigRightDashIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowBigRightIcon />
              <br />
              ArrowBigRightIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowBigUpDashIcon />
              <br />
              ArrowBigUpDashIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowBigUpIcon />
              <br />
              ArrowBigUpIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDown01Icon />
              <br />
              ArrowDown01Icon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDown10Icon />
              <br />
              ArrowDown10Icon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownAZIcon />
              <br />
              ArrowDownAZIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownFromLineIcon />
              <br />
              ArrowDownFromLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownLeftIcon />
              <br />
              ArrowDownLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownNarrowWideIcon />
              <br />
              ArrowDownNarrowWideIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownRightIcon />
              <br />
              ArrowDownRightIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownToDotIcon />
              <br />
              ArrowDownToDotIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownToLineIcon />
              <br />
              ArrowDownToLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownUpIcon />
              <br />
              ArrowDownUpIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownWideNarrowIcon />
              <br />
              ArrowDownWideNarrowIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownZAIcon />
              <br />
              ArrowDownZAIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowDownIcon />
              <br />
              ArrowDownIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowLeftFromLineIcon />
              <br />
              ArrowLeftFromLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowLeftRightIcon />
              <br />
              ArrowLeftRightIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowLeftToLineIcon />
              <br />
              ArrowLeftToLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowLeftIcon />
              <br />
              ArrowLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowRightFromLineIcon />
              <br />
              ArrowRightFromLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowRightLeftIcon />
              <br />
              ArrowRightLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowRightToLineIcon />
              <br />
              ArrowRightToLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowRightIcon />
              <br />
              ArrowRightIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUp01Icon />
              <br />
              ArrowUp01Icon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUp10Icon />
              <br />
              ArrowUp10Icon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpAZIcon />
              <br />
              ArrowUpAZIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpDownIcon />
              <br />
              ArrowUpDownIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpFromDotIcon />
              <br />
              ArrowUpFromDotIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpFromLineIcon />
              <br />
              ArrowUpFromLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpLeftIcon />
              <br />
              ArrowUpLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpNarrowWideIcon />
              <br />
              ArrowUpNarrowWideIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpRightIcon />
              <br />
              ArrowUpRightIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpToLineIcon />
              <br />
              ArrowUpToLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpWideNarrowIcon />
              <br />
              ArrowUpWideNarrowIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpZAIcon />
              <br />
              ArrowUpZAIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowUpIcon />
              <br />
              ArrowUpIcon
            </div>
            <div className="story-icon">
              <nvicons.ArrowsUpFromLineIcon />
              <br />
              ArrowsUpFromLineIcon
            </div>
            <div className="story-icon">
              <nvicons.AsteriskIcon />
              <br />
              AsteriskIcon
            </div>
            <div className="story-icon">
              <nvicons.AtSignIcon />
              <br />
              AtSignIcon
            </div>
            <div className="story-icon">
              <nvicons.AtomIcon />
              <br />
              AtomIcon
            </div>
            <div className="story-icon">
              <nvicons.AudioLinesIcon />
              <br />
              AudioLinesIcon
            </div>
            <div className="story-icon">
              <nvicons.AudioWaveformIcon />
              <br />
              AudioWaveformIcon
            </div>
            <div className="story-icon">
              <nvicons.AwardIcon />
              <br />
              AwardIcon
            </div>
            <div className="story-icon">
              <nvicons.AxeIcon />
              <br />
              AxeIcon
            </div>
            <div className="story-icon">
              <nvicons.Axis3dIcon />
              <br />
              Axis3dIcon
            </div>
            <div className="story-icon">
              <nvicons.AzureAksSiteIcon />
              <br />
              AzureAksSiteIcon
            </div>
            <div className="story-icon">
              <nvicons.BabyIcon />
              <br />
              BabyIcon
            </div>
            <div className="story-icon">
              <nvicons.BackpackIcon />
              <br />
              BackpackIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeAlertIcon />
              <br />
              BadgeAlertIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeCentIcon />
              <br />
              BadgeCentIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeCheckIcon />
              <br />
              BadgeCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeDollarSignIcon />
              <br />
              BadgeDollarSignIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeEuroIcon />
              <br />
              BadgeEuroIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeHelpIcon />
              <br />
              BadgeHelpIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeIndianRupeeIcon />
              <br />
              BadgeIndianRupeeIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeInfoIcon />
              <br />
              BadgeInfoIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeJapaneseYenIcon />
              <br />
              BadgeJapaneseYenIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeMinusIcon />
              <br />
              BadgeMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgePercentIcon />
              <br />
              BadgePercentIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgePlusIcon />
              <br />
              BadgePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgePoundSterlingIcon />
              <br />
              BadgePoundSterlingIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeRussianRubleIcon />
              <br />
              BadgeRussianRubleIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeSwissFrancIcon />
              <br />
              BadgeSwissFrancIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeXIcon />
              <br />
              BadgeXIcon
            </div>
            <div className="story-icon">
              <nvicons.BadgeIcon />
              <br />
              BadgeIcon
            </div>
            <div className="story-icon">
              <nvicons.BaggageClaimIcon />
              <br />
              BaggageClaimIcon
            </div>
            <div className="story-icon">
              <nvicons.BalancerIcon />
              <br />
              BalancerIcon
            </div>
            <div className="story-icon">
              <nvicons.BanIcon />
              <br />
              BanIcon
            </div>
            <div className="story-icon">
              <nvicons.BananaIcon />
              <br />
              BananaIcon
            </div>
            <div className="story-icon">
              <nvicons.BanknoteIcon />
              <br />
              BanknoteIcon
            </div>
            <div className="story-icon">
              <nvicons.BarChart2Icon />
              <br />
              BarChart2Icon
            </div>
            <div className="story-icon">
              <nvicons.BarChart3Icon />
              <br />
              BarChart3Icon
            </div>
            <div className="story-icon">
              <nvicons.BarChart4Icon />
              <br />
              BarChart4Icon
            </div>
            <div className="story-icon">
              <nvicons.BarChartBigIcon />
              <br />
              BarChartBigIcon
            </div>
            <div className="story-icon">
              <nvicons.BarChartHorizontalBigIcon />
              <br />
              BarChartHorizontalBigIcon
            </div>
            <div className="story-icon">
              <nvicons.BarChartHorizontalIcon />
              <br />
              BarChartHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.BarChartIcon />
              <br />
              BarChartIcon
            </div>
            <div className="story-icon">
              <nvicons.BarcodeIcon />
              <br />
              BarcodeIcon
            </div>
            <div className="story-icon">
              <nvicons.BareMetalLinuxSiteIcon />
              <br />
              BareMetalLinuxSiteIcon
            </div>
            <div className="story-icon">
              <nvicons.BaselineIcon />
              <br />
              BaselineIcon
            </div>
            <div className="story-icon">
              <nvicons.BathIcon />
              <br />
              BathIcon
            </div>
            <div className="story-icon">
              <nvicons.BatteryChargingIcon />
              <br />
              BatteryChargingIcon
            </div>
            <div className="story-icon">
              <nvicons.BatteryFullIcon />
              <br />
              BatteryFullIcon
            </div>
            <div className="story-icon">
              <nvicons.BatteryLowIcon />
              <br />
              BatteryLowIcon
            </div>
            <div className="story-icon">
              <nvicons.BatteryMediumIcon />
              <br />
              BatteryMediumIcon
            </div>
            <div className="story-icon">
              <nvicons.BatteryWarningIcon />
              <br />
              BatteryWarningIcon
            </div>
            <div className="story-icon">
              <nvicons.BatteryIcon />
              <br />
              BatteryIcon
            </div>
            <div className="story-icon">
              <nvicons.BeakerIcon />
              <br />
              BeakerIcon
            </div>
            <div className="story-icon">
              <nvicons.BeanOffIcon />
              <br />
              BeanOffIcon
            </div>
            <div className="story-icon">
              <nvicons.BeanIcon />
              <br />
              BeanIcon
            </div>
            <div className="story-icon">
              <nvicons.BedDoubleIcon />
              <br />
              BedDoubleIcon
            </div>
            <div className="story-icon">
              <nvicons.BedSingleIcon />
              <br />
              BedSingleIcon
            </div>
            <div className="story-icon">
              <nvicons.BedIcon />
              <br />
              BedIcon
            </div>
            <div className="story-icon">
              <nvicons.BeefIcon />
              <br />
              BeefIcon
            </div>
            <div className="story-icon">
              <nvicons.BeerOffIcon />
              <br />
              BeerOffIcon
            </div>
            <div className="story-icon">
              <nvicons.BeerIcon />
              <br />
              BeerIcon
            </div>
            <div className="story-icon">
              <nvicons.BellArrowIcon />
              <br />
              BellArrowIcon
            </div>
            <div className="story-icon">
              <nvicons.BellDotIcon />
              <br />
              BellDotIcon
            </div>
            <div className="story-icon">
              <nvicons.BellElectricIcon />
              <br />
              BellElectricIcon
            </div>
            <div className="story-icon">
              <nvicons.BellMinusIcon />
              <br />
              BellMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.BellOffIcon />
              <br />
              BellOffIcon
            </div>
            <div className="story-icon">
              <nvicons.BellPlusIcon />
              <br />
              BellPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.BellRingIcon />
              <br />
              BellRingIcon
            </div>
            <div className="story-icon">
              <nvicons.BellIcon />
              <br />
              BellIcon
            </div>
            <div className="story-icon">
              <nvicons.BetweenHorizontalEndIcon />
              <br />
              BetweenHorizontalEndIcon
            </div>
            <div className="story-icon">
              <nvicons.BetweenHorizontalStartIcon />
              <br />
              BetweenHorizontalStartIcon
            </div>
            <div className="story-icon">
              <nvicons.BetweenVerticalEndIcon />
              <br />
              BetweenVerticalEndIcon
            </div>
            <div className="story-icon">
              <nvicons.BetweenVerticalStartIcon />
              <br />
              BetweenVerticalStartIcon
            </div>
            <div className="story-icon">
              <nvicons.BikeIcon />
              <br />
              BikeIcon
            </div>
            <div className="story-icon">
              <nvicons.BinaryIcon />
              <br />
              BinaryIcon
            </div>
            <div className="story-icon">
              <nvicons.BiohazardIcon />
              <br />
              BiohazardIcon
            </div>
            <div className="story-icon">
              <nvicons.BirdIcon />
              <br />
              BirdIcon
            </div>
            <div className="story-icon">
              <nvicons.BitcoinIcon />
              <br />
              BitcoinIcon
            </div>
            <div className="story-icon">
              <nvicons.BlendIcon />
              <br />
              BlendIcon
            </div>
            <div className="story-icon">
              <nvicons.BlindsIcon />
              <br />
              BlindsIcon
            </div>
            <div className="story-icon">
              <nvicons.BlocksIcon />
              <br />
              BlocksIcon
            </div>
            <div className="story-icon">
              <nvicons.BluetoothConnectedIcon />
              <br />
              BluetoothConnectedIcon
            </div>
            <div className="story-icon">
              <nvicons.BluetoothOffIcon />
              <br />
              BluetoothOffIcon
            </div>
            <div className="story-icon">
              <nvicons.BluetoothSearchingIcon />
              <br />
              BluetoothSearchingIcon
            </div>
            <div className="story-icon">
              <nvicons.BluetoothIcon />
              <br />
              BluetoothIcon
            </div>
            <div className="story-icon">
              <nvicons.BoldIcon />
              <br />
              BoldIcon
            </div>
            <div className="story-icon">
              <nvicons.BoltIcon />
              <br />
              BoltIcon
            </div>
            <div className="story-icon">
              <nvicons.BombIcon />
              <br />
              BombIcon
            </div>
            <div className="story-icon">
              <nvicons.BoneIcon />
              <br />
              BoneIcon
            </div>
            <div className="story-icon">
              <nvicons.BookAIcon />
              <br />
              BookAIcon
            </div>
            <div className="story-icon">
              <nvicons.BookAudioIcon />
              <br />
              BookAudioIcon
            </div>
            <div className="story-icon">
              <nvicons.BookCheckIcon />
              <br />
              BookCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.BookCopyIcon />
              <br />
              BookCopyIcon
            </div>
            <div className="story-icon">
              <nvicons.BookDashedIcon />
              <br />
              BookDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.BookDownIcon />
              <br />
              BookDownIcon
            </div>
            <div className="story-icon">
              <nvicons.BookHeadphonesIcon />
              <br />
              BookHeadphonesIcon
            </div>
            <div className="story-icon">
              <nvicons.BookHeartIcon />
              <br />
              BookHeartIcon
            </div>
            <div className="story-icon">
              <nvicons.BookImageIcon />
              <br />
              BookImageIcon
            </div>
            <div className="story-icon">
              <nvicons.BookKeyIcon />
              <br />
              BookKeyIcon
            </div>
            <div className="story-icon">
              <nvicons.BookLockIcon />
              <br />
              BookLockIcon
            </div>
            <div className="story-icon">
              <nvicons.BookMarkedIcon />
              <br />
              BookMarkedIcon
            </div>
            <div className="story-icon">
              <nvicons.BookMinusIcon />
              <br />
              BookMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.BookOpenCheckIcon />
              <br />
              BookOpenCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.BookOpenTextIcon />
              <br />
              BookOpenTextIcon
            </div>
            <div className="story-icon">
              <nvicons.BookOpenIcon />
              <br />
              BookOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.BookPlusIcon />
              <br />
              BookPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.BookTextIcon />
              <br />
              BookTextIcon
            </div>
            <div className="story-icon">
              <nvicons.BookTypeIcon />
              <br />
              BookTypeIcon
            </div>
            <div className="story-icon">
              <nvicons.BookUp2Icon />
              <br />
              BookUp2Icon
            </div>
            <div className="story-icon">
              <nvicons.BookUpIcon />
              <br />
              BookUpIcon
            </div>
            <div className="story-icon">
              <nvicons.BookUserIcon />
              <br />
              BookUserIcon
            </div>
            <div className="story-icon">
              <nvicons.BookXIcon />
              <br />
              BookXIcon
            </div>
            <div className="story-icon">
              <nvicons.BookIcon />
              <br />
              BookIcon
            </div>
            <div className="story-icon">
              <nvicons.BookmarkCheckIcon />
              <br />
              BookmarkCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.BookmarkMinusIcon />
              <br />
              BookmarkMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.BookmarkPlusIcon />
              <br />
              BookmarkPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.BookmarkXIcon />
              <br />
              BookmarkXIcon
            </div>
            <div className="story-icon">
              <nvicons.BookmarkIcon />
              <br />
              BookmarkIcon
            </div>
            <div className="story-icon">
              <nvicons.BoomBoxIcon />
              <br />
              BoomBoxIcon
            </div>
            <div className="story-icon">
              <nvicons.BotMessageSquareIcon />
              <br />
              BotMessageSquareIcon
            </div>
            <div className="story-icon">
              <nvicons.BotIcon />
              <br />
              BotIcon
            </div>
            <div className="story-icon">
              <nvicons.BoxSelectIcon />
              <br />
              BoxSelectIcon
            </div>
            <div className="story-icon">
              <nvicons.BoxIcon />
              <br />
              BoxIcon
            </div>
            <div className="story-icon">
              <nvicons.BoxesIcon />
              <br />
              BoxesIcon
            </div>
            <div className="story-icon">
              <nvicons.BoxOutlineIcon />
              <br />
              BoxOutlineIcon
            </div>
            <div className="story-icon">
              <nvicons.BracesIcon />
              <br />
              BracesIcon
            </div>
            <div className="story-icon">
              <nvicons.BracketsIcon />
              <br />
              BracketsIcon
            </div>
            <div className="story-icon">
              <nvicons.BrainCircuitIcon />
              <br />
              BrainCircuitIcon
            </div>
            <div className="story-icon">
              <nvicons.BrainCogIcon />
              <br />
              BrainCogIcon
            </div>
            <div className="story-icon">
              <nvicons.BrainIcon />
              <br />
              BrainIcon
            </div>
            <div className="story-icon">
              <nvicons.BrickWallIcon />
              <br />
              BrickWallIcon
            </div>
            <div className="story-icon">
              <nvicons.BriefcaseBusinessIcon />
              <br />
              BriefcaseBusinessIcon
            </div>
            <div className="story-icon">
              <nvicons.BriefcaseMedicalIcon />
              <br />
              BriefcaseMedicalIcon
            </div>
            <div className="story-icon">
              <nvicons.BriefcaseIcon />
              <br />
              BriefcaseIcon
            </div>
            <div className="story-icon">
              <nvicons.BringToFrontIcon />
              <br />
              BringToFrontIcon
            </div>
            <div className="story-icon">
              <nvicons.BrushIcon />
              <br />
              BrushIcon
            </div>
            <div className="story-icon">
              <nvicons.BucketCopyIcon />
              <br />
              BucketCopyIcon
            </div>
            <div className="story-icon">
              <nvicons.BucketIcon />
              <br />
              BucketIcon
            </div>
            <div className="story-icon">
              <nvicons.BucketQuotaIcon />
              <br />
              BucketQuotaIcon
            </div>
            <div className="story-icon">
              <nvicons.BugOffIcon />
              <br />
              BugOffIcon
            </div>
            <div className="story-icon">
              <nvicons.BugPlayIcon />
              <br />
              BugPlayIcon
            </div>
            <div className="story-icon">
              <nvicons.BugIcon />
              <br />
              BugIcon
            </div>
            <div className="story-icon">
              <nvicons.Building2Icon />
              <br />
              Building2Icon
            </div>
            <div className="story-icon">
              <nvicons.BuildingIcon />
              <br />
              BuildingIcon
            </div>
            <div className="story-icon">
              <nvicons.BusFrontIcon />
              <br />
              BusFrontIcon
            </div>
            <div className="story-icon">
              <nvicons.BusIcon />
              <br />
              BusIcon
            </div>
            <div className="story-icon">
              <nvicons.CableCarIcon />
              <br />
              CableCarIcon
            </div>
            <div className="story-icon">
              <nvicons.CableIcon />
              <br />
              CableIcon
            </div>
            <div className="story-icon">
              <nvicons.CakeSliceIcon />
              <br />
              CakeSliceIcon
            </div>
            <div className="story-icon">
              <nvicons.CakeIcon />
              <br />
              CakeIcon
            </div>
            <div className="story-icon">
              <nvicons.CalculatorIcon />
              <br />
              CalculatorIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarCheck2Icon />
              <br />
              CalendarCheck2Icon
            </div>
            <div className="story-icon">
              <nvicons.CalendarCheckIcon />
              <br />
              CalendarCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarClockIcon />
              <br />
              CalendarClockIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarDaysIcon />
              <br />
              CalendarDaysIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarFoldIcon />
              <br />
              CalendarFoldIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarHeartIcon />
              <br />
              CalendarHeartIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarMinus2Icon />
              <br />
              CalendarMinus2Icon
            </div>
            <div className="story-icon">
              <nvicons.CalendarMinusIcon />
              <br />
              CalendarMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarOffIcon />
              <br />
              CalendarOffIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarPlus2Icon />
              <br />
              CalendarPlus2Icon
            </div>
            <div className="story-icon">
              <nvicons.CalendarPlusIcon />
              <br />
              CalendarPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarRangeIcon />
              <br />
              CalendarRangeIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarSearchIcon />
              <br />
              CalendarSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarX2Icon />
              <br />
              CalendarX2Icon
            </div>
            <div className="story-icon">
              <nvicons.CalendarXIcon />
              <br />
              CalendarXIcon
            </div>
            <div className="story-icon">
              <nvicons.CalendarIcon />
              <br />
              CalendarIcon
            </div>
            <div className="story-icon">
              <nvicons.CameraOffIcon />
              <br />
              CameraOffIcon
            </div>
            <div className="story-icon">
              <nvicons.CameraIcon />
              <br />
              CameraIcon
            </div>
            <div className="story-icon">
              <nvicons.CandlestickChartIcon />
              <br />
              CandlestickChartIcon
            </div>
            <div className="story-icon">
              <nvicons.CandyCaneIcon />
              <br />
              CandyCaneIcon
            </div>
            <div className="story-icon">
              <nvicons.CandyOffIcon />
              <br />
              CandyOffIcon
            </div>
            <div className="story-icon">
              <nvicons.CandyIcon />
              <br />
              CandyIcon
            </div>
            <div className="story-icon">
              <nvicons.CannabisIcon />
              <br />
              CannabisIcon
            </div>
            <div className="story-icon">
              <nvicons.CaptionsOffIcon />
              <br />
              CaptionsOffIcon
            </div>
            <div className="story-icon">
              <nvicons.CaptionsIcon />
              <br />
              CaptionsIcon
            </div>
            <div className="story-icon">
              <nvicons.CarFrontIcon />
              <br />
              CarFrontIcon
            </div>
            <div className="story-icon">
              <nvicons.CarTaxiFrontIcon />
              <br />
              CarTaxiFrontIcon
            </div>
            <div className="story-icon">
              <nvicons.CarIcon />
              <br />
              CarIcon
            </div>
            <div className="story-icon">
              <nvicons.CaravanIcon />
              <br />
              CaravanIcon
            </div>
            <div className="story-icon">
              <nvicons.CaretFilledIcon />
              <br />
              CaretFilledIcon
            </div>
            <div className="story-icon">
              <nvicons.CaretIcon />
              <br />
              CaretIcon
            </div>
            <div className="story-icon">
              <nvicons.CaseLowerIcon />
              <br />
              CaseLowerIcon
            </div>
            <div className="story-icon">
              <nvicons.CaseSensitiveIcon />
              <br />
              CaseSensitiveIcon
            </div>
            <div className="story-icon">
              <nvicons.CaseUpperIcon />
              <br />
              CaseUpperIcon
            </div>
            <div className="story-icon">
              <nvicons.CassetteTapeIcon />
              <br />
              CassetteTapeIcon
            </div>
            <div className="story-icon">
              <nvicons.CastIcon />
              <br />
              CastIcon
            </div>
            <div className="story-icon">
              <nvicons.CastleIcon />
              <br />
              CastleIcon
            </div>
            <div className="story-icon">
              <nvicons.CatIcon />
              <br />
              CatIcon
            </div>
            <div className="story-icon">
              <nvicons.CctvIcon />
              <br />
              CctvIcon
            </div>
            <div className="story-icon">
              <nvicons.CheckCheckIcon />
              <br />
              CheckCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.CheckIcon />
              <br />
              CheckIcon
            </div>
            <div className="story-icon">
              <nvicons.ChefHatIcon />
              <br />
              ChefHatIcon
            </div>
            <div className="story-icon">
              <nvicons.CherryIcon />
              <br />
              CherryIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronDownIcon />
              <br />
              ChevronDownIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronFirstIcon />
              <br />
              ChevronFirstIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronLastIcon />
              <br />
              ChevronLastIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronLeftIcon />
              <br />
              ChevronLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronRightIcon />
              <br />
              ChevronRightIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronUpIcon />
              <br />
              ChevronUpIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronsDownUpIcon />
              <br />
              ChevronsDownUpIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronsDownIcon />
              <br />
              ChevronsDownIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronsLeftRightIcon />
              <br />
              ChevronsLeftRightIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronsLeftIcon />
              <br />
              ChevronsLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronsRightLeftIcon />
              <br />
              ChevronsRightLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronsRightIcon />
              <br />
              ChevronsRightIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronsUpDownIcon />
              <br />
              ChevronsUpDownIcon
            </div>
            <div className="story-icon">
              <nvicons.ChevronsUpIcon />
              <br />
              ChevronsUpIcon
            </div>
            <div className="story-icon">
              <nvicons.ChromeIcon />
              <br />
              ChromeIcon
            </div>
            <div className="story-icon">
              <nvicons.ChurchIcon />
              <br />
              ChurchIcon
            </div>
            <div className="story-icon">
              <nvicons.CigaretteOffIcon />
              <br />
              CigaretteOffIcon
            </div>
            <div className="story-icon">
              <nvicons.CigaretteIcon />
              <br />
              CigaretteIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleAlertIcon />
              <br />
              CircleAlertIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleArrowDownIcon />
              <br />
              CircleArrowDownIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleArrowLeftIcon />
              <br />
              CircleArrowLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleArrowOutDownLeftIcon />
              <br />
              CircleArrowOutDownLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleArrowOutDownRightIcon />
              <br />
              CircleArrowOutDownRightIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleArrowOutUpLeftIcon />
              <br />
              CircleArrowOutUpLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleArrowOutUpRightIcon />
              <br />
              CircleArrowOutUpRightIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleArrowRightIcon />
              <br />
              CircleArrowRightIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleArrowUpIcon />
              <br />
              CircleArrowUpIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleCheckBigIcon />
              <br />
              CircleCheckBigIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleCheckIcon />
              <br />
              CircleCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleChevronDownIcon />
              <br />
              CircleChevronDownIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleChevronLeftIcon />
              <br />
              CircleChevronLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleChevronRightIcon />
              <br />
              CircleChevronRightIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleChevronUpIcon />
              <br />
              CircleChevronUpIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleDashedIcon />
              <br />
              CircleDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleDivideIcon />
              <br />
              CircleDivideIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleDollarSignIcon />
              <br />
              CircleDollarSignIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleDotDashedIcon />
              <br />
              CircleDotDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleDotIcon />
              <br />
              CircleDotIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleEllipsisIcon />
              <br />
              CircleEllipsisIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleEqualIcon />
              <br />
              CircleEqualIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleFadingPlusIcon />
              <br />
              CircleFadingPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleFillIcon />
              <br />
              CircleFillIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleGaugeIcon />
              <br />
              CircleGaugeIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleHelpIcon />
              <br />
              CircleHelpIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleMinusIcon />
              <br />
              CircleMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleOffIcon />
              <br />
              CircleOffIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleParkingOffIcon />
              <br />
              CircleParkingOffIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleParkingIcon />
              <br />
              CircleParkingIcon
            </div>
            <div className="story-icon">
              <nvicons.CirclePauseIcon />
              <br />
              CirclePauseIcon
            </div>
            <div className="story-icon">
              <nvicons.CirclePercentIcon />
              <br />
              CirclePercentIcon
            </div>
            <div className="story-icon">
              <nvicons.CirclePlayIcon />
              <br />
              CirclePlayIcon
            </div>
            <div className="story-icon">
              <nvicons.CirclePlusIcon />
              <br />
              CirclePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.CirclePowerIcon />
              <br />
              CirclePowerIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleSlash2Icon />
              <br />
              CircleSlash2Icon
            </div>
            <div className="story-icon">
              <nvicons.CircleSlashIcon />
              <br />
              CircleSlashIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleStopIcon />
              <br />
              CircleStopIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleUserRoundIcon />
              <br />
              CircleUserRoundIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleUserIcon />
              <br />
              CircleUserIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleXIcon />
              <br />
              CircleXIcon
            </div>
            <div className="story-icon">
              <nvicons.CircleIcon />
              <br />
              CircleIcon
            </div>
            <div className="story-icon">
              <nvicons.CircuitBoardIcon />
              <br />
              CircuitBoardIcon
            </div>
            <div className="story-icon">
              <nvicons.CitrusIcon />
              <br />
              CitrusIcon
            </div>
            <div className="story-icon">
              <nvicons.ClapperboardIcon />
              <br />
              ClapperboardIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardCheckIcon />
              <br />
              ClipboardCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardCopyIcon />
              <br />
              ClipboardCopyIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardListIcon />
              <br />
              ClipboardListIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardMinusIcon />
              <br />
              ClipboardMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardPasteIcon />
              <br />
              ClipboardPasteIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardPenLineIcon />
              <br />
              ClipboardPenLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardPenIcon />
              <br />
              ClipboardPenIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardPlusIcon />
              <br />
              ClipboardPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardTypeIcon />
              <br />
              ClipboardTypeIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardXIcon />
              <br />
              ClipboardXIcon
            </div>
            <div className="story-icon">
              <nvicons.ClipboardIcon />
              <br />
              ClipboardIcon
            </div>
            <div className="story-icon">
              <nvicons.Clock1Icon />
              <br />
              Clock1Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock10Icon />
              <br />
              Clock10Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock11Icon />
              <br />
              Clock11Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock12Icon />
              <br />
              Clock12Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock2Icon />
              <br />
              Clock2Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock3Icon />
              <br />
              Clock3Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock4Icon />
              <br />
              Clock4Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock5Icon />
              <br />
              Clock5Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock6Icon />
              <br />
              Clock6Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock7Icon />
              <br />
              Clock7Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock8Icon />
              <br />
              Clock8Icon
            </div>
            <div className="story-icon">
              <nvicons.Clock9Icon />
              <br />
              Clock9Icon
            </div>
            <div className="story-icon">
              <nvicons.ClockIcon />
              <br />
              ClockIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudCogIcon />
              <br />
              CloudCogIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudDownloadIcon />
              <br />
              CloudDownloadIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudDrizzleIcon />
              <br />
              CloudDrizzleIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudFogIcon />
              <br />
              CloudFogIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudHailIcon />
              <br />
              CloudHailIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudLightningIcon />
              <br />
              CloudLightningIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudMoonRainIcon />
              <br />
              CloudMoonRainIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudMoonIcon />
              <br />
              CloudMoonIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudOffIcon />
              <br />
              CloudOffIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudRainWindIcon />
              <br />
              CloudRainWindIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudRainIcon />
              <br />
              CloudRainIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudSnowIcon />
              <br />
              CloudSnowIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudSunRainIcon />
              <br />
              CloudSunRainIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudSunIcon />
              <br />
              CloudSunIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudUploadIcon />
              <br />
              CloudUploadIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudIcon />
              <br />
              CloudIcon
            </div>
            <div className="story-icon">
              <nvicons.CloudyIcon />
              <br />
              CloudyIcon
            </div>
            <div className="story-icon">
              <nvicons.CloverIcon />
              <br />
              CloverIcon
            </div>
            <div className="story-icon">
              <nvicons.ClubIcon />
              <br />
              ClubIcon
            </div>
            <div className="story-icon">
              <nvicons.ClusterHealthIcon />
              <br />
              ClusterHealthIcon
            </div>
            <div className="story-icon">
              <nvicons.ClusterIngressIcon />
              <br />
              ClusterIngressIcon
            </div>
            <div className="story-icon">
              <nvicons.ClusterReplicationIcon />
              <br />
              ClusterReplicationIcon
            </div>
            <div className="story-icon">
              <nvicons.ClusterIcon />
              <br />
              ClusterIcon
            </div>
            <div className="story-icon">
              <nvicons.ClustersIcon />
              <br />
              ClustersIcon
            </div>
            <div className="story-icon">
              <nvicons.ClusterNodeIcon />
              <br />
              ClusterNodeIcon
            </div>
            <div className="story-icon">
              <nvicons.CodeXmlIcon />
              <br />
              CodeXmlIcon
            </div>
            <div className="story-icon">
              <nvicons.CodeIcon />
              <br />
              CodeIcon
            </div>
            <div className="story-icon">
              <nvicons.CodepenIcon />
              <br />
              CodepenIcon
            </div>
            <div className="story-icon">
              <nvicons.CodesandboxIcon />
              <br />
              CodesandboxIcon
            </div>
            <div className="story-icon">
              <nvicons.CoffeeIcon />
              <br />
              CoffeeIcon
            </div>
            <div className="story-icon">
              <nvicons.CogIcon />
              <br />
              CogIcon
            </div>
            <div className="story-icon">
              <nvicons.CoinsIcon />
              <br />
              CoinsIcon
            </div>
            <div className="story-icon">
              <nvicons.CollapseIcon />
              <br />
              CollapseIcon
            </div>
            <div className="story-icon">
              <nvicons.Columns2Icon />
              <br />
              Columns2Icon
            </div>
            <div className="story-icon">
              <nvicons.Columns3Icon />
              <br />
              Columns3Icon
            </div>
            <div className="story-icon">
              <nvicons.Columns4Icon />
              <br />
              Columns4Icon
            </div>
            <div className="story-icon">
              <nvicons.CombineIcon />
              <br />
              CombineIcon
            </div>
            <div className="story-icon">
              <nvicons.CommandIcon />
              <br />
              CommandIcon
            </div>
            <div className="story-icon">
              <nvicons.CompassIcon />
              <br />
              CompassIcon
            </div>
            <div className="story-icon">
              <nvicons.ComponentIcon />
              <br />
              ComponentIcon
            </div>
            <div className="story-icon">
              <nvicons.ComputerIcon />
              <br />
              ComputerIcon
            </div>
            <div className="story-icon">
              <nvicons.ConciergeBellIcon />
              <br />
              ConciergeBellIcon
            </div>
            <div className="story-icon">
              <nvicons.ConeIcon />
              <br />
              ConeIcon
            </div>
            <div className="story-icon">
              <nvicons.ConstructionIcon />
              <br />
              ConstructionIcon
            </div>
            <div className="story-icon">
              <nvicons.ContactRoundIcon />
              <br />
              ContactRoundIcon
            </div>
            <div className="story-icon">
              <nvicons.ContactIcon />
              <br />
              ContactIcon
            </div>
            <div className="story-icon">
              <nvicons.ContainerIcon />
              <br />
              ContainerIcon
            </div>
            <div className="story-icon">
              <nvicons.ContainerImagesIcon />
              <br />
              ContainerImagesIcon
            </div>
            <div className="story-icon">
              <nvicons.ContrastIcon />
              <br />
              ContrastIcon
            </div>
            <div className="story-icon">
              <nvicons.CookieIcon />
              <br />
              CookieIcon
            </div>
            <div className="story-icon">
              <nvicons.CookingPotIcon />
              <br />
              CookingPotIcon
            </div>
            <div className="story-icon">
              <nvicons.CopyCheckIcon />
              <br />
              CopyCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.CopyMinusIcon />
              <br />
              CopyMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.CopyPlusIcon />
              <br />
              CopyPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.CopySlashIcon />
              <br />
              CopySlashIcon
            </div>
            <div className="story-icon">
              <nvicons.CopyXIcon />
              <br />
              CopyXIcon
            </div>
            <div className="story-icon">
              <nvicons.CopyIcon />
              <br />
              CopyIcon
            </div>
            <div className="story-icon">
              <nvicons.CopyleftIcon />
              <br />
              CopyleftIcon
            </div>
            <div className="story-icon">
              <nvicons.CopyrightIcon />
              <br />
              CopyrightIcon
            </div>
            <div className="story-icon">
              <nvicons.CornerDownLeftIcon />
              <br />
              CornerDownLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.CornerDownRightIcon />
              <br />
              CornerDownRightIcon
            </div>
            <div className="story-icon">
              <nvicons.CornerLeftDownIcon />
              <br />
              CornerLeftDownIcon
            </div>
            <div className="story-icon">
              <nvicons.CornerLeftUpIcon />
              <br />
              CornerLeftUpIcon
            </div>
            <div className="story-icon">
              <nvicons.CornerRightDownIcon />
              <br />
              CornerRightDownIcon
            </div>
            <div className="story-icon">
              <nvicons.CornerRightUpIcon />
              <br />
              CornerRightUpIcon
            </div>
            <div className="story-icon">
              <nvicons.CornerUpLeftIcon />
              <br />
              CornerUpLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.CornerUpRightIcon />
              <br />
              CornerUpRightIcon
            </div>
            <div className="story-icon">
              <nvicons.CpuIcon />
              <br />
              CpuIcon
            </div>
            <div className="story-icon">
              <nvicons.CreativeCommonsIcon />
              <br />
              CreativeCommonsIcon
            </div>
            <div className="story-icon">
              <nvicons.CreditCardIcon />
              <br />
              CreditCardIcon
            </div>
            <div className="story-icon">
              <nvicons.CroissantIcon />
              <br />
              CroissantIcon
            </div>
            <div className="story-icon">
              <nvicons.CropIcon />
              <br />
              CropIcon
            </div>
            <div className="story-icon">
              <nvicons.CrossIcon />
              <br />
              CrossIcon
            </div>
            <div className="story-icon">
              <nvicons.CrosshairIcon />
              <br />
              CrosshairIcon
            </div>
            <div className="story-icon">
              <nvicons.CrownIcon />
              <br />
              CrownIcon
            </div>
            <div className="story-icon">
              <nvicons.CuboidIcon />
              <br />
              CuboidIcon
            </div>
            <div className="story-icon">
              <nvicons.CupSodaIcon />
              <br />
              CupSodaIcon
            </div>
            <div className="story-icon">
              <nvicons.CurrencyIcon />
              <br />
              CurrencyIcon
            </div>
            <div className="story-icon">
              <nvicons.CylinderIcon />
              <br />
              CylinderIcon
            </div>
            <div className="story-icon">
              <nvicons.DataIcon />
              <br />
              DataIcon
            </div>
            <div className="story-icon">
              <nvicons.DatabaseApiIcon />
              <br />
              DatabaseApiIcon
            </div>
            <div className="story-icon">
              <nvicons.DatabaseBackupIcon />
              <br />
              DatabaseBackupIcon
            </div>
            <div className="story-icon">
              <nvicons.DatabaseZapIcon />
              <br />
              DatabaseZapIcon
            </div>
            <div className="story-icon">
              <nvicons.DatabaseIcon />
              <br />
              DatabaseIcon
            </div>
            <div className="story-icon">
              <nvicons.DeleteIcon />
              <br />
              DeleteIcon
            </div>
            <div className="story-icon">
              <nvicons.DessertIcon />
              <br />
              DessertIcon
            </div>
            <div className="story-icon">
              <nvicons.DiameterIcon />
              <br />
              DiameterIcon
            </div>
            <div className="story-icon">
              <nvicons.DiamondPercentIcon />
              <br />
              DiamondPercentIcon
            </div>
            <div className="story-icon">
              <nvicons.DiamondIcon />
              <br />
              DiamondIcon
            </div>
            <div className="story-icon">
              <nvicons.Dice1Icon />
              <br />
              Dice1Icon
            </div>
            <div className="story-icon">
              <nvicons.Dice2Icon />
              <br />
              Dice2Icon
            </div>
            <div className="story-icon">
              <nvicons.Dice3Icon />
              <br />
              Dice3Icon
            </div>
            <div className="story-icon">
              <nvicons.Dice4Icon />
              <br />
              Dice4Icon
            </div>
            <div className="story-icon">
              <nvicons.Dice5Icon />
              <br />
              Dice5Icon
            </div>
            <div className="story-icon">
              <nvicons.Dice6Icon />
              <br />
              Dice6Icon
            </div>
            <div className="story-icon">
              <nvicons.DicesIcon />
              <br />
              DicesIcon
            </div>
            <div className="story-icon">
              <nvicons.DiffIcon />
              <br />
              DiffIcon
            </div>
            <div className="story-icon">
              <nvicons.Disc2Icon />
              <br />
              Disc2Icon
            </div>
            <div className="story-icon">
              <nvicons.Disc3Icon />
              <br />
              Disc3Icon
            </div>
            <div className="story-icon">
              <nvicons.DiscAlbumIcon />
              <br />
              DiscAlbumIcon
            </div>
            <div className="story-icon">
              <nvicons.DiscIcon />
              <br />
              DiscIcon
            </div>
            <div className="story-icon">
              <nvicons.DivideIcon />
              <br />
              DivideIcon
            </div>
            <div className="story-icon">
              <nvicons.DnaOffIcon />
              <br />
              DnaOffIcon
            </div>
            <div className="story-icon">
              <nvicons.DnaIcon />
              <br />
              DnaIcon
            </div>
            <div className="story-icon">
              <nvicons.DockIcon />
              <br />
              DockIcon
            </div>
            <div className="story-icon">
              <nvicons.DogIcon />
              <br />
              DogIcon
            </div>
            <div className="story-icon">
              <nvicons.DollarSignIcon />
              <br />
              DollarSignIcon
            </div>
            <div className="story-icon">
              <nvicons.DonutIcon />
              <br />
              DonutIcon
            </div>
            <div className="story-icon">
              <nvicons.DoorClosedIcon />
              <br />
              DoorClosedIcon
            </div>
            <div className="story-icon">
              <nvicons.DoorOpenIcon />
              <br />
              DoorOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.DotIcon />
              <br />
              DotIcon
            </div>
            <div className="story-icon">
              <nvicons.DownloadIcon />
              <br />
              DownloadIcon
            </div>
            <div className="story-icon">
              <nvicons.DraftingCompassIcon />
              <br />
              DraftingCompassIcon
            </div>
            <div className="story-icon">
              <nvicons.DramaIcon />
              <br />
              DramaIcon
            </div>
            <div className="story-icon">
              <nvicons.DribbbleIcon />
              <br />
              DribbbleIcon
            </div>
            <div className="story-icon">
              <nvicons.DrillIcon />
              <br />
              DrillIcon
            </div>
            <div className="story-icon">
              <nvicons.DropletIcon />
              <br />
              DropletIcon
            </div>
            <div className="story-icon">
              <nvicons.DropletsIcon />
              <br />
              DropletsIcon
            </div>
            <div className="story-icon">
              <nvicons.DrumIcon />
              <br />
              DrumIcon
            </div>
            <div className="story-icon">
              <nvicons.DrumstickIcon />
              <br />
              DrumstickIcon
            </div>
            <div className="story-icon">
              <nvicons.DumbbellIcon />
              <br />
              DumbbellIcon
            </div>
            <div className="story-icon">
              <nvicons.EarOffIcon />
              <br />
              EarOffIcon
            </div>
            <div className="story-icon">
              <nvicons.EarIcon />
              <br />
              EarIcon
            </div>
            <div className="story-icon">
              <nvicons.EarthLockIcon />
              <br />
              EarthLockIcon
            </div>
            <div className="story-icon">
              <nvicons.EarthIcon />
              <br />
              EarthIcon
            </div>
            <div className="story-icon">
              <nvicons.EclipseIcon />
              <br />
              EclipseIcon
            </div>
            <div className="story-icon">
              <nvicons.EggFriedIcon />
              <br />
              EggFriedIcon
            </div>
            <div className="story-icon">
              <nvicons.EggOffIcon />
              <br />
              EggOffIcon
            </div>
            <div className="story-icon">
              <nvicons.EggIcon />
              <br />
              EggIcon
            </div>
            <div className="story-icon">
              <nvicons.EllipsisVerticalIcon />
              <br />
              EllipsisVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.EllipsisIcon />
              <br />
              EllipsisIcon
            </div>
            <div className="story-icon">
              <nvicons.EqualNotIcon />
              <br />
              EqualNotIcon
            </div>
            <div className="story-icon">
              <nvicons.EqualIcon />
              <br />
              EqualIcon
            </div>
            <div className="story-icon">
              <nvicons.EraserIcon />
              <br />
              EraserIcon
            </div>
            <div className="story-icon">
              <nvicons.EuroIcon />
              <br />
              EuroIcon
            </div>
            <div className="story-icon">
              <nvicons.ExpandIcon />
              <br />
              ExpandIcon
            </div>
            <div className="story-icon">
              <nvicons.ExternalLinkIcon />
              <br />
              ExternalLinkIcon
            </div>
            <div className="story-icon">
              <nvicons.EyeOffIcon />
              <br />
              EyeOffIcon
            </div>
            <div className="story-icon">
              <nvicons.EyeIcon />
              <br />
              EyeIcon
            </div>
            <div className="story-icon">
              <nvicons.FacebookIcon />
              <br />
              FacebookIcon
            </div>
            <div className="story-icon">
              <nvicons.FactoryIcon />
              <br />
              FactoryIcon
            </div>
            <div className="story-icon">
              <nvicons.FanIcon />
              <br />
              FanIcon
            </div>
            <div className="story-icon">
              <nvicons.FastForwardIcon />
              <br />
              FastForwardIcon
            </div>
            <div className="story-icon">
              <nvicons.FeatherIcon />
              <br />
              FeatherIcon
            </div>
            <div className="story-icon">
              <nvicons.FenceIcon />
              <br />
              FenceIcon
            </div>
            <div className="story-icon">
              <nvicons.FerrisWheelIcon />
              <br />
              FerrisWheelIcon
            </div>
            <div className="story-icon">
              <nvicons.FigmaIcon />
              <br />
              FigmaIcon
            </div>
            <div className="story-icon">
              <nvicons.FileArchiveIcon />
              <br />
              FileArchiveIcon
            </div>
            <div className="story-icon">
              <nvicons.FileAudio2Icon />
              <br />
              FileAudio2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileAudioIcon />
              <br />
              FileAudioIcon
            </div>
            <div className="story-icon">
              <nvicons.FileAxis3dIcon />
              <br />
              FileAxis3dIcon
            </div>
            <div className="story-icon">
              <nvicons.FileBadge2Icon />
              <br />
              FileBadge2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileBadgeIcon />
              <br />
              FileBadgeIcon
            </div>
            <div className="story-icon">
              <nvicons.FileBarChart2Icon />
              <br />
              FileBarChart2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileBarChartIcon />
              <br />
              FileBarChartIcon
            </div>
            <div className="story-icon">
              <nvicons.FileBoxIcon />
              <br />
              FileBoxIcon
            </div>
            <div className="story-icon">
              <nvicons.FileCheck2Icon />
              <br />
              FileCheck2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileCheckIcon />
              <br />
              FileCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.FileClockIcon />
              <br />
              FileClockIcon
            </div>
            <div className="story-icon">
              <nvicons.FileCode2Icon />
              <br />
              FileCode2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileCodeIcon />
              <br />
              FileCodeIcon
            </div>
            <div className="story-icon">
              <nvicons.FileCogIcon />
              <br />
              FileCogIcon
            </div>
            <div className="story-icon">
              <nvicons.FileDiffIcon />
              <br />
              FileDiffIcon
            </div>
            <div className="story-icon">
              <nvicons.FileDigitIcon />
              <br />
              FileDigitIcon
            </div>
            <div className="story-icon">
              <nvicons.FileDownIcon />
              <br />
              FileDownIcon
            </div>
            <div className="story-icon">
              <nvicons.FileHeartIcon />
              <br />
              FileHeartIcon
            </div>
            <div className="story-icon">
              <nvicons.FileImageIcon />
              <br />
              FileImageIcon
            </div>
            <div className="story-icon">
              <nvicons.FileInputIcon />
              <br />
              FileInputIcon
            </div>
            <div className="story-icon">
              <nvicons.FileJson2Icon />
              <br />
              FileJson2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileJsonIcon />
              <br />
              FileJsonIcon
            </div>
            <div className="story-icon">
              <nvicons.FileKey2Icon />
              <br />
              FileKey2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileKeyIcon />
              <br />
              FileKeyIcon
            </div>
            <div className="story-icon">
              <nvicons.FileLineChartIcon />
              <br />
              FileLineChartIcon
            </div>
            <div className="story-icon">
              <nvicons.FileLock2Icon />
              <br />
              FileLock2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileLockIcon />
              <br />
              FileLockIcon
            </div>
            <div className="story-icon">
              <nvicons.FileMinus2Icon />
              <br />
              FileMinus2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileMinusIcon />
              <br />
              FileMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.FileMusicIcon />
              <br />
              FileMusicIcon
            </div>
            <div className="story-icon">
              <nvicons.FileOutputIcon />
              <br />
              FileOutputIcon
            </div>
            <div className="story-icon">
              <nvicons.FilePenLineIcon />
              <br />
              FilePenLineIcon
            </div>
            <div className="story-icon">
              <nvicons.FilePenIcon />
              <br />
              FilePenIcon
            </div>
            <div className="story-icon">
              <nvicons.FilePieChartIcon />
              <br />
              FilePieChartIcon
            </div>
            <div className="story-icon">
              <nvicons.FilePlus2Icon />
              <br />
              FilePlus2Icon
            </div>
            <div className="story-icon">
              <nvicons.FilePlusIcon />
              <br />
              FilePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.FileQuestionIcon />
              <br />
              FileQuestionIcon
            </div>
            <div className="story-icon">
              <nvicons.FileScanIcon />
              <br />
              FileScanIcon
            </div>
            <div className="story-icon">
              <nvicons.FileSearch2Icon />
              <br />
              FileSearch2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileSearchIcon />
              <br />
              FileSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.FileSlidersIcon />
              <br />
              FileSlidersIcon
            </div>
            <div className="story-icon">
              <nvicons.FileSpreadsheetIcon />
              <br />
              FileSpreadsheetIcon
            </div>
            <div className="story-icon">
              <nvicons.FileStackIcon />
              <br />
              FileStackIcon
            </div>
            <div className="story-icon">
              <nvicons.FileSymlinkIcon />
              <br />
              FileSymlinkIcon
            </div>
            <div className="story-icon">
              <nvicons.FileTerminalIcon />
              <br />
              FileTerminalIcon
            </div>
            <div className="story-icon">
              <nvicons.FileTextIcon />
              <br />
              FileTextIcon
            </div>
            <div className="story-icon">
              <nvicons.FileType2Icon />
              <br />
              FileType2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileTypeIcon />
              <br />
              FileTypeIcon
            </div>
            <div className="story-icon">
              <nvicons.FileUpIcon />
              <br />
              FileUpIcon
            </div>
            <div className="story-icon">
              <nvicons.FileVideo2Icon />
              <br />
              FileVideo2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileVideoIcon />
              <br />
              FileVideoIcon
            </div>
            <div className="story-icon">
              <nvicons.FileVolume2Icon />
              <br />
              FileVolume2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileVolumeIcon />
              <br />
              FileVolumeIcon
            </div>
            <div className="story-icon">
              <nvicons.FileWarningIcon />
              <br />
              FileWarningIcon
            </div>
            <div className="story-icon">
              <nvicons.FileX2Icon />
              <br />
              FileX2Icon
            </div>
            <div className="story-icon">
              <nvicons.FileXIcon />
              <br />
              FileXIcon
            </div>
            <div className="story-icon">
              <nvicons.FileIcon />
              <br />
              FileIcon
            </div>
            <div className="story-icon">
              <nvicons.FilesIcon />
              <br />
              FilesIcon
            </div>
            <div className="story-icon">
              <nvicons.FilmIcon />
              <br />
              FilmIcon
            </div>
            <div className="story-icon">
              <nvicons.FilterXIcon />
              <br />
              FilterXIcon
            </div>
            <div className="story-icon">
              <nvicons.FilterIcon />
              <br />
              FilterIcon
            </div>
            <div className="story-icon">
              <nvicons.FingerprintIcon />
              <br />
              FingerprintIcon
            </div>
            <div className="story-icon">
              <nvicons.FireExtinguisherIcon />
              <br />
              FireExtinguisherIcon
            </div>
            <div className="story-icon">
              <nvicons.FishSymbolIcon />
              <br />
              FishSymbolIcon
            </div>
            <div className="story-icon">
              <nvicons.FishIcon />
              <br />
              FishIcon
            </div>
            <div className="story-icon">
              <nvicons.FlagOffIcon />
              <br />
              FlagOffIcon
            </div>
            <div className="story-icon">
              <nvicons.FlagTriangleLeftIcon />
              <br />
              FlagTriangleLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.FlagTriangleRightIcon />
              <br />
              FlagTriangleRightIcon
            </div>
            <div className="story-icon">
              <nvicons.FlagIcon />
              <br />
              FlagIcon
            </div>
            <div className="story-icon">
              <nvicons.FlameKindlingIcon />
              <br />
              FlameKindlingIcon
            </div>
            <div className="story-icon">
              <nvicons.FlameIcon />
              <br />
              FlameIcon
            </div>
            <div className="story-icon">
              <nvicons.FlashlightOffIcon />
              <br />
              FlashlightOffIcon
            </div>
            <div className="story-icon">
              <nvicons.FlashlightIcon />
              <br />
              FlashlightIcon
            </div>
            <div className="story-icon">
              <nvicons.FlaskConicalOffIcon />
              <br />
              FlaskConicalOffIcon
            </div>
            <div className="story-icon">
              <nvicons.FlaskConicalIcon />
              <br />
              FlaskConicalIcon
            </div>
            <div className="story-icon">
              <nvicons.FlaskRoundIcon />
              <br />
              FlaskRoundIcon
            </div>
            <div className="story-icon">
              <nvicons.FlipHorizontal2Icon />
              <br />
              FlipHorizontal2Icon
            </div>
            <div className="story-icon">
              <nvicons.FlipHorizontalIcon />
              <br />
              FlipHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.FlipVertical2Icon />
              <br />
              FlipVertical2Icon
            </div>
            <div className="story-icon">
              <nvicons.FlipVerticalIcon />
              <br />
              FlipVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.Flower2Icon />
              <br />
              Flower2Icon
            </div>
            <div className="story-icon">
              <nvicons.FlowerIcon />
              <br />
              FlowerIcon
            </div>
            <div className="story-icon">
              <nvicons.FocusIcon />
              <br />
              FocusIcon
            </div>
            <div className="story-icon">
              <nvicons.FoldHorizontalIcon />
              <br />
              FoldHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.FoldVerticalIcon />
              <br />
              FoldVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderKey2Icon />
              <br />
              FolderKey2Icon
            </div>
            <div className="story-icon">
              <nvicons.FolderArchiveIcon />
              <br />
              FolderArchiveIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderCheckIcon />
              <br />
              FolderCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderClockIcon />
              <br />
              FolderClockIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderClosedIcon />
              <br />
              FolderClosedIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderCogIcon />
              <br />
              FolderCogIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderDotIcon />
              <br />
              FolderDotIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderDownIcon />
              <br />
              FolderDownIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderGit2Icon />
              <br />
              FolderGit2Icon
            </div>
            <div className="story-icon">
              <nvicons.FolderGitIcon />
              <br />
              FolderGitIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderHeartIcon />
              <br />
              FolderHeartIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderInputIcon />
              <br />
              FolderInputIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderKanbanIcon />
              <br />
              FolderKanbanIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderKeyIcon />
              <br />
              FolderKeyIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderLockIcon />
              <br />
              FolderLockIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderMinusIcon />
              <br />
              FolderMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderOpenDotIcon />
              <br />
              FolderOpenDotIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderOpenIcon />
              <br />
              FolderOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderOutputIcon />
              <br />
              FolderOutputIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderPenIcon />
              <br />
              FolderPenIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderPlusIcon />
              <br />
              FolderPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderRootIcon />
              <br />
              FolderRootIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderSearch2Icon />
              <br />
              FolderSearch2Icon
            </div>
            <div className="story-icon">
              <nvicons.FolderSearchIcon />
              <br />
              FolderSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderSymlinkIcon />
              <br />
              FolderSymlinkIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderSyncIcon />
              <br />
              FolderSyncIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderTreeIcon />
              <br />
              FolderTreeIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderUpIcon />
              <br />
              FolderUpIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderXIcon />
              <br />
              FolderXIcon
            </div>
            <div className="story-icon">
              <nvicons.FolderIcon />
              <br />
              FolderIcon
            </div>
            <div className="story-icon">
              <nvicons.FoldersIcon />
              <br />
              FoldersIcon
            </div>
            <div className="story-icon">
              <nvicons.FootprintsIcon />
              <br />
              FootprintsIcon
            </div>
            <div className="story-icon">
              <nvicons.ForkliftIcon />
              <br />
              ForkliftIcon
            </div>
            <div className="story-icon">
              <nvicons.ForwardIcon />
              <br />
              ForwardIcon
            </div>
            <div className="story-icon">
              <nvicons.FrameIcon />
              <br />
              FrameIcon
            </div>
            <div className="story-icon">
              <nvicons.FramerIcon />
              <br />
              FramerIcon
            </div>
            <div className="story-icon">
              <nvicons.FrownIcon />
              <br />
              FrownIcon
            </div>
            <div className="story-icon">
              <nvicons.FuelIcon />
              <br />
              FuelIcon
            </div>
            <div className="story-icon">
              <nvicons.FullscreenIcon />
              <br />
              FullscreenIcon
            </div>
            <div className="story-icon">
              <nvicons.GalleryHorizontalEndIcon />
              <br />
              GalleryHorizontalEndIcon
            </div>
            <div className="story-icon">
              <nvicons.GalleryHorizontalIcon />
              <br />
              GalleryHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.GalleryThumbnailsIcon />
              <br />
              GalleryThumbnailsIcon
            </div>
            <div className="story-icon">
              <nvicons.GalleryVerticalEndIcon />
              <br />
              GalleryVerticalEndIcon
            </div>
            <div className="story-icon">
              <nvicons.GalleryVerticalIcon />
              <br />
              GalleryVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.Gamepad2Icon />
              <br />
              Gamepad2Icon
            </div>
            <div className="story-icon">
              <nvicons.GamepadIcon />
              <br />
              GamepadIcon
            </div>
            <div className="story-icon">
              <nvicons.GanttChartIcon />
              <br />
              GanttChartIcon
            </div>
            <div className="story-icon">
              <nvicons.GaugeIcon />
              <br />
              GaugeIcon
            </div>
            <div className="story-icon">
              <nvicons.GavelIcon />
              <br />
              GavelIcon
            </div>
            <div className="story-icon">
              <nvicons.GemIcon />
              <br />
              GemIcon
            </div>
            <div className="story-icon">
              <nvicons.GhostIcon />
              <br />
              GhostIcon
            </div>
            <div className="story-icon">
              <nvicons.GiftIcon />
              <br />
              GiftIcon
            </div>
            <div className="story-icon">
              <nvicons.GitBranchPlusIcon />
              <br />
              GitBranchPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.GitBranchIcon />
              <br />
              GitBranchIcon
            </div>
            <div className="story-icon">
              <nvicons.GitCommitHorizontalIcon />
              <br />
              GitCommitHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.GitCommitVerticalIcon />
              <br />
              GitCommitVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.GitCompareArrowsIcon />
              <br />
              GitCompareArrowsIcon
            </div>
            <div className="story-icon">
              <nvicons.GitCompareIcon />
              <br />
              GitCompareIcon
            </div>
            <div className="story-icon">
              <nvicons.GitForkIcon />
              <br />
              GitForkIcon
            </div>
            <div className="story-icon">
              <nvicons.GitGraphIcon />
              <br />
              GitGraphIcon
            </div>
            <div className="story-icon">
              <nvicons.GitMergeIcon />
              <br />
              GitMergeIcon
            </div>
            <div className="story-icon">
              <nvicons.GitPullRequestArrowIcon />
              <br />
              GitPullRequestArrowIcon
            </div>
            <div className="story-icon">
              <nvicons.GitPullRequestClosedIcon />
              <br />
              GitPullRequestClosedIcon
            </div>
            <div className="story-icon">
              <nvicons.GitPullRequestCreateArrowIcon />
              <br />
              GitPullRequestCreateArrowIcon
            </div>
            <div className="story-icon">
              <nvicons.GitPullRequestCreateIcon />
              <br />
              GitPullRequestCreateIcon
            </div>
            <div className="story-icon">
              <nvicons.GitPullRequestDraftIcon />
              <br />
              GitPullRequestDraftIcon
            </div>
            <div className="story-icon">
              <nvicons.GitPullRequestIcon />
              <br />
              GitPullRequestIcon
            </div>
            <div className="story-icon">
              <nvicons.GithubIcon />
              <br />
              GithubIcon
            </div>
            <div className="story-icon">
              <nvicons.GitlabIcon />
              <br />
              GitlabIcon
            </div>
            <div className="story-icon">
              <nvicons.GlassWaterIcon />
              <br />
              GlassWaterIcon
            </div>
            <div className="story-icon">
              <nvicons.GlassesIcon />
              <br />
              GlassesIcon
            </div>
            <div className="story-icon">
              <nvicons.GlobeLockIcon />
              <br />
              GlobeLockIcon
            </div>
            <div className="story-icon">
              <nvicons.GlobeIcon />
              <br />
              GlobeIcon
            </div>
            <div className="story-icon">
              <nvicons.GoalIcon />
              <br />
              GoalIcon
            </div>
            <div className="story-icon">
              <nvicons.GoogleGkeSiteIcon />
              <br />
              GoogleGkeSiteIcon
            </div>
            <div className="story-icon">
              <nvicons.GrabIcon />
              <br />
              GrabIcon
            </div>
            <div className="story-icon">
              <nvicons.GraduationCapIcon />
              <br />
              GraduationCapIcon
            </div>
            <div className="story-icon">
              <nvicons.GrapeIcon />
              <br />
              GrapeIcon
            </div>
            <div className="story-icon">
              <nvicons.Grid2x2Icon />
              <br />
              Grid2x2Icon
            </div>
            <div className="story-icon">
              <nvicons.Grid3x3Icon />
              <br />
              Grid3x3Icon
            </div>
            <div className="story-icon">
              <nvicons.GripHorizontalIcon />
              <br />
              GripHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.GripVerticalIcon />
              <br />
              GripVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.GripIcon />
              <br />
              GripIcon
            </div>
            <div className="story-icon">
              <nvicons.GroupIcon />
              <br />
              GroupIcon
            </div>
            <div className="story-icon">
              <nvicons.GuitarIcon />
              <br />
              GuitarIcon
            </div>
            <div className="story-icon">
              <nvicons.HamIcon />
              <br />
              HamIcon
            </div>
            <div className="story-icon">
              <nvicons.HammerIcon />
              <br />
              HammerIcon
            </div>
            <div className="story-icon">
              <nvicons.HandCoinsIcon />
              <br />
              HandCoinsIcon
            </div>
            <div className="story-icon">
              <nvicons.HandHeartIcon />
              <br />
              HandHeartIcon
            </div>
            <div className="story-icon">
              <nvicons.HandHelpingIcon />
              <br />
              HandHelpingIcon
            </div>
            <div className="story-icon">
              <nvicons.HandMetalIcon />
              <br />
              HandMetalIcon
            </div>
            <div className="story-icon">
              <nvicons.HandPlatterIcon />
              <br />
              HandPlatterIcon
            </div>
            <div className="story-icon">
              <nvicons.HandIcon />
              <br />
              HandIcon
            </div>
            <div className="story-icon">
              <nvicons.HandshakeIcon />
              <br />
              HandshakeIcon
            </div>
            <div className="story-icon">
              <nvicons.HardDriveDownloadIcon />
              <br />
              HardDriveDownloadIcon
            </div>
            <div className="story-icon">
              <nvicons.HardDriveSearchIcon />
              <br />
              HardDriveSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.HardDriveUploadIcon />
              <br />
              HardDriveUploadIcon
            </div>
            <div className="story-icon">
              <nvicons.HardDriveIcon />
              <br />
              HardDriveIcon
            </div>
            <div className="story-icon">
              <nvicons.HardHatIcon />
              <br />
              HardHatIcon
            </div>
            <div className="story-icon">
              <nvicons.HashIcon />
              <br />
              HashIcon
            </div>
            <div className="story-icon">
              <nvicons.HazeIcon />
              <br />
              HazeIcon
            </div>
            <div className="story-icon">
              <nvicons.HdmiPortIcon />
              <br />
              HdmiPortIcon
            </div>
            <div className="story-icon">
              <nvicons.Heading1Icon />
              <br />
              Heading1Icon
            </div>
            <div className="story-icon">
              <nvicons.Heading2Icon />
              <br />
              Heading2Icon
            </div>
            <div className="story-icon">
              <nvicons.Heading3Icon />
              <br />
              Heading3Icon
            </div>
            <div className="story-icon">
              <nvicons.Heading4Icon />
              <br />
              Heading4Icon
            </div>
            <div className="story-icon">
              <nvicons.Heading5Icon />
              <br />
              Heading5Icon
            </div>
            <div className="story-icon">
              <nvicons.Heading6Icon />
              <br />
              Heading6Icon
            </div>
            <div className="story-icon">
              <nvicons.HeadingIcon />
              <br />
              HeadingIcon
            </div>
            <div className="story-icon">
              <nvicons.HeadphonesIcon />
              <br />
              HeadphonesIcon
            </div>
            <div className="story-icon">
              <nvicons.HeadsetIcon />
              <br />
              HeadsetIcon
            </div>
            <div className="story-icon">
              <nvicons.HeartCrackIcon />
              <br />
              HeartCrackIcon
            </div>
            <div className="story-icon">
              <nvicons.HeartHandshakeIcon />
              <br />
              HeartHandshakeIcon
            </div>
            <div className="story-icon">
              <nvicons.HeartOffIcon />
              <br />
              HeartOffIcon
            </div>
            <div className="story-icon">
              <nvicons.HeartPulseIcon />
              <br />
              HeartPulseIcon
            </div>
            <div className="story-icon">
              <nvicons.HeartIcon />
              <br />
              HeartIcon
            </div>
            <div className="story-icon">
              <nvicons.HeaterIcon />
              <br />
              HeaterIcon
            </div>
            <div className="story-icon">
              <nvicons.HexagonIcon />
              <br />
              HexagonIcon
            </div>
            <div className="story-icon">
              <nvicons.HighlighterIcon />
              <br />
              HighlighterIcon
            </div>
            <div className="story-icon">
              <nvicons.HistoryIcon />
              <br />
              HistoryIcon
            </div>
            <div className="story-icon">
              <nvicons.HomeIcon />
              <br />
              HomeIcon
            </div>
            <div className="story-icon">
              <nvicons.HopOffIcon />
              <br />
              HopOffIcon
            </div>
            <div className="story-icon">
              <nvicons.HopIcon />
              <br />
              HopIcon
            </div>
            <div className="story-icon">
              <nvicons.HospitalIcon />
              <br />
              HospitalIcon
            </div>
            <div className="story-icon">
              <nvicons.HotelIcon />
              <br />
              HotelIcon
            </div>
            <div className="story-icon">
              <nvicons.HourglassIcon />
              <br />
              HourglassIcon
            </div>
            <div className="story-icon">
              <nvicons.IceCreamBowlIcon />
              <br />
              IceCreamBowlIcon
            </div>
            <div className="story-icon">
              <nvicons.IceCreamConeIcon />
              <br />
              IceCreamConeIcon
            </div>
            <div className="story-icon">
              <nvicons.ImageDownIcon />
              <br />
              ImageDownIcon
            </div>
            <div className="story-icon">
              <nvicons.ImageMinusIcon />
              <br />
              ImageMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.ImageOffIcon />
              <br />
              ImageOffIcon
            </div>
            <div className="story-icon">
              <nvicons.ImagePlusIcon />
              <br />
              ImagePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.ImageUpIcon />
              <br />
              ImageUpIcon
            </div>
            <div className="story-icon">
              <nvicons.ImageIcon />
              <br />
              ImageIcon
            </div>
            <div className="story-icon">
              <nvicons.ImagesIcon />
              <br />
              ImagesIcon
            </div>
            <div className="story-icon">
              <nvicons.ImportIcon />
              <br />
              ImportIcon
            </div>
            <div className="story-icon">
              <nvicons.InboxIcon />
              <br />
              InboxIcon
            </div>
            <div className="story-icon">
              <nvicons.IndentDecreaseIcon />
              <br />
              IndentDecreaseIcon
            </div>
            <div className="story-icon">
              <nvicons.IndentIncreaseIcon />
              <br />
              IndentIncreaseIcon
            </div>
            <div className="story-icon">
              <nvicons.IndianRupeeIcon />
              <br />
              IndianRupeeIcon
            </div>
            <div className="story-icon">
              <nvicons.InfinityIcon />
              <br />
              InfinityIcon
            </div>
            <div className="story-icon">
              <nvicons.InfoIcon />
              <br />
              InfoIcon
            </div>
            <div className="story-icon">
              <nvicons.InspectionPanelIcon />
              <br />
              InspectionPanelIcon
            </div>
            <div className="story-icon">
              <nvicons.InstagramIcon />
              <br />
              InstagramIcon
            </div>
            <div className="story-icon">
              <nvicons.ItalicIcon />
              <br />
              ItalicIcon
            </div>
            <div className="story-icon">
              <nvicons.IterationCCWIcon />
              <br />
              IterationCCWIcon
            </div>
            <div className="story-icon">
              <nvicons.IterationCWIcon />
              <br />
              IterationCWIcon
            </div>
            <div className="story-icon">
              <nvicons.JapaneseYenIcon />
              <br />
              JapaneseYenIcon
            </div>
            <div className="story-icon">
              <nvicons.JoystickIcon />
              <br />
              JoystickIcon
            </div>
            <div className="story-icon">
              <nvicons.KanbanIcon />
              <br />
              KanbanIcon
            </div>
            <div className="story-icon">
              <nvicons.KeyRoundIcon />
              <br />
              KeyRoundIcon
            </div>
            <div className="story-icon">
              <nvicons.KeySquareIcon />
              <br />
              KeySquareIcon
            </div>
            <div className="story-icon">
              <nvicons.KeyIcon />
              <br />
              KeyIcon
            </div>
            <div className="story-icon">
              <nvicons.KeyboardMusicIcon />
              <br />
              KeyboardMusicIcon
            </div>
            <div className="story-icon">
              <nvicons.KeyboardIcon />
              <br />
              KeyboardIcon
            </div>
            <div className="story-icon">
              <nvicons.KubernetesSiteIcon />
              <br />
              KubernetesSiteIcon
            </div>
            <div className="story-icon">
              <nvicons.LambdaIcon />
              <br />
              LambdaIcon
            </div>
            <div className="story-icon">
              <nvicons.LampCeilingIcon />
              <br />
              LampCeilingIcon
            </div>
            <div className="story-icon">
              <nvicons.LampDeskIcon />
              <br />
              LampDeskIcon
            </div>
            <div className="story-icon">
              <nvicons.LampFloorIcon />
              <br />
              LampFloorIcon
            </div>
            <div className="story-icon">
              <nvicons.LampWallDownIcon />
              <br />
              LampWallDownIcon
            </div>
            <div className="story-icon">
              <nvicons.LampWallUpIcon />
              <br />
              LampWallUpIcon
            </div>
            <div className="story-icon">
              <nvicons.LampIcon />
              <br />
              LampIcon
            </div>
            <div className="story-icon">
              <nvicons.LandPlotIcon />
              <br />
              LandPlotIcon
            </div>
            <div className="story-icon">
              <nvicons.LandmarkIcon />
              <br />
              LandmarkIcon
            </div>
            <div className="story-icon">
              <nvicons.LanguagesIcon />
              <br />
              LanguagesIcon
            </div>
            <div className="story-icon">
              <nvicons.LaptopMinimalIcon />
              <br />
              LaptopMinimalIcon
            </div>
            <div className="story-icon">
              <nvicons.LaptopIcon />
              <br />
              LaptopIcon
            </div>
            <div className="story-icon">
              <nvicons.LassoSelectIcon />
              <br />
              LassoSelectIcon
            </div>
            <div className="story-icon">
              <nvicons.LassoIcon />
              <br />
              LassoIcon
            </div>
            <div className="story-icon">
              <nvicons.LaughIcon />
              <br />
              LaughIcon
            </div>
            <div className="story-icon">
              <nvicons.Layers2Icon />
              <br />
              Layers2Icon
            </div>
            <div className="story-icon">
              <nvicons.Layers3Icon />
              <br />
              Layers3Icon
            </div>
            <div className="story-icon">
              <nvicons.LayersIcon />
              <br />
              LayersIcon
            </div>
            <div className="story-icon">
              <nvicons.LayoutDashboardIcon />
              <br />
              LayoutDashboardIcon
            </div>
            <div className="story-icon">
              <nvicons.LayoutGridIcon />
              <br />
              LayoutGridIcon
            </div>
            <div className="story-icon">
              <nvicons.LayoutListIcon />
              <br />
              LayoutListIcon
            </div>
            <div className="story-icon">
              <nvicons.LayoutPanelLeftIcon />
              <br />
              LayoutPanelLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.LayoutPanelTopIcon />
              <br />
              LayoutPanelTopIcon
            </div>
            <div className="story-icon">
              <nvicons.LayoutTemplateIcon />
              <br />
              LayoutTemplateIcon
            </div>
            <div className="story-icon">
              <nvicons.LDAPIcon />
              <br />
              LDAPIcon
            </div>
            <div className="story-icon">
              <nvicons.LeafIcon />
              <br />
              LeafIcon
            </div>
            <div className="story-icon">
              <nvicons.LeafyGreenIcon />
              <br />
              LeafyGreenIcon
            </div>
            <div className="story-icon">
              <nvicons.LibraryBigIcon />
              <br />
              LibraryBigIcon
            </div>
            <div className="story-icon">
              <nvicons.LibraryIcon />
              <br />
              LibraryIcon
            </div>
            <div className="story-icon">
              <nvicons.LifeBuoyIcon />
              <br />
              LifeBuoyIcon
            </div>
            <div className="story-icon">
              <nvicons.LigatureIcon />
              <br />
              LigatureIcon
            </div>
            <div className="story-icon">
              <nvicons.LightbulbOffIcon />
              <br />
              LightbulbOffIcon
            </div>
            <div className="story-icon">
              <nvicons.LightbulbIcon />
              <br />
              LightbulbIcon
            </div>
            <div className="story-icon">
              <nvicons.LineChartIcon />
              <br />
              LineChartIcon
            </div>
            <div className="story-icon">
              <nvicons.Link2OffIcon />
              <br />
              Link2OffIcon
            </div>
            <div className="story-icon">
              <nvicons.Link2Icon />
              <br />
              Link2Icon
            </div>
            <div className="story-icon">
              <nvicons.LinkIcon />
              <br />
              LinkIcon
            </div>
            <div className="story-icon">
              <nvicons.LinkedinIcon />
              <br />
              LinkedinIcon
            </div>
            <div className="story-icon">
              <nvicons.ListChecksIcon />
              <br />
              ListChecksIcon
            </div>
            <div className="story-icon">
              <nvicons.ListCollapseIcon />
              <br />
              ListCollapseIcon
            </div>
            <div className="story-icon">
              <nvicons.ListEndIcon />
              <br />
              ListEndIcon
            </div>
            <div className="story-icon">
              <nvicons.ListFilterIcon />
              <br />
              ListFilterIcon
            </div>
            <div className="story-icon">
              <nvicons.ListMinusIcon />
              <br />
              ListMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.ListMusicIcon />
              <br />
              ListMusicIcon
            </div>
            <div className="story-icon">
              <nvicons.ListOrderedIcon />
              <br />
              ListOrderedIcon
            </div>
            <div className="story-icon">
              <nvicons.ListPlusIcon />
              <br />
              ListPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.ListRestartIcon />
              <br />
              ListRestartIcon
            </div>
            <div className="story-icon">
              <nvicons.ListStartIcon />
              <br />
              ListStartIcon
            </div>
            <div className="story-icon">
              <nvicons.ListTodoIcon />
              <br />
              ListTodoIcon
            </div>
            <div className="story-icon">
              <nvicons.ListTreeIcon />
              <br />
              ListTreeIcon
            </div>
            <div className="story-icon">
              <nvicons.ListVideoIcon />
              <br />
              ListVideoIcon
            </div>
            <div className="story-icon">
              <nvicons.ListXIcon />
              <br />
              ListXIcon
            </div>
            <div className="story-icon">
              <nvicons.ListIcon />
              <br />
              ListIcon
            </div>
            <div className="story-icon">
              <nvicons.LoaderCircleIcon />
              <br />
              LoaderCircleIcon
            </div>
            <div className="story-icon">
              <nvicons.LoaderIcon />
              <br />
              LoaderIcon
            </div>
            <div className="story-icon">
              <nvicons.LocateFixedIcon />
              <br />
              LocateFixedIcon
            </div>
            <div className="story-icon">
              <nvicons.LocateOffIcon />
              <br />
              LocateOffIcon
            </div>
            <div className="story-icon">
              <nvicons.LocateIcon />
              <br />
              LocateIcon
            </div>
            <div className="story-icon">
              <nvicons.LockKeyholeOpenIcon />
              <br />
              LockKeyholeOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.LockKeyholeIcon />
              <br />
              LockKeyholeIcon
            </div>
            <div className="story-icon">
              <nvicons.LockOpenIcon />
              <br />
              LockOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.LockIcon />
              <br />
              LockIcon
            </div>
            <div className="story-icon">
              <nvicons.LogInIcon />
              <br />
              LogInIcon
            </div>
            <div className="story-icon">
              <nvicons.LogOutIcon />
              <br />
              LogOutIcon
            </div>
            <div className="story-icon">
              <nvicons.LollipopIcon />
              <br />
              LollipopIcon
            </div>
            <div className="story-icon">
              <nvicons.LuggageIcon />
              <br />
              LuggageIcon
            </div>
            <div className="story-icon">
              <nvicons.MagnetIcon />
              <br />
              MagnetIcon
            </div>
            <div className="story-icon">
              <nvicons.MailCheckIcon />
              <br />
              MailCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.MailMinusIcon />
              <br />
              MailMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.MailOpenIcon />
              <br />
              MailOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.MailPlusIcon />
              <br />
              MailPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.MailQuestionIcon />
              <br />
              MailQuestionIcon
            </div>
            <div className="story-icon">
              <nvicons.MailSearchIcon />
              <br />
              MailSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.MailWarningIcon />
              <br />
              MailWarningIcon
            </div>
            <div className="story-icon">
              <nvicons.MailXIcon />
              <br />
              MailXIcon
            </div>
            <div className="story-icon">
              <nvicons.MailIcon />
              <br />
              MailIcon
            </div>
            <div className="story-icon">
              <nvicons.MailboxIcon />
              <br />
              MailboxIcon
            </div>
            <div className="story-icon">
              <nvicons.MailsIcon />
              <br />
              MailsIcon
            </div>
            <div className="story-icon">
              <nvicons.MapPinOffIcon />
              <br />
              MapPinOffIcon
            </div>
            <div className="story-icon">
              <nvicons.MapPinIcon />
              <br />
              MapPinIcon
            </div>
            <div className="story-icon">
              <nvicons.MapPinnedIcon />
              <br />
              MapPinnedIcon
            </div>
            <div className="story-icon">
              <nvicons.MapIcon />
              <br />
              MapIcon
            </div>
            <div className="story-icon">
              <nvicons.MartiniIcon />
              <br />
              MartiniIcon
            </div>
            <div className="story-icon">
              <nvicons.Maximize2Icon />
              <br />
              Maximize2Icon
            </div>
            <div className="story-icon">
              <nvicons.MaximizeIcon />
              <br />
              MaximizeIcon
            </div>
            <div className="story-icon">
              <nvicons.MedalIcon />
              <br />
              MedalIcon
            </div>
            <div className="story-icon">
              <nvicons.MegaphoneOffIcon />
              <br />
              MegaphoneOffIcon
            </div>
            <div className="story-icon">
              <nvicons.MegaphoneIcon />
              <br />
              MegaphoneIcon
            </div>
            <div className="story-icon">
              <nvicons.MehIcon />
              <br />
              MehIcon
            </div>
            <div className="story-icon">
              <nvicons.MemoryStickIcon />
              <br />
              MemoryStickIcon
            </div>
            <div className="story-icon">
              <nvicons.MenuIcon />
              <br />
              MenuIcon
            </div>
            <div className="story-icon">
              <nvicons.MergeIcon />
              <br />
              MergeIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleCodeIcon />
              <br />
              MessageCircleCodeIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleDashedIcon />
              <br />
              MessageCircleDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleHeartIcon />
              <br />
              MessageCircleHeartIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleMoreIcon />
              <br />
              MessageCircleMoreIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleOffIcon />
              <br />
              MessageCircleOffIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCirclePlusIcon />
              <br />
              MessageCirclePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleQuestionIcon />
              <br />
              MessageCircleQuestionIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleReplyIcon />
              <br />
              MessageCircleReplyIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleWarningIcon />
              <br />
              MessageCircleWarningIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleXIcon />
              <br />
              MessageCircleXIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageCircleIcon />
              <br />
              MessageCircleIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareCodeIcon />
              <br />
              MessageSquareCodeIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareDashedIcon />
              <br />
              MessageSquareDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareDiffIcon />
              <br />
              MessageSquareDiffIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareDotIcon />
              <br />
              MessageSquareDotIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareHeartIcon />
              <br />
              MessageSquareHeartIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareMoreIcon />
              <br />
              MessageSquareMoreIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareOffIcon />
              <br />
              MessageSquareOffIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquarePlusIcon />
              <br />
              MessageSquarePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareQuoteIcon />
              <br />
              MessageSquareQuoteIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareReplyIcon />
              <br />
              MessageSquareReplyIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareShareIcon />
              <br />
              MessageSquareShareIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareTextIcon />
              <br />
              MessageSquareTextIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareWarningIcon />
              <br />
              MessageSquareWarningIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareXIcon />
              <br />
              MessageSquareXIcon
            </div>
            <div className="story-icon">
              <nvicons.MessageSquareIcon />
              <br />
              MessageSquareIcon
            </div>
            <div className="story-icon">
              <nvicons.MessagesSquareIcon />
              <br />
              MessagesSquareIcon
            </div>
            <div className="story-icon">
              <nvicons.MicOffIcon />
              <br />
              MicOffIcon
            </div>
            <div className="story-icon">
              <nvicons.MicVocalIcon />
              <br />
              MicVocalIcon
            </div>
            <div className="story-icon">
              <nvicons.MicIcon />
              <br />
              MicIcon
            </div>
            <div className="story-icon">
              <nvicons.MicroscopeIcon />
              <br />
              MicroscopeIcon
            </div>
            <div className="story-icon">
              <nvicons.MicrowaveIcon />
              <br />
              MicrowaveIcon
            </div>
            <div className="story-icon">
              <nvicons.MilestoneIcon />
              <br />
              MilestoneIcon
            </div>
            <div className="story-icon">
              <nvicons.MilkOffIcon />
              <br />
              MilkOffIcon
            </div>
            <div className="story-icon">
              <nvicons.MilkIcon />
              <br />
              MilkIcon
            </div>
            <div className="story-icon">
              <nvicons.Minimize2Icon />
              <br />
              Minimize2Icon
            </div>
            <div className="story-icon">
              <nvicons.MinimizeIcon />
              <br />
              MinimizeIcon
            </div>
            <div className="story-icon">
              <nvicons.MinIOIcon />
              <br />
              MinIOIcon
            </div>
            <div className="story-icon">
              <nvicons.MinusIcon />
              <br />
              MinusIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorCheckIcon />
              <br />
              MonitorCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorDotIcon />
              <br />
              MonitorDotIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorDownIcon />
              <br />
              MonitorDownIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorOffIcon />
              <br />
              MonitorOffIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorPauseIcon />
              <br />
              MonitorPauseIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorPlayIcon />
              <br />
              MonitorPlayIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorSmartphoneIcon />
              <br />
              MonitorSmartphoneIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorSpeakerIcon />
              <br />
              MonitorSpeakerIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorStopIcon />
              <br />
              MonitorStopIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorUpIcon />
              <br />
              MonitorUpIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorXIcon />
              <br />
              MonitorXIcon
            </div>
            <div className="story-icon">
              <nvicons.MonitorIcon />
              <br />
              MonitorIcon
            </div>
            <div className="story-icon">
              <nvicons.MoonStarIcon />
              <br />
              MoonStarIcon
            </div>
            <div className="story-icon">
              <nvicons.MoonIcon />
              <br />
              MoonIcon
            </div>
            <div className="story-icon">
              <nvicons.MountainSnowIcon />
              <br />
              MountainSnowIcon
            </div>
            <div className="story-icon">
              <nvicons.MountainIcon />
              <br />
              MountainIcon
            </div>
            <div className="story-icon">
              <nvicons.MousePointer2Icon />
              <br />
              MousePointer2Icon
            </div>
            <div className="story-icon">
              <nvicons.MousePointerClickIcon />
              <br />
              MousePointerClickIcon
            </div>
            <div className="story-icon">
              <nvicons.MousePointerIcon />
              <br />
              MousePointerIcon
            </div>
            <div className="story-icon">
              <nvicons.MouseIcon />
              <br />
              MouseIcon
            </div>
            <div className="story-icon">
              <nvicons.Move3dIcon />
              <br />
              Move3dIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveDiagonal2Icon />
              <br />
              MoveDiagonal2Icon
            </div>
            <div className="story-icon">
              <nvicons.MoveDiagonalIcon />
              <br />
              MoveDiagonalIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveDownLeftIcon />
              <br />
              MoveDownLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveDownRightIcon />
              <br />
              MoveDownRightIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveDownIcon />
              <br />
              MoveDownIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveHorizontalIcon />
              <br />
              MoveHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveLeftIcon />
              <br />
              MoveLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveRightIcon />
              <br />
              MoveRightIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveUpLeftIcon />
              <br />
              MoveUpLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveUpRightIcon />
              <br />
              MoveUpRightIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveUpIcon />
              <br />
              MoveUpIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveVerticalIcon />
              <br />
              MoveVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.MoveIcon />
              <br />
              MoveIcon
            </div>
            <div className="story-icon">
              <nvicons.Music2Icon />
              <br />
              Music2Icon
            </div>
            <div className="story-icon">
              <nvicons.Music3Icon />
              <br />
              Music3Icon
            </div>
            <div className="story-icon">
              <nvicons.Music4Icon />
              <br />
              Music4Icon
            </div>
            <div className="story-icon">
              <nvicons.MusicIcon />
              <br />
              MusicIcon
            </div>
            <div className="story-icon">
              <nvicons.Navigation2OffIcon />
              <br />
              Navigation2OffIcon
            </div>
            <div className="story-icon">
              <nvicons.Navigation2Icon />
              <br />
              Navigation2Icon
            </div>
            <div className="story-icon">
              <nvicons.NavigationOffIcon />
              <br />
              NavigationOffIcon
            </div>
            <div className="story-icon">
              <nvicons.NavigationIcon />
              <br />
              NavigationIcon
            </div>
            <div className="story-icon">
              <nvicons.NetworkIcon />
              <br />
              NetworkIcon
            </div>
            <div className="story-icon">
              <nvicons.NewspaperIcon />
              <br />
              NewspaperIcon
            </div>
            <div className="story-icon">
              <nvicons.NfcIcon />
              <br />
              NfcIcon
            </div>
            <div className="story-icon">
              <nvicons.NotebookPenIcon />
              <br />
              NotebookPenIcon
            </div>
            <div className="story-icon">
              <nvicons.NotebookTabsIcon />
              <br />
              NotebookTabsIcon
            </div>
            <div className="story-icon">
              <nvicons.NotebookTextIcon />
              <br />
              NotebookTextIcon
            </div>
            <div className="story-icon">
              <nvicons.NotebookIcon />
              <br />
              NotebookIcon
            </div>
            <div className="story-icon">
              <nvicons.NotepadTextDashedIcon />
              <br />
              NotepadTextDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.NotepadTextIcon />
              <br />
              NotepadTextIcon
            </div>
            <div className="story-icon">
              <nvicons.NutOffIcon />
              <br />
              NutOffIcon
            </div>
            <div className="story-icon">
              <nvicons.NutIcon />
              <br />
              NutIcon
            </div>
            <div className="story-icon">
              <nvicons.OctagonAlertIcon />
              <br />
              OctagonAlertIcon
            </div>
            <div className="story-icon">
              <nvicons.OctagonPauseIcon />
              <br />
              OctagonPauseIcon
            </div>
            <div className="story-icon">
              <nvicons.OctagonXIcon />
              <br />
              OctagonXIcon
            </div>
            <div className="story-icon">
              <nvicons.OctagonIcon />
              <br />
              OctagonIcon
            </div>
            <div className="story-icon">
              <nvicons.OidcIcon />
              <br />
              OidcIcon
            </div>
            <div className="story-icon">
              <nvicons.OptionIcon />
              <br />
              OptionIcon
            </div>
            <div className="story-icon">
              <nvicons.OrbitIcon />
              <br />
              OrbitIcon
            </div>
            <div className="story-icon">
              <nvicons.Package2Icon />
              <br />
              Package2Icon
            </div>
            <div className="story-icon">
              <nvicons.PackageCheckIcon />
              <br />
              PackageCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.PackageMinusIcon />
              <br />
              PackageMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.PackageOpenIcon />
              <br />
              PackageOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.PackagePlusIcon />
              <br />
              PackagePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.PackageSearchIcon />
              <br />
              PackageSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.PackageXIcon />
              <br />
              PackageXIcon
            </div>
            <div className="story-icon">
              <nvicons.PackageIcon />
              <br />
              PackageIcon
            </div>
            <div className="story-icon">
              <nvicons.PaintBucketIcon />
              <br />
              PaintBucketIcon
            </div>
            <div className="story-icon">
              <nvicons.PaintRollerIcon />
              <br />
              PaintRollerIcon
            </div>
            <div className="story-icon">
              <nvicons.Paintbrush2Icon />
              <br />
              Paintbrush2Icon
            </div>
            <div className="story-icon">
              <nvicons.PaintbrushIcon />
              <br />
              PaintbrushIcon
            </div>
            <div className="story-icon">
              <nvicons.PaletteIcon />
              <br />
              PaletteIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelBottomCloseIcon />
              <br />
              PanelBottomCloseIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelBottomDashedIcon />
              <br />
              PanelBottomDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelBottomOpenIcon />
              <br />
              PanelBottomOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelBottomIcon />
              <br />
              PanelBottomIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelLeftCloseIcon />
              <br />
              PanelLeftCloseIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelLeftDashedIcon />
              <br />
              PanelLeftDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelLeftOpenIcon />
              <br />
              PanelLeftOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelLeftIcon />
              <br />
              PanelLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelRightCloseIcon />
              <br />
              PanelRightCloseIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelRightDashedIcon />
              <br />
              PanelRightDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelRightOpenIcon />
              <br />
              PanelRightOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelRightIcon />
              <br />
              PanelRightIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelTopCloseIcon />
              <br />
              PanelTopCloseIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelTopDashedIcon />
              <br />
              PanelTopDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelTopOpenIcon />
              <br />
              PanelTopOpenIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelTopIcon />
              <br />
              PanelTopIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelsLeftBottomIcon />
              <br />
              PanelsLeftBottomIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelsRightBottomIcon />
              <br />
              PanelsRightBottomIcon
            </div>
            <div className="story-icon">
              <nvicons.PanelsTopLeftIcon />
              <br />
              PanelsTopLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.PaperclipIcon />
              <br />
              PaperclipIcon
            </div>
            <div className="story-icon">
              <nvicons.ParenthesesIcon />
              <br />
              ParenthesesIcon
            </div>
            <div className="story-icon">
              <nvicons.ParkingMeterIcon />
              <br />
              ParkingMeterIcon
            </div>
            <div className="story-icon">
              <nvicons.PartyPopperIcon />
              <br />
              PartyPopperIcon
            </div>
            <div className="story-icon">
              <nvicons.PasscodeLockIcon />
              <br />
              PasscodeLockIcon
            </div>
            <div className="story-icon">
              <nvicons.PauseIcon />
              <br />
              PauseIcon
            </div>
            <div className="story-icon">
              <nvicons.PawPrintIcon />
              <br />
              PawPrintIcon
            </div>
            <div className="story-icon">
              <nvicons.PcCaseIcon />
              <br />
              PcCaseIcon
            </div>
            <div className="story-icon">
              <nvicons.PenLineIcon />
              <br />
              PenLineIcon
            </div>
            <div className="story-icon">
              <nvicons.PenToolIcon />
              <br />
              PenToolIcon
            </div>
            <div className="story-icon">
              <nvicons.PenIcon />
              <br />
              PenIcon
            </div>
            <div className="story-icon">
              <nvicons.PencilLineIcon />
              <br />
              PencilLineIcon
            </div>
            <div className="story-icon">
              <nvicons.PencilRulerIcon />
              <br />
              PencilRulerIcon
            </div>
            <div className="story-icon">
              <nvicons.PencilIcon />
              <br />
              PencilIcon
            </div>
            <div className="story-icon">
              <nvicons.PentagonIcon />
              <br />
              PentagonIcon
            </div>
            <div className="story-icon">
              <nvicons.PercentIcon />
              <br />
              PercentIcon
            </div>
            <div className="story-icon">
              <nvicons.PersonStandingIcon />
              <br />
              PersonStandingIcon
            </div>
            <div className="story-icon">
              <nvicons.PhoneCallIcon />
              <br />
              PhoneCallIcon
            </div>
            <div className="story-icon">
              <nvicons.PhoneForwardedIcon />
              <br />
              PhoneForwardedIcon
            </div>
            <div className="story-icon">
              <nvicons.PhoneIncomingIcon />
              <br />
              PhoneIncomingIcon
            </div>
            <div className="story-icon">
              <nvicons.PhoneMissedIcon />
              <br />
              PhoneMissedIcon
            </div>
            <div className="story-icon">
              <nvicons.PhoneOffIcon />
              <br />
              PhoneOffIcon
            </div>
            <div className="story-icon">
              <nvicons.PhoneOutgoingIcon />
              <br />
              PhoneOutgoingIcon
            </div>
            <div className="story-icon">
              <nvicons.PhoneIcon />
              <br />
              PhoneIcon
            </div>
            <div className="story-icon">
              <nvicons.PiIcon />
              <br />
              PiIcon
            </div>
            <div className="story-icon">
              <nvicons.PianoIcon />
              <br />
              PianoIcon
            </div>
            <div className="story-icon">
              <nvicons.PickaxeIcon />
              <br />
              PickaxeIcon
            </div>
            <div className="story-icon">
              <nvicons.PictureInPicture2Icon />
              <br />
              PictureInPicture2Icon
            </div>
            <div className="story-icon">
              <nvicons.PictureInPictureIcon />
              <br />
              PictureInPictureIcon
            </div>
            <div className="story-icon">
              <nvicons.PieChartIcon />
              <br />
              PieChartIcon
            </div>
            <div className="story-icon">
              <nvicons.PieUsageIcon />
              <br />
              PieUsageIcon
            </div>
            <div className="story-icon">
              <nvicons.PiggyBankIcon />
              <br />
              PiggyBankIcon
            </div>
            <div className="story-icon">
              <nvicons.PilcrowIcon />
              <br />
              PilcrowIcon
            </div>
            <div className="story-icon">
              <nvicons.PillIcon />
              <br />
              PillIcon
            </div>
            <div className="story-icon">
              <nvicons.PinOffIcon />
              <br />
              PinOffIcon
            </div>
            <div className="story-icon">
              <nvicons.PinIcon />
              <br />
              PinIcon
            </div>
            <div className="story-icon">
              <nvicons.PipetteIcon />
              <br />
              PipetteIcon
            </div>
            <div className="story-icon">
              <nvicons.PizzaIcon />
              <br />
              PizzaIcon
            </div>
            <div className="story-icon">
              <nvicons.PlaneLandingIcon />
              <br />
              PlaneLandingIcon
            </div>
            <div className="story-icon">
              <nvicons.PlaneTakeoffIcon />
              <br />
              PlaneTakeoffIcon
            </div>
            <div className="story-icon">
              <nvicons.PlaneIcon />
              <br />
              PlaneIcon
            </div>
            <div className="story-icon">
              <nvicons.PlayIcon />
              <br />
              PlayIcon
            </div>
            <div className="story-icon">
              <nvicons.Plug2Icon />
              <br />
              Plug2Icon
            </div>
            <div className="story-icon">
              <nvicons.PlugZap2Icon />
              <br />
              PlugZap2Icon
            </div>
            <div className="story-icon">
              <nvicons.PlugZapIcon />
              <br />
              PlugZapIcon
            </div>
            <div className="story-icon">
              <nvicons.PlugIcon />
              <br />
              PlugIcon
            </div>
            <div className="story-icon">
              <nvicons.PlusIcon />
              <br />
              PlusIcon
            </div>
            <div className="story-icon">
              <nvicons.PocketKnifeIcon />
              <br />
              PocketKnifeIcon
            </div>
            <div className="story-icon">
              <nvicons.PocketIcon />
              <br />
              PocketIcon
            </div>
            <div className="story-icon">
              <nvicons.PodcastIcon />
              <br />
              PodcastIcon
            </div>
            <div className="story-icon">
              <nvicons.PointerOffIcon />
              <br />
              PointerOffIcon
            </div>
            <div className="story-icon">
              <nvicons.PointerIcon />
              <br />
              PointerIcon
            </div>
            <div className="story-icon">
              <nvicons.PopcornIcon />
              <br />
              PopcornIcon
            </div>
            <div className="story-icon">
              <nvicons.PopsicleIcon />
              <br />
              PopsicleIcon
            </div>
            <div className="story-icon">
              <nvicons.PoundSterlingIcon />
              <br />
              PoundSterlingIcon
            </div>
            <div className="story-icon">
              <nvicons.PowerOffIcon />
              <br />
              PowerOffIcon
            </div>
            <div className="story-icon">
              <nvicons.PowerIcon />
              <br />
              PowerIcon
            </div>
            <div className="story-icon">
              <nvicons.PresentationIcon />
              <br />
              PresentationIcon
            </div>
            <div className="story-icon">
              <nvicons.PrinterIcon />
              <br />
              PrinterIcon
            </div>
            <div className="story-icon">
              <nvicons.ProjectorIcon />
              <br />
              ProjectorIcon
            </div>
            <div className="story-icon">
              <nvicons.ProportionsIcon />
              <br />
              ProportionsIcon
            </div>
            <div className="story-icon">
              <nvicons.PuzzleIcon />
              <br />
              PuzzleIcon
            </div>
            <div className="story-icon">
              <nvicons.PyramidIcon />
              <br />
              PyramidIcon
            </div>
            <div className="story-icon">
              <nvicons.QrCodeIcon />
              <br />
              QrCodeIcon
            </div>
            <div className="story-icon">
              <nvicons.QuoteIcon />
              <br />
              QuoteIcon
            </div>
            <div className="story-icon">
              <nvicons.RabbitIcon />
              <br />
              RabbitIcon
            </div>
            <div className="story-icon">
              <nvicons.RadarIcon />
              <br />
              RadarIcon
            </div>
            <div className="story-icon">
              <nvicons.RadiationIcon />
              <br />
              RadiationIcon
            </div>
            <div className="story-icon">
              <nvicons.RadicalIcon />
              <br />
              RadicalIcon
            </div>
            <div className="story-icon">
              <nvicons.RadioReceiverIcon />
              <br />
              RadioReceiverIcon
            </div>
            <div className="story-icon">
              <nvicons.RadioTowerIcon />
              <br />
              RadioTowerIcon
            </div>
            <div className="story-icon">
              <nvicons.RadioIcon />
              <br />
              RadioIcon
            </div>
            <div className="story-icon">
              <nvicons.RadiusIcon />
              <br />
              RadiusIcon
            </div>
            <div className="story-icon">
              <nvicons.RailSymbolIcon />
              <br />
              RailSymbolIcon
            </div>
            <div className="story-icon">
              <nvicons.RainbowIcon />
              <br />
              RainbowIcon
            </div>
            <div className="story-icon">
              <nvicons.RatIcon />
              <br />
              RatIcon
            </div>
            <div className="story-icon">
              <nvicons.RatioIcon />
              <br />
              RatioIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptCentIcon />
              <br />
              ReceiptCentIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptEuroIcon />
              <br />
              ReceiptEuroIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptIndianRupeeIcon />
              <br />
              ReceiptIndianRupeeIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptJapaneseYenIcon />
              <br />
              ReceiptJapaneseYenIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptPoundSterlingIcon />
              <br />
              ReceiptPoundSterlingIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptRussianRubleIcon />
              <br />
              ReceiptRussianRubleIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptSwissFrancIcon />
              <br />
              ReceiptSwissFrancIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptTextIcon />
              <br />
              ReceiptTextIcon
            </div>
            <div className="story-icon">
              <nvicons.ReceiptIcon />
              <br />
              ReceiptIcon
            </div>
            <div className="story-icon">
              <nvicons.RectangleEllipsisIcon />
              <br />
              RectangleEllipsisIcon
            </div>
            <div className="story-icon">
              <nvicons.RectangleHorizontalIcon />
              <br />
              RectangleHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.RectangleVerticalIcon />
              <br />
              RectangleVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.RecycleIcon />
              <br />
              RecycleIcon
            </div>
            <div className="story-icon">
              <nvicons.RedhatOpenshiftSiteIcon />
              <br />
              RedhatOpenshiftSiteIcon
            </div>
            <div className="story-icon">
              <nvicons.Redo2Icon />
              <br />
              Redo2Icon
            </div>
            <div className="story-icon">
              <nvicons.RedoDotIcon />
              <br />
              RedoDotIcon
            </div>
            <div className="story-icon">
              <nvicons.RedoIcon />
              <br />
              RedoIcon
            </div>
            <div className="story-icon">
              <nvicons.RefreshCCWDotIcon />
              <br />
              RefreshCCWDotIcon
            </div>
            <div className="story-icon">
              <nvicons.RefreshCCWIcon />
              <br />
              RefreshCCWIcon
            </div>
            <div className="story-icon">
              <nvicons.RefreshCWOffIcon />
              <br />
              RefreshCWOffIcon
            </div>
            <div className="story-icon">
              <nvicons.RefreshCWIcon />
              <br />
              RefreshCWIcon
            </div>
            <div className="story-icon">
              <nvicons.RefreshCwSettingsIcon />
              <br />
              RefreshCwSettingsIcon
            </div>
            <div className="story-icon">
              <nvicons.RefrigeratorIcon />
              <br />
              RefrigeratorIcon
            </div>
            <div className="story-icon">
              <nvicons.RegexIcon />
              <br />
              RegexIcon
            </div>
            <div className="story-icon">
              <nvicons.RemoveFormattingIcon />
              <br />
              RemoveFormattingIcon
            </div>
            <div className="story-icon">
              <nvicons.Repeat1Icon />
              <br />
              Repeat1Icon
            </div>
            <div className="story-icon">
              <nvicons.Repeat2Icon />
              <br />
              Repeat2Icon
            </div>
            <div className="story-icon">
              <nvicons.RepeatIcon />
              <br />
              RepeatIcon
            </div>
            <div className="story-icon">
              <nvicons.ReplaceAllIcon />
              <br />
              ReplaceAllIcon
            </div>
            <div className="story-icon">
              <nvicons.ReplaceIcon />
              <br />
              ReplaceIcon
            </div>
            <div className="story-icon">
              <nvicons.ReplyAllIcon />
              <br />
              ReplyAllIcon
            </div>
            <div className="story-icon">
              <nvicons.ReplyIcon />
              <br />
              ReplyIcon
            </div>
            <div className="story-icon">
              <nvicons.RewindIcon />
              <br />
              RewindIcon
            </div>
            <div className="story-icon">
              <nvicons.RibbonIcon />
              <br />
              RibbonIcon
            </div>
            <div className="story-icon">
              <nvicons.RocketIcon />
              <br />
              RocketIcon
            </div>
            <div className="story-icon">
              <nvicons.RockingChairIcon />
              <br />
              RockingChairIcon
            </div>
            <div className="story-icon">
              <nvicons.RollerCoasterIcon />
              <br />
              RollerCoasterIcon
            </div>
            <div className="story-icon">
              <nvicons.Rotate3dIcon />
              <br />
              Rotate3dIcon
            </div>
            <div className="story-icon">
              <nvicons.RotateCCWSquareIcon />
              <br />
              RotateCCWSquareIcon
            </div>
            <div className="story-icon">
              <nvicons.RotateCCWIcon />
              <br />
              RotateCCWIcon
            </div>
            <div className="story-icon">
              <nvicons.RotateCWSquareIcon />
              <br />
              RotateCWSquareIcon
            </div>
            <div className="story-icon">
              <nvicons.RotateCWIcon />
              <br />
              RotateCWIcon
            </div>
            <div className="story-icon">
              <nvicons.RouteOffIcon />
              <br />
              RouteOffIcon
            </div>
            <div className="story-icon">
              <nvicons.RouteIcon />
              <br />
              RouteIcon
            </div>
            <div className="story-icon">
              <nvicons.RouterIcon />
              <br />
              RouterIcon
            </div>
            <div className="story-icon">
              <nvicons.Rows2Icon />
              <br />
              Rows2Icon
            </div>
            <div className="story-icon">
              <nvicons.Rows3Icon />
              <br />
              Rows3Icon
            </div>
            <div className="story-icon">
              <nvicons.Rows4Icon />
              <br />
              Rows4Icon
            </div>
            <div className="story-icon">
              <nvicons.RssIcon />
              <br />
              RssIcon
            </div>
            <div className="story-icon">
              <nvicons.RulerIcon />
              <br />
              RulerIcon
            </div>
            <div className="story-icon">
              <nvicons.RussianRubleIcon />
              <br />
              RussianRubleIcon
            </div>
            <div className="story-icon">
              <nvicons.SailboatIcon />
              <br />
              SailboatIcon
            </div>
            <div className="story-icon">
              <nvicons.SaladIcon />
              <br />
              SaladIcon
            </div>
            <div className="story-icon">
              <nvicons.SandwichIcon />
              <br />
              SandwichIcon
            </div>
            <div className="story-icon">
              <nvicons.SatelliteDishIcon />
              <br />
              SatelliteDishIcon
            </div>
            <div className="story-icon">
              <nvicons.SatelliteIcon />
              <br />
              SatelliteIcon
            </div>
            <div className="story-icon">
              <nvicons.SaveAllIcon />
              <br />
              SaveAllIcon
            </div>
            <div className="story-icon">
              <nvicons.SaveIcon />
              <br />
              SaveIcon
            </div>
            <div className="story-icon">
              <nvicons.Scale3dIcon />
              <br />
              Scale3dIcon
            </div>
            <div className="story-icon">
              <nvicons.ScaleIcon />
              <br />
              ScaleIcon
            </div>
            <div className="story-icon">
              <nvicons.ScalingIcon />
              <br />
              ScalingIcon
            </div>
            <div className="story-icon">
              <nvicons.ScanBarcodeIcon />
              <br />
              ScanBarcodeIcon
            </div>
            <div className="story-icon">
              <nvicons.ScanEyeIcon />
              <br />
              ScanEyeIcon
            </div>
            <div className="story-icon">
              <nvicons.ScanFaceIcon />
              <br />
              ScanFaceIcon
            </div>
            <div className="story-icon">
              <nvicons.ScanLineIcon />
              <br />
              ScanLineIcon
            </div>
            <div className="story-icon">
              <nvicons.ScanSearchIcon />
              <br />
              ScanSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.ScanTextIcon />
              <br />
              ScanTextIcon
            </div>
            <div className="story-icon">
              <nvicons.ScanIcon />
              <br />
              ScanIcon
            </div>
            <div className="story-icon">
              <nvicons.ScatterChartIcon />
              <br />
              ScatterChartIcon
            </div>
            <div className="story-icon">
              <nvicons.SchoolIcon />
              <br />
              SchoolIcon
            </div>
            <div className="story-icon">
              <nvicons.ScissorsLineDashedIcon />
              <br />
              ScissorsLineDashedIcon
            </div>
            <div className="story-icon">
              <nvicons.ScissorsIcon />
              <br />
              ScissorsIcon
            </div>
            <div className="story-icon">
              <nvicons.ScreenShareOffIcon />
              <br />
              ScreenShareOffIcon
            </div>
            <div className="story-icon">
              <nvicons.ScreenShareIcon />
              <br />
              ScreenShareIcon
            </div>
            <div className="story-icon">
              <nvicons.ScrollTextIcon />
              <br />
              ScrollTextIcon
            </div>
            <div className="story-icon">
              <nvicons.ScrollIcon />
              <br />
              ScrollIcon
            </div>
            <div className="story-icon">
              <nvicons.SearchCheckIcon />
              <br />
              SearchCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.SearchCodeIcon />
              <br />
              SearchCodeIcon
            </div>
            <div className="story-icon">
              <nvicons.SearchSlashIcon />
              <br />
              SearchSlashIcon
            </div>
            <div className="story-icon">
              <nvicons.SearchXIcon />
              <br />
              SearchXIcon
            </div>
            <div className="story-icon">
              <nvicons.SearchIcon />
              <br />
              SearchIcon
            </div>
            <div className="story-icon">
              <nvicons.SendHorizontalIcon />
              <br />
              SendHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.SendToBackIcon />
              <br />
              SendToBackIcon
            </div>
            <div className="story-icon">
              <nvicons.SendIcon />
              <br />
              SendIcon
            </div>
            <div className="story-icon">
              <nvicons.SeparatorHorizontalIcon />
              <br />
              SeparatorHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.SeparatorVerticalIcon />
              <br />
              SeparatorVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.ServerCogIcon />
              <br />
              ServerCogIcon
            </div>
            <div className="story-icon">
              <nvicons.ServerCrashIcon />
              <br />
              ServerCrashIcon
            </div>
            <div className="story-icon">
              <nvicons.ServerOffIcon />
              <br />
              ServerOffIcon
            </div>
            <div className="story-icon">
              <nvicons.ServerIcon />
              <br />
              ServerIcon
            </div>
            <div className="story-icon">
              <nvicons.Settings2Icon />
              <br />
              Settings2Icon
            </div>
            <div className="story-icon">
              <nvicons.SettingsIcon />
              <br />
              SettingsIcon
            </div>
            <div className="story-icon">
              <nvicons.ShapesIcon />
              <br />
              ShapesIcon
            </div>
            <div className="story-icon">
              <nvicons.Share2Icon />
              <br />
              Share2Icon
            </div>
            <div className="story-icon">
              <nvicons.ShareIcon />
              <br />
              ShareIcon
            </div>
            <div className="story-icon">
              <nvicons.SheetIcon />
              <br />
              SheetIcon
            </div>
            <div className="story-icon">
              <nvicons.ShellIcon />
              <br />
              ShellIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldAlertIcon />
              <br />
              ShieldAlertIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldBanIcon />
              <br />
              ShieldBanIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldCheckIcon />
              <br />
              ShieldCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldEllipsisIcon />
              <br />
              ShieldEllipsisIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldHalfIcon />
              <br />
              ShieldHalfIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldMinusIcon />
              <br />
              ShieldMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldOffIcon />
              <br />
              ShieldOffIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldPlusIcon />
              <br />
              ShieldPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldQuestionIcon />
              <br />
              ShieldQuestionIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldXIcon />
              <br />
              ShieldXIcon
            </div>
            <div className="story-icon">
              <nvicons.ShieldIcon />
              <br />
              ShieldIcon
            </div>
            <div className="story-icon">
              <nvicons.ShipWheelIcon />
              <br />
              ShipWheelIcon
            </div>
            <div className="story-icon">
              <nvicons.ShipIcon />
              <br />
              ShipIcon
            </div>
            <div className="story-icon">
              <nvicons.ShirtIcon />
              <br />
              ShirtIcon
            </div>
            <div className="story-icon">
              <nvicons.ShoppingBagIcon />
              <br />
              ShoppingBagIcon
            </div>
            <div className="story-icon">
              <nvicons.ShoppingBasketIcon />
              <br />
              ShoppingBasketIcon
            </div>
            <div className="story-icon">
              <nvicons.ShoppingCartIcon />
              <br />
              ShoppingCartIcon
            </div>
            <div className="story-icon">
              <nvicons.ShovelIcon />
              <br />
              ShovelIcon
            </div>
            <div className="story-icon">
              <nvicons.ShowerHeadIcon />
              <br />
              ShowerHeadIcon
            </div>
            <div className="story-icon">
              <nvicons.ShrinkIcon />
              <br />
              ShrinkIcon
            </div>
            <div className="story-icon">
              <nvicons.ShrubIcon />
              <br />
              ShrubIcon
            </div>
            <div className="story-icon">
              <nvicons.ShuffleIcon />
              <br />
              ShuffleIcon
            </div>
            <div className="story-icon">
              <nvicons.SigmaIcon />
              <br />
              SigmaIcon
            </div>
            <div className="story-icon">
              <nvicons.SignalHighIcon />
              <br />
              SignalHighIcon
            </div>
            <div className="story-icon">
              <nvicons.SignalLowIcon />
              <br />
              SignalLowIcon
            </div>
            <div className="story-icon">
              <nvicons.SignalMediumIcon />
              <br />
              SignalMediumIcon
            </div>
            <div className="story-icon">
              <nvicons.SignalZeroIcon />
              <br />
              SignalZeroIcon
            </div>
            <div className="story-icon">
              <nvicons.SignalIcon />
              <br />
              SignalIcon
            </div>
            <div className="story-icon">
              <nvicons.SignpostBigIcon />
              <br />
              SignpostBigIcon
            </div>
            <div className="story-icon">
              <nvicons.SignpostIcon />
              <br />
              SignpostIcon
            </div>
            <div className="story-icon">
              <nvicons.SirenIcon />
              <br />
              SirenIcon
            </div>
            <div className="story-icon">
              <nvicons.SitesIcon />
              <br />
              SitesIcon
            </div>
            <div className="story-icon">
              <nvicons.SkipBackIcon />
              <br />
              SkipBackIcon
            </div>
            <div className="story-icon">
              <nvicons.SkipForwardIcon />
              <br />
              SkipForwardIcon
            </div>
            <div className="story-icon">
              <nvicons.SkullIcon />
              <br />
              SkullIcon
            </div>
            <div className="story-icon">
              <nvicons.SlackIcon />
              <br />
              SlackIcon
            </div>
            <div className="story-icon">
              <nvicons.SlashIcon />
              <br />
              SlashIcon
            </div>
            <div className="story-icon">
              <nvicons.SliceIcon />
              <br />
              SliceIcon
            </div>
            <div className="story-icon">
              <nvicons.SlidersHorizontalIcon />
              <br />
              SlidersHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.SlidersVerticalIcon />
              <br />
              SlidersVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.SmartphoneChargingIcon />
              <br />
              SmartphoneChargingIcon
            </div>
            <div className="story-icon">
              <nvicons.SmartphoneNfcIcon />
              <br />
              SmartphoneNfcIcon
            </div>
            <div className="story-icon">
              <nvicons.SmartphoneIcon />
              <br />
              SmartphoneIcon
            </div>
            <div className="story-icon">
              <nvicons.SmilePlusIcon />
              <br />
              SmilePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.SmileIcon />
              <br />
              SmileIcon
            </div>
            <div className="story-icon">
              <nvicons.SnailIcon />
              <br />
              SnailIcon
            </div>
            <div className="story-icon">
              <nvicons.SnowflakeIcon />
              <br />
              SnowflakeIcon
            </div>
            <div className="story-icon">
              <nvicons.SofaIcon />
              <br />
              SofaIcon
            </div>
            <div className="story-icon">
              <nvicons.SoupIcon />
              <br />
              SoupIcon
            </div>
            <div className="story-icon">
              <nvicons.SpaceIcon />
              <br />
              SpaceIcon
            </div>
            <div className="story-icon">
              <nvicons.SpadeIcon />
              <br />
              SpadeIcon
            </div>
            <div className="story-icon">
              <nvicons.SparkleIcon />
              <br />
              SparkleIcon
            </div>
            <div className="story-icon">
              <nvicons.SparklesIcon />
              <br />
              SparklesIcon
            </div>
            <div className="story-icon">
              <nvicons.SpeakerIcon />
              <br />
              SpeakerIcon
            </div>
            <div className="story-icon">
              <nvicons.SpeechIcon />
              <br />
              SpeechIcon
            </div>
            <div className="story-icon">
              <nvicons.SpellCheck2Icon />
              <br />
              SpellCheck2Icon
            </div>
            <div className="story-icon">
              <nvicons.SpellCheckIcon />
              <br />
              SpellCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.SplineIcon />
              <br />
              SplineIcon
            </div>
            <div className="story-icon">
              <nvicons.SplitIcon />
              <br />
              SplitIcon
            </div>
            <div className="story-icon">
              <nvicons.SprayCanIcon />
              <br />
              SprayCanIcon
            </div>
            <div className="story-icon">
              <nvicons.SproutIcon />
              <br />
              SproutIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareActivityIcon />
              <br />
              SquareActivityIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowDownLeftIcon />
              <br />
              SquareArrowDownLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowDownRightIcon />
              <br />
              SquareArrowDownRightIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowDownIcon />
              <br />
              SquareArrowDownIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowLeftIcon />
              <br />
              SquareArrowLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowOutDownLeftIcon />
              <br />
              SquareArrowOutDownLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowOutDownRightIcon />
              <br />
              SquareArrowOutDownRightIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowOutUpLeftIcon />
              <br />
              SquareArrowOutUpLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowOutUpRightIcon />
              <br />
              SquareArrowOutUpRightIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowRightIcon />
              <br />
              SquareArrowRightIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowUpLeftIcon />
              <br />
              SquareArrowUpLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowUpRightIcon />
              <br />
              SquareArrowUpRightIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareArrowUpIcon />
              <br />
              SquareArrowUpIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareAsteriskIcon />
              <br />
              SquareAsteriskIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareBottomDashedScissorsIcon />
              <br />
              SquareBottomDashedScissorsIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareCheckBigIcon />
              <br />
              SquareCheckBigIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareCheckIcon />
              <br />
              SquareCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareChevronDownIcon />
              <br />
              SquareChevronDownIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareChevronLeftIcon />
              <br />
              SquareChevronLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareChevronRightIcon />
              <br />
              SquareChevronRightIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareChevronUpIcon />
              <br />
              SquareChevronUpIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareCodeIcon />
              <br />
              SquareCodeIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareDashedBottomCodeIcon />
              <br />
              SquareDashedBottomCodeIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareDashedBottomIcon />
              <br />
              SquareDashedBottomIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareDashedKanbanIcon />
              <br />
              SquareDashedKanbanIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareDashedMousePointerIcon />
              <br />
              SquareDashedMousePointerIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareDivideIcon />
              <br />
              SquareDivideIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareDotIcon />
              <br />
              SquareDotIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareEqualIcon />
              <br />
              SquareEqualIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareFunctionIcon />
              <br />
              SquareFunctionIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareGanttChartIcon />
              <br />
              SquareGanttChartIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareKanbanIcon />
              <br />
              SquareKanbanIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareLibraryIcon />
              <br />
              SquareLibraryIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareMIcon />
              <br />
              SquareMIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareMenuIcon />
              <br />
              SquareMenuIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareMinusIcon />
              <br />
              SquareMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareMousePointerIcon />
              <br />
              SquareMousePointerIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareParkingOffIcon />
              <br />
              SquareParkingOffIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareParkingIcon />
              <br />
              SquareParkingIcon
            </div>
            <div className="story-icon">
              <nvicons.SquarePenIcon />
              <br />
              SquarePenIcon
            </div>
            <div className="story-icon">
              <nvicons.SquarePercentIcon />
              <br />
              SquarePercentIcon
            </div>
            <div className="story-icon">
              <nvicons.SquarePiIcon />
              <br />
              SquarePiIcon
            </div>
            <div className="story-icon">
              <nvicons.SquarePilcrowIcon />
              <br />
              SquarePilcrowIcon
            </div>
            <div className="story-icon">
              <nvicons.SquarePlayIcon />
              <br />
              SquarePlayIcon
            </div>
            <div className="story-icon">
              <nvicons.SquarePlusIcon />
              <br />
              SquarePlusIcon
            </div>
            <div className="story-icon">
              <nvicons.SquarePowerIcon />
              <br />
              SquarePowerIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareRadicalIcon />
              <br />
              SquareRadicalIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareScissorsIcon />
              <br />
              SquareScissorsIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareSigmaIcon />
              <br />
              SquareSigmaIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareSlashIcon />
              <br />
              SquareSlashIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareSplitHorizontalIcon />
              <br />
              SquareSplitHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareSplitVerticalIcon />
              <br />
              SquareSplitVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareStackIcon />
              <br />
              SquareStackIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareTerminalIcon />
              <br />
              SquareTerminalIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareUserRoundIcon />
              <br />
              SquareUserRoundIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareUserIcon />
              <br />
              SquareUserIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareXIcon />
              <br />
              SquareXIcon
            </div>
            <div className="story-icon">
              <nvicons.SquareIcon />
              <br />
              SquareIcon
            </div>
            <div className="story-icon">
              <nvicons.SquircleIcon />
              <br />
              SquircleIcon
            </div>
            <div className="story-icon">
              <nvicons.SquirrelIcon />
              <br />
              SquirrelIcon
            </div>
            <div className="story-icon">
              <nvicons.StampIcon />
              <br />
              StampIcon
            </div>
            <div className="story-icon">
              <nvicons.StarHalfIcon />
              <br />
              StarHalfIcon
            </div>
            <div className="story-icon">
              <nvicons.StarOffIcon />
              <br />
              StarOffIcon
            </div>
            <div className="story-icon">
              <nvicons.StarIcon />
              <br />
              StarIcon
            </div>
            <div className="story-icon">
              <nvicons.StepBackIcon />
              <br />
              StepBackIcon
            </div>
            <div className="story-icon">
              <nvicons.StepForwardIcon />
              <br />
              StepForwardIcon
            </div>
            <div className="story-icon">
              <nvicons.StethoscopeIcon />
              <br />
              StethoscopeIcon
            </div>
            <div className="story-icon">
              <nvicons.StickerIcon />
              <br />
              StickerIcon
            </div>
            <div className="story-icon">
              <nvicons.StickyNoteIcon />
              <br />
              StickyNoteIcon
            </div>
            <div className="story-icon">
              <nvicons.StoreIcon />
              <br />
              StoreIcon
            </div>
            <div className="story-icon">
              <nvicons.StretchHorizontalIcon />
              <br />
              StretchHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.StretchVerticalIcon />
              <br />
              StretchVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.StrikethroughIcon />
              <br />
              StrikethroughIcon
            </div>
            <div className="story-icon">
              <nvicons.SubscriptIcon />
              <br />
              SubscriptIcon
            </div>
            <div className="story-icon">
              <nvicons.SummaryIcon />
              <br />
              SummaryIcon
            </div>
            <div className="story-icon">
              <nvicons.SunDimIcon />
              <br />
              SunDimIcon
            </div>
            <div className="story-icon">
              <nvicons.SunMediumIcon />
              <br />
              SunMediumIcon
            </div>
            <div className="story-icon">
              <nvicons.SunMoonIcon />
              <br />
              SunMoonIcon
            </div>
            <div className="story-icon">
              <nvicons.SunSnowIcon />
              <br />
              SunSnowIcon
            </div>
            <div className="story-icon">
              <nvicons.SunIcon />
              <br />
              SunIcon
            </div>
            <div className="story-icon">
              <nvicons.SunriseIcon />
              <br />
              SunriseIcon
            </div>
            <div className="story-icon">
              <nvicons.SunsetIcon />
              <br />
              SunsetIcon
            </div>
            <div className="story-icon">
              <nvicons.SuperscriptIcon />
              <br />
              SuperscriptIcon
            </div>
            <div className="story-icon">
              <nvicons.SwatchBookIcon />
              <br />
              SwatchBookIcon
            </div>
            <div className="story-icon">
              <nvicons.SwissFrancIcon />
              <br />
              SwissFrancIcon
            </div>
            <div className="story-icon">
              <nvicons.SwitchCameraIcon />
              <br />
              SwitchCameraIcon
            </div>
            <div className="story-icon">
              <nvicons.SwordIcon />
              <br />
              SwordIcon
            </div>
            <div className="story-icon">
              <nvicons.SwordsIcon />
              <br />
              SwordsIcon
            </div>
            <div className="story-icon">
              <nvicons.SyringeIcon />
              <br />
              SyringeIcon
            </div>
            <div className="story-icon">
              <nvicons.Table2Icon />
              <br />
              Table2Icon
            </div>
            <div className="story-icon">
              <nvicons.TableCellsMergeIcon />
              <br />
              TableCellsMergeIcon
            </div>
            <div className="story-icon">
              <nvicons.TableCellsSplitIcon />
              <br />
              TableCellsSplitIcon
            </div>
            <div className="story-icon">
              <nvicons.TableColumnsSplitIcon />
              <br />
              TableColumnsSplitIcon
            </div>
            <div className="story-icon">
              <nvicons.TablePropertiesIcon />
              <br />
              TablePropertiesIcon
            </div>
            <div className="story-icon">
              <nvicons.TableRowsSplitIcon />
              <br />
              TableRowsSplitIcon
            </div>
            <div className="story-icon">
              <nvicons.TableIcon />
              <br />
              TableIcon
            </div>
            <div className="story-icon">
              <nvicons.TabletSmartphoneIcon />
              <br />
              TabletSmartphoneIcon
            </div>
            <div className="story-icon">
              <nvicons.TabletIcon />
              <br />
              TabletIcon
            </div>
            <div className="story-icon">
              <nvicons.TabletsIcon />
              <br />
              TabletsIcon
            </div>
            <div className="story-icon">
              <nvicons.TagIcon />
              <br />
              TagIcon
            </div>
            <div className="story-icon">
              <nvicons.TagsIcon />
              <br />
              TagsIcon
            </div>
            <div className="story-icon">
              <nvicons.Tally1Icon />
              <br />
              Tally1Icon
            </div>
            <div className="story-icon">
              <nvicons.Tally2Icon />
              <br />
              Tally2Icon
            </div>
            <div className="story-icon">
              <nvicons.Tally3Icon />
              <br />
              Tally3Icon
            </div>
            <div className="story-icon">
              <nvicons.Tally4Icon />
              <br />
              Tally4Icon
            </div>
            <div className="story-icon">
              <nvicons.Tally5Icon />
              <br />
              Tally5Icon
            </div>
            <div className="story-icon">
              <nvicons.TangentIcon />
              <br />
              TangentIcon
            </div>
            <div className="story-icon">
              <nvicons.TargetIcon />
              <br />
              TargetIcon
            </div>
            <div className="story-icon">
              <nvicons.TelescopeIcon />
              <br />
              TelescopeIcon
            </div>
            <div className="story-icon">
              <nvicons.TenantIcon />
              <br />
              TenantIcon
            </div>
            <div className="story-icon">
              <nvicons.TentTreeIcon />
              <br />
              TentTreeIcon
            </div>
            <div className="story-icon">
              <nvicons.TentIcon />
              <br />
              TentIcon
            </div>
            <div className="story-icon">
              <nvicons.TerminalIcon />
              <br />
              TerminalIcon
            </div>
            <div className="story-icon">
              <nvicons.TestTubeDiagonalIcon />
              <br />
              TestTubeDiagonalIcon
            </div>
            <div className="story-icon">
              <nvicons.TestTubeIcon />
              <br />
              TestTubeIcon
            </div>
            <div className="story-icon">
              <nvicons.TestTubesIcon />
              <br />
              TestTubesIcon
            </div>
            <div className="story-icon">
              <nvicons.TextCursorInputIcon />
              <br />
              TextCursorInputIcon
            </div>
            <div className="story-icon">
              <nvicons.TextCursorIcon />
              <br />
              TextCursorIcon
            </div>
            <div className="story-icon">
              <nvicons.TextQuoteIcon />
              <br />
              TextQuoteIcon
            </div>
            <div className="story-icon">
              <nvicons.TextSearchIcon />
              <br />
              TextSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.TextSelectIcon />
              <br />
              TextSelectIcon
            </div>
            <div className="story-icon">
              <nvicons.TextIcon />
              <br />
              TextIcon
            </div>
            <div className="story-icon">
              <nvicons.TheaterIcon />
              <br />
              TheaterIcon
            </div>
            <div className="story-icon">
              <nvicons.ThermometerSnowflakeIcon />
              <br />
              ThermometerSnowflakeIcon
            </div>
            <div className="story-icon">
              <nvicons.ThermometerSunIcon />
              <br />
              ThermometerSunIcon
            </div>
            <div className="story-icon">
              <nvicons.ThermometerIcon />
              <br />
              ThermometerIcon
            </div>
            <div className="story-icon">
              <nvicons.ThumbsDownIcon />
              <br />
              ThumbsDownIcon
            </div>
            <div className="story-icon">
              <nvicons.ThumbsUpIcon />
              <br />
              ThumbsUpIcon
            </div>
            <div className="story-icon">
              <nvicons.TicketCheckIcon />
              <br />
              TicketCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.TicketMinusIcon />
              <br />
              TicketMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.TicketPercentIcon />
              <br />
              TicketPercentIcon
            </div>
            <div className="story-icon">
              <nvicons.TicketPlusIcon />
              <br />
              TicketPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.TicketSlashIcon />
              <br />
              TicketSlashIcon
            </div>
            <div className="story-icon">
              <nvicons.TicketXIcon />
              <br />
              TicketXIcon
            </div>
            <div className="story-icon">
              <nvicons.TicketIcon />
              <br />
              TicketIcon
            </div>
            <div className="story-icon">
              <nvicons.TimerOffIcon />
              <br />
              TimerOffIcon
            </div>
            <div className="story-icon">
              <nvicons.TimerResetIcon />
              <br />
              TimerResetIcon
            </div>
            <div className="story-icon">
              <nvicons.TimerIcon />
              <br />
              TimerIcon
            </div>
            <div className="story-icon">
              <nvicons.ToggleLeftIcon />
              <br />
              ToggleLeftIcon
            </div>
            <div className="story-icon">
              <nvicons.ToggleRightIcon />
              <br />
              ToggleRightIcon
            </div>
            <div className="story-icon">
              <nvicons.TornadoIcon />
              <br />
              TornadoIcon
            </div>
            <div className="story-icon">
              <nvicons.TorusIcon />
              <br />
              TorusIcon
            </div>
            <div className="story-icon">
              <nvicons.TouchpadOffIcon />
              <br />
              TouchpadOffIcon
            </div>
            <div className="story-icon">
              <nvicons.TouchpadIcon />
              <br />
              TouchpadIcon
            </div>
            <div className="story-icon">
              <nvicons.TowerControlIcon />
              <br />
              TowerControlIcon
            </div>
            <div className="story-icon">
              <nvicons.ToyBrickIcon />
              <br />
              ToyBrickIcon
            </div>
            <div className="story-icon">
              <nvicons.TraceIcon />
              <br />
              TraceIcon
            </div>
            <div className="story-icon">
              <nvicons.TractorIcon />
              <br />
              TractorIcon
            </div>
            <div className="story-icon">
              <nvicons.TrafficConeIcon />
              <br />
              TrafficConeIcon
            </div>
            <div className="story-icon">
              <nvicons.TrainFrontTunnelIcon />
              <br />
              TrainFrontTunnelIcon
            </div>
            <div className="story-icon">
              <nvicons.TrainFrontIcon />
              <br />
              TrainFrontIcon
            </div>
            <div className="story-icon">
              <nvicons.TrainTrackIcon />
              <br />
              TrainTrackIcon
            </div>
            <div className="story-icon">
              <nvicons.TramFrontIcon />
              <br />
              TramFrontIcon
            </div>
            <div className="story-icon">
              <nvicons.Trash2Icon />
              <br />
              Trash2Icon
            </div>
            <div className="story-icon">
              <nvicons.TrashIcon />
              <br />
              TrashIcon
            </div>
            <div className="story-icon">
              <nvicons.TreeDeciduousIcon />
              <br />
              TreeDeciduousIcon
            </div>
            <div className="story-icon">
              <nvicons.TreePalmIcon />
              <br />
              TreePalmIcon
            </div>
            <div className="story-icon">
              <nvicons.TreePineIcon />
              <br />
              TreePineIcon
            </div>
            <div className="story-icon">
              <nvicons.TreesIcon />
              <br />
              TreesIcon
            </div>
            <div className="story-icon">
              <nvicons.TrelloIcon />
              <br />
              TrelloIcon
            </div>
            <div className="story-icon">
              <nvicons.TrendingDownIcon />
              <br />
              TrendingDownIcon
            </div>
            <div className="story-icon">
              <nvicons.TrendingUpIcon />
              <br />
              TrendingUpIcon
            </div>
            <div className="story-icon">
              <nvicons.TriangleAlertIcon />
              <br />
              TriangleAlertIcon
            </div>
            <div className="story-icon">
              <nvicons.TriangleRightIcon />
              <br />
              TriangleRightIcon
            </div>
            <div className="story-icon">
              <nvicons.TriangleIcon />
              <br />
              TriangleIcon
            </div>
            <div className="story-icon">
              <nvicons.TrophyIcon />
              <br />
              TrophyIcon
            </div>
            <div className="story-icon">
              <nvicons.TruckIcon />
              <br />
              TruckIcon
            </div>
            <div className="story-icon">
              <nvicons.TurtleIcon />
              <br />
              TurtleIcon
            </div>
            <div className="story-icon">
              <nvicons.Tv2Icon />
              <br />
              Tv2Icon
            </div>
            <div className="story-icon">
              <nvicons.TvIcon />
              <br />
              TvIcon
            </div>
            <div className="story-icon">
              <nvicons.TwitchIcon />
              <br />
              TwitchIcon
            </div>
            <div className="story-icon">
              <nvicons.TwitterIcon />
              <br />
              TwitterIcon
            </div>
            <div className="story-icon">
              <nvicons.TypeIcon />
              <br />
              TypeIcon
            </div>
            <div className="story-icon">
              <nvicons.UmbrellaOffIcon />
              <br />
              UmbrellaOffIcon
            </div>
            <div className="story-icon">
              <nvicons.UmbrellaIcon />
              <br />
              UmbrellaIcon
            </div>
            <div className="story-icon">
              <nvicons.UnderlineIcon />
              <br />
              UnderlineIcon
            </div>
            <div className="story-icon">
              <nvicons.Undo2Icon />
              <br />
              Undo2Icon
            </div>
            <div className="story-icon">
              <nvicons.UndoDotIcon />
              <br />
              UndoDotIcon
            </div>
            <div className="story-icon">
              <nvicons.UndoIcon />
              <br />
              UndoIcon
            </div>
            <div className="story-icon">
              <nvicons.UnfoldHorizontalIcon />
              <br />
              UnfoldHorizontalIcon
            </div>
            <div className="story-icon">
              <nvicons.UnfoldVerticalIcon />
              <br />
              UnfoldVerticalIcon
            </div>
            <div className="story-icon">
              <nvicons.UngroupIcon />
              <br />
              UngroupIcon
            </div>
            <div className="story-icon">
              <nvicons.UniversityIcon />
              <br />
              UniversityIcon
            </div>
            <div className="story-icon">
              <nvicons.Unlink2Icon />
              <br />
              Unlink2Icon
            </div>
            <div className="story-icon">
              <nvicons.UnlinkIcon />
              <br />
              UnlinkIcon
            </div>
            <div className="story-icon">
              <nvicons.UnplugIcon />
              <br />
              UnplugIcon
            </div>
            <div className="story-icon">
              <nvicons.UploadIcon />
              <br />
              UploadIcon
            </div>
            <div className="story-icon">
              <nvicons.UsbIcon />
              <br />
              UsbIcon
            </div>
            <div className="story-icon">
              <nvicons.UserCheckIcon />
              <br />
              UserCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.UserCogIcon />
              <br />
              UserCogIcon
            </div>
            <div className="story-icon">
              <nvicons.UserMinusIcon />
              <br />
              UserMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.UserPlusIcon />
              <br />
              UserPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.UserRoundCheckIcon />
              <br />
              UserRoundCheckIcon
            </div>
            <div className="story-icon">
              <nvicons.UserRoundCogIcon />
              <br />
              UserRoundCogIcon
            </div>
            <div className="story-icon">
              <nvicons.UserRoundMinusIcon />
              <br />
              UserRoundMinusIcon
            </div>
            <div className="story-icon">
              <nvicons.UserRoundPlusIcon />
              <br />
              UserRoundPlusIcon
            </div>
            <div className="story-icon">
              <nvicons.UserRoundSearchIcon />
              <br />
              UserRoundSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.UserRoundXIcon />
              <br />
              UserRoundXIcon
            </div>
            <div className="story-icon">
              <nvicons.UserRoundIcon />
              <br />
              UserRoundIcon
            </div>
            <div className="story-icon">
              <nvicons.UserSearchIcon />
              <br />
              UserSearchIcon
            </div>
            <div className="story-icon">
              <nvicons.UserXIcon />
              <br />
              UserXIcon
            </div>
            <div className="story-icon">
              <nvicons.UserIcon />
              <br />
              UserIcon
            </div>
            <div className="story-icon">
              <nvicons.UsersRoundIcon />
              <br />
              UsersRoundIcon
            </div>
            <div className="story-icon">
              <nvicons.UsersIcon />
              <br />
              UsersIcon
            </div>
            <div className="story-icon">
              <nvicons.UtensilsCrossedIcon />
              <br />
              UtensilsCrossedIcon
            </div>
            <div className="story-icon">
              <nvicons.UtensilsIcon />
              <br />
              UtensilsIcon
            </div>
            <div className="story-icon">
              <nvicons.UtilityPoleIcon />
              <br />
              UtilityPoleIcon
            </div>
            <div className="story-icon">
              <nvicons.VariableIcon />
              <br />
              VariableIcon
            </div>
            <div className="story-icon">
              <nvicons.VaultIcon />
              <br />
              VaultIcon
            </div>
            <div className="story-icon">
              <nvicons.VeganIcon />
              <br />
              VeganIcon
            </div>
            <div className="story-icon">
              <nvicons.VenetianMaskIcon />
              <br />
              VenetianMaskIcon
            </div>
            <div className="story-icon">
              <nvicons.VibrateOffIcon />
              <br />
              VibrateOffIcon
            </div>
            <div className="story-icon">
              <nvicons.VibrateIcon />
              <br />
              VibrateIcon
            </div>
            <div className="story-icon">
              <nvicons.VideoOffIcon />
              <br />
              VideoOffIcon
            </div>
            <div className="story-icon">
              <nvicons.VideoIcon />
              <br />
              VideoIcon
            </div>
            <div className="story-icon">
              <nvicons.VideotapeIcon />
              <br />
              VideotapeIcon
            </div>
            <div className="story-icon">
              <nvicons.ViewIcon />
              <br />
              ViewIcon
            </div>
            <div className="story-icon">
              <nvicons.VmwareTanzuSiteIcon />
              <br />
              VmwareTanzuSiteIcon
            </div>
            <div className="story-icon">
              <nvicons.VoicemailIcon />
              <br />
              VoicemailIcon
            </div>
            <div className="story-icon">
              <nvicons.Volume1Icon />
              <br />
              Volume1Icon
            </div>
            <div className="story-icon">
              <nvicons.Volume2Icon />
              <br />
              Volume2Icon
            </div>
            <div className="story-icon">
              <nvicons.VolumeXIcon />
              <br />
              VolumeXIcon
            </div>
            <div className="story-icon">
              <nvicons.VolumeIcon />
              <br />
              VolumeIcon
            </div>
            <div className="story-icon">
              <nvicons.VoteIcon />
              <br />
              VoteIcon
            </div>
            <div className="story-icon">
              <nvicons.WalletCardsIcon />
              <br />
              WalletCardsIcon
            </div>
            <div className="story-icon">
              <nvicons.WalletMinimalIcon />
              <br />
              WalletMinimalIcon
            </div>
            <div className="story-icon">
              <nvicons.WalletIcon />
              <br />
              WalletIcon
            </div>
            <div className="story-icon">
              <nvicons.WallpaperIcon />
              <br />
              WallpaperIcon
            </div>
            <div className="story-icon">
              <nvicons.WandSparklesIcon />
              <br />
              WandSparklesIcon
            </div>
            <div className="story-icon">
              <nvicons.WandIcon />
              <br />
              WandIcon
            </div>
            <div className="story-icon">
              <nvicons.WarehouseIcon />
              <br />
              WarehouseIcon
            </div>
            <div className="story-icon">
              <nvicons.WashingMachineIcon />
              <br />
              WashingMachineIcon
            </div>
            <div className="story-icon">
              <nvicons.WatchIcon />
              <br />
              WatchIcon
            </div>
            <div className="story-icon">
              <nvicons.WavesIcon />
              <br />
              WavesIcon
            </div>
            <div className="story-icon">
              <nvicons.WaypointsIcon />
              <br />
              WaypointsIcon
            </div>
            <div className="story-icon">
              <nvicons.WebcamIcon />
              <br />
              WebcamIcon
            </div>
            <div className="story-icon">
              <nvicons.WebhookOffIcon />
              <br />
              WebhookOffIcon
            </div>
            <div className="story-icon">
              <nvicons.WebhookIcon />
              <br />
              WebhookIcon
            </div>
            <div className="story-icon">
              <nvicons.WeightIcon />
              <br />
              WeightIcon
            </div>
            <div className="story-icon">
              <nvicons.WheatOffIcon />
              <br />
              WheatOffIcon
            </div>
            <div className="story-icon">
              <nvicons.WheatIcon />
              <br />
              WheatIcon
            </div>
            <div className="story-icon">
              <nvicons.WholeWordIcon />
              <br />
              WholeWordIcon
            </div>
            <div className="story-icon">
              <nvicons.WifiOffIcon />
              <br />
              WifiOffIcon
            </div>
            <div className="story-icon">
              <nvicons.WifiIcon />
              <br />
              WifiIcon
            </div>
            <div className="story-icon">
              <nvicons.WindIcon />
              <br />
              WindIcon
            </div>
            <div className="story-icon">
              <nvicons.WineOffIcon />
              <br />
              WineOffIcon
            </div>
            <div className="story-icon">
              <nvicons.WineIcon />
              <br />
              WineIcon
            </div>
            <div className="story-icon">
              <nvicons.WorkflowIcon />
              <br />
              WorkflowIcon
            </div>
            <div className="story-icon">
              <nvicons.WormIcon />
              <br />
              WormIcon
            </div>
            <div className="story-icon">
              <nvicons.WrapTextIcon />
              <br />
              WrapTextIcon
            </div>
            <div className="story-icon">
              <nvicons.WrenchIcon />
              <br />
              WrenchIcon
            </div>
            <div className="story-icon">
              <nvicons.XIcon />
              <br />
              XIcon
            </div>
            <div className="story-icon">
              <nvicons.YoutubeIcon />
              <br />
              YoutubeIcon
            </div>
            <div className="story-icon">
              <nvicons.ZapOffIcon />
              <br />
              ZapOffIcon
            </div>
            <div className="story-icon">
              <nvicons.ZapIcon />
              <br />
              ZapIcon
            </div>
            <div className="story-icon">
              <nvicons.ZoomInIcon />
              <br />
              ZoomInIcon
            </div>
            <div className="story-icon">
              <nvicons.ZoomOutIcon />
              <br />
              ZoomOutIcon
            </div>
          </IconDisplay>
        </Grid>
      </Fragment>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
