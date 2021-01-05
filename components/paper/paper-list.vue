<template>
	<view class="paper-list u-f-ac animated fadeInLeft fast" @tap="openUserChat">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view>
			<view class="u-f-ac u-f-jsb" >
				{{item.username}}<view>{{item.time}}</view>
			</view>
			<view class="u-f-ac u-f-jsb" >{{item.data}} 
			<template v-if="item.noreadnum>0">
							<uni-badge :text="item.noreadnum" type="error"></uni-badge>
						</template>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue'
	export default {
		components:{
			uniBadge
		},
		props:{
			item:Object,
			index:Number
		},
		methods:{
			openUserChat(){
				uni.navigateTo({
					url:'../../pages/user-chat/user-chat'
				})
			}
		}
	
	}
</script>

<style scoped>
	.paper-list{
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;	
	}	
	
	.paper-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		background-color: red;
	}
	.paper-list>view{
		/* border:  1upx solid; */
		flex: 1;
		margin-left: 20upx;
	}
	.paper-list>view>view:first-child{
		font-size: 32upx;
	}
	.paper-list>view>view:first-child view{
		font-size: 28upx;
		color: #CBCBCB;
	}
	.paper-list>view>view:last-child{
		color: #999999;
	}
</style>
