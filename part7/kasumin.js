let vueInstance = Vue.createApp({ //各種オプション
});
vueInstance.component('hello-compo',{
  template: '<div>かすかすじゃなくて</div><div>かすみん</div>'
});
vueInstance.mount("#vue-app-id-of-div-tag");