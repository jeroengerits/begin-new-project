import React, { FunctionComponent, ReactNode } from 'react'
import styles from './Button.module.css'

export interface ButtonProperties {
  icon?: ReactNode
  children: ReactNode
}

type Properties = ButtonProperties

const Button: FunctionComponent<Properties> = ({
  icon,
  children,
}: Properties) => (
  <button className={icon ? styles.buttonWithIcon : styles.button}>
    {icon}
    {children}
  </button>
)

export default Button
