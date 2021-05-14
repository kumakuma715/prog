/* 
 ☆ タイプ選択肢
　　0: インドア派
　　1: アウトドア派
 　 2: 選べない！

 ☆ 場所ナンバリング
　　0: 海
　　1: 山
 　 2: 街

 ☆ プラン概要
　　0: インドア派
        0: 海 (遊覧船観光)
        1: 山 (グランピング)
        2: 街 (カラオケ)
　　1: アウトドア派
        3: 海 (ウインドサーフィン)
        4: 山 (登山)
        5: 街 (謎解きゲーム)
 　 2: 選べない！
        6: 海 (BBQと花火)
        7: 山 (キャンプ)
        8: 街 (食べ歩き)
*/

function rsp(playerSelect) {
    let result;
    let playerSelectType;
    let pcSelectPlace;
    let resultPlan;
    let pcSelect = Math.floor(Math.random()*3);
    console.log(pcSelect);
    console.log(playerSelect);

    // プレイヤーの選択肢が「0: インドア派」の場合
    if(playerSelect == 0 ) {
        // pcの選択肢が「0: 海」のとき
        if(pcSelect == 0 ) {
            //(0:遊覧船観光)
            result = 0 ;
        } 
        // pcの選択肢が「1: 山 」のとき
        else if(pcSelect == 1 ) {
            //(1:グランピング)
            result = 1 ;
        }
        // pcの選択肢が「2: 街」のとき
        else if(pcSelect == 2 ) {
            //(2:カラオケ)
            result = 2 ;
        }
    }

    // プレイヤーの選択肢が「1: アウトドア派」の場合
    else if(playerSelect == 1 ) {
        // pcの選択肢が「0: 海」のとき
        if(pcSelect == 0 ) {
            //(3: ウインドサーフィン)
            result = 3 ;
        } 
        // pcの選択肢が「1: 山 」のとき
        else if(pcSelect == 1 ) {
            //(4:登山)
            result = 4 ;
            }
        // pcの選択肢が「2: 街」のとき
        else {
            //(5:謎解きゲーム)
            result = 5 ;
        }
    }
       
    // プレイヤーの選択肢が「2: 選べない！」の場合
    else {
        // pcの選択肢が「0: 海」のとき
        if(pcSelect == 0 ) {
            //（6:BBQと花火)
            result = 6 ;
        } 
        // pcの選択肢が「1: 山 」のとき
        else if(pcSelect == 1 ) {
            //(7:キャンプ)
            result = 7 ;
        }
        // pcの選択肢が「2: 街」のとき
        else {
            //(8:食べ歩き)
            result = 8 ;
        }
    }
    console.log(result);

    if(playerSelect == 0 ) {
        playerSelectType = "インドア派";
    }
    else if(playerSelect == 1 ) {
        playerSelectType = "アウトドア派";
    }
    else {
        playerSelectType = "選べない！";
    }


    if(pcSelect == 0 ) {
        pcSelectPlace = "海";
    }
    else if(pcSelect == 1 ) {
        pcSelectPlace = "山";
    }
    else{
        pcSelectPlace = "街";
    }


    if(result == 0 ){
        resultPlan = "遊覧船観光";
    }
    else if(result == 1 ) {
        resultPlan = "グランピング";
    }
    else if(result == 2 ) {
        resultPlan = "カラオケ";
    }
    else if(result == 3 ) {
        resultPlan = "ウインドサーフィン";
    }
    else if(result == 4 ) {
        resultPlan = "登山";
    }
    else if(result == 5 ) {
        resultPlan = "謎解きゲーム";
    }
    else if(result == 6 ) {
        resultPlan = "BBQと花火";
    }
    else if(result == 7 ) {
        resultPlan = "キャンプ";
    }
    else {
        resultPlan = "食べ歩き";
    }
        console.log(resultPlan);

    document.getElementById('player').innerHTML = '「' + playerSelectType +  '」' + 'のあなたは';
    document.getElementById('pc').innerHTML = pcSelectPlace + 'で';
    document.getElementById('resultMessage').innerHTML = resultPlan + 'に挑戦しよう!';
}