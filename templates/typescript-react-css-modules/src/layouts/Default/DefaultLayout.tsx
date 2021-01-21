import React, { FunctionComponent, ReactNode } from 'react'
import styles from './DefaultLayout.module.css'

export interface DefaultLayoutProperties {
  children: ReactNode
}

type Properties = DefaultLayoutProperties

const DefaultLayout: FunctionComponent<Properties> = ({
  children,
}: Properties) => <div className={styles.defaultLayout}>{children}</div>

export default DefaultLayout
