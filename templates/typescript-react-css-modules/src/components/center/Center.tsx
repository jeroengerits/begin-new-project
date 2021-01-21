import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Center.module.css";

export interface CenterProperties {
  children: ReactNode;
}

type Properties = CenterProperties;

const Center: FunctionComponent<Properties> = ({ children }: Properties) => (
  <div className={styles.center}>{children}</div>
);

export default Center;
