<template>
	<div class="main">
		<div class="select">
			<UISelect
				:options="filter.country"
				v-model="filter.countrySelect"
				filter="Filter by country"
			/>
			<UISelect
				:options="filter.score"
				v-model="filter.scoreSelect"
				filter="Filter by score"
			/>
		</div>
		<div class="users">
			<users-block></users-block>
		</div>
	</div>
</template>

<script setup>
	import UISelect from '@/components/UI/UISelect.vue';

	import { useFilterStore } from '@/store/filter';
	import UsersBlock from '@/components/UsersBlock.vue';
	import { watch } from 'vue';

	const filter = useFilterStore();

	watch([() => filter.countrySelect, () => filter.scoreSelect], () => {
		filter.loader = true;
		setTimeout(() => {
			filter.loader = false;
		}, 500);
	});
</script>

<style>
	.main {
		display: flex;
		align-items: center;
		gap: 170px;
	}

	.select {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.users {
		background-color: rgb(247, 247, 247);
		padding: 15px;
		border-radius: 11px;
		max-width: 500px;
		min-width: 300px;
	}
</style>
