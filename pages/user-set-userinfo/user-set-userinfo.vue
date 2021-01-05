<template>
	<view>
		<!-- 头像 -->
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ac" @tap="changeImage">
				<image :src="userpic"  mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb">
					<view>昵称</view>
					<view class="u-f-ac">
						<input type="text" v-model="username" />
						<view class="icon iconfont icon-bianji1"></view>
					</view>
				</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb" @tap="changeOne('sex')">
					<view>性别</view>
					<view class="u-f-ac">
						<view>{{sex}}</view>
						<view class="icon iconfont icon-bianji1"></view>
					</view>
				</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb">
					<view>生日</view>
					<view class="u-f-ac">
					 <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" >
					                        <view>{{date}}</view>
					  </picker>
						<view class="icon iconfont icon-bianji1"></view>
					</view>
				</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb"  @tap="changeOne('qg')">
					<view>情感</view>
					<view class="u-f-ac">
						<view>{{qg}}</view>
						<view class="icon iconfont icon-bianji1"></view>
					</view>
				</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb"  @tap="changeOne('job')">
					<view>职业</view>
					<view class="u-f-ac">
						<view>{{job}}</view>
						<view class="icon iconfont icon-bianji1"></view>
					</view>
				</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb">
					<view>家乡</view>
					<view class="u-f-ac" @tap="showMulLinkageThreePicker">
						<view>{{pickerText}}</view>
					
						<view class="icon iconfont icon-bianji1"></view>
					</view>
				</view>
				
					<mpvue-city-picker ref="mpvueCityPicker"  themeColor="#007AFF"  @onConfirm="onConfirm" > </mpvue-city-picker>
				<button class="user-set-btn" 
				type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	let sex=['不限','男','女'];
	let qg=['秘密','未婚','已婚'];
	let job=['秘密','IT','老师'];
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
export default {
	components:{
		mpvueCityPicker
	},
	data() {
		        const currentDate = this.getDate({
		            format: true
		        })
		return {
			userpic:"../../static/demo/userpic/11.jpg",
			username:"李振",
			sex:"不限",
			qg:"未婚",
			job:"IT",
			date: currentDate,
			 time: '1987-02-07',
			 	pickerText: '广东省-广州市-白云区',
		};
	},
	    computed: {
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        }
	    },
	methods: {
		showMulLinkageThreePicker(){
			this.$refs.mpvueCityPicker.show();
		},	
	   onConfirm(e) {
		   console.log(e)
					this.pickerText = e.label;
				},
		 bindDateChange: function(e) {
		            this.date = e.target.value
		        },
		   getDate(type) {
		            const date = new Date();
		            let year = date.getFullYear();
		            let month = date.getMonth() + 1;
		            let day = date.getDate();
		
		            if (type === 'start') {
		                year = year - 60;
		            } else if (type === 'end') {
		                year = year + 2;
		            }
		            month = month > 9 ? month : '0' + month;;
		            day = day > 9 ? day : '0' + day;
		            return `${year}-${month}-${day}`;
		        },
		changeOne(val){
			let itemList =[];
			switch (val){
				case 'sex':
					itemList=sex;
					break;
				case 'qg':
					itemList=qg;
					break;
				case 'job':
					itemList=job;
						break;
				default:
					itemList=job;
					break;
			}
			console.log(val)
	uni.showActionSheet({
						itemList: itemList,
						success: res => {
							switch (val){
								case 'sex':
								this.sex=itemList[res.tapIndex];
									break;
								case 'qg':
								this.qg=itemList[res.tapIndex];
									break;
								case 'job':
								this.job=itemList[res.tapIndex];
									break;
							}
						},
					});
		},
		changeImage(){
			uni.chooseImage({
			    count: 1, //默认9
			    sizeType: 'compressed', //可以指定是原图还是压缩图，默认二者都有
			    success: (res)=> {
					// console.log(res)
					this.userpic=res.tempFilePaths
					console.log(res.tempFilePaths)
			    }
			});
		},
			submit(){
						
					}
	}
};
</script>

<style scoped>
	@import "../../common/form.css";
.user-set-userinfo-list {
	padding: 20upx;
	border-bottom: 1upx solid #f4f4f4;
}
.user-set-userinfo-list>view:first-child{
	font-size: 32upx;
	color: #9B9B9B;
	font-weight: bold;
}
.user-set-userinfo-list>view:last-child>image{
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
}
.user-set-userinfo-list>view:last-child>view:last-of-type{
	margin-left: 20upx;
	color: #9B9B9B;
}
.user-set-userinfo-list>view:last-child>input{
	text-align: right;
}
.datetimes{
	background-color: red;
	text-align: left;
}
</style>
