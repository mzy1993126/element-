<template>
	<section>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			fn(){
				let data = {id:'889787897897987'}
				this.$axios.get('api/kjl/lkh',data).then(res => {
					console.log(red)
				}).catch(err => {
					console.log(err)
				})
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>