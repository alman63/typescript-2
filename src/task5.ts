// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип
// import { React } from './react.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME<T> = T extends (...args: any[]) => infer R ? R : any;

// Hint: infer
namespace React {
    export type ComponentType<T> = {
        defaultProps;
    };
}
export const getDefaultProps = <T>(
    component: React.ComponentType<T>
): FIXME<T> => {
    return component.defaultProps;
};
