import React, { FC, ReactNode } from 'react'
import styles from './ButtonGroup.module.css'

// @todo only allow button as children

type ButtonGroupProperties = {
  children: ReactNode
}

const ButtonGroup: FC<ButtonGroupProperties> = ({
  children,
}: ButtonGroupProperties) => (
  <div className={styles.buttonGroup}>{children}</div>
)

export default ButtonGroup
