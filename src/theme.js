/**
 * Lưu ý quan trọng:
 * Trong source code này, khi import/remove một primevue component thì phải
 * import/remove theme css tương ứng với component đó:
 * sửa file public/scss/theme/theme-tailwind-light/_custom_components.scss
 * npm run build-css để build lại file custom_theme.min.css
 */

/* Config */
import PrimeVue from "primevue/config";

/* Service */
// import ConfirmationService from "primevue/confirmationservice";
// import DialogService from "primevue/dialogservice";
// import ToastService from "primevue/toastservice";

/* Form */
// import AutoComplete from "primevue/autocomplete";
// import Calendar from "primevue/calendar";
// import CascadeSelect from "primevue/cascadeselect";
// import Checkbox from "primevue/checkbox";
// import Chips from "primevue/chips";
// import ColorPicker from "primevue/colorpicker";
// import Dropdown from "primevue/dropdown";
// import Editor from "primevue/editor"; // required dependency "quill"
// import FloatLabel from "primevue/floatlabel";
// import IconField from "primevue/iconfield";
// import InputIcon from "primevue/inputicon";
// import InputGroup from "primevue/inputgroup";
// import InputGroupAddon from "primevue/inputgroupaddon";
// import InputMask from "primevue/inputmask";
// import InputNumber from "primevue/inputnumber";
// import InputOtp from "primevue/inputotp";
// import InputSwitch from "primevue/inputswitch";
// import InputText from "primevue/inputtext";
// import Knob from "primevue/knob";
// import Listbox from "primevue/listbox";
// import MultiSelect from "primevue/multiselect";
// import Password from "primevue/password";
// import RadioButton from "primevue/radiobutton";
// import Rating from "primevue/rating";
// import SelectButton from "primevue/selectbutton";
// import Slider from "primevue/slider";
// import Textarea from "primevue/textarea";
// import ToggleButton from "primevue/togglebutton";
// import TreeSelect from "primevue/treeselect";
// import TriStateCheckbox from "primevue/tristatecheckbox";

/* Button */
import Button from "primevue/button";
// import SpeedDial from "primevue/speeddial";
// import SplitButton from "primevue/splitbutton";

/* Data */
// import DataTable from "primevue/datatable";
// import Column from "primevue/column";
// import ColumnGroup from "primevue/columngroup";  // optional
// import Row from "primevue/row";                  // optional
// import DataView from "primevue/dataview";
// import DataViewLayoutOptions from "primevue/dataviewlayoutoptions"; // optional
// import OrderList from "primevue/orderlist";
// import OrganizationChart from "primevue/organizationchart";
// import Paginator from "primevue/paginator";
// import PickList from "primevue/picklist";
// import Tree from "primevue/tree";
// import TreeTable from "primevue/treetable";
// import Timeline from "primevue/timeline";
// import VirtualScroller from "primevue/virtualscroller";

/* Panel */
// import Accordion from "primevue/accordion";
// import AccordionTab from "primevue/accordiontab";
// import Card from "primevue/card";
// import DeferredContent from "primevue/deferredcontent";
// import Divider from "primevue/divider";
// import Fieldset from "primevue/fieldset";
// import Panel from "primevue/panel";
// import ScrollPanel from "primevue/scrollpanel";
// import Splitter from "primevue/splitter";
// import SplitterPanel from "primevue/splitterpanel";
// import Stepper from "primevue/stepper";
// import StepperPanel from "primevue/stepperpanel";
// import TabView from "primevue/tabview";
// import TabPanel from "primevue/tabpanel";
// import Toolbar from "primevue/toolbar";

/* Overlay */
// import ConfirmDialog from "primevue/confirmdialog"; // required "primevue/confirmationservice"
// import ConfirmPopup from "primevue/confirmpopup"; // required "primevue/confirmationservice"
// import Dialog from "primevue/dialog";
// import DynamicDialog from "primevue/dynamicdialog"; // required "primevue/dialogservice"
// import OverlayPanel from "primevue/overlaypanel";
// import Sidebar from "primevue/sidebar";
// import Tooltip from "primevue/tooltip";

/* File */
// import FileUpload from "primevue/fileupload";

/* Menu */
// import Breadcrumb from "primevue/breadcrumb";
// import ContextMenu from "primevue/contextmenu";
// import Dock from "primevue/dock";
// import Menu from "primevue/menu";
// import Menubar from "primevue/menubar";
// import MegaMenu from "primevue/megamenu";
// import PanelMenu from "primevue/panelmenu";
// import Steps from "primevue/steps";
// import TabMenu from "primevue/tabmenu";
// import TieredMenu from "primevue/tieredmenu";

/* Chart */
// import Chart from "primevue/chart"; // required dependency "chart.js"

/* Messages */
// import Message from "primevue/message";
// import InlineMessage from "primevue/inlinemessage";
// import Toast from "primevue/toast"; // required "primevue/toastservice" or useToast function from "primevue/usetoast"

/* Media */
// import Carousel from "primevue/carousel";
// import Galleria from "primevue/galleria";
// import Image from "primevue/image";

/* Misc */
// import Avatar from "primevue/avatar";
// import AvatarGroup from "primevue/avatargroup";  // Optional for grouping
// import Badge from "primevue/badge";
// import BadgeDirective from "primevue/badgedirective";
// import BlockUI from "primevue/blockui";
// import Chip from "primevue/chip";
// import FocusTrap from "primevue/focustrap";
// import Inplace from "primevue/inplace";
// import MeterGroup from "primevue/metergroup";
// import ScrollTop from "primevue/scrolltop";
// import Skeleton from "primevue/skeleton";
// import ProgressBar from "primevue/progressbar";
// import ProgressSpinner from "primevue/progressspinner";
// import AnimateOnScroll from "primevue/animateonscroll";
// import Ripple from "primevue/ripple";
// import StyleClass from "primevue/styleclass";
// import Tag from "primevue/tag";
// import Terminal from "primevue/terminal";
// import ConfirmationService from "primevue/confirmationservice";

export const usePrimeVue = (app) => {
  app.use(PrimeVue);

  /* Service */
  // app.use(ConfirmationService);
  // app.use(DialogService);
  // app.use(ToastService);

  /* Directives */
  // app.directive("tooltip", Tooltip);
  // app.directive("badge", BadgeDirective);
  // app.directive("focustrap", FocusTrap);
  // app.directive("animateonscroll", AnimateOnScroll);
  // app.directive("ripple", Ripple);
  // app.directive("styleclass", StyleClass);

  /* Form */
  // app.component("AutoComplete", AutoComplete);
  // app.component("Chips", Chips);
  // app.component("Dropdown", Dropdown);
  // app.component("IconField", IconField);
  // app.component("InputIcon", InputIcon);
  // app.component("InputGroup", InputGroup);
  // app.component("InputGroupAddon", InputGroupAddon);
  // app.component("InputNumber", InputNumber);
  // app.component("InputSwitch", InputSwitch);
  // app.component("InputText", InputText);
  // app.component("RadioButton", RadioButton);
  // app.component("PrimeTextarea", Textarea);
  // app.use(ConfirmationService);

  /* Button */
  app.component("PrimeButton", Button);

  /* Data */
  // app.component("DataTable", DataTable);
  // app.component("Column", Column);
  // app.component("Paginator", Paginator);
  // app.component("Tree", Tree);

  /* Panel */
  // app.component("Accordion", Accordion);
  // app.component("AccordionTab", AccordionTab);
  // app.component("Card", Card);
  // app.component("Divider", Divider);

  /* Overlay */
  // app.component("Dialog", Dialog);
  // app.component("OverlayPanel", OverlayPanel);
  // app.component("Sidebar", Sidebar);

  /* File */
  // app.component("FileUpload", FileUpload);

  /* Menu */
  // app.component("Breadcrumb", Breadcrumb);
  // app.component("TabMenu", TabMenu);

  /* Chart */
  // app.component("Chart", Chart);

  /* Messages */
  // app.component("Message", Message);
  // app.component("Toast", Toast);

  /* Media */
  // app.component("Carousel", Carousel);
  // app.component("Image", Image);

  /* Misc */
  // app.component("Avatar", Avatar);
  // app.component("AvatarGroup", AvatarGroup);
  // app.component("Tag", Tag);
};
