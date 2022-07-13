import { writable } from 'svelte/store';
const store = writable(null);

export const editMode = writable(null);
export const step = writable(1);
export const formInputs = writable([{
  preview: '',
  type: '',
  title: '',
  date: '',
  description: '',
  error: ''
}]);

export const uploadFiles = writable([]);
export const focusLogin = writable(false);
export default store;