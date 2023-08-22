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

var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://artplayer.org/assets/sample/video.mp4',
    muted: true,
});

art.on('ready', () => {
    art.play();
});
