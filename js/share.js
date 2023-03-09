// 分享本页
function share_() {
    let url = window.location.origin + window.location.pathname
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("| GavenLee🖱️") ? title.substring(0, title.length - 14) : title;
        navigator.clipboard.writeText('GavenLee🖱️的站内分享\n标题：' + subTitle + '\n链接：' + url);
        new Vue({
            data: function () {
                this.$notify({
                    title: "页面信息同步完成！🎉",
                    message: "你可以去别人那里Ctri+V！👌",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success", 
                    duration: 5000
                });
                // return { visible: false }
            }
        })
    } catch (err) {
        console.error('复制失败！', err);
    }
    // new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
    // btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 防抖
function share() {
    debounce(share_, 300);
}