<template>
	<el-row class="container">
		<el-col :span="24" class="">
			<div id="echarts" ref="echarts"></div>
			main
			
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data(){
			return {
				option :null,
				Burl:'../common/js/beijing.json'
			}
		},
		methods:{
			echarts(){
				
			}
		},
		mounted(){
			
		}
	}

</script>

<style scoped>

</style>