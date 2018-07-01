    //生成一个1-6的随机数
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    //询问用户问题，捕获用户输入
    var guess = prompt('我刚刚丢了一个骰子，猜猜是多少哦！');
    //先将'玩家猜对了'这个变量设为false
    var correctGuess = false;

    //条件检测区I  这里只检测一个东西：在哪种情况下玩家猜对了数字。 一旦猜对，更新correctGuess为true。注意，这里没有使用else。
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
        //如果玩家输入了错误的信息，报错    
    } else if (isNaN(guess) || guess === '' || guess > 6 || guess < 1) {
        console.log('检测到非法输入，页面刷新。');
        alert('请输入一个1-6之间的数字哦！');
        window.location.reload();
        //检测玩家数字是否比目标数字大
    } else if (parseInt(guess) > randomNumber) {
        var guessMore = prompt('猜错了，目标数比你猜的小哦，您再猜一次。');
        if (parseInt(guessMore) === randomNumber) { //注意，这里的if是嵌套在上方的else if中的
            correctGuess = true;
        }
        //检测玩家数字是否比目标数字小
    } else if (parseInt(guess) < randomNumber) {
        var guessLess = prompt('猜错了，目标数比你猜的大哦，您再猜一次。');
        if (parseInt(guessLess) === randomNumber) { //注意，这里的if是嵌套在上方的else if中的
            correctGuess = true;
        }
    }

    //条件检测区II 这里就是综合性的检测，如果检测区I中的correctGuess被更新为true，则判定玩家胜利。否则判定为失败，并告知答案
    if (correctGuess) {
        alert("恭喜你猜对了！！")
        //document.write('猜对咯！你真棒！');
    } else {
        alert('猜错了，刚才的数字是' + randomNumber + '哦~~~');
        //document.write('猜错了，刚才的数字是' + randomNumber + '哦~~~');    
    }
