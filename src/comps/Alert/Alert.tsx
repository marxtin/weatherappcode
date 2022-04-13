import React, {FC} from "react";

interface AlertProps {
    message: string
}

export function alertComponent(className: string): FC<AlertProps> {
    return ({message}) =>
        message
            ? <div className={`${className}`}>{message}</div>
            : null;
}

export const ErrorAlert = alertComponent('alert');
export const WarningAlert = alertComponent('alert');