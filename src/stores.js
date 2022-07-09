import { writable } from 'svelte/store';
const store = writable(null);

export const editMode = writable(null);
export const formInputs = writable([{
  step: 1,
  preview: '',
  type: '',
  title: '',
  date: '',
  description: '',
  error: ''
}]);

export default store;