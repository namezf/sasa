var currentIndex2 = 0;

        // 将轮播切换到指定的图片上
        function slideTo2(index) {

            if (index === 4) {
                index = currentIndex2 = 0
            }

            if (index === -1) {
                index = currentIndex2 = 3;
            }
            var lis = document.querySelectorAll('.slider2 .list li');
            //清除旧焦点
            //xxx.classList.remove(yyyClass)
            //xxx.classList.add(xxxClass)

            document.querySelector('.current').classList.remove('current');
            lis[index].classList.add('current')

        }
        function slideNext2() {
            currentIndex2++
            slideTo2(currentIndex2)
        }
        function slidePrev2() {
            currentIndex2--
            slideTo2(currentIndex2)
        }


        //绑定事件
        document.querySelector('.slider2 .prev').onclick = function () {
            slidePrev2()
        }

        document.querySelector('.slider2 .next').onclick = function () {
            slideNext2()
        }

        // var bullets = document.querySelectorAll('.pagination .bullet');
        // for (var i = 0; i < bullets.length; i++) {
        //     bullets[i].index = i;
        //     bullets[i].onmouseover = function () {
        //         // console.log(this.index);
        //         currentIndex2 = this.index;
        //         slideTo2(currentIndex2)
        //     }
        // }

        document.querySelector('.slider2').onmouseover = function () {
            stop2()
        }
        document.querySelector('.slider2').onmouseout = function () {
            auto2()
        }
        //自动轮播
        var id;
        function auto2() {
            id = setInterval(function () {
                slideNext2();
            }, 2000)
        }

        function stop2() {
            clearInterval(id)
        }
        auto2();