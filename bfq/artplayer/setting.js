//获取URL链接的参数类，调用方法：urlcs("参数名")
function urlcs(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

var coun = 0;
var art = new Artplayer({
        container: '.artplayer-app',
        title: 'Your Name',
        url: urlcs("url"),
        poster: '/bfq/artplayer/bfqbjt.jpg',//视频播放前，播放器的背景图
        theme: '#23ade5',//进度条颜色
        volume: 1,//音量0.1-1
        isLive: false,//是否使用直播模式，会隐藏进度条和播放时间
        muted: false,//是否默认静音
        autoplay: true,//是否自动播放
        screenshot: false,//截图按钮
        pip: false,//画中画按钮
        autoSize: false,//控件自适应视频尺寸，false表示不适应，而是让控件填充窗口
        autoMini: false,//迷你小窗按钮
        setting: true,//设置按钮
        loop: false,//是否循环播放
        playbackRate: true,//倍速播放
        aspectRatio: true,//画面比例功能
        flip: false,//画面翻转功能
        fullscreen: true,//全屏
        fullscreenWeb: false,//网页全屏
        autoOrientation: false,//是否在移动端的网页全屏时，根据视频尺寸和视口尺寸，自动旋转播放器
        subtitleOffset: false,//字幕时间偏移，范围在 [-5s, 5s]
        miniProgressBar: false,//播放时，底部是否显示进度条
        mutex: true,//如果多个播放器，是否只让一个播放器播放
        lock: true,//移动端是否显示一个小锁，用于隐藏底部控制栏
        fastForward: false,//是否在移动端添加长按视频倍速功能
        playsInline: false,//类似网页全屏播放
        autoPlayback: false,//是否使用自动回放功能
        airplay: false,//是否显示airplay按钮
        whitelist: ['*'],//白名单
        customType: {
        m3u8: function (video, url) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(video);
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = url;
            } else {
                art.notice.show = '不支持播放格式：m3u8';
            }
        },
    },
        controls: [
            {
                position: 'right',
                html: '<svg class=\"zhuanping\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M448 128a106.667 106.667 0 0 1 106.667 106.667v576A106.667 106.667 0 0 1 448 917.333H128A106.667 106.667 0 0 1 21.333 810.667v-576A106.667 106.667 0 0 1 128 128h320z m448 256a106.667 106.667 0 0 1 106.667 106.667v320A106.667 106.667 0 0 1 896 917.333H661.333a42.667 42.667 0 1 1 0-85.333H896a21.333 21.333 0 0 0 21.333-21.333v-320A21.333 21.333 0 0 0 896 469.333H661.333a42.667 42.667 0 1 1 0-85.333zM448 213.333H128a21.333 21.333 0 0 0-21.333 21.334v554.666A21.333 21.333 0 0 0 128 810.667h320a21.333 21.333 0 0 0 21.333-21.334V234.667A21.333 21.333 0 0 0 448 213.333zM384 672a32 32 0 0 1 0 64H213.333a32 32 0 0 1 0-64z\"></path></svg>',
                click: function () {
                      coun++;
                          if(coun==1) {
                                  $(".art-video").css("transition","all 0ms ease-in-out").css("transform","scale(1.78,1.78) rotate(90deg)")
                          } else if(coun==2) {
                                  $(".art-video").css("transform","rotate(180deg)");
                          } else if(coun==3) {
                                  $(".art-video").css("transform","scale(1.78,1.78) rotate(270deg)");
                          } else if(coun==4) {
                                  $(".art-video").css("transform","rotate(0deg)");coun = 0;
                          }
                },
            },
        ],
});

art.on('resize', (...args) => {//在播放器尺寸发生变化时触发
    var spwidth = $(".art-video-player").width();
    var spheight = $(".art-video-player").height();
    if(spwidth > spheight) {
            art.aspectRatio = '16:9';
            $(".art-setting-item").eq(1).click();$(".art-setting-item-left-text").eq(4).click();
    }else{
            art.aspectRatio = 'default';
            $(".art-setting-item").eq(2).click();$(".art-setting-item-left-text").eq(2).click();
    }
});
