// создание записи в календаре
//данные в календаре:id записи, дата, статус: выполнено, еще в разработке, описание события, теги
import { ref, set } from 'firebase/database';
import { database } from './config';

export function createData(
    entriesId: number,
    data: Date,
    state: 'done' | 'inDev',
    title: string,
    tag: string
) {
    set(ref(database, 'entries/' + entriesId), {
        entriesId: entriesId,
        data: data,
        state: state,
        title: title,
        tag: tag,
    });
}
