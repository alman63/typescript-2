import { ref, set } from 'firebase/database';
import { database } from './config';

export function deleteData(entriesId: number) {
    const entriesRef = ref(database, 'entries/' + entriesId);
    set(entriesRef, null);
}
