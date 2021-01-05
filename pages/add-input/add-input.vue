<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" :border="false" leftIcon="back" @clickLeft="back1" @clickRight="submit">
			<view class="u-f-ajc" @tap="changelook">
				{{ yinsi }}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea"><textarea v-model="text" placeholder="说一句话吧~" /></view>
		<!-- 多图上传 -->
		<uploud-images @uploud="uploud"></uploud-images>
		<!-- //弹出层公告 -->
		<!-- 弹出公告 -->
	
		<uni-popup  class="popup"  ref="popup" type="center"  @hidePopup="hidePopup">
			<view class="gonggao">
				<view class="u-f-ajc"><image src="../../static/common/addinput.png" mode="widthFix"></image></view>
				<view>1.涉及黄色，政治，广告及骚扰信息</view>
				<view>2.涉及黄色，政治，广告及骚扰信息</view>
				<view>3.涉及黄色，政治，广告及骚扰信息</view>
				<view>4.涉及黄色，政治，广告及骚扰信息</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
			</view>
		</uni-popup>

		</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import uploudImages from '../../components/common/uploud-images.vue';
import uniPopup from '../../components/uni-popup/uni-popup.vue';
let changelook = ['所有人可见', '仅自己可见'];
export default {
	data() {
		return {
			isget:false,
			showpopup: true,
			yinsi: '所有人可见',
			text: '',
			imglist: [],
			type:'center'
		};
	},
	components: {
		uniNavBar,
		uploudImages,
		uniPopup
	},
	onReady(){
			this.$refs.popup.open()
	},
	onBackPress() {
				if(!this.text && this.imglist.length<1){ return; }
					if(!this.isget){
						this.baocun();
						return true;
					}
	

	},
	methods: {
		/**
		 * 打开基础内容
		 */
		toggle(type) {
			this.type = type
			this.$refs.popup.open()
		},
		baocun(){
			uni.showModal({
				content: '是否保存为草稿',
				cancelText: '不保存',
				confirmText: '保存',
				success: res => {
					if (res.confirm) {
						console.log('保存');
					} else {
						console.log('不保存');
					}
					this.isget=true;
					uni.navigateBack({
						delta: 1
					});
				}
			});
		},
		// 返回
		back1() {
			uni.navigateBack({ delta: 1 });
		},
		// 发布
		submit() {
			console.log('发布');
		},
		// 隐私
		changelook() {
			uni.showActionSheet({
				itemList: changelook,
				success: res => {
					this.yinsi = changelook[res.tapIndex];
					// console.log(JSON.stringify(res))
				}
			});
		},
		uploud(arr) {
			this.imglist = arr;
			console.log(this.imglist);
		},
		hidePopup() {
			this.$refs.popup.close()
		}
	}
};
</script>

<style>
.uni-textarea {
	border: 1upx solid #eeeeee;
}
.gonggao {
	background-color: #FFFFFF;
	width: 500upx;
	border-radius: 10upx;
		padding: 25upx 20upx;
}
.gonggao image {
	width: 75%;
	margin-bottom: 20upx;

}
.gonggao button {
	margin-top: 20upx;
	background: #ffe934;
	color: #171606;
}
.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}
	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}
</style>
