import { writable } from 'svelte/store';
const store = writable(null);

export const editMode = writable(null);
export const formInputs = writable([{
  step: null,
  type: null,
  title: null,
  date: null,
  description: null
}]);

export default store;