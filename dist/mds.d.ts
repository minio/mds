import * as React$1 from "react";
import React__default, {
  FC,
  ReactNode,
  MouseEventHandler,
  SVGProps,
  HTMLAttributes,
} from "react";
import * as styled_components from "styled-components";
import { CSSObject, CSSProperties } from "styled-components";
import { SortDirectionType } from "react-virtualized";
import { DateTime } from "luxon";

interface ButtonThemeProps {
  border: string;
  text: string;
  background: string;
  iconColor: string;
}
interface ButtonThemeStatesProps {
  enabled: ButtonThemeProps;
  disabled: ButtonThemeProps;
  hover: ButtonThemeProps;
  pressed: ButtonThemeProps;
}
interface LoginPageThemeProps {
  formBG: string;
  bgFilter: string;
  promoBG: string;
  promoHeader: string;
  promoText: string;
  footerElements: string;
  footerDivider: string;
}
interface PageHeaderThemeProps {
  background: string;
  border: string;
  color: string;
}
interface TooltipThemeProps {
  background: string;
  color: string;
}
interface CommonInputThemeProps {
  labelColor: string;
}
interface CheckBoxThemeProps {
  checkBoxBorder: string;
  checkBoxColor: string;
  disabledBorder: string;
  disabledColor: string;
}
interface IconButtonThemeProps {
  buttonBG: string;
  activeBG: string;
  hoverBG: string;
  disabledBG: string;
  color: string;
}
interface DataTableThemeProps {
  border: string;
  disabledBorder: string;
  disabledBG: string;
  selected: string;
  deletedDisabled: string;
  hoverColor: string;
}
interface BackLinkThemeProps {
  color: string;
  arrow: string;
  hover: string;
}
interface InputBoxThemeProps {
  border: string;
  hoverBorder: string;
  color: string;
  backgroundColor: string;
  placeholderColor: string;
  error: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledText: string;
  disabledPlaceholder: string;
}
interface BreadcrumbsBackStyle {
  border: string;
  backgroundColor: string;
}
interface BreadcrumbsThemeProps {
  border: string;
  backgroundColor: string;
  linksColor: string;
  backButton: BreadcrumbsBackStyle;
  textColor: string;
}
interface ActionsListThemeProps {
  titleColor: string;
  containerBorderColor: string;
  backgroundColor: string;
  optionsTextColor: string;
  optionsBorder: string;
  optionsHoverTextColor: string;
  disabledOptionsTextColor: string;
}
interface ScreenTitleThemeProps {
  border: string;
  subtitleColor: string;
  iconColor: string;
}
interface IconThemeColorProps {
  accept: string;
  delete: string;
  default: string;
}
interface ModalBoxThemeProps {
  overlayColor: string;
  containerColor: string;
  closeColor: string;
  closeHoverColor: string;
  closeHoverBG: string;
  titleColor: string;
  iconColor: IconThemeColorProps;
}
interface SwitchThemeProps {
  onLabelColor: string;
  offLabelColor: string;
  switchBackground: string;
  onBackgroundColor: string;
  bulletBorderColor: string;
  bulletBGColor: string;
  disabledBackground: string;
  disabledBulletBorderColor: string;
  disabledBulletBGColor: string;
  disabledOnBackground: string;
}
interface DropdownSelectorThemeProps {
  backgroundColor: string;
  optionTextColor: string;
  selectedTextColor: string;
  selectedBGColor: string;
  hoverText: string;
  hoverBG: string;
  disabledText: string;
}
interface ReadBoxThemeProps {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
}
interface SignalColorsThemeProps {
  main: string;
  danger: string;
  warning: string;
  good: string;
  info: string;
  disabled: string;
  dark: string;
  clear: string;
}
interface MenuThemeProps {
  vertical?: {
    background: string;
    textColor: string;
    iconBorderColor: string;
    iconBGColor: string;
    hoverSelectedIconBorder: string;
    hoverSelectedBackground: string;
    hoverSelectedColor: string;
    sectionDividerColor: string;
    notificationColor: string;
    dropArrowBackground: string;
    dropArrowColor: string;
    menuCollapseColor: string;
    sectionLabelColor: string;
  };
  horizontal?: {
    menuHeaderBackground: string;
    barBackground: string;
    textColor: string;
    iconBorderColor: string;
    iconBGColor: string;
    hoverSelectedIconBorder: string;
    hoverSelectedBackground: string;
    hoverSelectedColor: string;
    sectionDividerColor: string;
    notificationColor: string;
    dropArrowBackground: string;
    dropArrowColor: string;
    dropBackground: string;
    dropHoverSelectedColor: string;
    noOptionsBar: string;
  };
}
interface TabButtonProps$1 {
  labelColor: string;
  backgroundColor: string;
  hoverBackground: string;
  hoverLabelColor: string;
  selectedBackground: string;
  selectedLabelColor: string;
  disabledBackgroundColor: string;
  disabledColor: string;
}
interface TabThemeProps {
  vertical?: {
    backgroundColor: string;
    buttons: TabButtonProps$1;
    borders: string;
  };
  horizontal?: {
    backgroundColor: string;
    selectedIndicatorColor: string;
    buttons: TabButtonProps$1;
  };
}
interface CodeEditorThemeProps {
  backgroundColor: string;
  textColor: string;
  helpToolsBarBG: string;
  comment: string;
  entityTag: string;
  entity: string;
  sublimelinterGutterMark: string;
  constant: string;
  string: string;
  keyword: string;
  markupBold: string;
  codeEditorRegexp: string;
}
interface TagVariantProps {
  background: string;
  label: string;
  deleteColor: string;
}
interface TagThemeProps {
  default: TagVariantProps;
  secondary: TagVariantProps;
  warn: TagVariantProps;
  alert: TagVariantProps;
  ok: TagVariantProps;
  grey: TagVariantProps;
}
interface SnackBarColorElements {
  backgroundColor: string;
  labelColor: string;
}
interface SnackBarThemeProps {
  default: SnackBarColorElements;
  success: SnackBarColorElements;
  warning: SnackBarColorElements;
  error: SnackBarColorElements;
}
interface InformativeColorElements {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}
interface InformativeMessageProps$1 {
  default: InformativeColorElements;
  success: InformativeColorElements;
  warning: InformativeColorElements;
  error: InformativeColorElements;
}
interface BadgeColorElements {
  backgroundColor: string;
  textColor: string;
}
interface BadgeStyleProps {
  alert: BadgeColorElements;
  default: BadgeColorElements;
  secondary: BadgeColorElements;
  warn: BadgeColorElements;
  ok: BadgeColorElements;
  grey: BadgeColorElements;
}
interface WizardStepColorProps {
  stepLabelColor: string;
  selectedStepBG: string;
  selectedStepLabelColor: string;
  disabledLabelColor: string;
}
interface WizardColorProps {
  stepsBackground: string;
  vertical: WizardStepColorProps;
  modal: WizardStepColorProps;
}
interface SliderProps {
  railBG: string;
  bulletBG: string;
  disabledRail: string;
  disabledBullet: string;
}
interface ThemeDefinitionProps {
  bgColor: string;
  fontColor: string;
  borderColor: string;
  bulletColor: string;
  logoColor: string;
  logoLabelColor: string;
  logoLabelInverse: string;
  loaderColor: string;
  linkColor?: string;
  boxBackground: string;
  mutedText: string;
  secondaryText: string;
  signalColors?: SignalColorsThemeProps;
  buttons?: {
    regular?: ButtonThemeStatesProps;
    callAction?: ButtonThemeStatesProps;
    secondary?: ButtonThemeStatesProps;
    text?: ButtonThemeStatesProps;
    subAction?: ButtonThemeStatesProps;
  };
  login?: LoginPageThemeProps;
  pageHeader?: PageHeaderThemeProps;
  tooltip?: TooltipThemeProps;
  commonInput?: CommonInputThemeProps;
  checkbox?: CheckBoxThemeProps;
  iconButton?: IconButtonThemeProps;
  dataTable?: DataTableThemeProps;
  backLink?: BackLinkThemeProps;
  inputBox?: InputBoxThemeProps;
  breadcrumbs?: BreadcrumbsThemeProps;
  actionsList?: ActionsListThemeProps;
  screenTitle?: ScreenTitleThemeProps;
  modalBox?: ModalBoxThemeProps;
  switchButton?: SwitchThemeProps;
  dropdownSelector?: DropdownSelectorThemeProps;
  readBox?: ReadBoxThemeProps;
  menu?: MenuThemeProps;
  tabs?: TabThemeProps;
  codeEditor?: CodeEditorThemeProps;
  tag?: TagThemeProps;
  snackbar?: SnackBarThemeProps;
  informativeMessage?: InformativeMessageProps$1;
  badge?: BadgeStyleProps;
  wizard?: WizardColorProps;
  slider?: SliderProps;
}
interface SelectorType {
  label: string;
  value: string;
  icon?: React__default.ReactNode;
  indicator?: React__default.ReactNode;
  extraValue?: any;
  disabled?: boolean;
}
interface IBytesCalc {
  total: number;
  unit: string;
}

declare const breakPoints: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
declare const calculateBytes: (
  x: string | number,
  showDecimals?: boolean,
  roundFloor?: boolean,
) => IBytesCalc;

interface ThemeHandlerProps {
  darkMode?: boolean;
  customTheme?: ThemeDefinitionProps;
  children: any;
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
  variant?: "regular" | "callAction" | "secondary" | "text" | "subAction";
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  fullWidth?: boolean;
  disabled?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  sx?: CSSObject;
}
interface ConstructProps {
  parentChildren: ReactNode | string | undefined;
}

declare const Button: FC<
  ButtonProps & React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface ApplicationLogoProps {
  applicationName:
    | "console"
    | "operator"
    | "directpv"
    | "kes"
    | "subnet"
    | "subnetops"
    | "cloud"
    | "releases"
    | "vmbroker"
    | "eureka"
    | "kms"
    | "loadbalancer"
    | "index"
    | "cache"
    | "monitor"
    | "observe"
    | "missioncontrol"
    | "globalconsole"
    | "minio"
    | "enterprise";
  subVariant?:
    | "simple"
    | "AGPL"
    | "standard"
    | "enterprise"
    | "new"
    | "enterpriseos"
    | "enterpriseosvertical";
  inverse?: boolean;
  onClick?: React__default.MouseEventHandler<any> | undefined;
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
  backgroundAnimation?: boolean;
}

declare const LoginWrapper: FC<LoginWrapperProps>;

declare const Loader: FC<SVGProps<any>>;

interface PageHeaderMainProps {
  label: React__default.ReactNode;
  middleComponent?: React__default.ReactNode;
  actions?: React__default.ReactNode;
}
interface PageHeaderConstruct {
  sx?: CSSObject;
}
type PageHeaderProps = PageHeaderMainProps & PageHeaderConstruct;

declare const PageHeader: FC<PageHeaderProps>;

interface TooltipProps {
  children: React__default.ReactElement;
  tooltip: React__default.ReactNode;
  errorProps?: any;
  placement?: "bottom" | "left" | "right" | "top";
}
interface TooltipBuild {
  placement: "bottom" | "left" | "right" | "top";
}
interface TooltipConstructProps {
  placement: "bottom" | "left" | "right" | "top";
  content: React__default.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}

declare const Tooltip: FC<TooltipProps>;

type CommonHelpTipPlacement = "bottom" | "left" | "right" | "top";
interface HelpTipProps {
  children: any;
  content: React__default.ReactNode;
  errorProps?: any;
  placement?: CommonHelpTipPlacement;
}
interface HelpTipBuild {
  placement: CommonHelpTipPlacement;
}
interface HelpTipConstructProps {
  placement: CommonHelpTipPlacement;
  content: React__default.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  sx?: CSSObject;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}

declare const Checkbox: FC<
  CheckboxProps & React__default.InputHTMLAttributes<HTMLInputElement>
>;

interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  sx?: CSSObject;
  noMinWidth?: boolean;
  htmlFor?: string;
  helpTip?: ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}

declare const InputLabel: FC<InputLabelProps>;

interface IconBase {
  label?: string;
  size?: "small" | "medium" | "large" | string;
  sx?: CSSObject;
  children: React__default.ReactNode;
}
type IconButtonProps = IconBase &
  React__default.ButtonHTMLAttributes<HTMLButtonElement>;

declare const IconButton: FC<IconButtonProps>;

declare const actionsTypes: readonly [
  "view",
  "edit",
  "delete",
  "description",
  "share",
  "cloud",
  "console",
  "download",
  "disable",
  "format",
  "preview",
];
type PredefinedActionTypes = (typeof actionsTypes)[number];
interface ItemActions {
  tooltip?: string;
  type: PredefinedActionTypes | React__default.ReactNode;
  sendOnlyId?: boolean;
  isDisabled?: boolean | ((itemValue: any) => boolean);
  showLoader?: boolean | ((itemValue: any) => boolean);
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
interface ITableSortInfo {
  sortBy: string;
  sortDirection: SortDirectionType;
}
interface ISortConfig {
  onSortClick: (val: ITableSortInfo) => any;
  currentSort: string;
  currentDirection: "ASC" | "DESC" | undefined;
}
interface DataTableProps {
  itemActions?: ItemActions[] | null;
  columns: IColumns[];
  onSelect?: (e: React__default.ChangeEvent<HTMLInputElement>) => void;
  idField?: string;
  isLoading?: boolean;
  loadingMessage?: React__default.ReactNode;
  records: any[];
  entityName?: string;
  selectedItems?: string[];
  customEmptyMessage?: string;
  customPaperHeight?: string;
  noBackground?: boolean;
  columnsSelector?: boolean;
  textSelectable?: boolean;
  columnsShown?: string[];
  onColumnChange?: (column: string) => any;
  autoScrollToBottom?: boolean;
  infiniteScrollConfig?: IInfiniteScrollConfig;
  disabled?: boolean;
  onSelectAll?: () => void;
  rowStyle?: ({
    index,
  }: {
    index: number;
  }) => "deleted" | "" | React__default.CSSProperties;
  parentClassName?: string;
  sx?: CSSObject;
  rowHeight?: number;
  sortEnabled?: boolean | string[] | ISortConfig;
  sortCallBack?: (info: ITableSortInfo) => void;
}
interface DataTableWrapperProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  customPaperHeight?: string | number;
  noBackground?: boolean;
  sx?: CSSObject;
  rowHeight: number;
}
interface IActionButton {
  tooltip?: string;
  type: PredefinedActionTypes | React__default.ReactNode;
  onClick?: (id: string) => any;
  valueToSend: any;
  selected: boolean;
  sendOnlyId?: boolean;
  idField: string;
  disabled: boolean;
}
interface ColumnSelectorProps {
  open: boolean;
  closeTriggerAction: () => void;
  onSelect: (column: string) => void;
  columns: IColumns[];
  selectedOptionIDs: string[];
  sx?: CSSObject;
  anchorEl?: (EventTarget & HTMLElement) | null;
}
interface ColumnSelectorConstructProps {
  sx?: CSSObject;
}

declare const DataTable: FC<DataTableProps>;

interface BackLinkProps
  extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  label?: string;
}

declare const BackLink: FC<BackLinkProps>;

interface HelpBoxProps {
  iconComponent?: any;
  title: string | React__default.ReactNode;
  help: any;
}

declare const HelpBox: FC<HelpBoxProps>;

interface SectionTitleProps {
  separator?: boolean;
  actions?: React__default.ReactNode;
  icon?: React__default.ReactNode;
  children: React__default.ReactNode;
  sx?: CSSObject;
}

declare const SectionTitle: FC<SectionTitleProps>;

interface BoxProps {
  sx?: CSSObject;
  children?: React__default.ReactNode;
  withBorders?: boolean;
  customBorderPadding?: number | string;
  useBackground?: boolean;
}

declare const Box: FC<HTMLAttributes<HTMLDivElement> & BoxProps>;

interface FormLayoutProps {
  sx?: CSSObject;
  children?: React__default.ReactNode;
  title?: string;
  icon?: React__default.ReactNode;
  helpBox?: React__default.ReactNode;
  withBorders?: boolean;
  containerPadding?: boolean;
}

declare const FormLayout: FC<FormLayoutProps>;

interface PageLayoutProps {
  variant?: "constrained" | "full";
  children: React__default.ReactNode;
  className?: string;
  sx?: CSSObject;
}

declare const PageLayout: FC<HTMLAttributes<HTMLDivElement> & PageLayoutProps>;

interface MainContainerProps {
  menu?: React__default.ReactElement;
  children: React__default.ReactElement;
  horizontal?: boolean;
  mobileModeAuto?: boolean;
  sx?: CSSObject;
}

declare const MainContainer: FC<MainContainerProps>;

interface InputBoxProps
  extends React__default.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: CSSObject;
  index?: number;
  overlayId?: "index";
  overlayIcon?: React__default.ReactNode;
  overlayAction?: () => void;
  overlayObject?: React__default.ReactNode;
  noLabelMinWidth?: boolean;
  startIcon?: React__default.ReactNode;
  required?: boolean;
  className?: string;
  error?: string;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface InputContainerProps {
  children?: React__default.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React__default.ReactNode;
  className?: string;
}
interface ExtraInputProps {
  originType?: string;
}

declare const InputBox$1: FC<InputBoxProps>;

interface BreadcrumbsProps {
  sx?: CSSObject;
  children: React__default.ReactNode;
  additionalOptions?: React__default.ReactNode;
  goBackFunction: () => void;
}
interface BreadcrumbsContainerProps {
  sx?: CSSObject;
}

declare const Breadcrumbs: FC<BreadcrumbsProps>;

interface ActionItem {
  action: () => void;
  label: string;
  disabled: boolean;
  icon: React__default.ReactNode;
  tooltip: string;
}
interface ActionsListProps {
  sx?: CSSObject;
  items: ActionItem[];
  title: React__default.ReactNode;
}
interface ActionsListPanelProps {
  sx?: CSSObject;
}
interface ActionButtonProps
  extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: React__default.ReactNode;
}

declare const ActionsList: FC<ActionsListProps>;

interface SimpleHeaderProps {
  label: React__default.ReactNode;
  icon?: React__default.ReactNode;
  sx?: CSSObject;
}
interface SimpleHeaderContainerProps {
  sx?: CSSObject;
}

declare const SimpleHeader: FC<SimpleHeaderProps>;

interface ScreenTitleProps {
  icon: React__default.ReactNode;
  subTitle?: React__default.ReactNode;
  title: string;
  actions: React__default.ReactNode;
  sx?: CSSObject;
  bottomBorder?: boolean;
}
interface ScreenTitleContainerProps {
  sx?: CSSObject;
  bottomBorder?: boolean;
}

declare const ScreenTitle: FC<ScreenTitleProps>;

interface ModalBoxProps {
  onClose: () => void;
  open: boolean;
  title: React__default.ReactNode;
  children: React__default.ReactNode;
  widthLimit?: boolean;
  titleIcon?: React__default.ReactNode;
  backgroundOverlay?: boolean;
  iconColor?: "accept" | "delete" | "default";
  customMaxWidth?: number | string;
  sx?: CSSObject;
}
interface ModalBoxContainerProps {
  backgroundOverlay?: boolean;
  widthLimit?: boolean;
  iconColor?: "accept" | "delete" | "default";
  customMaxWidth?: number | string;
  sx?: CSSObject;
}

declare const ModalBox: FC<ModalBoxProps>;

interface MainSwitchProps {
  id: string;
  label?: string;
  tooltip?: string;
  sx?: CSSObject;
  className?: string;
  switchOnly?: boolean;
  indicatorLabels?: string[];
  description?: string;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface IndicatorProps {
  active: boolean;
  children: React__default.ReactNode;
}
interface SwitchContainerProps {
  sx?: CSSObject;
}
type SwitchProps = MainSwitchProps &
  React__default.InputHTMLAttributes<HTMLInputElement>;

declare const Switch: FC<
  SwitchProps & React__default.InputHTMLAttributes<HTMLInputElement>
>;

interface SelectProps {
  options: SelectorType[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  fixedLabel?: string;
  placeholder?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: CSSObject;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}

declare const Select: FC<SelectProps>;

interface DropdownSelectorProps {
  id: string;
  options: SelectorType[];
  selectedOption?: string;
  onSelect: (
    value: string,
    extraValue?: any,
    label?: string,
    selectedIndex?: number,
  ) => void;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  anchorOrigin?: "start" | "end";
  useAnchorWidth?: boolean;
}
interface DropDownBlockProps {
  useAnchorWidth: boolean;
  sx: CSSObject;
}
interface DropdownItemProps {
  icon?: React__default.ReactNode;
  label: string;
  indicator?: React__default.ReactNode;
}

declare const DropdownSelector: FC<DropdownSelectorProps>;

interface RadioGroupProps {
  label?: string;
  tooltip?: string;
  selectorOptions: SelectorType[];
  currentValue: string;
  id: string;
  name: string;
  disableOptions?: boolean;
  displayInColumn?: boolean;
  className?: string;
  onChange: (
    event: React__default.ChangeEvent<HTMLInputElement>,
    extraValue?: any,
  ) => void;
  sx?: CSSObject;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface OptionsContainerProps {
  inColumn: boolean;
}

declare const RadioGroup: FC<RadioGroupProps>;

interface ReadBoxProps {
  label?: string;
  children: React__default.ReactNode;
  multiLine?: boolean;
  actionButton?: React__default.ReactNode;
  sx?: CSSObject;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface ReadBoxBaseProps {
  label?: string;
  sx?: CSSObject;
  multiLine?: boolean;
}

declare const ReadBox: FC<ReadBoxProps>;

interface CommentBoxProps
  extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: CSSObject;
  index?: number;
  noLabelMinWidth?: boolean;
  required?: boolean;
  className?: string;
  error?: string;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface CommentContainerProps {
  children?: React__default.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React__default.ReactNode;
  className?: string;
}
interface ExtraCommentProps {
  originType?: string;
}

declare const InputBox: FC<CommentBoxProps>;

interface MenuProps {
  options?: MenuItemProps[];
  sx?: CSSObject;
  applicationLogo: ApplicationLogoProps;
  callPathAction: (path: string) => void;
  horizontal?: boolean;
  isOpen: boolean;
  collapseAction: () => void;
  displayGroupTitles?: boolean;
  signOutAction?: () => void;
  currentPath?: string;
  middleComponent?: React__default.ReactNode;
  endComponent?: React__default.ReactNode;
  mobileModeAuto?: boolean;
}
interface MenuItemProps {
  group?: string;
  path?: string;
  name: string;
  id?: string;
  icon: React__default.ReactNode;
  onClick?: (path: string) => void;
  children?: MenuItemProps[];
  badge?: boolean;
  currentPath?: string;
  visibleTooltip?: boolean;
  isVisible?: boolean;
}
interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  divider?: boolean;
}
interface MainHeaderProps {
  divider?: boolean;
}
interface MenuConstructProps {
  sx?: CSSObject;
}
interface SubItemsBoxProps {
  anchorEl: (EventTarget & HTMLElement) | null;
  hideTriggerAction: () => void;
  children: React__default.ReactNode;
  open: boolean;
}

declare const Menu: FC<MenuProps>;

interface ExpandOptionsButtonProps {
  label: string;
  open: boolean;
  sx?: CSSObject;
}
interface ConstructExpandOptionsProps {
  sx?: CSSObject;
}

declare const ExpandOptionsButton: FC<
  ExpandOptionsButtonProps &
    React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface TabProps {
  label: string;
  icon?: React__default.ReactNode;
  disabled?: boolean;
  to?: string;
  id: string;
}
interface TabItemProps {
  tabConfig: TabProps;
  content?: React__default.ReactNode;
}
interface TabsProps {
  horizontal?: boolean;
  options: TabItemProps[];
  currentTabOrPath: string;
  useRouteTabs?: boolean;
  routes?: React__default.ReactElement | null;
  onTabClick: (selectedItem: string) => void;
  optionsInitialComponent?: React__default.ReactNode;
  optionsEndComponent?: React__default.ReactNode;
  horizontalBarBackground?: boolean;
  sx?: CSSObject;
}
interface TabsContainerProps {
  horizontal: boolean;
  horizontalBarBackground: boolean;
  sx?: CSSObject;
}
interface TabButtonProps {
  id: string;
  horizontal?: boolean;
  label: string;
  onClick: () => void;
  disabled: boolean;
  icon?: React__default.ReactNode;
  selected?: boolean;
}
interface TabButtonConstructProps {
  horizontal: boolean;
}
interface TabPanelProps {
  id: string;
  selectedTab?: string;
  useRouteTabs: boolean;
  children: React__default.ReactNode;
}

declare const Tabs: FC<TabsProps>;

interface CodeEditorProps {
  value: string;
  label?: string;
  mode?: string;
  tooltip?: string;
  editorHeight?: string | number;
  onChange: (value: string) => any;
  className?: string;
  helpTools?: React__default.ReactNode;
  sx?: CSSObject;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface CodeEditorBaseProps {
  editorHeight: string | number;
  sx?: CSSObject;
  className?: string;
}

declare const CodeMirrorWrapper: FC<CodeEditorProps>;

interface TagMainProps {
  label: string;
  onDelete?: (item: string) => void;
  id: string;
  icon?: ReactNode;
}
interface TagConstructProps {
  color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
  sx?: CSSObject;
  variant?: "regular" | "outlined";
  square?: boolean;
}
type TagProps = TagMainProps & TagConstructProps;

declare const Tag: FC<
  TagProps & React__default.HTMLAttributes<HTMLSpanElement>
>;

interface CommonActionLinkProps {
  isLoading?: boolean;
  label?: any;
}
interface BaseActionLinkProps {
  sx?: CSSObject;
}
type ActionLinkProps = CommonActionLinkProps & BaseActionLinkProps;

declare const ActionLink: FC<
  ActionLinkProps & React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface ValuePairMain {
  label?: ReactNode;
  value?: ReactNode;
}
interface ValuePairCommon {
  direction?: "column" | "row";
  sx?: CSSObject;
}
type ValuePairProps = ValuePairMain & ValuePairCommon;

declare const ValuePair: FC<ValuePairProps>;

interface MainProgressProps {
  variant?: "determinate" | "indeterminate";
  notificationLabel?: string;
  value?: number;
  maxValue?: number;
  progressLabel?: boolean;
}
interface CommonProgressBar {
  sx?: CSSObject;
  color?: "blue" | "red" | "green" | "orange" | "grey";
  barHeight?: number;
  transparentBG?: boolean;
}
type ProgressBarProps = MainProgressProps & CommonProgressBar;

declare const ProgressBar: FC<ProgressBarProps>;

interface FileSelectorProps {
  label: string;
  onChange: (
    event: React__default.ChangeEvent<HTMLInputElement>,
    fileName: string,
    data?: string,
  ) => void;
  returnEncodedData?: boolean;
  id: string;
  name: string;
  disabled?: boolean;
  tooltip?: string;
  required?: boolean;
  error?: string;
  accept?: string;
  value: string;
  className?: string;
  noLabelMinWidth?: boolean;
  sx?: CSSObject;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface FileSelectorConstructorProps {
  children?: React__default.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React__default.ReactNode;
  className?: string;
}

declare const FileSelector: FC<FileSelectorProps>;

interface SizeChartMain {
  label: boolean;
  width?: string;
  height?: string;
}
interface SizeChartConstructProps {
  usedBytes: number;
  totalBytes: number;
  chartLabel?: string;
  sx?: CSSObject;
}
type SizeChartProps = SizeChartMain & SizeChartConstructProps;

declare const SizeChart: FC<SizeChartProps>;

interface SnackbarMainProps {
  autoHideDuration?: number;
  message?: ReactNode;
  onClose: () => void;
  closeButton?: boolean;
  mode?: "inline" | "portal";
}
interface SnackbarConstructProps {
  open: boolean;
  condensed?: boolean;
  variant?: "default" | "success" | "warning" | "error";
  sx?: CSSObject;
}
interface SnackbarButtonProps {
  variant: "default" | "success" | "warning" | "error";
  condensed: boolean;
}
type SnackbarProps = SnackbarMainProps & SnackbarConstructProps;

declare const Snackbar: FC<SnackbarProps>;

interface AccordionProps {
  expanded: boolean;
  onTitleClick: () => void;
  id: string;
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  sx?: CSSObject;
}
interface AccordionMainProps {
  sx?: CSSObject;
}
interface AccordionContentProps {
  expanded: boolean;
}

declare const Accordion: FC<AccordionProps>;

declare const HelpTip: FC<HelpTipProps>;

interface AutocompleteProps {
  options: SelectorType[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  displayDropArrow?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  placeholder?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: CSSObject;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}

declare const Autocomplete: FC<AutocompleteProps>;

interface BadgeMain {
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  badgeContent?: number;
}
interface BadgeConstruct {
  horizontalPosition?: "left" | "right";
  verticalPosition?: "bottom" | "top";
  sx?: CSSObject;
  color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
  shape?: "circular" | "rectangular";
  dotOnly?: boolean;
}
type BadgeProps = BadgeMain & BadgeConstruct;

declare const Badge: FC<HTMLAttributes<HTMLSpanElement> & BadgeProps>;

interface WizardButton {
  label?: string;
  type?: "next" | "back" | "to" | "custom";
  action?: (nextFunction: (to: string | number) => void) => void;
  enabled?: boolean;
  toPage?: number;
  componentRender?: React__default.ReactNode;
}
interface WizardElement {
  label: string;
  componentRender: any;
  buttons: WizardButton[];
  advancedOnly?: boolean;
  loadingStep?: boolean;
}
interface WizardPage {
  page: WizardElement;
  pageChange: (to: string | number) => void;
  loadingStep?: boolean;
}
interface WizardMain {
  loadingStep?: boolean;
  wizardSteps: WizardElement[];
  linearMode?: boolean;
}
interface WizardConstruct {
  sx?: CSSObject;
  forModal?: boolean;
}
type WizardProps = WizardMain & WizardConstruct;
type WizardPageProps = WizardPage & WizardConstruct;

declare const GenericWizard: ({
  wizardSteps,
  loadingStep,
  forModal,
  linearMode,
  sx,
}: WizardProps) => React__default.JSX.Element | null;

interface InformativeMessageMain {
  title: React__default.ReactNode;
  message: React__default.ReactNode;
}
interface InformativeConstructProps {
  variant?: "default" | "success" | "warning" | "error";
  sx?: CSSObject;
}
type InformativeMessageProps = InformativeMessageMain &
  InformativeConstructProps;

declare const InformativeMessage: FC<InformativeMessageProps>;

interface DateTimeInputMain {
  pickerStartComponent?: React__default.ReactNode;
  className?: string;
  label?: string;
  required?: boolean;
  tooltip?: string;
  disabled?: boolean;
  openPickerIcon?: "arrow" | React__default.ReactNode;
  displayFormat?: string;
  helpTip?: React__default.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
  noLabelMinWidth?: boolean;
  pickerSx?: CSSObject;
}
interface DateTimeConstruct {
  id: string;
  sx?: CSSObject;
  mode?: "all" | "date";
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  minDate?: DateTime;
  maxDate?: DateTime;
  usePortal?: boolean;
}
interface DateTimeSelectorMain {
  open?: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  onClose?: () => void;
}
interface TimeSelectorProps {
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  completeCallback?: () => void;
  timeFormat?: "12h" | "24h";
  secondsSelector: boolean;
}
interface DateSelectorProps {
  minDate?: DateTime;
  maxDate?: DateTime;
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
}
interface StylesOverrideProps {
  isPortal: boolean;
  mode: "all" | "date";
  sx?: CSSObject;
}
type DateTimeInputProps = DateTimeInputMain &
  DateTimeConstruct &
  TimeSelectorProps;
type DateTimeSelectorProps = DateTimeSelectorMain &
  DateTimeConstruct &
  TimeSelectorProps;

declare const DateTimeInput: FC<DateTimeInputProps>;

declare const DateTimeSelector: FC<DateTimeSelectorProps>;

interface LinkProps {
  sx?: CSSObject;
}

declare const Link: FC<
  LinkProps & React__default.AnchorHTMLAttributes<HTMLAnchorElement>
>;

declare const EditorThemeSwitchIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const DisabledIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const FormatDrivesIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const SpeedtestIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const StorageIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const RefreshIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const VersionIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LambdaBalloonIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const HelpIconFilled: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ShareIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const EditIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const JSONIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const SearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const WarnIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const CircleIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ObjectBrowserFolderIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const RedoIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const ChangeAccessPolicyIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ServersIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ClosePanelIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MinIOTierIconXs: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const DashboardIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ClustersIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MirroringIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ToolsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ArrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ServiceAccountIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const OnlineRegistrationBackIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ConfigurationsListIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const WatchIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ServiceAccountCredentialsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const HealIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const S3TierIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ArrowRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const PreviewIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BucketQuotaIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const SelectMultipleIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DeleteIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const EditYamlIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ReportedUsageIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const PrometheusIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ConfirmModalIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const NextArrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const PermissionIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const GoogleTierIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const AccountIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AddAccessRuleIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const UptimeIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const EnabledIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ObjectPreviewIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TenantsOutlineIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DrivesIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CreateNewPathIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const HelpIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const ReportedUsageFullIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const AddNewTagIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const OnlineRegistrationIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DiagnosticsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ObjectBrowser1Icon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MinIOTierIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const WarpIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const CopyIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const OpenListIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MultipleBucketsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AddMembersToGroupIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const OfflineRegistrationBackIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const PrometheusErrorIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LifecycleConfigIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DriveFormatErrorsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const VerifiedIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CallHomeFeatureIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TraceIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AddIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const GoogleTierIconXs: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const LambdaNotificationsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const BackSettingsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LicenseIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const RemoveIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TiersNotAvailableIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const PerformanceFeatureIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AddFolderIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const S3TierIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const IAMPoliciesIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const UsersIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const EgressIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BucketEncryptionIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DocumentationIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DiagnosticsFeatureIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const PasswordKeyIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const TrashIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const EventSubscriptionIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DownloadIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ComputerLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AllBucketsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LambdaIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const GroupsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DownloadStatIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const UploadFile$1: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const TiersIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const NewAccountIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const CreateGroupIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CollapseIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ConfirmDeleteIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const OfflineRegistrationIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TenantsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const UploadFile: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const CreateIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const NewPoolIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const SyncIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const LogoutIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AzureTierIconXs: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const TotalObjectsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const HistoryIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CreateUserIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BucketsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const UploadStatIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BucketReplicationIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ObjectManagerIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ObjectBrowserIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const RecoverIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const SettingsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const UploadIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AzureTierIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const CalendarIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ServiceAccountsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const LogsIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const HardBucketQuotaIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ConsoleIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ChangePasswordIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LockIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BackCaretIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const VersionsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const NewPathIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ObjectInfoIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MetadataIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LegalHoldIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const RetentionIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TagsIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const AlertCloseIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const OpenSourceIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ArrowRightLink: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const LicenseDocIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const SelectAllIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BackIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const DeleteNonCurrentIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const EditTenantIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const SuccessIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const NetworkGetIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const NetworkPutIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ObjectManagerIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CancelledIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const EditTagIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LinkIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const AlertIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const InfoIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const ConsoleAgpl: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ConsoleStandard: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ConsoleEnterprise: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const AGPLV3LightLogo: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AGPLV3Logo: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const EnterpriseLightLogo: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const StandardLightLogo: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AGPLV3DarkLogo: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LDAPIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const OIDCIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const StarIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const AccountIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CollapseCaret: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ExpandCaret: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CertificateIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TierOnlineIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TierOfflineIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const WarnFilledIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BoxArrowUp: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BoxArrowDown: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const UserFilledIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LockFilledIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FilterIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const FolderIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ViewColumnIcon$2: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ArrowDropUp$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ArrowDropUp: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CloudIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DisableIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FormatDriveIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ReportIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ViewColumnIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ViewColumnIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AccessRuleIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TimeIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const CollapseMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AudioIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AudioIconMute: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ChatIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const SendMessageIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CancelledAudioIcon: (
  props: SVGProps<SVGSVGElement>,
) => React__default.JSX.Element;

declare const ThumbsUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ThumbsDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AttachFileIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CheckCircleIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CodeIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const CompressIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FindReplaceIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FirstAidIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LockIcon: (props: SVGProps<SVGSVGElement>) => React$1.JSX.Element;

declare const LoginIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const PendingItemsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FirstAidIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LoginIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const WebhookIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ExpandIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const NextCaretIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const NextCaretIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DarkModeIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LightModeIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AutoModeIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ShuffleIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LanguageIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ShuffleIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ExpandLeftCaret: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const InspectMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AuditLogsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const HealthMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MenuCollapsedIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const TraceMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const GroupsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MenuCollapsedIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MetricsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const IdentityMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const LogsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const MonitoringMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const SupportMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const PerformanceMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DiagnosticsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AccessMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const RegisterMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const DrivesMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const AccountsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const ProfileMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const CallHomeMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const BucketsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const UsersMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const KeysMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const StatusMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const SecretsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const PoliciesMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const IdentitiesMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileConfigIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FilePdfIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileFontIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileLinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileImageIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileWorldIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileBookIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileMissingIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FilePptIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileDbIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileTxtIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileVideoIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileLockIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileXlsIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileZipIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FolderBrowserIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileCloudIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileMusicIcon: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

declare const FileNonType: (
  props: SVGProps<SVGSVGElement>,
) => React$1.JSX.Element;

interface TableComponentsExtraProps {
  sx?: CSSProperties;
}

declare const Table: FC<
  TableComponentsExtraProps &
    React__default.TableHTMLAttributes<HTMLTableElement>
>;

declare const TableBody: FC<
  TableComponentsExtraProps &
    React__default.HTMLAttributes<HTMLTableSectionElement>
>;

declare const TableCell: FC<
  TableComponentsExtraProps &
    React__default.TdHTMLAttributes<HTMLTableDataCellElement>
>;

declare const TableHead: FC<
  TableComponentsExtraProps &
    React__default.HTMLAttributes<HTMLTableSectionElement>
>;

declare const TableHeadCell: FC<
  TableComponentsExtraProps &
    React__default.ThHTMLAttributes<HTMLTableHeaderCellElement>
>;

declare const TableRow: FC<
  TableComponentsExtraProps & React__default.HTMLAttributes<HTMLTableRowElement>
>;

export {
  AGPLV3DarkLogo,
  AGPLV3LightLogo,
  AGPLV3Logo,
  AccessMenuIcon,
  AccessRuleIcon,
  Accordion,
  AccordionContentProps,
  AccordionMainProps,
  AccordionProps,
  AccountIcon$1 as AccountIcon,
  AccountsMenuIcon,
  ActionButtonProps,
  ActionItem,
  ActionLink,
  ActionLinkProps,
  ActionsList,
  ActionsListPanelProps,
  ActionsListProps,
  AddAccessRuleIcon,
  AddFolderIcon,
  AddIcon,
  AddMembersToGroupIcon,
  AddNewTagIcon,
  AlertCloseIcon,
  AlertIcon,
  AllBucketsIcon,
  ApplicationLogo,
  ApplicationLogoProps,
  ArrowDropUp as ArrowDropDown,
  ArrowDropUp$1 as ArrowDropUp,
  ArrowIcon,
  ArrowRightIcon,
  ArrowRightLink,
  AttachFileIcon,
  AudioIcon,
  AudioIconMute,
  AuditLogsMenuIcon,
  AutoModeIcon,
  Autocomplete,
  AutocompleteProps,
  AzureTierIcon,
  AzureTierIconXs,
  BackCaretIcon,
  BackIcon,
  BackLink,
  BackLinkProps,
  BackSettingsIcon,
  Badge,
  BadgeConstruct,
  BadgeMain,
  BadgeProps,
  BaseActionLinkProps,
  Box,
  BoxArrowDown,
  BoxArrowUp,
  BoxProps,
  Breadcrumbs,
  BreadcrumbsContainerProps,
  BreadcrumbsProps,
  BucketEncryptionIcon,
  BucketQuotaIcon,
  BucketReplicationIcon,
  BucketsIcon,
  BucketsMenuIcon,
  Button,
  ButtonProps,
  CalendarIcon,
  CallHomeFeatureIcon,
  CallHomeMenuIcon,
  CancelledAudioIcon,
  CancelledIcon,
  CertificateIcon,
  ChangeAccessPolicyIcon,
  ChangePasswordIcon,
  ChatIcon,
  CheckCircleIcon,
  Checkbox,
  CircleIcon,
  ClosePanelIcon,
  CloudIcon,
  ClustersIcon,
  CodeMirrorWrapper as CodeEditor,
  CodeEditorBaseProps,
  CodeEditorProps,
  CodeIcon,
  CollapseCaret,
  CollapseIcon,
  CollapseMenuIcon,
  ColumnSelectorConstructProps,
  ColumnSelectorProps,
  InputBox as CommentBox,
  CommentBoxProps,
  CommentContainerProps,
  CommonActionLinkProps,
  CommonHelpTipPlacement,
  CommonProgressBar,
  CompressIcon,
  ComputerLineIcon,
  ConfigurationsListIcon,
  ConfirmDeleteIcon,
  ConfirmModalIcon,
  ConsoleAgpl,
  ConsoleEnterprise,
  ConsoleIcon,
  ConsoleStandard,
  ConstructExpandOptionsProps,
  ConstructProps,
  CopyIcon,
  CreateGroupIcon,
  CreateIcon,
  CreateNewPathIcon,
  CreateUserIcon,
  DarkModeIcon,
  DashboardIcon,
  DataTable,
  DataTableProps,
  DataTableWrapperProps,
  DateSelectorProps,
  DateTimeConstruct,
  DateTimeInput,
  DateTimeInputMain,
  DateTimeInputProps,
  DateTimeSelector,
  DateTimeSelectorMain,
  DateTimeSelectorProps,
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
  DropDownBlockProps,
  DropdownItemProps,
  DropdownSelector,
  DropdownSelectorProps,
  EditIcon,
  EditTagIcon,
  EditTenantIcon,
  EditYamlIcon,
  EditorThemeSwitchIcon,
  EgressIcon,
  EnabledIcon,
  EnterpriseLightLogo,
  ShuffleIcon as EventBusyIcon,
  EventSubscriptionIcon,
  ExpandCaret,
  ExpandIcon,
  ExpandLeftCaret,
  ExpandOptionsButton,
  ExpandOptionsButtonProps,
  ExtraCommentProps,
  AccountIcon as ExtraFeaturesIcon,
  ExtraInputProps,
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
  FileSelector,
  FileSelectorConstructorProps,
  FileSelectorProps,
  FileTxtIcon,
  FileVideoIcon,
  FileWorldIcon,
  FileXlsIcon,
  FileZipIcon,
  FilterIcon,
  FindReplaceIcon,
  FirstAidIcon$1 as FirstAidIcon,
  FolderBrowserIcon,
  FolderIcon,
  FormLayout,
  FormLayoutProps,
  FormatDriveIcon,
  FormatDrivesIcon,
  GlobalStyles,
  GoogleTierIcon,
  GoogleTierIconXs,
  Grid,
  GridProps,
  GroupsIcon,
  GroupsMenuIcon,
  HardBucketQuotaIcon,
  HealIcon,
  HealthMenuIcon,
  HelpBox,
  HelpBoxProps,
  HelpIcon,
  HelpIconFilled,
  HelpTip,
  HelpTipBuild,
  HelpTipConstructProps,
  HelpTipProps,
  HistoryIcon,
  IAMPoliciesIcon,
  IActionButton,
  IColumns,
  IInfiniteScrollConfig,
  ISortConfig,
  ITableSortInfo,
  IconBase,
  IconButton,
  IconButtonProps,
  IdentitiesMenuIcon,
  IdentityMenuIcon,
  IndicatorProps,
  InfoIcon,
  InformativeConstructProps,
  InformativeMessage,
  InformativeMessageMain,
  InformativeMessageProps,
  InputBox$1 as InputBox,
  InputBoxProps,
  InputContainerProps,
  InputLabel,
  InputLabelProps,
  InspectMenuIcon,
  ItemActions,
  JSONIcon,
  LoginIcon as KeyIcon,
  KeysMenuIcon,
  LDAPIcon,
  LambdaBalloonIcon,
  LambdaIcon,
  LambdaNotificationsIcon,
  LanguageIcon,
  LegalHoldIcon,
  LicenseDocIcon,
  LicenseIcon,
  LifecycleConfigIcon,
  LightModeIcon,
  Link,
  LinkIcon,
  LinkProps,
  Loader,
  LockFilledIcon,
  LockIcon$1 as LockIcon,
  LockIcon as LockOpenIcon,
  LoginIcon$1 as LoginIcon,
  LoginWrapper,
  LogoutIcon,
  LogsIcon,
  LogsMenuIcon,
  MainContainer,
  MainHeaderProps,
  MainProgressProps,
  MainSwitchProps,
  Menu,
  MenuCollapsedIcon,
  MenuConstructProps,
  MenuCollapsedIcon$1 as MenuExpandedIcon,
  MenuItemProps,
  MenuProps,
  MetadataIcon,
  MetricsMenuIcon,
  MinIOTierIcon,
  MinIOTierIconXs,
  MirroringIcon,
  ModalBox,
  ModalBoxContainerProps,
  ModalBoxProps,
  MonitoringMenuIcon,
  MultipleBucketsIcon,
  NetworkGetIcon,
  NetworkPutIcon,
  NewAccountIcon,
  NewPathIcon,
  NewPoolIcon,
  NextArrowIcon,
  NextCaretIcon$1 as NextCaretIcon,
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
  OptionsContainerProps,
  PageHeader,
  PageHeaderConstruct,
  PageHeaderMainProps,
  PageHeaderProps,
  PageLayout,
  PageLayoutProps,
  PasswordKeyIcon,
  PendingItemsIcon,
  PerformanceFeatureIcon,
  PerformanceMenuIcon,
  PermissionIcon,
  PoliciesMenuIcon,
  PredefinedActionTypes,
  NextCaretIcon as PrevCaretIcon,
  PreviewIcon,
  ProfileMenuIcon,
  ProgressBar,
  ProgressBarProps,
  PrometheusErrorIcon,
  PrometheusIcon,
  FirstAidIcon as PublicIcon,
  RadioGroup,
  RadioGroupProps,
  ReadBox,
  ReadBoxBaseProps,
  ReadBoxProps,
  RecoverIcon,
  RedoIcon,
  RefreshIcon,
  RegisterMenuIcon,
  ObjectManagerIcon as RemoveAllIcon,
  RemoveIcon,
  ReportIcon,
  ReportedUsageFullIcon,
  ReportedUsageIcon,
  RetentionIcon,
  S3TierIcon$1 as S3TierIcon,
  S3TierIcon as S3TierIconXs,
  ScreenTitle,
  ScreenTitleContainerProps,
  ScreenTitleProps,
  SearchIcon,
  SecretsMenuIcon,
  SectionHeaderProps,
  SectionTitle,
  SectionTitleProps,
  Select,
  SelectAllIcon,
  SelectMultipleIcon,
  SelectProps,
  SelectorType,
  SendMessageIcon,
  ServersIcon,
  ServiceAccountCredentialsIcon,
  ServiceAccountIcon,
  ServiceAccountsIcon,
  SettingsIcon,
  ShareIcon,
  ShuffleIcon$1 as ShuffleIcon,
  SimpleHeader,
  SimpleHeaderContainerProps,
  SimpleHeaderProps,
  SizeChart,
  SizeChartConstructProps,
  SizeChartMain,
  SizeChartProps,
  Snackbar,
  SnackbarButtonProps,
  SnackbarConstructProps,
  SnackbarMainProps,
  SnackbarProps,
  SpeedtestIcon,
  StandardLightLogo,
  StarIcon,
  StatusMenuIcon,
  StorageIcon,
  StylesOverrideProps,
  SubItemsBoxProps,
  SuccessIcon,
  SupportMenuIcon,
  Switch,
  SwitchContainerProps,
  SwitchProps,
  SyncIcon,
  TabButtonConstructProps,
  TabButtonProps,
  TabItemProps,
  TabPanelProps,
  TabProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tabs,
  TabsContainerProps,
  TabsProps,
  Tag,
  TagConstructProps,
  TagMainProps,
  TagProps,
  TagsIcon,
  TenantsIcon,
  TenantsOutlineIcon,
  ThemeHandler,
  ThemedLogo,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TierOfflineIcon,
  TierOnlineIcon,
  TiersIcon,
  TiersNotAvailableIcon,
  TimeIcon,
  TimeSelectorProps,
  ToolsIcon,
  Tooltip,
  TooltipBuild,
  TooltipConstructProps,
  TooltipProps,
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
  ValuePair,
  ValuePairCommon,
  ValuePairMain,
  ValuePairProps,
  VerifiedIcon,
  VersionIcon,
  VersionsIcon,
  ViewColumnIcon$2 as ViewColumnIcon,
  ViewColumnIcon as VisibilityOffIcon,
  ViewColumnIcon$1 as VisibilityOnIcon,
  WarnFilledIcon,
  WarnIcon,
  WarpIcon,
  WatchIcon,
  WebhookIcon,
  GenericWizard as Wizard,
  WizardButton,
  WizardConstruct,
  WizardElement,
  WizardMain,
  WizardPage,
  WizardPageProps,
  WizardProps,
  actionsTypes,
  breakPoints,
  calculateBytes,
};
