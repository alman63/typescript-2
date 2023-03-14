import { ref, onValue } from 'firebase/database';
import { database } from './config';

export function readData() {
    const entriesRef = ref(database, 'entries');
    onValue(entriesRef, (snapshot) => {
        snapshot.forEach((element) => {
            const html = document.querySelector('#app') as HTMLElement;
            html.innerHTML += `<div>${element.val().title}</div>`;
        });
    });
}
