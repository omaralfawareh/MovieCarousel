import React from "react";
import { Layout } from "antd";
import classes from "./Footer.module.css";
const AntdFooter = Layout.Footer;

export const Footer = () => {
  return (
    <AntdFooter className={classes.footer}>
      MBC Group 2023 © جميع الحقوق محفوظة لمجموعة
    </AntdFooter>
  );
};
export default Footer;
