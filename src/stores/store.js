import { writable } from 'svelte/store';
const store = writable(null);

export const validateUser = writable(false);
export const editMode = writable(null);

export const formInputs = writable([{
  step: null,
  type: null,
  title: null,
  date: null
}]);

export default store;