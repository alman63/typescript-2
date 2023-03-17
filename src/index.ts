import { createData } from "./components/createData";
import { readData } from "./components/readData";
import { findDeleteData } from "./components/deleteData";
import { createCalendar } from "./components/getCalendar";
import { findUpduteData } from "./components/updateData";
import { filterData } from "./components/filterData";
import { createLayout } from "./components/createLayuot";

import "./styles.css";

createLayout(document.querySelector("#app") as HTMLElement);

createCalendar(
  document.querySelector("div.calendar__table") as HTMLElement,
  new Date().getFullYear(),
  new Date().getMonth()
);

findDeleteData();
findUpduteData();
// insertData(
//     1,
//     `${new Date('2022-02-24').toLocaleDateString()}`,
//     'done',
//     'Сходить за хлебом',
//     'важно'
// );
// insertData(
//     2,
//     `${new Date('2023-02-24').toLocaleDateString()}`,
//     'inDev',
//     'Купить колбасу',
//     'очень важно'
// );
// insertData(
//     11,
//     `${new Date('2024-02-24').toLocaleDateString()}`,
//     'inDev',
//     'Сделать домашнее задание',
//     'otus'
// );
readData();
createData();
filterData();
