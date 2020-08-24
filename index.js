window.onload = function () {
    var peng = document.querySelector('.peng');
    var mainContent = document.querySelectorAll('.main-content');

    peng.style.transition = '.2s ease-in';
    peng.style.width = '424px';
    peng.style.opacity = 1;
    //transitionend 过渡完成事件，只要有一条过渡属性，这个事件就发生一次。有多个属性要过渡，这个事件会发生多次
    var num = 0;
    //这个事件发生的时候就是两个文字怒在了一起
    peng.addEventListener('transitionend', function(){
        num ++ ;
        
        if(num >= 2){
            
           return;
        }

        //怼在一起的时候，让两个文字变形
        mainContent[0].style.animation = 'leftText 1s';
        mainContent[1].style.animation = 'rightText 1s';
         
        //怼在一起的时候，让网页震动
        document.documentElement.style.animation='.9s shake';

        //怒在一起的时候，让音乐播放
        music.play();

        
        
    });

    //音乐通过Audio对象去创建
    var music = new Audio();
    music.src = 'video/3660.mp3';

    // 按按钮添加事件
    var oBtn = document.querySelector('.btn a');
    oBtn.onclick = function (){
        music.play();
    }

}

