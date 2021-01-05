<template>

		<!-- 无内容默认图片 -->
		<view class="nothing animated fadeInLeft u-f-ajc">
			<image src="../../static/common/nothing.png" mode="widthFix"></image>
		</view>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.nothing{
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	
	
}
.nothing image{
	width: 50%;
}
</style>
