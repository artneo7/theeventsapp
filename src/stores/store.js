import { writable } from 'svelte/store';

let editMode = writable(null);

export default editMode;