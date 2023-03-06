// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
// import { React } from './react.js';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME<T> = Partial<React.ComponentType<T>> | undefined;
// Omit<
//     React.Component<T>,
//     Exclude<React.Component<T>, 'defaultProps'>
// >;

// Hint: infer

export const getDefaultProps = <T>(
    component: React.ComponentType<T>
): FIXME<T> => {
    return component.defaultProps;
};
