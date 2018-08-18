<template>
	<section>
	{{sd}}
	</br>
	{{s}}
	</section>
</template>

<script>
	export default{
		data() {
			return {
				sd:{},
				s:{}
			}
		},
		mounted(){
			
			{
				let data = {
					latitude:30.2735,
					longitude:120.15526
				}
				this.$axios.get('api/restapi/bgs/poi/reverse_geo_coding',data).then(res=>{
					console.log(res)
					this.sd = res.data
				}).catch(err=>{
					console.log(err)
				})
			}
			
			
			
			{
				let data = {
					latitude:'30.273954',
					longitude:'120.153968',
					terminal:'h5'
				}
				this.$axios.get('api/restapi/shopping/v1/restaurants/outside_filter/attributes',data).then(res=>{
					console.log(res)
					this.s = res.data
				}).catch(err=>{
					console.log(err)
				})
			}
			
			
			
			
		}
	}
</script>

<style>
	
</style>