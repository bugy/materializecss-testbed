import 'materialize-css/sass/ghpages-materialize.scss';
import './global-imports'
import 'materialize-css/js/modal';
import 'materialize-css/js/dropdown';
import 'materialize-css/js/characterCounter';
import 'materialize-css/js/sidenav';
import 'materialize-css/js/tabs';
import 'materialize-css/js/timepicker';
import 'materialize-css/js/select';
import 'materialize-css/js/forms';
import 'materialize-css/js/autocomplete';
import 'materialize-css/js/scrollspy';
import 'materialize-css/js/range';
import 'material-design-icons/iconfont/material-icons.css';
import Vue from 'vue';
import TestApp from '@/TestApp';

new Vue({
    render: h => h(TestApp)
}).$mount('#app');
