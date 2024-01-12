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

import { Fragment, ReactNode, useState } from "react";
import { Meta, Story } from "@storybook/react";

import * as cicons from "./";
import * as micons from "./SidebarMenus";
import * as ficons from "./FileIcons";
import Grid from "../Grid/Grid";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Button from "../Button/Button";
import Box from "../Box/Box";

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
              variant={color ? "secondary" : "regular"}
              onClick={() => {
                setColor(!color);
              }}
            >
              {color ? "Red (Colored Icon)" : "Default Color"}
            </Button>
          </Grid>
          <h1>Icons</h1>
          <IconDisplay applyColor={color}>
            <div className="story-icon">
              <cicons.AccessRuleIcon />
              <br />
              AccessRuleIcon
            </div>

            <div className="story-icon">
              <cicons.AccountIcon />
              <br />
              AccountIcon
            </div>

            <div className="story-icon">
              <cicons.AddAccessRuleIcon />
              <br />
              AddAccessRuleIcon
            </div>

            <div className="story-icon">
              <cicons.AddFolderIcon />
              <br />
              AddFolderIcon
            </div>

            <div className="story-icon">
              <cicons.AddIcon />
              <br />
              AddIcon
            </div>

            <div className="story-icon">
              <cicons.AddMembersToGroupIcon />
              <br />
              AddMembersToGroupIcon
            </div>

            <div className="story-icon">
              <cicons.AddNewTagIcon />
              <br />
              AddNewTagIcon
            </div>

            <div className="story-icon">
              <cicons.AlertIcon />
              <br />
              AlertIcon
            </div>

            <div className="story-icon">
              <cicons.AllBucketsIcon />
              <br />
              AllBucketsIcon
            </div>

            <div className="story-icon">
              <cicons.ArrowDropDown />
              <br />
              ArrowDropDown
            </div>

            <div className="story-icon">
              <cicons.ArrowDropUp />
              <br />
              ArrowDropUp
            </div>

            <div className="story-icon">
              <cicons.ArrowIcon />
              <br />
              ArrowIcon
            </div>

            <div className="story-icon">
              <cicons.ArrowRightIcon />
              <br />
              ArrowRightIcon
            </div>

            <div className="story-icon">
              <cicons.AttachFileIcon />
              <br />
              AttachFileIcon
            </div>

            <div className="story-icon">
              <cicons.AudioIcon />
              <br />
              AudioIcon
            </div>

            <div className="story-icon">
              <cicons.AudioIconMute />
              <br />
              AudioIconMute
            </div>

            <div className="story-icon">
              <cicons.AutoModeIcon />
              <br />
              AutoModeIcon
            </div>

            <div className="story-icon">
              <cicons.AzureTierIcon />
              <br />
              AzureTierIcon
            </div>

            <div className="story-icon">
              <cicons.AzureTierIconXs />
              <br />
              AzureTierIconXs
            </div>

            <div className="story-icon">
              <cicons.BackSettingsIcon />
              <br />
              BackSettingsIcon
            </div>

            <div className="story-icon">
              <cicons.BoxArrowDown />
              <br />
              BoxArrowDown
            </div>

            <div className="story-icon">
              <cicons.BoxArrowUp />
              <br />
              BoxArrowUp
            </div>

            <div className="story-icon">
              <cicons.BucketEncryptionIcon />
              <br />
              BucketEncryptionIcon
            </div>

            <div className="story-icon">
              <cicons.BucketQuotaIcon />
              <br />
              BucketQuotaIcon
            </div>

            <div className="story-icon">
              <cicons.BucketReplicationIcon />
              <br />
              BucketReplicationIcon
            </div>

            <div className="story-icon">
              <cicons.BucketsIcon />
              <br />
              BucketsIcon
            </div>

            <div className="story-icon">
              <cicons.CalendarIcon />
              <br />
              CalendarIcon
            </div>

            <div className="story-icon">
              <cicons.CallHomeFeatureIcon />
              <br />
              CallHomeFeatureIcon
            </div>

            <div className="story-icon">
              <cicons.CancelledAudioIcon />
              <br />
              CancelledAudioIcon
            </div>

            <div className="story-icon">
              <cicons.CancelledIcon />
              <br />
              CancelledIcon
            </div>

            <div className="story-icon">
              <cicons.CertificateIcon />
              <br />
              CertificateIcon
            </div>

            <div className="story-icon">
              <cicons.ChangeAccessPolicyIcon />
              <br />
              ChangeAccessPolicyIcon
            </div>

            <div className="story-icon">
              <cicons.ChatIcon />
              <br />
              ChatIcon
            </div>

            <div className="story-icon">
              <cicons.ChangePasswordIcon />
              <br />
              ChangePasswordIcon
            </div>

            <div className="story-icon">
              <cicons.CheckCircleIcon />
              <br />
              CheckCircleIcon
            </div>

            <div className="story-icon">
              <cicons.CircleIcon />
              <br />
              CircleIcon
            </div>

            <div className="story-icon">
              <cicons.ClosePanelIcon />
              <br />
              ClosePanelIcon
            </div>

            <div className="story-icon">
              <cicons.CloudIcon />
              <br />
              CloudIcon
            </div>

            <div className="story-icon">
              <cicons.ClustersIcon />
              <br />
              ClustersIcon
            </div>

            <div className="story-icon">
              <cicons.CodeIcon />
              <br />
              CodeIcon
            </div>

            <div className="story-icon">
              <cicons.CollapseCaret />
              <br />
              CollapseCaret
            </div>

            <div className="story-icon">
              <cicons.CollapseIcon />
              <br />
              CollapseIcon
            </div>

            <div className="story-icon">
              <cicons.CollapseMenuIcon />
              <br />
              CollapseMenuIcon
            </div>

            <div className="story-icon">
              <cicons.CompressIcon />
              <br />
              CompressIcon
            </div>

            <div className="story-icon">
              <cicons.ComputerLineIcon />
              <br />
              ComputerLineIcon
            </div>

            <div className="story-icon">
              <cicons.ConfigurationsListIcon />
              <br />
              ConfigurationsListIcon
            </div>

            <div className="story-icon">
              <cicons.ConfirmDeleteIcon />
              <br />
              ConfirmDeleteIcon
            </div>

            <div className="story-icon">
              <cicons.ConfirmModalIcon />
              <br />
              ConfirmModalIcon
            </div>

            <div className="story-icon">
              <cicons.ConsoleIcon />
              <br />
              ConsoleIcon
            </div>

            <div className="story-icon">
              <cicons.CopyIcon />
              <br />
              CopyIcon
            </div>

            <div className="story-icon">
              <cicons.CreateGroupIcon />
              <br />
              CreateGroupIcon
            </div>

            <div className="story-icon">
              <cicons.CreateIcon />
              <br />
              CreateIcon
            </div>

            <div className="story-icon">
              <cicons.CreateNewPathIcon />
              <br />
              CreateNewPathIcon
            </div>

            <div className="story-icon">
              <cicons.CreateUserIcon />
              <br />
              CreateUserIcon
            </div>

            <div className="story-icon">
              <cicons.DarkModeIcon />
              <br />
              DarkModeIcon
            </div>

            <div className="story-icon">
              <cicons.DashboardIcon />
              <br />
              DashboardIcon
            </div>

            <div className="story-icon">
              <cicons.DeleteIcon />
              <br />
              DeleteIcon
            </div>

            <div className="story-icon">
              <cicons.DeleteNonCurrentIcon />
              <br />
              DeleteNonCurrentIcon
            </div>

            <div className="story-icon">
              <cicons.DiagnosticsFeatureIcon />
              <br />
              DiagnosticsFeatureIcon
            </div>

            <div className="story-icon">
              <cicons.DiagnosticsIcon />
              <br />
              DiagnosticsIcon
            </div>

            <div className="story-icon">
              <cicons.DisableIcon />
              <br />
              DisableIcon
            </div>

            <div className="story-icon">
              <cicons.DisabledIcon />
              <br />
              DisabledIcon
            </div>

            <div className="story-icon">
              <cicons.DocumentationIcon />
              <br />
              DocumentationIcon
            </div>

            <div className="story-icon">
              <cicons.DownloadIcon />
              <br />
              DownloadIcon
            </div>

            <div className="story-icon">
              <cicons.DownloadStatIcon />
              <br />
              DownloadStatIcon
            </div>

            <div className="story-icon">
              <cicons.DriveFormatErrorsIcon />
              <br />
              DriveFormatErrorsIcon
            </div>

            <div className="story-icon">
              <cicons.DrivesIcon />
              <br />
              DrivesIcon
            </div>

            <div className="story-icon">
              <cicons.EditIcon />
              <br />
              EditIcon
            </div>

            <div className="story-icon">
              <cicons.EditTagIcon />
              <br />
              EditTagIcon
            </div>

            <div className="story-icon">
              <cicons.EditTenantIcon />
              <br />
              EditTenantIcon
            </div>

            <div className="story-icon">
              <cicons.EditYamlIcon />
              <br />
              EditYamlIcon
            </div>

            <div className="story-icon">
              <cicons.EditorThemeSwitchIcon />
              <br />
              EditorThemeSwitchIcon
            </div>

            <div className="story-icon">
              <cicons.EgressIcon />
              <br />
              EgressIcon
            </div>

            <div className="story-icon">
              <cicons.EnabledIcon />
              <br />
              EnabledIcon
            </div>

            <div className="story-icon">
              <cicons.EventBusyIcon />
              <br />
              EventBusyIcon
            </div>

            <div className="story-icon">
              <cicons.EventSubscriptionIcon />
              <br />
              EventSubscriptionIcon
            </div>

            <div className="story-icon">
              <cicons.ExpandCaret />
              <br />
              ExpandCaret
            </div>

            <div className="story-icon">
              <cicons.ExpandIcon />
              <br />
              ExpandIcon
            </div>

            <div className="story-icon">
              <cicons.ExpandLeftCaret />
              <br />
              ExpandLeftCaret
            </div>

            <div className="story-icon">
              <cicons.ExtraFeaturesIcon />
              <br />
              ExtraFeaturesIcon
            </div>

            <div className="story-icon">
              <cicons.FirstAidIcon />
              <br />
              FirstAidIcon
            </div>

            <div className="story-icon">
              <cicons.FindReplaceIcon />
              <br />
              FindReplaceIcon
            </div>

            <div className="story-icon">
              <cicons.FolderIcon />
              <br />
              FolderIcon
            </div>

            <div className="story-icon">
              <cicons.FormatDriveIcon />
              <br />
              FormatDriveIcon
            </div>

            <div className="story-icon">
              <cicons.FormatDrivesIcon />
              <br />
              FormatDrivesIcon
            </div>

            <div className="story-icon">
              <cicons.GoogleTierIcon />
              <br />
              GoogleTierIcon
            </div>

            <div className="story-icon">
              <cicons.GoogleTierIconXs />
              <br />
              GoogleTierIconXs
            </div>

            <div className="story-icon">
              <cicons.GroupsIcon />
              <br />
              GroupsIcon
            </div>

            <div className="story-icon">
              <cicons.HardBucketQuotaIcon />
              <br />
              HardBucketQuotaIcon
            </div>

            <div className="story-icon">
              <cicons.HealIcon />
              <br />
              HealIcon
            </div>

            <div className="story-icon">
              <cicons.HelpIcon />
              <br />
              HelpIcon
            </div>

            <div className="story-icon">
              <cicons.HelpIconFilled />
              <br />
              HelpIconFilled
            </div>

            <div className="story-icon">
              <cicons.HistoryIcon />
              <br />
              HistoryIcon
            </div>

            <div className="story-icon">
              <cicons.IAMPoliciesIcon />
              <br />
              IAMPoliciesIcon
            </div>

            <div className="story-icon">
              <cicons.InfoIcon />
              <br />
              InfoIcon
            </div>

            <div className="story-icon">
              <cicons.JSONIcon />
              <br />
              JSONIcon
            </div>

            <div className="story-icon">
              <cicons.KeyIcon />
              <br />
              KeyIcon
            </div>

            <div className="story-icon">
              <cicons.LambdaBalloonIcon />
              <br />
              LambdaBalloonIcon
            </div>

            <div className="story-icon">
              <cicons.LambdaIcon />
              <br />
              LambdaIcon
            </div>

            <div className="story-icon">
              <cicons.LambdaNotificationsIcon />
              <br />
              LambdaNotificationsIcon
            </div>

            <div className="story-icon">
              <cicons.LanguageIcon />
              <br />
              LanguageIcon
            </div>

            <div className="story-icon">
              <cicons.LegalHoldIcon />
              <br />
              LegalHoldIcon
            </div>

            <div className="story-icon">
              <cicons.LicenseIcon />
              <br />
              LicenseIcon
            </div>

            <div className="story-icon">
              <cicons.LifecycleConfigIcon />
              <br />
              LifecycleConfigIcon
            </div>

            <div className="story-icon">
              <cicons.LightModeIcon />
              <br />
              LightModeIcon
            </div>

            <div className="story-icon">
              <cicons.LinkIcon />
              <br />
              LinkIcon
            </div>

            <div className="story-icon">
              <cicons.LockFilledIcon />
              <br />
              LockFilledIcon
            </div>

            <div className="story-icon">
              <cicons.LockIcon />
              <br />
              LockIcon
            </div>

            <div className="story-icon">
              <cicons.LockOpenIcon />
              <br />
              LockOpenIcon
            </div>

            <div className="story-icon">
              <cicons.LoginIcon />
              <br />
              LoginIcon
            </div>

            <div className="story-icon">
              <cicons.LogoutIcon />
              <br />
              LogoutIcon
            </div>

            <div className="story-icon">
              <cicons.LogsIcon />
              <br />
              LogsIcon
            </div>

            <div className="story-icon">
              <cicons.MetadataIcon />
              <br />
              MetadataIcon
            </div>

            <div className="story-icon">
              <cicons.MinIOTierIcon />
              <br />
              MinIOTierIcon
            </div>

            <div className="story-icon">
              <cicons.MinIOTierIconXs />
              <br />
              MinIOTierIconXs
            </div>

            <div className="story-icon">
              <cicons.MirroringIcon />
              <br />
              MirroringIcon
            </div>

            <div className="story-icon">
              <cicons.MultipleBucketsIcon />
              <br />
              MultipleBucketsIcon
            </div>

            <div className="story-icon">
              <cicons.NewAccountIcon />
              <br />
              NewAccountIcon
            </div>

            <div className="story-icon">
              <cicons.NewPathIcon />
              <br />
              NewPathIcon
            </div>

            <div className="story-icon">
              <cicons.NewPoolIcon />
              <br />
              NewPoolIcon
            </div>

            <div className="story-icon">
              <cicons.NextArrowIcon />
              <br />
              NextArrowIcon
            </div>

            <div className="story-icon">
              <cicons.NextCaretIcon />
              <br />
              NextCaretIcon
            </div>

            <div className="story-icon">
              <cicons.ObjectBrowser1Icon />
              <br />
              ObjectBrowser1Icon
            </div>

            <div className="story-icon">
              <cicons.ObjectBrowserFolderIcon />
              <br />
              ObjectBrowserFolderIcon
            </div>

            <div className="story-icon">
              <cicons.ObjectBrowserIcon />
              <br />
              ObjectBrowserIcon
            </div>

            <div className="story-icon">
              <cicons.ObjectInfoIcon />
              <br />
              ObjectInfoIcon
            </div>

            <div className="story-icon">
              <cicons.ObjectManagerIcon />
              <br />
              ObjectManagerIcon
            </div>

            <div className="story-icon">
              <cicons.ObjectPreviewIcon />
              <br />
              ObjectPreviewIcon
            </div>

            <div className="story-icon">
              <cicons.OfflineRegistrationBackIcon />
              <br />
              OfflineRegistrationBackIcon
            </div>

            <div className="story-icon">
              <cicons.OfflineRegistrationIcon />
              <br />
              OfflineRegistrationIcon
            </div>

            <div className="story-icon">
              <cicons.OnlineRegistrationBackIcon />
              <br />
              OnlineRegistrationBackIcon
            </div>

            <div className="story-icon">
              <cicons.OnlineRegistrationIcon />
              <br />
              OnlineRegistrationIcon
            </div>

            <div className="story-icon">
              <cicons.OpenListIcon />
              <br />
              OpenListIcon
            </div>

            <div className="story-icon">
              <cicons.PasswordKeyIcon />
              <br />
              PasswordKeyIcon
            </div>

            <div className="story-icon">
              <cicons.PendingItemsIcon />
              <br />
              PendingItemsIcon
            </div>

            <div className="story-icon">
              <cicons.PerformanceFeatureIcon />
              <br />
              PerformanceFeatureIcon
            </div>

            <div className="story-icon">
              <cicons.PermissionIcon />
              <br />
              PermissionIcon
            </div>

            <div className="story-icon">
              <cicons.PrevCaretIcon />
              <br />
              PrevCaretIcon
            </div>

            <div className="story-icon">
              <cicons.PreviewIcon />
              <br />
              PreviewIcon
            </div>

            <div className="story-icon">
              <cicons.PrometheusErrorIcon />
              <br />
              PrometheusErrorIcon
            </div>

            <div className="story-icon">
              <cicons.PrometheusIcon />
              <br />
              PrometheusIcon
            </div>

            <div className="story-icon">
              <cicons.PublicIcon />
              <br />
              PublicIcon
            </div>

            <div className="story-icon">
              <cicons.RecoverIcon />
              <br />
              RecoverIcon
            </div>

            <div className="story-icon">
              <cicons.RedoIcon />
              <br />
              RedoIcon
            </div>

            <div className="story-icon">
              <cicons.RefreshIcon />
              <br />
              RefreshIcon
            </div>

            <div className="story-icon">
              <cicons.RemoveAllIcon />
              <br />
              RemoveAllIcon
            </div>

            <div className="story-icon">
              <cicons.RemoveIcon />
              <br />
              RemoveIcon
            </div>

            <div className="story-icon">
              <cicons.ReportIcon />
              <br />
              ReportIcon
            </div>

            <div className="story-icon">
              <cicons.ReportedUsageFullIcon />
              <br />
              ReportedUsageFullIcon
            </div>

            <div className="story-icon">
              <cicons.ReportedUsageIcon />
              <br />
              ReportedUsageIcon
            </div>

            <div className="story-icon">
              <cicons.RetentionIcon />
              <br />
              RetentionIcon
            </div>

            <div className="story-icon">
              <cicons.S3TierIcon />
              <br />
              S3TierIcon
            </div>

            <div className="story-icon">
              <cicons.S3TierIconXs />
              <br />
              S3TierIconXs
            </div>

            <div className="story-icon">
              <cicons.SearchIcon />
              <br />
              SearchIcon
            </div>

            <div className="story-icon">
              <cicons.SelectAllIcon />
              <br />
              SelectAllIcon
            </div>

            <div className="story-icon">
              <cicons.SelectMultipleIcon />
              <br />
              SelectMultipleIcon
            </div>

            <div className="story-icon">
              <cicons.SendMessageIcon />
              <br />
              SendMessageIcon
            </div>

            <div className="story-icon">
              <cicons.ServersIcon />
              <br />
              ServersIcon
            </div>

            <div className="story-icon">
              <cicons.ServiceAccountCredentialsIcon />
              <br />
              ServiceAccountCredentialsIcon
            </div>

            <div className="story-icon">
              <cicons.ServiceAccountIcon />
              <br />
              ServiceAccountIcon
            </div>

            <div className="story-icon">
              <cicons.ServiceAccountsIcon />
              <br />
              ServiceAccountsIcon
            </div>

            <div className="story-icon">
              <cicons.SettingsIcon />
              <br />
              SettingsIcon
            </div>

            <div className="story-icon">
              <cicons.ShareIcon />
              <br />
              ShareIcon
            </div>

            <div className="story-icon">
              <cicons.ShuffleIcon />
              <br />
              ShuffleIcon
            </div>

            <div className="story-icon">
              <cicons.SpeedtestIcon />
              <br />
              SpeedtestIcon
            </div>

            <div className="story-icon">
              <cicons.StarIcon />
              <br />
              StarIcon
            </div>

            <div className="story-icon">
              <cicons.StorageIcon />
              <br />
              StorageIcon
            </div>

            <div className="story-icon">
              <cicons.SyncIcon />
              <br />
              SyncIcon
            </div>

            <div className="story-icon">
              <cicons.TagsIcon />
              <br />
              TagsIcon
            </div>

            <div className="story-icon">
              <cicons.TenantsIcon />
              <br />
              TenantsIcon
            </div>

            <div className="story-icon">
              <cicons.TenantsOutlineIcon />
              <br />
              TenantsOutlineIcon
            </div>

            <div className="story-icon">
              <cicons.ThumbsDownIcon />
              <br />
              ThumbsDownIcon
            </div>

            <div className="story-icon">
              <cicons.ThumbsUpIcon />
              <br />
              ThumbsUpIcon
            </div>

            <div className="story-icon">
              <cicons.TiersIcon />
              <br />
              TiersIcon
            </div>

            <div className="story-icon">
              <cicons.TiersNotAvailableIcon />
              <br />
              TiersNotAvailableIcon
            </div>

            <div className="story-icon">
              <cicons.TierOfflineIcon />
              <br />
              TierOfflineIcon
            </div>

            <div className="story-icon">
              <cicons.TierOnlineIcon />
              <br />
              TierOnlineIcon
            </div>

            <div className="story-icon">
              <cicons.TimeIcon />
              <br />
              TimeIcon
            </div>

            <div className="story-icon">
              <cicons.ToolsIcon />
              <br />
              ToolsIcon
            </div>

            <div className="story-icon">
              <cicons.TotalObjectsIcon />
              <br />
              TotalObjectsIcon
            </div>

            <div className="story-icon">
              <cicons.TraceIcon />
              <br />
              TraceIcon
            </div>

            <div className="story-icon">
              <cicons.TrashIcon />
              <br />
              TrashIcon
            </div>

            <div className="story-icon">
              <cicons.UploadFile />
              <br />
              UploadFile
            </div>

            <div className="story-icon">
              <cicons.UploadFolderIcon />
              <br />
              UploadFolderIcon
            </div>

            <div className="story-icon">
              <cicons.UploadIcon />
              <br />
              UploadIcon
            </div>

            <div className="story-icon">
              <cicons.UploadStatIcon />
              <br />
              UploadStatIcon
            </div>

            <div className="story-icon">
              <cicons.UptimeIcon />
              <br />
              UptimeIcon
            </div>

            <div className="story-icon">
              <cicons.UsersIcon />
              <br />
              UsersIcon
            </div>

            <div className="story-icon">
              <cicons.VerifiedIcon />
              <br />
              VerifiedIcon
            </div>

            <div className="story-icon">
              <cicons.VersionIcon />
              <br />
              VersionIcon
            </div>

            <div className="story-icon">
              <cicons.VersionsIcon />
              <br />
              VersionsIcon
            </div>

            <div className="story-icon">
              <cicons.WarnIcon />
              <br />
              WarnIcon
            </div>

            <div className="story-icon">
              <cicons.WarpIcon />
              <br />
              WarpIcon
            </div>

            <div className="story-icon">
              <cicons.WatchIcon />
              <br />
              WatchIcon
            </div>
            <div className="story-icon">
              <cicons.AlertCloseIcon />
              <br />
              AlertCloseIcon
            </div>
            <div className="story-icon">
              <cicons.OpenSourceIcon />
              <br />
              OpenSourceIcon
            </div>
            <div className="story-icon">
              <cicons.LicenseDocIcon />
              <br />
              LicenseDocIcon
            </div>
            <div className="story-icon">
              <cicons.BackIcon />
              <br />
              BackIcon
            </div>
            <div className="story-icon">
              <cicons.FilterIcon />
              <br />
              FilterIcon
            </div>
            <div className="story-icon">
              <cicons.SuccessIcon />
              <br />
              SuccessIcon
            </div>
            <div className="story-icon">
              <cicons.NetworkGetIcon />
              <br />
              NetworkGetIcon
            </div>
            <div className="story-icon">
              <cicons.NetworkPutIcon />
              <br />
              NetworkPutIcon
            </div>
            <div className="story-icon">
              <cicons.UserFilledIcon />
              <br />
              UserFilledIcon
            </div>
            <div className="story-icon">
              <cicons.ViewColumnIcon />
              <br />
              ViewColumnIcon
            </div>
            <div className="story-icon">
              <cicons.VisibilityOffIcon />
              <br />
              VisibilityOffIcon
            </div>
            <div className="story-icon">
              <cicons.VisibilityOnIcon />
              <br />
              VisibilityOnIcon
            </div>
            <div className="story-icon">
              <cicons.WarnFilledIcon />
              <br />
              WarnFilledIcon
            </div>

            <div className="story-icon">
              <cicons.WebhookIcon />
              <br />
              WebhookIcon
            </div>
          </IconDisplay>
          <h1>Menu Icons</h1>
          <IconDisplay applyColor={color}>
            <div className="story-icon">
              <micons.AccessMenuIcon />
              <br />
              AccessMenuIcon
            </div>

            <div className="story-icon">
              <micons.AccountsMenuIcon />
              <br />
              AccountsMenuIcon
            </div>

            <div className="story-icon">
              <micons.AuditLogsMenuIcon />
              <br />
              AuditLogsMenuIcon
            </div>

            <div className="story-icon">
              <micons.BucketsMenuIcon />
              <br />
              BucketsMenuIcon
            </div>

            <div className="story-icon">
              <micons.CallHomeMenuIcon />
              <br />
              CallHomeMenuIcon
            </div>

            <div className="story-icon">
              <micons.DiagnosticsMenuIcon />
              <br />
              DiagnosticsMenuIcon
            </div>

            <div className="story-icon">
              <micons.DrivesMenuIcon />
              <br />
              DrivesMenuIcon
            </div>

            <div className="story-icon">
              <micons.GroupsMenuIcon />
              <br />
              GroupsMenuIcon
            </div>

            <div className="story-icon">
              <micons.HealthMenuIcon />
              <br />
              HealthMenuIcon
            </div>

            <div className="story-icon">
              <micons.IdentityMenuIcon />
              <br />
              IdentityMenuIcon
            </div>

            <div className="story-icon">
              <micons.InspectMenuIcon />
              <br />
              InspectMenuIcon
            </div>

            <div className="story-icon">
              <micons.LogsMenuIcon />
              <br />
              LogsMenuIcon
            </div>

            <div className="story-icon">
              <micons.MenuCollapsedIcon />
              <br />
              MenuCollapsedIcon
            </div>

            <div className="story-icon">
              <micons.MenuExpandedIcon />
              <br />
              MenuExpandedIcon
            </div>

            <div className="story-icon">
              <micons.MetricsMenuIcon />
              <br />
              MetricsMenuIcon
            </div>

            <div className="story-icon">
              <micons.MonitoringMenuIcon />
              <br />
              MonitoringMenuIcon
            </div>

            <div className="story-icon">
              <micons.PerformanceMenuIcon />
              <br />
              PerformanceMenuIcon
            </div>

            <div className="story-icon">
              <micons.ProfileMenuIcon />
              <br />
              ProfileMenuIcon
            </div>

            <div className="story-icon">
              <micons.RegisterMenuIcon />
              <br />
              RegisterMenuIcon
            </div>

            <div className="story-icon">
              <micons.SupportMenuIcon />
              <br />
              SupportMenuIcon
            </div>

            <div className="story-icon">
              <micons.TraceMenuIcon />
              <br />
              TraceMenuIcon
            </div>

            <div className="story-icon">
              <micons.UsersMenuIcon />
              <br />
              UsersMenuIcon
            </div>
            <div className="story-icon">
              <micons.KeysMenuIcon />
              <br />
              KeysMenuIcon
            </div>
            <div className="story-icon">
              <micons.StatusMenuIcon />
              <br />
              StatusMenuIcon
            </div>
            <div className="story-icon">
              <micons.SecretsMenuIcon />
              <br />
              SecretsMenuIcon
            </div>
            <div className="story-icon">
              <micons.PoliciesMenuIcon />
              <br />
              PoliciesMenuIcon
            </div>
            <div className="story-icon">
              <micons.IdentitiesMenuIcon />
              <br />
              IdentitiesMenuIcon
            </div>
          </IconDisplay>
          <h1>File Icons</h1>
          <IconDisplay applyColor={color}>
            <div className="story-icon">
              <ficons.FileBookIcon />
              <br />
              FileBookIcon
            </div>

            <div className="story-icon">
              <ficons.FileCloudIcon />
              <br />
              FileCloudIcon
            </div>

            <div className="story-icon">
              <ficons.FileCodeIcon />
              <br />
              FileCodeIcon
            </div>

            <div className="story-icon">
              <ficons.FileConfigIcon />
              <br />
              FileConfigIcon
            </div>

            <div className="story-icon">
              <ficons.FileDbIcon />
              <br />
              FileDbIcon
            </div>

            <div className="story-icon">
              <ficons.FileFontIcon />
              <br />
              FileFontIcon
            </div>

            <div className="story-icon">
              <ficons.FileImageIcon />
              <br />
              FileImageIcon
            </div>

            <div className="story-icon">
              <ficons.FileLinkIcon />
              <br />
              FileLinkIcon
            </div>

            <div className="story-icon">
              <ficons.FileLockIcon />
              <br />
              FileLockIcon
            </div>

            <div className="story-icon">
              <ficons.FileMissingIcon />
              <br />
              FileMissingIcon
            </div>

            <div className="story-icon">
              <ficons.FileMusicIcon />
              <br />
              FileMusicIcon
            </div>

            <div className="story-icon">
              <ficons.FileNonType />
              <br />
              FileNonType
            </div>

            <div className="story-icon">
              <ficons.FilePdfIcon />
              <br />
              FilePdfIcon
            </div>

            <div className="story-icon">
              <ficons.FilePptIcon />
              <br />
              FilePptIcon
            </div>

            <div className="story-icon">
              <ficons.FileTxtIcon />
              <br />
              FileTxtIcon
            </div>

            <div className="story-icon">
              <ficons.FileVideoIcon />
              <br />
              FileVideoIcon
            </div>

            <div className="story-icon">
              <ficons.FileWorldIcon />
              <br />
              FileWorldIcon
            </div>

            <div className="story-icon">
              <ficons.FileXlsIcon />
              <br />
              FileXlsIcon
            </div>

            <div className="story-icon">
              <ficons.FileZipIcon />
              <br />
              FileZipIcon
            </div>

            <div className="story-icon">
              <ficons.FolderBrowserIcon />
              <br />
              FolderBrowserIcon
            </div>
          </IconDisplay>
        </Grid>
      </Fragment>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
