// component
import SvgColor from "../../components/iconmenu";
const icon = (name) => (
  <SvgColor
    key={name}
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "Book",
    path: "/books",
    icon: icon("ic_analytics"),
  },
  {
    title: "user",
    path: "/dashboard/user",
    icon: icon("ic_user"),
  },
  {
    title: "product",
    path: "/dashboard/products",
    icon: icon("ic_cart"),
  },
  {
    title: "blog",
    path: "/dashboard/blog",
    icon: icon("ic_blog"),
  },
  {
    title: "login",
    path: "/login",
    icon: icon("ic_lock"),
  },
  {
    title: "Not found",
    path: "/404",
    icon: icon("ic_disabled"),
  },
];

export default navConfig;
