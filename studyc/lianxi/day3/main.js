
import "./index.css"
import "./style.css"
import page from "./1.png"
let img=new Image();
img.src=page;
document.body.appendChild(img);
import Vue from "vue";
import App from "./App.vue";
new Vue({
    render:h=>h(App)
}).$mount("#app");

