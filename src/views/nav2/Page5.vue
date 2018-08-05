<template>
	<section>
		<div>
			<div class="fileBox">
				<i class="el-icon-plus"></i>
				<input type="file" @change="fileImage" accept="image/jpeg,image/x-png,image/gif" class="file"/>
			</div>
			<div class="imgStyle" v-for="(item,index) in imgArr" @mousemove="hoverShow = index" @mouseleave="hoverShow = false">
				<span class="imgHover" v-show="index === hoverShow">
					<i class="el-icon-search" @click="imgMaxFn(item)"></i>
					<i class="el-icon-delete" @click="indexImg(index)"></i>
				</span>
				<img :src="item" class="img">
			</div>
		</div>
		
		
		<el-dialog
		  title=""
		  :visible.sync="dialogVisible"
		  width="30%"
		  :before-close="handleClose">
		  <img :src="dialogimg" class="maxImg">
		</el-dialog>
		
	</section>
</template>

<script>
	export default {
		data(){
			return {
				imgArr:[],
				hoverShow: false,
				
				
				
				dialogVisible: false,
				dialogimg: ''
			}
		},
		mounted(){
			this.$api.get('s.json',{},function(data){
				console.log(data)
			},function(err){
				console.log(err)
			})
		},
		methods:{
			 fileImage(e){
				var file = e.target.files[0];
				var imgSize=file.size/1024;
				if(imgSize>20000){
					alert('请上传大小不要超过200KB的图片')
				}else{
					var reader = new FileReader();
					reader.readAsDataURL(file); // 读出 base64
					reader.onloadend = () =>{
						// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
						var dataURL = reader.result;
						// 下面逻辑处理
						this.imgArr.push(dataURL)
					};
				}
			},
			indexImg(index) {
				this.imgArr.splice(index,1);
			},
			imgMaxFn(item) {
				this.dialogVisible = true;
				this.dialogimg = item;
			},
			
			
			
			
			handleClose(done) {
				 done()
			}
		}
	}
</script>

<style>
	.fileBox{
		width: 98px;
		height: 98px;
		display: inline-block;
		border: 1px dashed #c0ccda;
		border-radius: 5px;
		overflow: hidden;
		cursor: pointer;
		text-align: center;
		position: relative;
		margin: 0 0 0 5px;
		line-height: 98px;
	}
	.fileBox:hover{
		border-color: #20A0FF;
	}
	.fileBox i{
		font-size: 16px;
		color: #8c939d;
	}
	.file{
		opacity: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.imgStyle{
		width: 98px;
		height: 98px;
		display: inline-block;
		border-radius: 5px;
		margin: 5px;
		position: relative;
		cursor: pointer;
		border: 1px solid #C0CCDA;
	}
	.img{
		width: 98px;
		height: 98px;
		border-radius: 5px;
	}
	.imgHover{
		width: 98px;
		height: 98px;
		background-color: rgba(0,0,0,.4);
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 5px;
		text-align: center;
		line-height: 98px;
	}
	.imgHover i {
		color: #FFFFFF;
		margin: 0 5px;
		font-size: 18px;
	}
	
	
	
	
	
	
	
	
	
	.maxImg{
		width: 100%;
		height: 400px;
	}
</style>