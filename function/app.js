function isSameNumbers(num1, num2) {
    // 厳密等価演算子を使用して値と型を比較
    return num1 === num2 ? 'ゾロ目' : 'ゾロ目じゃない';
  }
  

  /**
   * 2つの数字を乗算して結果を返す関数
   */
  function multiply(num1, num2) {
      return num1 * num2;
  }

  /**
   * 気温に基づいて短パンで出かけられるかどうかを判断する関数
   */
  function isShortsWeather(temperature) {
    return temperature >= 25;
  }

  /**
   * 配列の最後の要素を返す関数
   */
  function lastElement(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : null;
  }

  /**
   * 文字列の最初の文字を大文字にする関数
   */
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  /**
   * 配列内の数字の和を計算する関数
   */
  function sumArray(arr) {
    // 合計値を保存する変数を0で初期化
    let total = 0;

    // 配列の各要素を順番に合計値に加算
    for (let num of arr) {
      total += num;
    }

    // 合計値を返す
    return total;
  }

  /**
   * 数字を受け取り、対応する曜日を返す関数
   */
  function returnDay(num) {
    // 曜日の配列を定義（インデックスを1から始めるため、最初に空文字を追加）
    const days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    // 数字が1から7の範囲内かチェックし、対応する曜日を返す
    return num >= 1 && num <= 7 ? days[num] : null;
  }

  /**
   * 曜日を数字から取得するオブジェクト
   * キーは数字、値は曜日の文字列
   */
  const daysObject = {
    1: 'Monday', 
    2: 'Tuesday', 
    3: 'Wednesday', 
    4: 'Thursday', 
    5: 'Friday', 
    6: 'Saturday', 
    7: 'Sunday'
  };

  /**
   * オブジェクトを使用して数字から曜日を返す関数
   */
  function returnDayObject(num) {
    return daysObject[num] || null;
  }

  /**
   * 数字を受け取り、その数字の2乗を返す関数式
   * 乗算演算子を使わずに2乗を計算する
   */
  const square = function(num) {
    // Math.pow()メソッドを使用して2乗を計算
    return Math.pow(num, 2);
  };


  /**
   * 正方形の面積と周囲の長さを計算するオブジェクト
   * sideを使用して面積と周囲の長さを計算するメソッド
   */
  const square1 = {
    /**
     * 正方形の面積を計算するメソッド
     */
    area(side) {
      return side * side;
    },

    /**
     * 正方形の周囲の長さを計算するメソッド
     */
    perimeter(side) {
      return side * 4;
    }
  };

  /**
   * 卵を産むヘレンというオブジェクト
   * nameプロパティと卵の数を追跡するeggCountプロパティを持つ
   * layAnEggメソッドで卵を産む
   */
  const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
      this.eggCount += 1;
      return 'EGG';
    }
  };

  const numbers = [1,2,3,4,5,6,7,8,9,10 ]

  numbers.forEach(console.log(numbers))

get_response("high")
// Start Generation Here
const fullNames = [
  { first: 'Albus', last: 'Dumbledore' },
  { first: 'Harry', last: 'Potter' },
  { first: 'Hermione', last: 'Granger' },
  { first: 'Ron', last: 'Weasley' },
  { first: 'Rubeus', last: 'Hagrid' },
  { first: 'Minerva', last: 'McGonagall' },
  { first: 'Severus', last: 'Snape' }
];

const firstNames = fullNames.map(person => person.first)
