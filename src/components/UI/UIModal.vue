<template>
	<Transition name="modal">
		<div class="mini-modal" v-if="visible">
			{{ text }}
		</div>
	</Transition>
</template>

<script setup>
	defineProps(['text', 'visible']);
</script>

<style lang="scss">
	.mini-modal {
		position: absolute;
		top: -30px;
		left: -165px;
		color: black;
		background-color: white;
		-webkit-box-shadow: 0px 4px 11px 5px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0px 4px 11px 5px rgba(0, 0, 0, 0.15);
		box-shadow: 0px 4px 11px 5px rgba(0, 0, 0, 0.15);

		max-width: 190px;
		padding: 10px;
	}

	.modal-enter-active,
	.modal-leave-active {
		transition: opacity 0.3s linear;
	}

	.modal-enter-from,
	.modal-leave-to {
		opacity: 0;
	}
</style>
