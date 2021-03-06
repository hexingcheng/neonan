(function() {
        var menuIcon = document.querySelector('.menu'),
            menuContent = document.querySelector('.menu-content'),
            menuLists = $('.menu-list-item'),
            menuListLen = menuLists.length;
        menuContent.style.height = window.innerHeight - 50 + "px";
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplay:4000,
            loop : true
        });
        function addListToHeader(param,color){
        	var paramarr = param.split(' ');
        	if($('.choose-type').length){
        		if(paramarr.length>1){
        			$('.choose-type').text(paramarr[1]+" | "+paramarr[0])
        		}else{
        			$('.choose-type').text(paramarr[0])
        		}
        	}else{
        		if(paramarr.length>1){
        			var $div = $('<div class="choose-type">'+paramarr[1]+' | '+paramarr[0]+'</div>');
        		}else{
        			var $div = $('<div class="choose-type">'+paramarr[0]+'</div>');
        		}
        		$('.choose-wrap').append($div)
        	}
        	$('.choose-type').css({
        		"background-color":color
        	})
        	menuContent.classList.toggle('open');
            $('.main').addClass('toTop')
        }
        //menu  scroll bar 
        $('.menu-content').niceScroll({
            cursorcolor: "rgba(0,0,0,0)", // 光标颜色
            cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
            touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
            cursorwidth: "5px", //像素光标的宽度
            cursorborder: "0", //   游标边框css定义
            cursorborderradius: "5px", //以像素为光标边界半径
            autohidemode: false //是否隐藏滚动条
        });

        var ev = new UIElement({
            name: "openMenu",
            htmlRef: menuIcon,
            handler: function() {
                menuContent.classList.toggle('open')
            },
            type: 'click'
        })
        for (var i = 0; i < menuListLen; i++) {
            var a = new UIElement({
                name: 'changeType',
                htmlRef: menuLists[i],
                handler: function(e) {
                    var e = window.event||e;
                    var target = e.target||e.srcElement;
                    var value = target.innerHTML;
                    var bgColor = target.getAttribute('data-color');
                    addListToHeader(value,bgColor);
                    //e.preventDefault();
                    //e.returnValue = false
                },
                type: "click"
            })
        }
        //window size change then change menu
    
    window.onresize = function() {
        menuContent.style.height = window.innerHeight - 50 + "px";
    }

})()
