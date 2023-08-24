import { createStore } from 'vuex';

export default createStore({
  state: {
    likes: 2,
    isAuth: false,
  }, // само состояние, где мы указываем данные нашего приложения
  getters: {
    doubleLikes(state) {
      return state.likes * 2;
    },
  }, // computed - свойства (кэшированные вычисляемые значения)
  mutations: {
    incrementLikes(state) {
      state.likes += 1;
    },
    decrementLikes(state) {
      state.likes -= 1;
    },
  }, // при помощи мутаций измененяем поле в состоянии (напрямую не можем)
  actions: {}, // функции, внутри которых мутации
  modules: {}, // 1 модуль - изолированный кусочек
});
