import './hw_9.scss';
import './scripts/isEmpty';
import {calc} from './scripts/calc';
import { getMaxOfArray } from './scripts/getMaxOfArray';


// Task number 4

const myEmployeeList = {
    'John': '400',
    'Jack': 20000,
    'test': 'asdasdasd',
};

console.log('Task #4: total amount of salaries:', calc(myEmployeeList));

// Task number 5



const salaries = {
    'Jonathan Doe': 'j100',
    'Emiliano Francesco': 'd500',
    'Matteo Siberian': 10000,
    'John Snow': 290,
    'Cat': '120',
    'Rebecca Doe': 1500,
};

console.log('Task #5: the richest man is:', getMaxOfArray(salaries));
