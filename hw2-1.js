$(function(){

    let commaSeconds = $('.comma-seconds').val();
    let seconds = $('.seconds').val();
    let seconds10 = $('.seconds10').val();
    let minutes = $('.minutes').val();
    let timerLoop;

    //計測時間をカウントする関数を定義
    function timeCount(){
        
        timerLoop= setInterval(function(){
        commaSeconds++;
        
        //0.1秒台のカウント
        if(commaSeconds>=10){
            seconds++;
            commaSeconds = 0;
        }
        //1.0秒台のカウント
        if(seconds>=10){
            seconds10++;
            seconds = 0;
        }
        //10秒台のカウント
        if(seconds10>=6){
            minutes++;
            seconds10 = 0;
        }
        //9分59.9秒でカウントを停止
        if(minutes  == 9 && seconds10== 5 &&  seconds == 9 && commaSeconds == 9){
            stopTimer();
            $('#stop').css({'opacity':'0.5','pointer-events':'none'});
        }

        $('.comma-seconds').text(commaSeconds);
        $('.seconds').text(seconds);
        $('.seconds10').text(seconds10);
        $('.minutes').text(minutes);
        },100);
    }
    //計測を停止する関数を定義
    function stopTimer(){
        clearInterval(timerLoop);
    }

    //計測時間をリセットする関数を定義
    function reset(){
        commaSeconds=seconds=seconds10=minutes=0;
        $('.comma-seconds').text(commaSeconds);
        $('.seconds').text(seconds);
        $('.seconds10').text(seconds10);
        $('.minutes').text(minutes);
    }

    //スタートボタンを押したときの処理
    $('#start').click(function(){
        $(this).css({'opacity':'0.5','pointer-events':'none'});
        $('#stop').css({'opacity':'1','pointer-events':'auto'});
        $('#reset').css({'opacity':'1','pointer-events':'auto'});
        timeCount();
    });

    //ストップボタンを押した時の処理
    $('#stop').click(function(){
        $('#start').css({'opacity':'1','pointer-events':'auto'});
        $(this).css({'opacity':'0.5','pointer-events':'none'});
        stopTimer();
    });

    //リセットボタンを押した時の処理
    $('#reset').click(function(){
        $('#start').css({'opacity':'1','pointer-events':'auto'});
        $('#stop').css({'opacity':'0.5','pointer-events':'none'});
        $(this).css({'opacity':'0.5','pointer-events':'none'});
        stopTimer();
        reset();
    });
});