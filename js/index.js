/**
 * Created by hama on 2017/7/31.
 */
$(function(){
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function(event){
        $(this).css('color','#fff');
    }).mouseout(function(){
        $(this).css('color','#a4b094');
    })
    $('.shopCar').mouseover(function(){
        $(this).css({color:'#FF6700',background:'#fff'});
        $('.goods').stop(true,false).slideDown();
    }).mouseout(function(){
        $(this).css({color:'#a4b094',background:'#424242'});
        $('.goods').stop(true,false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #000');
           $('.ser2').css('border','1px solid #000').css('borderLeft','none');
       }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $('.ser2').css('border','1px solid #ccc').css('borderLeft','none');
       }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){
        $(this).css({'color':'#fff', 'background':'orange'})
    }).mouseout(function(){
        $(this).css({'color':'#757575', 'background':'#eee'})
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function(){
        if(flag){
            $('.ser1 input').css({
                'border':'1px solid #000',
                'border-right':'none'
            });
            $(this).css({
                'background':'orange',
                'color':'#fff',
                'border':'none'
            })
        }
    }).mouseout(function(){
       if(flag){
           $('.ser1 input').css('border','1px solid #ccc');
           $(this).css({'background':'#fff', 'color':'#000', 'border':'1px solid #ccc', 'border-left':'none'})
       }
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function(){
        $(this).children('a').css('color','#FF6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function(){
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function(){
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function(){
        $('.select').slideDown().finish() //停止当前动画和动画队列
    }).mouseout(function(){
        $('.select').slideUp()
    })
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,5000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 5000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        num < 0 ? 4 :num;
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        num > 4 ? 0 : num;
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({'background':"#000", 'opacity':'0.5'});
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');}
    function autoplay (){
        num ++;
        num > 4 ? 0 : num;
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    })
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function(){
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })
    //小米明星单品点击效果
    var n = 0;
    var auto = setInterval(function () {
        n++;
        if(n>1){n=0}
        $('.star-two ul').css('marginLeft', (-1226 * n) + 'px');
        if( n == 0) {
            $('.star-p-r').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        }
        else if(n == 1) {
            $('.star-p-l').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        }
    }, 10000)
    //手动
    var aa = false;
    var bb = true;
    $('.star-p-l').click(function () {
        $('.star-two ul').css('marginLeft', '-1225px');
        $('.star-p-r').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        aa = true;
        bb = false;
    })
    $('.star-p-r').click(function () {
        $('.star-two ul').css('marginLeft', '0');
        $('.star-p-l').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        aa = false;
        bb = true;
    })
//智能硬件 视频 右上角效果
    $('.capa-one-r').mousemove(function () {
        $('.capa-one-r div').css('color','orange');
        $('.capa-one-r p a').css('background','orange');
    }).mouseout(function () {
        $('.capa-one-r div').css('color','#000');
        $('.capa-one-r p a').css('background','#ccc');
    })
    $('.capa-two-l').mousemove(function () {
        $(this).css({marginTop:'2px',boxShadow:'0 0 28px #aaa'});
    }).mouseout(function () {
        $(this).css({marginTop:'4px',boxShadow:'none'});
    })
    //热评产品， 视频 智能硬件 搭配 配件 边框效果
    $('.capacity .capa-two li').add('.twos-rr li') .add('.twos-rrr > figure ').add('.buzz ul li ').add('.video-two li ').add(' .twos-l li').mousemove(function () {
        $(this).css({transform:'scale(1.01)',boxShadow:'0 0 28px #aaa'});
    }).mouseout(function () {
        $(this).css({transform:'scale(1)',boxShadow:'none'});
    })
    //搭配内容
    $('.twos-rr li ').mousemove(function () {
        $(this).find('.twos-orange').stop(true,false).slideDown();
    }).mouseout(function () {
        $(this).find('.twos-orange').stop(true,false).slideUp();
    })
    $('.twos-rrr > figure ').mouseover(function () {
        $(this).css({transform:'none',boxShadow:'none'});
    }).mouseout(function () {
        $(this).css({transform:'none',boxShadow:'none'});
    })
    //最后二分图
    $('.twos-rrr > figure ').mousemove(function () {
        $(this).find('.twos-orange').removeClass('hide');
    }).mouseout(function () {
        $(this).find('.twos-orange').addClass('hide');
    })
    //搭配轮播1
    $('.ones0 li').mousemove(function () {
        var un = $(this).index()
        $('.twos-r > ul').eq(un).css('display','flex').siblings().css('display','none');
        //文字颜色随图片变化
        $('.ones0 li').eq(un).css({'color':'orange','borderBottom':'2px solid orange'}).siblings().css({'color':"#000", 'borderBottom':'#ccc'});
    })
    //配件轮播2
    $('.ones1 li').mousemove(function () {
        var un = $(this).index()
        $('.twos-r2 > ul').eq(un).css('display','flex').siblings().css('display','none');
        $('.ones1 li').eq(un).css({'color':'orange','borderBottom':'2px solid orange'}).siblings().css({'color':"#000", 'borderBottom':'#ccc'});
    })
    //周边轮播3
    $('.ones2 li').mousemove(function () {
        var un = $(this).index()
        $('.twos-r3> ul').eq(un).css('display','flex').siblings().css('display','none');
        $('.ones2 li').eq(un).css({'color':'orange','borderBottom':'2px solid orange'}).siblings().css({'color':"#000", 'borderBottom':'#ccc'});
    })
//    为你推荐
    $('.for-two li ').mousemove(function () {
        $(this).css('transform','scale(1.02)');
    }).mouseout(function () {
        $(this).css('transform','scale(1)');
    })
    //为你推荐按钮点击
    var nums = 0;
    $('.for-one-l').click(function(){
        //上一张
        nums = nums - 1;
        nums < 0 ? 3:nums;
        displayOl();
    })
    $('.for-one-r').click(function(){
        //下一张
        nums = nums + 1;
        nums > 3 ? 0:nums;
        displayOl();
    })
    function displayOl(){
        $('.for-two ol').eq(nums).removeClass('hide').siblings('ol').addClass('hide');
    }
    //内容
    var obj =0;
    $('.matter ol').mouseover(function () {
        var s =0;
        obj= $(this)
    obj.find('.round2 p').click(function () {
        s = $(this).index();
        alert(s);
        obj.find('li').eq(s).removeClass('hide').siblings('li').addClass('hide');
        $(this).css({'background':'none','border':'2px solid orange'}).siblings('p').css({'background':"#ccc", 'border':'2px solid #fff'});
    obj.find('.r2').click(function(){//上一张
       s++;
        console.log(s);
        if(s<0){s=3}
        displayLi();})
    obj.find('.l2').click(function(){//下一张
        s--;
       if(s>3){s=0}
        displayLi();})
    function displayLi(){
        obj.find(' li').eq(s).removeClass('hide').siblings('li').addClass('hide');
        obj.find('.round2 p').eq(s).css({'background':'none','border':'2px solid orange'}).siblings('p').css({'background':"#ccc", 'border':'2px solid #fff'});}
    })
    })
    //左右button隐藏显示
    $('.matter ol').mouseover(function () {
        $(this).find('.p2').removeClass('hide');
    }).mouseout(function () {
        $(this).find('.p2').addClass('hide');})
//视频,
    $('.video-two  h2 a').add('footer a').mouseover(function () {
        $(this).css('color','orange');
    }).mouseout(function () {
        $(this).css('color','#000');
    })
    //视频button按钮
    $('.video-two  li img ').mouseover(function () {
        $(this ).next(' .iconfont ').css('color','orange');
    }).mouseout(function () {
        $(this ).next(' .iconfont ').css('color','');
    })
})