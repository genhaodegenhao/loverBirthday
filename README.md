# loverBirthday

1、使用本地图片直接在wxml中引用相对路径；

	 <image src="../images/back.jpg" class="slide-image" />

2、使用网络图片，要把路径放data中，并在wxml中调用；

	data:{ 
  		imageUrl:"http://img1.3lian.com/2015/w7/85/d/101.jpg"
	}, 

	<image src="{{imageUrl}}" class="slide-image" />