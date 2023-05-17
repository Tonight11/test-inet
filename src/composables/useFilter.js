import { computed } from 'vue';
import { useUsersStore } from '@/store/users';
import { useFilterStore } from '@/store/filter';

export function useUsersFilter() {
	const usersStore = useUsersStore();
	const filterStore = useFilterStore();

	const users = computed(() => usersStore.users);

	const filterUsers = computed(() =>
		users.value
			.filter(list => {
				if (filterStore.countrySelect) {
					return list.country === filterStore.countrySelect;
				}
				return list;
			})
			.filter(list => {
				if (filterStore.scoreSelect) {
					if (filterStore.scoreSelect.includes('20')) {
						return list.score > 20;
					}
					if (filterStore.scoreSelect.includes('10')) {
						return list.score < 10;
					}
				}

				return list;
			})
	);

	return {
		filterUsers,
	};
}
