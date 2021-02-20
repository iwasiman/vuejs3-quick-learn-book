Vue.directive('highlight', {
    // オプション
});

<div id="vueapp"><span v-highlight="xx">色が</span>変わるよ</div>

let samplePlugin = {
  install(app, options) {
    app.directive('highlight', {
    }),
  }
};

Vue.createApp({
// オプション類
}).use(samplePlugin)
.mount("#vue-app-id-of-div-tag");