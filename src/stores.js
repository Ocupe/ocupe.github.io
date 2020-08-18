import { writable } from 'svelte/store';

const shared = writable({
    titlePostfix: 'Jonas Schell',
    language: 'en-US',
    darkMode: false,
})