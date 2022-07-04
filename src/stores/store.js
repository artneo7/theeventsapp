import { writable } from 'svelte/store';
const store = writable(null);

export const editMode = writable(null);

export const formInputs = writable([{
  type: null,
  name: null,
  date: null
}]);

export default store;