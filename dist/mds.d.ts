import React$1, {
  FC,
  ReactNode,
  MouseEventHandler,
  SVGProps,
  HTMLAttributes,
} from "react";
import * as styled_components from "styled-components";
import { CSSObject, CSSProperties } from "styled-components";
import { SortDirectionType } from "react-virtualized";
import * as react_jsx_runtime from "react/jsx-runtime";
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
  icon?: React$1.ReactNode;
  indicator?: React$1.ReactNode;
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
  ButtonProps & React$1.ButtonHTMLAttributes<HTMLButtonElement>
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
    | "enterprise"
    | "aistor";
  subVariant?:
    | "simple"
    | "AGPL"
    | "standard"
    | "enterprise"
    | "new"
    | "enterpriseos"
    | "enterpriseosvertical"
    | "horizontal";
  inverse?: boolean;
  onClick?: React$1.MouseEventHandler<any> | undefined;
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
  label: React$1.ReactNode;
  middleComponent?: React$1.ReactNode;
  actions?: React$1.ReactNode;
}
interface PageHeaderConstruct {
  sx?: CSSObject;
}
type PageHeaderProps = PageHeaderMainProps & PageHeaderConstruct;

declare const PageHeader: FC<PageHeaderProps>;

interface TooltipProps {
  children: React$1.ReactElement;
  tooltip: React$1.ReactNode;
  errorProps?: any;
  placement?: "bottom" | "left" | "right" | "top";
}
interface TooltipBuild {
  placement: "bottom" | "left" | "right" | "top";
}
interface TooltipConstructProps {
  placement: "bottom" | "left" | "right" | "top";
  content: React$1.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}

declare const Tooltip: FC<TooltipProps>;

type CommonHelpTipPlacement = "bottom" | "left" | "right" | "top";
interface HelpTipProps {
  children: any;
  content: React$1.ReactNode;
  errorProps?: any;
  placement?: CommonHelpTipPlacement;
}
interface HelpTipBuild {
  placement: CommonHelpTipPlacement;
}
interface HelpTipConstructProps {
  placement: CommonHelpTipPlacement;
  content: React$1.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  sx?: CSSObject;
  helpTip?: React$1.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}

declare const Checkbox: FC<
  CheckboxProps & React$1.InputHTMLAttributes<HTMLInputElement>
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
  children: React$1.ReactNode;
}
type IconButtonProps = IconBase &
  React$1.ButtonHTMLAttributes<HTMLButtonElement>;

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
  type: PredefinedActionTypes | React$1.ReactNode;
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
  onSelect?: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
  idField?: string;
  isLoading?: boolean;
  loadingMessage?: React$1.ReactNode;
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
  }) => "deleted" | "" | React$1.CSSProperties;
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
  type: PredefinedActionTypes | React$1.ReactNode;
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
  extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  label?: string;
}

declare const BackLink: FC<BackLinkProps>;

interface HelpBoxProps {
  iconComponent?: any;
  title: string | React$1.ReactNode;
  help: any;
}

declare const HelpBox: FC<HelpBoxProps>;

interface SectionTitleProps {
  separator?: boolean;
  actions?: React$1.ReactNode;
  icon?: React$1.ReactNode;
  children: React$1.ReactNode;
  sx?: CSSObject;
}

declare const SectionTitle: FC<SectionTitleProps>;

interface BoxProps {
  sx?: CSSObject;
  children?: React$1.ReactNode;
  withBorders?: boolean;
  customBorderPadding?: number | string;
  useBackground?: boolean;
}

declare const Box: FC<HTMLAttributes<HTMLDivElement> & BoxProps>;

interface FormLayoutProps {
  sx?: CSSObject;
  children?: React$1.ReactNode;
  title?: string;
  icon?: React$1.ReactNode;
  helpBox?: React$1.ReactNode;
  withBorders?: boolean;
  containerPadding?: boolean;
}

declare const FormLayout: FC<FormLayoutProps>;

interface PageLayoutProps {
  variant?: "constrained" | "full";
  children: React$1.ReactNode;
  className?: string;
  sx?: CSSObject;
}

declare const PageLayout: FC<HTMLAttributes<HTMLDivElement> & PageLayoutProps>;

interface MainContainerProps {
  menu?: React$1.ReactElement;
  children: React$1.ReactElement;
  horizontal?: boolean;
  mobileModeAuto?: boolean;
  sx?: CSSObject;
}

declare const MainContainer: FC<MainContainerProps>;

interface InputBoxProps {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: CSSObject;
  index?: number;
  overlayId?: "index";
  overlayIcon?: React$1.ReactNode;
  overlayAction?: () => void;
  overlayObject?: React$1.ReactNode;
  noLabelMinWidth?: boolean;
  startIcon?: React$1.ReactNode;
  required?: boolean;
  className?: string;
  error?: string;
  helpTip?: React$1.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
  originType?: string;
}
interface InputContainerProps {
  children?: React$1.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React$1.ReactNode;
  className?: string;
}
type InputBoxElement = InputBoxProps &
  React$1.InputHTMLAttributes<HTMLInputElement>;

declare const InputBox$1: FC<InputBoxElement>;

interface BreadcrumbsProps {
  sx?: CSSObject;
  children: React$1.ReactNode;
  additionalOptions?: React$1.ReactNode;
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
  icon: React$1.ReactNode;
  tooltip: string;
}
interface ActionsListProps {
  sx?: CSSObject;
  items: ActionItem[];
  title: React$1.ReactNode;
}
interface ActionsListPanelProps {
  sx?: CSSObject;
}
interface ActionButtonProps
  extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: React$1.ReactNode;
}

declare const ActionsList: FC<ActionsListProps>;

interface SimpleHeaderProps {
  label: React$1.ReactNode;
  icon?: React$1.ReactNode;
  sx?: CSSObject;
}
interface SimpleHeaderContainerProps {
  sx?: CSSObject;
}

declare const SimpleHeader: FC<SimpleHeaderProps>;

interface ScreenTitleProps {
  icon: React$1.ReactNode;
  subTitle?: React$1.ReactNode;
  title: string;
  actions: React$1.ReactNode;
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
  title: React$1.ReactNode;
  children: React$1.ReactNode;
  widthLimit?: boolean;
  titleIcon?: React$1.ReactNode;
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
  helpTip?: React$1.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface IndicatorProps {
  active: boolean;
  children: React$1.ReactNode;
}
interface SwitchContainerProps {
  sx?: CSSObject;
}
type SwitchProps = MainSwitchProps &
  React$1.InputHTMLAttributes<HTMLInputElement>;

declare const Switch: FC<
  SwitchProps & React$1.InputHTMLAttributes<HTMLInputElement>
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
  icon?: React$1.ReactNode;
  label: string;
  indicator?: React$1.ReactNode;
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
    event: React$1.ChangeEvent<HTMLInputElement>,
    extraValue?: any,
  ) => void;
  sx?: CSSObject;
  helpTip?: React$1.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface OptionsContainerProps {
  inColumn: boolean;
}

declare const RadioGroup: FC<RadioGroupProps>;

interface ReadBoxProps {
  label?: string;
  children: React$1.ReactNode;
  multiLine?: boolean;
  actionButton?: React$1.ReactNode;
  sx?: CSSObject;
  helpTip?: React$1.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface ReadBoxBaseProps {
  label?: string;
  sx?: CSSObject;
  multiLine?: boolean;
}

declare const ReadBox: FC<ReadBoxProps>;

interface CommentBoxProps
  extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  helpTip?: React$1.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface CommentContainerProps {
  children?: React$1.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React$1.ReactNode;
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
  middleComponent?: React$1.ReactNode;
  endComponent?: React$1.ReactNode;
  mobileModeAuto?: boolean;
}
interface MenuItemProps {
  group?: string;
  path?: string;
  name: string;
  id?: string;
  icon: React$1.ReactNode;
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
  children: React$1.ReactNode;
  open: boolean;
}

declare const Menu: FC<MenuProps>;

declare const MenuDivider: FC;

declare const MenuItem: FC<MenuItemProps>;

declare const MenuSectionHeader: FC<SectionHeaderProps>;

interface ExpandOptionsButtonProps {
  label: string;
  open: boolean;
  sx?: CSSObject;
}
interface ConstructExpandOptionsProps {
  sx?: CSSObject;
}

declare const ExpandOptionsButton: FC<
  ExpandOptionsButtonProps & React$1.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface TabProps {
  label: string;
  icon?: React$1.ReactNode;
  disabled?: boolean;
  to?: string;
  id: string;
}
interface TabItemProps {
  tabConfig: TabProps;
  content?: React$1.ReactNode;
}
interface TabsProps {
  horizontal?: boolean;
  options: TabItemProps[];
  currentTabOrPath: string;
  useRouteTabs?: boolean;
  routes?: React$1.ReactElement | null;
  onTabClick: (selectedItem: string) => void;
  optionsInitialComponent?: React$1.ReactNode;
  optionsEndComponent?: React$1.ReactNode;
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
  icon?: React$1.ReactNode;
  selected?: boolean;
}
interface TabButtonConstructProps {
  horizontal: boolean;
}
interface TabPanelProps {
  id: string;
  selectedTab?: string;
  useRouteTabs: boolean;
  children: React$1.ReactNode;
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
  helpTools?: React$1.ReactNode;
  sx?: CSSObject;
  helpTip?: React$1.ReactNode;
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

declare const Tag: FC<TagProps & React$1.HTMLAttributes<HTMLSpanElement>>;

interface CommonActionLinkProps {
  isLoading?: boolean;
  label?: any;
}
interface BaseActionLinkProps {
  sx?: CSSObject;
}
type ActionLinkProps = CommonActionLinkProps & BaseActionLinkProps;

declare const ActionLink: FC<
  ActionLinkProps & React$1.ButtonHTMLAttributes<HTMLButtonElement>
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
    event: React$1.ChangeEvent<HTMLInputElement>,
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
  helpTip?: React$1.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
interface FileSelectorConstructorProps {
  children?: React$1.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React$1.ReactNode;
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
  componentRender?: React$1.ReactNode;
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
}: WizardProps) => react_jsx_runtime.JSX.Element | null;

interface InformativeMessageMain {
  title: React$1.ReactNode;
  message: React$1.ReactNode;
}
interface InformativeConstructProps {
  variant?: "default" | "success" | "warning" | "error";
  sx?: CSSObject;
}
type InformativeMessageProps = InformativeMessageMain &
  InformativeConstructProps;

declare const InformativeMessage: FC<InformativeMessageProps>;

interface DateTimeInputMain {
  pickerStartComponent?: React$1.ReactNode;
  className?: string;
  label?: string;
  required?: boolean;
  tooltip?: string;
  disabled?: boolean;
  openPickerIcon?: "arrow" | React$1.ReactNode;
  displayFormat?: string;
  helpTip?: React$1.ReactNode;
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
  LinkProps & React$1.AnchorHTMLAttributes<HTMLAnchorElement>
>;

declare const EditorThemeSwitchIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DisabledIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FormatDrivesIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SpeedtestIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const StorageIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const RefreshIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const VersionIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LambdaBalloonIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const HelpIconFilled: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ShareIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const EditIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const JSONIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const WarnIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CircleIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ObjectBrowserFolderIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const RedoIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ChangeAccessPolicyIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ServersIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ClosePanelIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MinIOTierIconXs: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DashboardIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ClustersIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MirroringIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ToolsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ArrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ServiceAccountIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const OnlineRegistrationBackIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ConfigurationsListIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const WatchIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ServiceAccountCredentialsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const HealIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const S3TierIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ArrowRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PreviewIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BucketQuotaIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SelectMultipleIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DeleteIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const EditYamlIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ReportedUsageIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PrometheusIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ConfirmModalIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const NextArrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PermissionIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const GoogleTierIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AccountIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AddAccessRuleIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const UptimeIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const EnabledIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ObjectPreviewIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TenantsOutlineIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DrivesIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CreateNewPathIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const HelpIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ReportedUsageFullIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AddNewTagIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const OnlineRegistrationIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DiagnosticsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ObjectBrowser1Icon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MinIOTierIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const WarpIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CopyIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const OpenListIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MultipleBucketsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AddMembersToGroupIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const OfflineRegistrationBackIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PrometheusErrorIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LifecycleConfigIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DriveFormatErrorsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const VerifiedIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CallHomeFeatureIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TraceIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AddIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const GoogleTierIconXs: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LambdaNotificationsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BackSettingsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LicenseIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const RemoveIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TiersNotAvailableIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PerformanceFeatureIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AddFolderIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const S3TierIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const IAMPoliciesIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const UsersIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const EgressIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BucketEncryptionIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DocumentationIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DiagnosticsFeatureIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PasswordKeyIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TrashIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const EventSubscriptionIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DownloadIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ComputerLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AllBucketsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LambdaIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const GroupsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DownloadStatIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const UploadFile$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TiersIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const NewAccountIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CreateGroupIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CollapseIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ConfirmDeleteIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const OfflineRegistrationIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TenantsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const UploadFile: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CreateIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const NewPoolIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SyncIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LogoutIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AzureTierIconXs: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TotalObjectsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const HistoryIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CreateUserIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BucketsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const UploadStatIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BucketReplicationIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ObjectManagerIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ObjectBrowserIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const RecoverIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SettingsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const UploadIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AzureTierIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CalendarIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ServiceAccountsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LogsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const HardBucketQuotaIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ConsoleIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ChangePasswordIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LockIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BackCaretIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const VersionsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const NewPathIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ObjectInfoIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MetadataIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LegalHoldIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const RetentionIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TagsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AlertCloseIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const OpenSourceIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ArrowRightLink: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LicenseDocIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SelectAllIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BackIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DeleteNonCurrentIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const EditTenantIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SuccessIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const NetworkGetIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const NetworkPutIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ObjectManagerIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CancelledIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const EditTagIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AlertIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const InfoIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ConsoleAgpl: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ConsoleStandard: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ConsoleEnterprise: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AGPLV3LightLogo: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AGPLV3Logo: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const EnterpriseLightLogo: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const StandardLightLogo: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AGPLV3DarkLogo: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LDAPIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const OIDCIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const StarIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AccountIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CollapseCaret: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ExpandCaret: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CertificateIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TierOnlineIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TierOfflineIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const WarnFilledIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BoxArrowUp: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BoxArrowDown: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const UserFilledIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LockFilledIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FilterIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FolderIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ViewColumnIcon$2: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ArrowDropUp$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ArrowDropUp: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CloudIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DisableIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FormatDriveIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ReportIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ViewColumnIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ViewColumnIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AccessRuleIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TimeIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CollapseMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AudioIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AudioIconMute: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ChatIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SendMessageIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CancelledAudioIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ThumbsUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ThumbsDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AttachFileIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CheckCircleIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CompressIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FindReplaceIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FirstAidIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LockIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LoginIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PendingItemsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FirstAidIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LoginIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const WebhookIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ExpandIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const NextCaretIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const NextCaretIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DarkModeIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LightModeIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AutoModeIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ShuffleIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LanguageIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ShuffleIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ExpandLeftCaret: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TrashOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const InspectMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AuditLogsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const HealthMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MenuCollapsedIcon$1: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const TraceMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const GroupsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MenuCollapsedIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MetricsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const IdentityMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const LogsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const MonitoringMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SupportMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PerformanceMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DiagnosticsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AccessMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const RegisterMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const DrivesMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const AccountsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const ProfileMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const CallHomeMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const BucketsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const UsersMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const KeysMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const StatusMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const SecretsMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const PoliciesMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const IdentitiesMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileConfigIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FilePdfIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileFontIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileLinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileImageIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileWorldIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileBookIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileMissingIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FilePptIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileDbIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileTxtIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileVideoIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileLockIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileXlsIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileZipIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FolderBrowserIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileCloudIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileMusicIcon: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

declare const FileNonType: (
  props: SVGProps<SVGSVGElement>,
) => react_jsx_runtime.JSX.Element;

interface TableComponentsExtraProps {
  sx?: CSSProperties;
}

declare const Table: FC<
  TableComponentsExtraProps & React$1.TableHTMLAttributes<HTMLTableElement>
>;

declare const TableBody: FC<
  TableComponentsExtraProps & React$1.HTMLAttributes<HTMLTableSectionElement>
>;

declare const TableCell: FC<
  TableComponentsExtraProps & React$1.TdHTMLAttributes<HTMLTableDataCellElement>
>;

declare const TableHead: FC<
  TableComponentsExtraProps & React$1.HTMLAttributes<HTMLTableSectionElement>
>;

declare const TableHeadCell: FC<
  TableComponentsExtraProps &
    React$1.ThHTMLAttributes<HTMLTableHeaderCellElement>
>;

declare const TableRow: FC<
  TableComponentsExtraProps & React$1.HTMLAttributes<HTMLTableRowElement>
>;

export {
  AGPLV3DarkLogo,
  AGPLV3LightLogo,
  AGPLV3Logo,
  AccessMenuIcon,
  AccessRuleIcon,
  Accordion,
  AccountIcon$1 as AccountIcon,
  AccountsMenuIcon,
  ActionLink,
  ActionsList,
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
  AttachFileIcon,
  AudioIcon,
  AudioIconMute,
  AuditLogsMenuIcon,
  AutoModeIcon,
  Autocomplete,
  AzureTierIcon,
  AzureTierIconXs,
  BackCaretIcon,
  BackIcon,
  BackLink,
  BackSettingsIcon,
  Badge,
  Box,
  BoxArrowDown,
  BoxArrowUp,
  Breadcrumbs,
  BucketEncryptionIcon,
  BucketQuotaIcon,
  BucketReplicationIcon,
  BucketsIcon,
  BucketsMenuIcon,
  Button,
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
  CodeIcon,
  CollapseCaret,
  CollapseIcon,
  CollapseMenuIcon,
  InputBox as CommentBox,
  CompressIcon,
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
  DarkModeIcon,
  DashboardIcon,
  DataTable,
  DateTimeInput,
  DateTimeSelector,
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
  DropdownSelector,
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
  FileSelector,
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
  HelpTip,
  HistoryIcon,
  IAMPoliciesIcon,
  IconButton,
  IdentitiesMenuIcon,
  IdentityMenuIcon,
  InfoIcon,
  InformativeMessage,
  InputBox$1 as InputBox,
  InputLabel,
  InspectMenuIcon,
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
  Menu,
  MenuCollapsedIcon,
  MenuDivider,
  MenuCollapsedIcon$1 as MenuExpandedIcon,
  MenuItem,
  MenuSectionHeader,
  MetadataIcon,
  MetricsMenuIcon,
  MinIOTierIcon,
  MinIOTierIconXs,
  MirroringIcon,
  ModalBox,
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
  PageHeader,
  PageLayout,
  PasswordKeyIcon,
  PendingItemsIcon,
  PerformanceFeatureIcon,
  PerformanceMenuIcon,
  PermissionIcon,
  PoliciesMenuIcon,
  NextCaretIcon as PrevCaretIcon,
  PreviewIcon,
  ProfileMenuIcon,
  ProgressBar,
  PrometheusErrorIcon,
  PrometheusIcon,
  FirstAidIcon as PublicIcon,
  RadioGroup,
  ReadBox,
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
  SearchIcon,
  SecretsMenuIcon,
  SectionTitle,
  Select,
  SelectAllIcon,
  SelectMultipleIcon,
  SendMessageIcon,
  ServersIcon,
  ServiceAccountCredentialsIcon,
  ServiceAccountIcon,
  ServiceAccountsIcon,
  SettingsIcon,
  ShareIcon,
  ShuffleIcon$1 as ShuffleIcon,
  SimpleHeader,
  SizeChart,
  Snackbar,
  SpeedtestIcon,
  StandardLightLogo,
  StarIcon,
  StatusMenuIcon,
  StorageIcon,
  SuccessIcon,
  SupportMenuIcon,
  Switch,
  SyncIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tabs,
  Tag,
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
  ToolsIcon,
  Tooltip,
  TotalObjectsIcon,
  TraceIcon,
  TraceMenuIcon,
  TrashIcon,
  TrashOffIcon,
  UploadFile,
  UploadFile$1 as UploadFolderIcon,
  UploadIcon,
  UploadStatIcon,
  UptimeIcon,
  UserFilledIcon,
  UsersIcon,
  UsersMenuIcon,
  ValuePair,
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
  actionsTypes,
  breakPoints,
  calculateBytes,
};
export type {
  AccordionContentProps,
  AccordionMainProps,
  AccordionProps,
  ActionButtonProps,
  ActionItem,
  ActionLinkProps,
  ActionsListPanelProps,
  ActionsListProps,
  ApplicationLogoProps,
  AutocompleteProps,
  BackLinkProps,
  BadgeConstruct,
  BadgeMain,
  BadgeProps,
  BaseActionLinkProps,
  BoxProps,
  BreadcrumbsContainerProps,
  BreadcrumbsProps,
  ButtonProps,
  CodeEditorBaseProps,
  CodeEditorProps,
  ColumnSelectorConstructProps,
  ColumnSelectorProps,
  CommentBoxProps,
  CommentContainerProps,
  CommonActionLinkProps,
  CommonHelpTipPlacement,
  CommonProgressBar,
  ConstructExpandOptionsProps,
  ConstructProps,
  DataTableProps,
  DataTableWrapperProps,
  DateSelectorProps,
  DateTimeConstruct,
  DateTimeInputMain,
  DateTimeInputProps,
  DateTimeSelectorMain,
  DateTimeSelectorProps,
  DropDownBlockProps,
  DropdownItemProps,
  DropdownSelectorProps,
  ExpandOptionsButtonProps,
  ExtraCommentProps,
  FileSelectorConstructorProps,
  FileSelectorProps,
  FormLayoutProps,
  GridProps,
  HelpBoxProps,
  HelpTipBuild,
  HelpTipConstructProps,
  HelpTipProps,
  IActionButton,
  IColumns,
  IInfiniteScrollConfig,
  ISortConfig,
  ITableSortInfo,
  IconBase,
  IconButtonProps,
  IndicatorProps,
  InformativeConstructProps,
  InformativeMessageMain,
  InformativeMessageProps,
  InputBoxElement,
  InputBoxProps,
  InputContainerProps,
  InputLabelProps,
  ItemActions,
  LinkProps,
  MainHeaderProps,
  MainProgressProps,
  MainSwitchProps,
  MenuConstructProps,
  MenuItemProps,
  MenuProps,
  ModalBoxContainerProps,
  ModalBoxProps,
  OptionsContainerProps,
  PageHeaderConstruct,
  PageHeaderMainProps,
  PageHeaderProps,
  PageLayoutProps,
  PredefinedActionTypes,
  ProgressBarProps,
  RadioGroupProps,
  ReadBoxBaseProps,
  ReadBoxProps,
  ScreenTitleContainerProps,
  ScreenTitleProps,
  SectionHeaderProps,
  SectionTitleProps,
  SelectProps,
  SelectorType,
  SimpleHeaderContainerProps,
  SimpleHeaderProps,
  SizeChartConstructProps,
  SizeChartMain,
  SizeChartProps,
  SnackbarButtonProps,
  SnackbarConstructProps,
  SnackbarMainProps,
  SnackbarProps,
  StylesOverrideProps,
  SubItemsBoxProps,
  SwitchContainerProps,
  SwitchProps,
  TabButtonConstructProps,
  TabButtonProps,
  TabItemProps,
  TabPanelProps,
  TabProps,
  TabsContainerProps,
  TabsProps,
  TagConstructProps,
  TagMainProps,
  TagProps,
  TimeSelectorProps,
  TooltipBuild,
  TooltipConstructProps,
  TooltipProps,
  ValuePairCommon,
  ValuePairMain,
  ValuePairProps,
  WizardButton,
  WizardConstruct,
  WizardElement,
  WizardMain,
  WizardPage,
  WizardPageProps,
  WizardProps,
};
