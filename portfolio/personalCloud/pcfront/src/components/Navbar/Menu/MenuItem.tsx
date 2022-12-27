import React from "react";
import classes from "./MenuItem.module.css";

type MenuItemProp = { title: string } & React.PropsWithChildren;

const MenuItem = (props: MenuItemProp) => {
  return <li className={classes.menu_item}>{props.title}</li>;
};

export default MenuItem;
