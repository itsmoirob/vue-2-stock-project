const state = {
    funds: 1000,
    ownedStocks: []
};

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.ownedStocks.find(element => element.id === stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.ownedStocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.ownedStocks.find(element => element.id === stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.ownedStocks.splice(state.ownedStocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.ownedStocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.ownedStocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
