         // 弹出DIV层  
        function showDiv() {
            //获取ID
            var box = document.getElementById("box");
            var mou_head = document.getElementById('mou_head');
            box.style.display = "block";
            //让弹出层居中显示
            box.style.left = (document.documentElement.clientWidth - box.clientWidth) / 2 + document.documentElement.scrollLeft + "px";
            box.style.top = (document.documentElement.clientHeight - box.clientHeight) / 2 + document.documentElement.scrollTop - 50 + "px";
            var dlog = document.createElement("div"); //首先创建一个div  
            dlog.setAttribute("id", "mybg"); //定义该div的id  
            // 设置一些样式
            dlog.style.background = "#000000";
            dlog.style.width = "100%";
            dlog.style.height = "100%";
            dlog.style.position = "fixed";
            dlog.style.top = "0";
            dlog.style.left = "0";
            dlog.style.zIndex = "500";
            dlog.style.opacity = "0.6";
            dlog.style.filter = "Alpha(opacity=70)";
            //背景层加入页面  
            document.body.appendChild(dlog);
            document.body.style.overflow = "hidden"; //取消滚动条  
            //以下实现弹出层的拖拽效果  
            var posX;
            var posY;
            mou_head.onmousedown = function (e) {
                if (!e) e = window.event; //IE  
                posX = e.clientX - parseInt(box.style.left);
                posY = e.clientY - parseInt(box.style.top);
                document.onmousemove = mousemove;
            }
            document.onmouseup = function () {
                document.onmousemove = null;
            }
            function mousemove(ev) {
                if (ev == null) ev = window.event;//IE  
                box.style.left = (ev.clientX - posX) + "px";
                box.style.top = (ev.clientY - posY) + "px";
            }
        }
        function closeDiv() //关闭弹出层  
        {
            var box = document.getElementById("box");
            box.style.display = "none";
            document.body.style.overflow = "auto"; //恢复页面滚动条  
            var body = document.getElementsByTagName("body");
            var mybg = document.getElementById("mybg");
            body[0].removeChild(mybg);
        } 