import React, {
  ReactNode,
  FC,
  MouseEventHandler,
  SVGProps,
  HTMLAttributes,
} from "react";
import * as styled_components from "styled-components";
import { CSSObject, CSSProperties } from "styled-components";

interface ThemeHandlerProps {
  darkMode?: boolean;
  children: ReactNode;
}

declare const ThemeHandler: FC<ThemeHandlerProps>;

declare const GlobalStyles: styled_components.GlobalStyleComponent<
  {},
  styled_components.DefaultTheme
>;

interface ButtonProps {
  id: string;
  name?: string;
  label?: string;
  variant?: "regular" | "callAction" | "secondary" | "text";
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  fullWidth?: boolean;
  disabled?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  sx?: CSSObject;
}

declare const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface ApplicationLogoProps {
  applicationName:
    | "console"
    | "operator"
    | "directpv"
    | "kes"
    | "subnet"
    | "subnetops";
  subVariant?: "simple" | "AGPL" | "standard" | "enterprise";
  inverse?: boolean;
}

declare const ApplicationLogo: FC<ApplicationLogoProps>;

declare const ThemedLogo: FC<SVGProps<any>>;

interface GridCommonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: CSSObject;
}
type ConditionalProps =
  | {
      container?: boolean;
      item?: never;
      wrap?: "nowrap" | "wrap-reverse" | "wrap";
      direction?: "column-reverse" | "column" | "row-reverse" | "row";
      columnSpacing?: number;
      rowSpacing?: number;
      xs?: never;
      sm?: never;
      md?: never;
      lg?: never;
      xl?: never;
    }
  | {
      container?: never;
      item?: boolean;
      wrap?: never;
      direction?: never;
      columnSpacing?: never;
      rowSpacing?: never;
      xs?: "auto" | "hidden" | number | boolean;
      sm?: "auto" | "hidden" | number | boolean;
      md?: "auto" | "hidden" | number | boolean;
      lg?: "auto" | "hidden" | number | boolean;
      xl?: "auto" | "hidden" | number | boolean;
    };
type GridProps = GridCommonProps & ConditionalProps;

declare const Grid: FC<GridProps>;

interface LoginWrapperProps {
  logoProps: ApplicationLogoProps;
  form: ReactNode;
  formFooter?: ReactNode;
  promoHeader?: ReactNode;
  promoInfo?: ReactNode;
  disableAnimation?: boolean;
}

declare const LoginWrapper: FC<LoginWrapperProps>;

declare const Loader: FC<SVGProps<any>>;

interface PageHeaderProps {
  label: React.ReactNode;
  middleComponent?: React.ReactNode;
  actions?: React.ReactNode;
}

declare const PageHeader: FC<PageHeaderProps>;

interface TooltipProps {
  children: React.ReactElement;
  tooltip: React.ReactNode;
  errorProps?: any;
  placement?: "bottom" | "left" | "right" | "top";
}

declare const Tooltip: FC<TooltipProps>;

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  overrideCheckboxStyles?: CSSObject;
  noTopMargin?: boolean;
}

declare const Checkbox: FC<
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
>;

interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  sx?: CSSObject;
  noMinWidth?: boolean;
  htmlFor?: string;
}

declare const InputLabel: FC<InputLabelProps>;

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: "small" | "medium" | "large" | string;
  sx?: CSSObject;
  children: React.ReactNode;
}

declare const IconButton: FC<IconButtonProps>;

interface ItemActions {
  label?: string;
  type: string | any;
  sendOnlyId?: boolean;
  disableButtonFunction?: (itemValue: any) => boolean;
  showLoaderFunction?: (itemValue: any) => boolean;
  onClick?(valueToSend: any): any;
}
interface IColumns {
  label: string;
  elementKey?: string;
  renderFunction?: (input: any) => any;
  renderFullObject?: boolean;
  globalClass?: any;
  rowClass?: any;
  width?: number;
  headerTextAlign?: string;
  contentTextAlign?: string;
  enableSort?: boolean;
}
interface IInfiniteScrollConfig {
  loadMoreRecords: (indexElements: {
    startIndex: number;
    stopIndex: number;
  }) => Promise<any>;
  recordsCount: number;
}
interface ISortConfig {
  triggerSort: (val: any) => any;
  currentSort: string;
  currentDirection: "ASC" | "DESC" | undefined;
}
interface DataTableProps {
  itemActions?: ItemActions[] | null;
  columns: IColumns[];
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  idField?: string;
  isLoading?: boolean;
  loadingMessage?: React.ReactNode;
  records: any[];
  entityName?: string;
  selectedItems?: string[];
  customEmptyMessage?: string;
  customPaperHeight?: string;
  noBackground?: boolean;
  columnsSelector?: boolean;
  textSelectable?: boolean;
  columnsShown?: string[];
  onColumnChange?: (column: string, state: boolean) => any;
  autoScrollToBottom?: boolean;
  infiniteScrollConfig?: IInfiniteScrollConfig;
  sortConfig?: ISortConfig;
  disabled?: boolean;
  onSelectAll?: () => void;
  rowStyle?: ({
    index,
  }: {
    index: number;
  }) => "deleted" | "" | React.CSSProperties;
  parentClassName?: string;
}

declare const DataTable: FC<DataTableProps>;

interface BackLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  label?: string;
}

declare const BackLink: FC<BackLinkProps>;

interface HelpBoxProps {
  iconComponent: any;
  title: string | React.ReactNode;
  help: any;
}

declare const HelpBox: FC<HelpBoxProps>;

interface SectionTitleProps {
  separator?: boolean;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
  sx?: CSSObject;
}

declare const SectionTitle: FC<SectionTitleProps>;

interface BoxProps {
  sx?: CSSObject;
  children?: React.ReactNode;
  withBorders?: boolean;
}

declare const Box: FC<HTMLAttributes<HTMLDivElement> & BoxProps>;

interface FormLayoutProps {
  sx?: CSSObject;
  children?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  helpBox?: React.ReactNode;
}

declare const FormLayout: FC<FormLayoutProps>;

declare const EditorThemeSwitchIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DisabledIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FormatDrivesIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SpeedtestIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const StorageIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const RefreshIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const VersionIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LambdaBalloonIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const HelpIconFilled: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ShareIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const EditIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const JSONIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SearchIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const WarnIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CircleIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ObjectBrowserFolderIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const RedoIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ChangeAccessPolicyIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const ServersIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ClosePanelIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const MinIOTierIconXs: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const DashboardIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ClustersIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const MirroringIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ToolsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ArrowIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ServiceAccountIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const OnlineRegistrationBackIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const ConfigurationsListIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const WatchIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ServiceAccountCredentialsIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const HealIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const S3TierIcon$1: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ArrowRightIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const PreviewIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BucketQuotaIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SelectMultipleIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DeleteIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const EditYamlIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ReportedUsageIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const PrometheusIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ConfirmModalIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const NextArrowIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const PermissionIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const GoogleTierIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AccountIcon$1: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AddAccessRuleIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const UptimeIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const EnabledIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ObjectPreviewIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const TenantsOutlineIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DrivesIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CreateNewPathIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const HelpIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ReportedUsageFullIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const AddNewTagIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const OnlineRegistrationIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DiagnosticsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ObjectBrowser1Icon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const MinIOTierIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const WarpIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CopyIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const OpenListIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const MultipleBucketsIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const AddMembersToGroupIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const OfflineRegistrationBackIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const PrometheusErrorIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const LifecycleConfigIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DriveFormatErrorsIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const VerifiedIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CallHomeFeatureIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const TraceIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AddIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const GoogleTierIconXs: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LambdaNotificationsIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const BackSettingsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LicenseIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const RemoveIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const TiersNotAvailableIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const PerformanceFeatureIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const AddFolderIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const S3TierIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const IAMPoliciesIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const UsersIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const EgressIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BucketEncryptionIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DocumentationIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DiagnosticsFeatureIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const PasswordKeyIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const TrashIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const EventSubscriptionIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DownloadIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ComputerLineIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AllBucketsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LambdaIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const GroupsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const DownloadStatIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const UploadFile$1: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const TiersIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const NewAccountIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CreateGroupIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CollapseIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ConfirmDeleteIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const OfflineRegistrationIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const TenantsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const UploadFile: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CreateIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const NewPoolIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SyncIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LogoutIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AzureTierIconXs: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const TotalObjectsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const HistoryIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CreateUserIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BucketsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const UploadStatIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BucketReplicationIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const ObjectManagerIcon$1: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const ObjectBrowserIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const RecoverIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SettingsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const UploadIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AzureTierIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CalendarIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ServiceAccountsIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const LogsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const HardBucketQuotaIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const ConsoleIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ChangePasswordIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const LockIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BackCaretIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const VersionsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const NewPathIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ObjectInfoIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const MetadataIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LegalHoldIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const RetentionIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const TagsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AlertCloseIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const OpenSourceIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ArrowRightLink: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LicenseDocIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SelectAllIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BackIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const DeleteNonCurrentIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const EditTenantIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SuccessIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const NetworkGetIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const NetworkPutIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ObjectManagerIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const CancelledIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const EditTagIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LinkIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AlertIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const InfoIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ConsoleAgpl: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ConsoleStandard: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ConsoleEnterprise: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const AGPLV3LightLogo: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AGPLV3Logo: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const EnterpriseLightLogo: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const StandardLightLogo: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const AGPLV3DarkLogo: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LDAPIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const OIDCIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const StarIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AccountIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CollapseCaret: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ExpandCaret: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CertificateIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const TierOnlineIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const TierOfflineIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const WarnFilledIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BoxArrowUp: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BoxArrowDown: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const UserFilledIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LockFilledIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FilterIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FolderIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ViewColumnIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ArrowDropUp$1: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ArrowDropUp: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CloudIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const DisableIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FormatDriveIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const InspectMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AuditLogsMenuIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const HealthMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const MenuCollapsedIcon$1: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const TraceMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const GroupsMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const MenuCollapsedIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const MetricsMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const IdentityMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const LogsMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const MonitoringMenuIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const SupportMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const PerformanceMenuIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const DiagnosticsMenuIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const AccessMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const RegisterMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const DrivesMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const AccountsMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const ProfileMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const CallHomeMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const BucketsMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const UsersMenuIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileConfigIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FilePdfIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileFontIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileLinkIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileImageIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileWorldIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileBookIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileMissingIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileCodeIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FilePptIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileDbIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileTxtIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileVideoIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileLockIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileXlsIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileZipIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FolderBrowserIcon: (
  props: SVGProps<SVGSVGElement>
) => JSX.Element;

declare const FileCloudIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileMusicIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const FileNonType: (props: SVGProps<SVGSVGElement>) => JSX.Element;

export {
  AGPLV3DarkLogo,
  AGPLV3LightLogo,
  AGPLV3Logo,
  AccessMenuIcon,
  AccountIcon$1 as AccountIcon,
  AccountsMenuIcon,
  AddAccessRuleIcon,
  AddFolderIcon,
  AddIcon,
  AddMembersToGroupIcon,
  AddNewTagIcon,
  AlertCloseIcon,
  AlertIcon,
  AllBucketsIcon,
  ApplicationLogo,
  ArrowDropUp as ArrowDropDown,
  ArrowDropUp$1 as ArrowDropUp,
  ArrowIcon,
  ArrowRightIcon,
  ArrowRightLink,
  AuditLogsMenuIcon,
  AzureTierIcon,
  AzureTierIconXs,
  BackCaretIcon,
  BackIcon,
  BackLink,
  BackSettingsIcon,
  Box,
  BoxArrowDown,
  BoxArrowUp,
  BucketEncryptionIcon,
  BucketQuotaIcon,
  BucketReplicationIcon,
  BucketsIcon,
  BucketsMenuIcon,
  Button,
  CalendarIcon,
  CallHomeFeatureIcon,
  CallHomeMenuIcon,
  CancelledIcon,
  CertificateIcon,
  ChangeAccessPolicyIcon,
  ChangePasswordIcon,
  Checkbox,
  CircleIcon,
  ClosePanelIcon,
  CloudIcon,
  ClustersIcon,
  CollapseCaret,
  CollapseIcon,
  ComputerLineIcon,
  ConfigurationsListIcon,
  ConfirmDeleteIcon,
  ConfirmModalIcon,
  ConsoleAgpl,
  ConsoleEnterprise,
  ConsoleIcon,
  ConsoleStandard,
  CopyIcon,
  CreateGroupIcon,
  CreateIcon,
  CreateNewPathIcon,
  CreateUserIcon,
  DashboardIcon,
  DataTable,
  DeleteIcon,
  DeleteNonCurrentIcon,
  DiagnosticsFeatureIcon,
  DiagnosticsIcon,
  DiagnosticsMenuIcon,
  DisableIcon,
  DisabledIcon,
  DocumentationIcon,
  DownloadIcon,
  DownloadStatIcon,
  DriveFormatErrorsIcon,
  DrivesIcon,
  DrivesMenuIcon,
  EditIcon,
  EditTagIcon,
  EditTenantIcon,
  EditYamlIcon,
  EditorThemeSwitchIcon,
  EgressIcon,
  EnabledIcon,
  EnterpriseLightLogo,
  EventSubscriptionIcon,
  ExpandCaret,
  AccountIcon as ExtraFeaturesIcon,
  FileBookIcon,
  FileCloudIcon,
  FileCodeIcon,
  FileConfigIcon,
  FileDbIcon,
  FileFontIcon,
  FileImageIcon,
  FileLinkIcon,
  FileLockIcon,
  FileMissingIcon,
  FileMusicIcon,
  FileNonType,
  FilePdfIcon,
  FilePptIcon,
  FileTxtIcon,
  FileVideoIcon,
  FileWorldIcon,
  FileXlsIcon,
  FileZipIcon,
  FilterIcon,
  FolderBrowserIcon,
  FolderIcon,
  FormLayout,
  FormatDriveIcon,
  FormatDrivesIcon,
  GlobalStyles,
  GoogleTierIcon,
  GoogleTierIconXs,
  Grid,
  GroupsIcon,
  GroupsMenuIcon,
  HardBucketQuotaIcon,
  HealIcon,
  HealthMenuIcon,
  HelpBox,
  HelpIcon,
  HelpIconFilled,
  HistoryIcon,
  IAMPoliciesIcon,
  IconButton,
  IdentityMenuIcon,
  InfoIcon,
  InputLabel,
  InspectMenuIcon,
  JSONIcon,
  LDAPIcon,
  LambdaBalloonIcon,
  LambdaIcon,
  LambdaNotificationsIcon,
  LegalHoldIcon,
  LicenseDocIcon,
  LicenseIcon,
  LifecycleConfigIcon,
  LinkIcon,
  Loader,
  LockFilledIcon,
  LockIcon,
  LoginWrapper,
  LogoutIcon,
  LogsIcon,
  LogsMenuIcon,
  MenuCollapsedIcon,
  MenuCollapsedIcon$1 as MenuExpandedIcon,
  MetadataIcon,
  MetricsMenuIcon,
  MinIOTierIcon,
  MinIOTierIconXs,
  MirroringIcon,
  MonitoringMenuIcon,
  MultipleBucketsIcon,
  NetworkGetIcon,
  NetworkPutIcon,
  NewAccountIcon,
  NewPathIcon,
  NewPoolIcon,
  NextArrowIcon,
  OIDCIcon,
  ObjectBrowser1Icon,
  ObjectBrowserFolderIcon,
  ObjectBrowserIcon,
  ObjectInfoIcon,
  ObjectManagerIcon$1 as ObjectManagerIcon,
  ObjectPreviewIcon,
  OfflineRegistrationBackIcon,
  OfflineRegistrationIcon,
  OnlineRegistrationBackIcon,
  OnlineRegistrationIcon,
  OpenListIcon,
  OpenSourceIcon,
  PageHeader,
  PasswordKeyIcon,
  PerformanceFeatureIcon,
  PerformanceMenuIcon,
  PermissionIcon,
  PreviewIcon,
  ProfileMenuIcon,
  PrometheusErrorIcon,
  PrometheusIcon,
  RecoverIcon,
  RedoIcon,
  RefreshIcon,
  RegisterMenuIcon,
  ObjectManagerIcon as RemoveAllIcon,
  RemoveIcon,
  ReportedUsageFullIcon,
  ReportedUsageIcon,
  RetentionIcon,
  S3TierIcon$1 as S3TierIcon,
  S3TierIcon as S3TierIconXs,
  SearchIcon,
  SectionTitle,
  SelectAllIcon,
  SelectMultipleIcon,
  ServersIcon,
  ServiceAccountCredentialsIcon,
  ServiceAccountIcon,
  ServiceAccountsIcon,
  SettingsIcon,
  ShareIcon,
  SpeedtestIcon,
  StandardLightLogo,
  StarIcon,
  StorageIcon,
  SuccessIcon,
  SupportMenuIcon,
  SyncIcon,
  TagsIcon,
  TenantsIcon,
  TenantsOutlineIcon,
  ThemeHandler,
  ThemedLogo,
  TierOfflineIcon,
  TierOnlineIcon,
  TiersIcon,
  TiersNotAvailableIcon,
  ToolsIcon,
  Tooltip,
  TotalObjectsIcon,
  TraceIcon,
  TraceMenuIcon,
  TrashIcon,
  UploadFile,
  UploadFile$1 as UploadFolderIcon,
  UploadIcon,
  UploadStatIcon,
  UptimeIcon,
  UserFilledIcon,
  UsersIcon,
  UsersMenuIcon,
  VerifiedIcon,
  VersionIcon,
  VersionsIcon,
  ViewColumnIcon,
  WarnFilledIcon,
  WarnIcon,
  WarpIcon,
  WatchIcon,
};
