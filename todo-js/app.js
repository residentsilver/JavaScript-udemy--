const lists = []
command = null
while(command !== 'q'  && command !== 'quit'){
    let command = prompt('コマンドを入力してください(new , list ,delete , quit)')
    if(command === 'new'){
        const newTodo = prompt('新しいTodoを入力してください')
        console.log(`「${newTodo}」を追加しました`)
        lists.push(newTodo)
    } else if (command == 'list'){
        console.log('***************')
        // for (const item of lists) {
        //     console.log(item);
        // }
        for(let i = 0 ; i<lists.length; i++ ){
            console.log(`${i}: ${lists[i]}`)
        }
        console.log('***************')
    }else if(command === 'delete' ){
            // 削除処理
            if(lists.length === 0) {
                console.log("削除できるTodoがありません")
                continue
            }
        for (let list of lists){

        }
        let deleteIndex = prompt('削除する番号を入力してください')
        // 数値変換とバリデーション
        if(isNaN(deleteIndex) || deleteIndex < 0 || deleteIndex >= lists.length) {
            console.log("無効な番号です")
        } else {
            let deletedItem = lists.splice(deleteIndex, 1)
            console.log(`「${deletedItem}」を削除しました`)
        }} else if (command === 'quit' || command === 'q') {
            console.log('アプリを終了しました')
            break
        } else {
        console.log("無効なコマンドです")
    }
}