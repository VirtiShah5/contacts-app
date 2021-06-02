import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {
  Autocomplete,
  Progress,
  Carousel,
  CarouselItem,
  Dialog,
  Notification,
  Steps,
  Step,
  Slider,
  Message,
  Popover,
  Collapse,
  CollapseItem,
  Row,
  Col,
  Card,
  Input,
  Menu,
  MenuItem,
  Form,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);
Vue.use(Dialog);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Slider);
Vue.use(Popover);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Progress);
Vue.use(Autocomplete);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Form);
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
