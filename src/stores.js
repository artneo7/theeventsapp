import { writable } from 'svelte/store';
const store = writable(null);

export const editMode = writable(true);
export const step = writable(1);
export const formInputs = writable([{
  preview: '',
  type: '',
  title: '',
  date: '',
  description: '',
  error: ''
}]);
export const eventsList = writable([]);

export const uploadFiles = writable([]);
export const focusLogin = writable(false);
export const eventSelected = writable(0);

export default store;