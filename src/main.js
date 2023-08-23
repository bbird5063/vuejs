import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';
import router from '@/router/router';
import Vintersection from '@/directives/Vintersection'; // добавили

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.directive('intersection', Vintersection);

/** .use - здесь подключаютcя плагины, библиотеки, bootstrap, vuex, ... */
app.use(router).mount('#app'); // use(router) добавили
