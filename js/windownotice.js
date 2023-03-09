// title：弹窗标题，可以改为自定义标题 notify：弹窗类型，可以替换为message（信息提示）和confirm（二次确认提示）
// message:弹窗信息，可以改为自定义内
// position：弹出位置，bottom、top和left、right两两组合
// offset：偏移量，简单可以理解为与边界的距离
// showClose：是否显示关闭按钮
// type：提示类型，可选success/warning/info/error等
// duration：停留时间，弹出停留至消失的时间，单位ms
// 防抖全局计时器 debounce(逻辑) 时间

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "呦吼！开始搬砖🛷",
                    message: "若要转载最好保留原文链接哦❤~",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                    });
                }
            })
    },500)
})
document.addEventListener("keydown", function (e) {
    debounce(function () {//这一层是为了防止重复触发
        if(e.key == "F5"){
            new Vue({
                data: function () {
             this.$notify({
                 title: "是我太卡了嘛😒",
                 message: "刷刷刷，今晚消费由你自己买单🤣！！",
                 position: 'top-left',
                 offset: 50,
                 showClose: true,
                 type: "success",
                 duration: 5000
             });
             }
            })
        }
    
        if(e.key == "F11"){
            new Vue({
            data: function () {
             this.$notify({
                 title: "快快变大！",
                 message: "变大.变大。变大丶！😛",
                 position: 'top-left',
                 offset: 50,
                 showClose: true,
                 type: "success",
                 duration: 5000
             });
             }
            })
        }
    
        if(e.key == "F12"){
            new Vue({
            data: function () {
             this.$notify({
                 title: "你已被发现😜",
                 message: "小伙子，扒源记住要遵循GPL协议！",
                 position: 'top-left',
                 offset: 50,
                 showClose: true,
                 type: "warning",
                 duration: 5000
             });
             }
            })
        }

    },500)
    
})
