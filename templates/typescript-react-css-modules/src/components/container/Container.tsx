import React, { FunctionComponent, ReactNode } from 'react'
import styles from './Container.module.css'

export interface ContainerProperties {
  maxWidth?: string
  isCentered?: boolean
  children: ReactNode
}

type Properties = ContainerProperties

const Container: FunctionComponent<Properties> = ({
  maxWidth,
  isCentered,
  children,
}: Properties) => (
  <div
    style={{ maxWidth: maxWidth }}
    className={
      (styles.container,
      isCentered ? styles.centeredContainer : styles.container)
    }>
    {children}
  </div>
)

export default Container

// /* Button.css */
// .button {
//   background-color: black;
// }
//
// .disabledButton {
//   composes: button;
//   opacity: .5;
// }
//
//
// /* Button.jsx */
// import styles from './Button.css';
//
// static propTypes = {
//   isDisabled: React.PropTypes.bool
// };
//
// render() {
//   var className = this.props.isDisabled ? styles.disabledButton : styles.button;
//   return (<button className={className}/>);
// }
