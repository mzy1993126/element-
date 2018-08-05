<template>
	<div class="box">
		<h1 class="loginHeader">登陆</h1>
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm fromClass">
		  	<el-form-item label="账号" prop="username" class="font_color">
		    	<el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
		  	</el-form-item>
		  	<el-form-item label="密码" prop="pass">
		   	 	<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
		  	</el-form-item>
		  	<el-form-item>
		    	<el-button type="primary" @click="submitForm('ruleForm2')" class="btn" :disabled="disabledBtn">登陆</el-button>
		    	<!--<el-button @click="resetForm('ruleForm2')" style="margin-left: 0;">重置</el-button>-->
		  	</el-form-item>
		  	<el-checkbox v-model="checked" class="font_color" @click="checked!=checked">记住密码</el-checkbox>
		</el-form>
	</div>
</template>

<script>
import {local} from '../../common/js/common.js';
export default {
    data() {
      var validateuser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
  	   	checked: false,
  	   	disabledBtn:false,
        ruleForm2: {
        	username:'',
          	pass: '',
        },
        rules2: {
          	username: [
            	{ validator: validateuser, trigger: 'blur' }
          	],
          	pass: [
            	{ validator: validatePass, trigger: 'blur' }
          	]
        }
  	  };
	},
    methods: {
      	submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
         		if (valid) {
         			let user = JSON.stringify({User:this.ruleForm2.username,PassWord:this.ruleForm2.pass,checked:this.checked});
          			this.$store.commit('User',JSON.parse(user));
        			if(this.checked){
            			local.set('UserName',user);
        			}else{
        				local.romove('UserName');
        			}
        			this.$router.replace({
          			  	path:'/'
      			  	})
          		} else {
            		this.$message({
			          	message: '警告,请输入账号密码',
			          	type: 'warning'
			        });
            		return false;
          		}
        	});
  		},
  		Landing_state(){
  			let getLocal = JSON.parse(local.get('UserName'));
			if(local.get('UserName')){
				this.ruleForm2.username = getLocal.User;
				this.ruleForm2.pass = getLocal.PassWord;
				this.checked = getLocal.checked;
			}
  		}
//		resetForm(formName) {  //重置
//     		this.$refs[formName].resetFields();
//   	}
 	},
 	mounted(){
 		this.Landing_state();
 	}
 
}
</script>

<style scopes>
	.box{
		width:600px;
		height: 300px;
		border-radius:10px;
		background: rgba(255,255,255,0.2);
		border:1px solid rgba(196, 196, 196,0.7);
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
	}
	.loginHeader{
		font-size: 30px;
		color: #FFFFFF;
		text-align: center;
		margin: 25px 0;
	}
	.btn{
		width:100%;
	}
	.fromClass{
	    width: 90%;
	    margin: auto;
	}
	.font_color{
		color:#FFFFFF;
	}
	.el-form-item__label{
		color:#FFFFFF;
		text-align: center;
	}
</style>