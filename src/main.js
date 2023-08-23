import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';
import router from '@/router/router';
import directives from '@/directives';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

directives.forEach(directive => {
  app.directive(directive.name, directive);
});

/** .use - здесь подключаютcя плагины, библиотеки, bootstrap, vuex, ... */
app.use(router).mount('#app'); // use(router) добавили
