import { dataFilter } from './data.js';
import { sortData } from './data.js';
import { stats } from './data.js';

import data from './data/ghibli/ghibli.js';

console.log(dataFilter, sortData, stats, data);

data.films.forEach(element => 
    console.log(element));
