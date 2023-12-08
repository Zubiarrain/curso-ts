import _, { groupBy } from 'lodash';

const data = [
  {
    username: 'nico',
    role:'admin'
  },
  {
    username: 'maria',
    role:'seller'
  },
  {
    username: 'santi',
    role:'seller'
  },

]

const rta = _.groupBy(data, (item) => item.role);

console.log(rta)
