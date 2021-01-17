import * as React from "react";

const HelloWorld: React.FC = () => (
    <>
        <h1>Hello World</h1>
        <h2>Environment</h2>
        <ul>
            <li>
                <i>PRODUCTION:</i>
                <em>{process.env.PRODUCTION.toString()}</em>
            </li>
            <li>
                <i>NAME:</i>
                <em>{process.env.NAME}</em>
            </li>
            <li>
                <i>VERSION:</i>
                <em>{process.env.VERSION}</em>
            </li>
        </ul>
    </>
);

export default HelloWorld;
