import { ref, onValue } from 'firebase/database';
import { database } from './config';

type objFilter = {
    id: number | string;
    date: string;
    state: string;
};

export function readData(a?: objFilter) {
    const entriesRef = ref(database, 'entries');
    onValue(entriesRef, (snapshot) => {
        const table = document.querySelector(
            'div.Data__wraptable'
        ) as HTMLElement;
        const tableStr: string =
            "<table id='data'><tr><th>Номер</th><th>Дата</th><th>Статус</th><th>Описание</th><th>Теги</th><th>Редактировать, Удалить</th></tr><tr>";
        let strTd: string = '';
        snapshot.forEach((element) => {
            if (a) {
                let allBoolean: boolean = true;
                if (a.id !== '') {
                    allBoolean =
                        allBoolean && element.val().entriesId == `${a.id}`;
                }
                if (a.state !== '') {
                    allBoolean =
                        allBoolean && element.val().state == `${a.state}`;
                }
                if (a.date !== '') {
                    allBoolean =
                        allBoolean &&
                        element.val().data ==
                            `${
                                a.date.split('-')[2] +
                                '.' +
                                a.date.split('-')[1] +
                                '.' +
                                a.date.split('-')[0]
                            }`;
                }

                if (allBoolean) {
                    strTd += `<td>${element.val().entriesId}</td><td>${
                        element.val().data
                    }</td><td>${element.val().state}</td><td>${
                        element.val().title
                    }</td><td>${
                        element.val().tag
                    }</td><td><input type="radio" name="choice" value="${
                        element.val().entriesId
                    }" /></td></tr>`;
                }
            } else {
                strTd += `<td>${element.val().entriesId}</td><td>${
                    element.val().data
                }</td><td>${element.val().state}</td><td>${
                    element.val().title
                }</td><td>${
                    element.val().tag
                }</td><td><input type="radio" name="choice" value="${
                    element.val().entriesId
                }" /></td></tr>`;
            }
        });
        table.innerHTML = tableStr + strTd;
    });
}
