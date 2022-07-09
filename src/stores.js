import { writable } from 'svelte/store';
const store = writable(null);

export const editMode = writable(null);
export const formInputs = writable([{
  preview: '',
  step: 1,
  type: '',
  title: '',
  date: '',
  description: ''
}]);

export default store;