import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/shades-of-purple.css';
import 'styles/index.scss';

config.autoAddCss = false;
library.add(faBorderAll, faList);

import '@fortawesome/fontawesome-svg-core/styles.css';
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
