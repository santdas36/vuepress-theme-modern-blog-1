import ElementUI from 'element-ui';
import 'bootstrap/dist/css/bootstrap.min.css'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(ElementUI);
    require('/theme/index.css');
}