import React from "react";
import ReactDOM from "react-dom";

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Global Styles
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Fonts
import "./fonts/Roboto/roboto.css";

// Variables
import "./styles/variables/colors.css";
import "./styles/variables/spacings.css";
import "./styles/variables/typography.css";
import "./styles/variables/transitions.css";

// Elements
import "./styles/elements/normalize.css";
import "./styles/elements/base.css";

// Utilities
import "./styles/utilities/cursor.css";
import "./styles/utilities/font.css";
import "./styles/utilities/text.css";

// Animations
import "./styles/animations/fade.css";

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Application
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
