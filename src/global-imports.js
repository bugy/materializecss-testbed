import 'materialize-css/js/cash';
import {passiveIfSupported} from 'exports-loader?exports=named passiveIfSupported!materialize-css/js/global.js'
import 'materialize-css/js/waves'
import 'materialize-css/js/anime.min'
import Component from 'exports-loader?exports=default Component!materialize-css/js/component.js'

global.passiveIfSupported = passiveIfSupported
global.Component = Component;
