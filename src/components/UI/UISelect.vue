<template>
	<select :value="modelValue" @change="changeOption">
		<option selected value="">{{ filter }}</option>
		<option v-for="item in options" :key="item" :value="item">
			{{ item }}
		</option>
	</select>
</template>

<script setup>
	defineProps({
		modelValue: {
			type: String,
		},
		filter: {
			type: String,
		},
		options: {
			type: Array,
		},
	});
	const emit = defineEmits(['update:modelValue']);
	const changeOption = event => {
		emit('update:modelValue', event.target.value);
	};
</script>

<style lang="scss" scoped>
	select {
		background-color: transparent;
		color: rgb(255, 255, 255);
		font-size: 18px;
		padding: 10px 15px;
		border: 2px solid #646cff;
		border-radius: 11px;
		width: 100%;
	}
	option {
		color: black;
	}
</style>
