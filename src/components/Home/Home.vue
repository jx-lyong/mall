<template>
    <div class="home">
        <mu-carousel>
            <mu-carousel-item>
                <img :src="carouselImg1">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg2">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg3">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg4">
            </mu-carousel-item>
        </mu-carousel>
        <div class="h-list">
           <ul>
                <li>
                    <div><img src="@/assets/img/temp/c3.png" alt=""></div>
                    <span>环球美食</span>
                </li>
                <li>
                    <div><img src="@/assets/img/temp/c4.png" alt=""></div>
                    <span>生活用品</span>
                </li>
                <li>
                    <div><img src="@/assets/img/temp/c5.png" alt=""></div>
                    <span>个户美妆</span>
                </li>
                <li>
                    <div><img src="@/assets/img/temp/c6.png" alt=""></div>
                    <span>营养保健</span>
                </li>
                <li>
                    <div><img src="@/assets/img/temp/c7.png" alt=""></div>
                    <span>家具厨卫</span>
                </li>
            </ul>
            <div>
                <img src="@/assets/img/temp/ad1.jpg" alt="">
            </div>
        </div>
        <div class="mobile">
            <div class="mobile-top">
                <img src="@/assets/img/temp/secskill-img.jpg" alt="">
                <span>8点场</span>
                <i>07</i>
                <i>13</i>
                <i>55</i>
            </div>
            <div>
                <ul>
                    <li>
                        <img src="@/assets/img/02.jpg" alt="">
                        <span>古黛妃 短...</span>
                        <i>￥179</i>
                    </li>
                    <li>
                        <img src="@/assets/img/05.jpg" alt="">
                        <span>古黛妃 短...</span>
                        <i>￥78</i>
                    </li>
                    <li>
                        <img src="@/assets/img/04.jpg" alt="">
                        <span>古黛妃 短...</span>
                        <i>￥108.8</i>
                    </li>
                    <li>
                        <img src="@/assets/img/03.jpg" alt="">
                        <span>古黛妃 短...</span>
                        <i>￥279</i>
                    </li>
                    <li>
                        <img src="@/assets/img/04.jpg" alt="">
                        <span>古黛妃 短...</span>
                        <i>￥399</i>
                    </li>
                    <li>
                        <img src="@/assets/img/02.jpg" alt="">
                        <span>古黛妃 短...</span>
                        <i>￥688</i>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bulk">
            <div class="bulk-top">
                <img src="@/assets/img/temp/h1.png" alt="">
                <div>
                    <span>精品团购</span>
                    <span>Boutique Group Buying</span>
                </div>
            </div>
            <div class="bulk-bottom">
                <div class="L-bottom">
                    <img src="@/assets/img/02.jpg" alt="">
                    <p>古黛妃 短袖T恤女夏装2019新款大放送</p>
                    <span>￥179</span><i>￥188</i>
                    <div>
                        <div><p></p></div>
                        <span>6人成团</span>
                    </div>
                </div>
                <div class="R-bottom">
                    <p>古黛妃 </p>
                    <span>￥179</span><i>￥188</i>
                    <div>
                        <div><p></p></div>
                        <span>10人成团</span>
                    </div>
                    <img src="@/assets/img/05.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="classification">
            <div class="bulk-top">
                <img src="@/assets/img/temp/h1.png" alt="">
                <div>
                    <span>分类精选</span>
                    <span>Competitive Products For You</span>
                </div>
            </div>
            <div class="floor">
                <div class="floor-img">
                    <img src="@/assets/img/timg.jpg" alt="">
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import carouselImg1 from '@/assets/img/temp/banner1.jpg';
import carouselImg2 from '@/assets/img/temp/banner2.jpg';
import carouselImg3 from '@/assets/img/temp/banner3.jpg';
import carouselImg4 from '@/assets/img/temp/banner4.jpg';

export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4
    }
  }
};
</script>

<style>
    .home{
        background: #eee;
    }
    .mu-carousel{
        height: 200px;
    }
    .mu-carousel img{
        height: 200px;
    }

    .h-list{
        background: #fff;
    }
    .h-list ul{
        padding: 0;
        margin: 0;
        margin-top: 5px;
        overflow: hidden;
        text-align: center;
        width: 100%;
    }
    .h-list ul li{
        list-style: none;
        float: left;
        margin-left: 16px;
        width: 15%;
    }
    .h-list ul li img{
        width: 40px;
        border-radius: 50%;
    }
    .h-list div{
        margin-top: 10px;
    }
    .h-list div img{
        width: 100%;
    }
    .mobile{
        background: #fff;
        margin-top: 5px;
        overflow: hidden;
    }
    .mobile-top{
        padding-top: 10px;
    }
    .mobile .mobile-top img{
        width: 65px;
        margin-left: 15px;
    }
    .mobile .mobile-top span{
        font-size: 12px;
        margin-left: 30px;
        color: #ccc;
    }
    .mobile .mobile-top i{
        display: inline-block;
        background: black;
        color: #fff;
        font-style: normal;
        font-size: 13px;
        width: 20px;
        text-align: center;
    }
    .mobile ul{
        margin: 0;
        width: 100%;
        float: left;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        padding: 10px 0;
        background: #fff;
    }
    .mobile ul li{
        display: inline-block;
        list-style: none;
        font-size: 12px;
    }
    .mobile ul li img{
        width: 80px;
        border-radius: 3px;
    }
    .mobile ul li span{
        display: block;
    }
    .mobile ul li i{
        color: red;
        font-style: normal;
    }
    .bulk{
        margin-top: 5px;
        background: #fff;
        overflow: hidden;
    }
    .bulk .bulk-top{
        overflow: hidden;
    }
    .bulk-top img{
        width: 40px;
        float: left;
        margin-left: 15px;
        margin-right: 10px;
    }
    .bulk-top span{
        
    }
    .bulk-top span:nth-of-type(2){
        display: block;
        font-size: 12px;
    }
    .bulk-bottom{
        margin-left: 10px;
        overflow: hidden;
        margin-top: 10px;
    }
    .bulk-bottom .L-bottom{
        font-size: 12px;
        
        float: left;
    }
    .L-bottom img{
        width: 200px;
        border-radius: 3px;
    }
    .L-bottom p{
        width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 13px;
    }
    .L-bottom>span{
        color: red;
    }
    .L-bottom>div>span:nth-of-type(2){
        color: black;
        float: left;
    }
    .L-bottom i{
        font-style: normal;
        text-decoration: line-through;
        font-size: 10px;
        margin-left: 5px;
    }
    .L-bottom>div{
        overflow: hidden;
    }
    .L-bottom>div>div{
        float: left;
        width: 150px;
        height: 5px;
        background: #ccc;
        border-radius: 10px;
        box-sizing: content-box;
        margin-top: 7px;
    }
    .L-bottom>div>span{
       margin-left: 5px;
    }
    .L-bottom>div>div>p{
        width: 100px;
        height: 5px;
        background: red;
        border-radius: 10px 0 0 10px;
    }

    .R-bottom{
        font-size: 12px;
        float: left;
        margin-left: 10px;
    }
    .R-bottom img{
        width: 135px;
        height: 205px;
        border-radius: 3px;
        object-fit: cover;
    }
    .R-bottom p{
        font-size: 13px;
    }
    .R-bottom>span{
        color: red;
    }
    .R-bottom>div>span:nth-of-type(2){
        color: black;
        float: left;
    }
    .R-bottom i{
        font-style: normal;
        text-decoration: line-through;
        font-size: 10px;
        margin-left: 5px;
    }
    .R-bottom>div{
        overflow: hidden;
    }
    .R-bottom>div>div{
        float: left;
        width: 80px;
        height: 5px;
        background: #ccc;
        border-radius: 10px;
        box-sizing: content-box;
        margin-top: 7px;
    }
    .R-bottom>div>span{
       margin-left: 3px;
    }
    .R-bottom>div>div>p{
        width: 60px;
        height: 5px;
        background: red;
        border-radius: 10px 0 0 10px;
    }

    .classification{
        background: #fff;
        margin-top: 5px;
    }
    .floor{

    }
    .floor-img{
        
    }
    .floor-img img{
        width: 100%;
    }
</style>
