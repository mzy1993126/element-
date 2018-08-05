<template>
	<div class="img404Box">
		<img src="../../assets/img/404.jpg" class="img" v-bind:height="heights"/>
		<el-button class="returnHome" @click="goHome">返回首页</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				heights:''
			}
		},
		methods:{
			height(){
				this.heights = document.documentElement.clientHeight + 'px';
			},
			goHome(){
				this.$router.push({path:'/'});
			}
		},
		mounted(){
			this.height();
		}
	}
</script>

<style scoped>
	.img404Box{
		position: relative;
	}
	.img{
		width: 100%;
		position: absolute;
		z-index: -1;
	}
	.returnHome{
		display: block;
		width: 500px;
		margin:0 auto;
		transform: translateY(600px);
		background: #d65f46;
		color: #FFFFFF;
		border: none;
		border-radius:20px ;
	}
</style>