<template>
	<div class="user-content">
		<div class="user-content__title">List</div>
		<UILoader v-if="filter.loader === true" />
		<div class="user-content__items" v-if="filterUsers.length">
			<TransitionGroup name="list">
				<RequestUser
					v-for="user in filterUsers"
					:key="user.subtitle"
					:item="user"
				/>
			</TransitionGroup>
		</div>
		<div v-else>There is no users</div>
	</div>
</template>

<script setup>
	import UILoader from '@/components/UI/UILoader.vue';
	import RequestUser from '@/components/request/RequestUser.vue';
	import { useUsersFilter } from '@/composables/useFilter';
	import { useFilterStore } from '@/store/filter';
	const filter = useFilterStore();
	const { filterUsers } = useUsersFilter();
</script>

<style lang="scss">
	.user-content {
		&__title {
			margin-bottom: 20px;
			font-size: 28px;
			text-transform: uppercase;
			color: black;
		}

		&__items {
			display: flex;
			flex-direction: column;
			gap: 15px;
		}
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>
