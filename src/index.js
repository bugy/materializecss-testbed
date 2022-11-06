import TestApp from '@/TestApp';
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/js/autocomplete';
import 'materialize-css/js/dropdown';
import 'materialize-css/js/forms';
import 'materialize-css/js/modal';
import 'materialize-css/js/scrollspy';
import 'materialize-css/js/select';
import 'materialize-css/js/sidenav';
import 'materialize-css/js/tabs';
import 'materialize-css/js/timepicker';
import 'materialize-css/sass/ghpages-materialize.scss';
import Vue from 'vue';
import './global-imports'

new Vue({
    render: h => h(TestApp)
}).$mount('#app');
