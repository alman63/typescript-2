import { onValue, ref, set, get } from 'firebase/database';
import { database } from './config';
import { insertData } from './createData';

export function findUpduteData() {
    const updateButton = document.querySelector('button.update') as HTMLElement;
    updateButton.addEventListener('click', () => {
        const inp = document.getElementsByName('choice') as any;
        for (var i = 0; i < inp.length; i++) {
            if (inp[i].type == 'radio' && inp[i].checked) {
                const divInput = document.querySelector(
                    'div.Data__input'
                ) as HTMLElement;
                divInput.innerHTML =
                    "<label>Номер</label><input id='id' class='id'></input><br><label>Дата</label><input id='date' type='date'><br></input> <label>Статус</label><input id='state'><br></input><label>Описание</label><input id='title'><br></input><label>Теги</label><input id='tag'></input><br><button class='save'>Записать</button><button class='close'>Отменить</button>";
                const entriesId = inp[i].value;
                const entriesRef = ref(database, 'entries/' + entriesId);
                let arr: any[] = [];
                onValue(entriesRef, (snapshot) => {
                    snapshot.forEach((element) => {
                        arr.push(element.val());
                    });
                });
                (document.getElementById(
                    'id'
                ) as HTMLInputElement).value = `${arr[1]}`;
                (document.getElementById(
                    'date'
                ) as HTMLInputElement).value = `${
                    arr[0].split('.')[2] +
                    '-' +
                    arr[0].split('.')[1] +
                    '-' +
                    arr[0].split('.')[0]
                }`;
                (document.getElementById(
                    'state'
                ) as HTMLInputElement).value = `${arr[2]}`;
                (document.getElementById(
                    'title'
                ) as HTMLInputElement).value = `${arr[4]}`;
                (document.getElementById(
                    'tag'
                ) as HTMLInputElement).value = `${arr[3]}`;
            }
        }
        const divInput = document.querySelector(
            'div.Data__input'
        ) as HTMLElement;
        const buttonClose = document.querySelector(
            'button.close'
        ) as HTMLElement;
        buttonClose.addEventListener('click', () => {
            divInput.innerHTML = '';
        });
        const buttonSave = document.querySelector('button.save') as HTMLElement;
        buttonSave.addEventListener('click', () => {
            const lengthColl = document.getElementsByTagName('input').length;
            insertData(
                Number(
                    (document.getElementById('id') as HTMLInputElement).value
                ),
                `${new Date(
                    `${
                        (document.getElementById('date') as HTMLInputElement)
                            .value
                    }`
                ).toLocaleDateString()}`,
                `${
                    (document.getElementById('state') as HTMLInputElement).value
                }`,
                `${
                    (document.getElementById('title') as HTMLInputElement).value
                }`,
                `${(document.getElementById('tag') as HTMLInputElement).value}`
            );
            alert('запись обновлена');
            divInput.innerHTML = '';
        });
    });
}
