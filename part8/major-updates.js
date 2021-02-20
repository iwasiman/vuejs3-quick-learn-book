// Composition API
let vueInstance = Vue.createApp({ //各種オプション
});
vueInstance.component('composition-api-sample',
{
  props: ['propName'],
  template: '<div>コンポジションAPI使おう {{msg.msg1}} {{msg2}}</div>',
  setup(props) {
    // データオブジェクトの定義：dataオプションに相当
    const msgObj = Vue.reactive({
      msg1: "メッセージ1だよ",
    });
    const msg2 = Vue.ref("メッセージ２だよ");
    
    // イベントハンドラーの定義：methodsオプションに相当
    const onClickEmptyBtn = function() {
      // ボタンないけどボタン押下時の処理
    };
    // 算出プロパティの定義：computedオプションに相当
    const allMessage = Vue.computed(function() {
      return msgObj.msg1 + msg2;
    });
    // 定義内容を全部、setupメソッドの戻り値でJSオブジェクト形式で返す
    return {msgObj, msg2, allMessage, onClickEmptyBtn};
  }
});

// テンプレート配下のコンテンツを別の場所に表示するTeleport
template: '<div>魔法でテレポートしよう <teleport to="#msgArea">＊いしのなかにいる＊</teleport></div>'

// 非同期処理の待ちメッセージを表示するSuspense
<div id ="vueapp">
  <suspense>
    <template #default> <good-morning></good-morning> </template>
    <template #fallback> 魔王城で ( ˘ω˘)ｽﾔｧ </template>
  </suspence>
</div>
