import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', {
	state: () => ({
		country: ['russia', 'usa'],
		score: ['> 20', '< 10'],

		loader: false,
		countrySelect: '',
		scoreSelect: '',
	}),
	getters: {},
	actions: {},
});
