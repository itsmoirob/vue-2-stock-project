import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {
        state.stocks.forEach(element => {
            element.price = Math.round(element.price * (1 + Math.random() - 0.5));
        });
    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    randomiseStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => state.stocks
}

export default {
    state,
    mutations,
    actions,
    getters
};