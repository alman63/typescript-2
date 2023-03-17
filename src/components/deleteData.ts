import { ref, set } from 'firebase/database';
import { database } from './config';

export function findDeleteData() {
    const deleteButton = document.querySelector('button.delete') as HTMLElement;
    deleteButton.addEventListener('click', () => {
        const inp = document.getElementsByName('choice') as any;
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].type == 'radio' && inp[i].checked) {
                deleteData(inp[i].value);
            }
        }
    });
}

function deleteData(entriesId: number) {
    const entriesRef = ref(database, 'entries/' + entriesId);
    set(entriesRef, null);
}
