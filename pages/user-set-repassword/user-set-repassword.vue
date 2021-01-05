<template>
	<view class="body">
		<input type="text" class="uni-input common-input" placeholder="输入域旧密码" v-model="oldpassword" >
		<input type="text" class="uni-input common-input" placeholder="输入域新密码" v-model="newpassword">
		<input type="text" class="uni-input common-input" placeholder="输入新密码" v-model="renewpassword" >
		<button type="primary"  class="user-set-btn"  :class="{'user-set-btn-disable':disabled}"  :loading="loading" :disabled="disabled"  @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					oldpassword:"",
					newpassword:"",
					renewpassword:"",
					disabled:true,
					loading:false
			}
		},
		watch:{
			oldpassword(val){
		this.change();
			},
			newpassword(val){
			this.change();
			},
			renewpassword(val){
			this.change();
			}
		},
		methods: {
					change(){
							if(this.oldpassword && this.newpassword && this.renewpassword){
								this.disabled=false;
								return;
							}
							this.disabled=true;
						},
			cleck(){
				if(!this.oldpassword||this.oldpassword==""){
					uni.showToast({
						icon:"none",
						title:"旧密码不能为空"
					})
					return false;
				}
				if(!this.newpassword||this.newpassword==""){
					uni.showToast({
						icon:"none",
						title:"新密码不能为空"
					})
					return false;
				}
				if(!this.renewpassword||this.renewpassword==""){
					uni.showToast({
						icon:"none",
						title:"确认密码不能为空"
					})
					return false;
				}
				if(this.newpassword!==this.renewpassword){
					uni.showToast({
						icon:"none",
						title:"确认密码和新密码不一致"
					})
					return false;
				}
				return true;
			}
			,
			//提交
			submit(){
				this.loading=true;
				this.disabled=true;
				if(!this.cleck()){
					this.loading=false;
					this.disabled=false;
					return;
				}
				//提交服务器
				uni.showToast({
					title:"提交服务器",
					mask:false,
					duration:1500
				})
				this.loading=false;
				this.disabled=false;
			}
		
		}
	}
</script>

<style>
@import "../../common/form.css";
</style>
