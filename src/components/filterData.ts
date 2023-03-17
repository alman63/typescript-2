import { ref, onValue } from 'firebase/database';
import { database } from './config';
import { readData } from './readData';

export function filterData() {
    const filterButton = document.querySelector(
        'button.filter__button'
    ) as HTMLElement;
    const filterDelete = document.querySelector(
        'button.filter__delete'
    ) as HTMLElement;
    filterDelete.addEventListener('click', () => {
        (document.getElementById('filter_date') as HTMLInputElement).value = '';

        (document.getElementById('filter_id') as HTMLInputElement).value = '';
        (document.getElementById('filter_state') as HTMLInputElement).value =
            '';
        readData();
    });
    filterButton.addEventListener('click', () => {
        const filterDate = (document.getElementById(
            'filter_date'
        ) as HTMLInputElement).value;
        let filterId;
        if (
            Number(
                (document.getElementById('filter_id') as HTMLInputElement).value
            ) !== 0
        ) {
            filterId = Number(
                (document.getElementById('filter_id') as HTMLInputElement).value
            );
        } else {
            filterId = '';
        }
        const filterState = (document.getElementById(
            'filter_state'
        ) as HTMLInputElement).value;
        const objFilter = {
            id: filterId,
            date: filterDate,
            state: filterState,
        };
        readData(objFilter);
    });
}
