import "materialize-css/sass/materialize.scss";
import "materialize-css/dist/js/materialize";
import 'material-design-icons/iconfont/material-icons.css';
import Vue from "vue";
import TestApp from "@/TestApp";

new Vue({
    render: h => h(TestApp)
}).$mount('#app');
