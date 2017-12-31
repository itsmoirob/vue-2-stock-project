<template>
    <div>
      <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "Tea", price: 10 },
        { id: 2, name: "Biscuit", price: 4 },
        { id: 3, name: "Chocolate", price: 7 },
        { id: 4, name: "Doughnuts", price: 11 }
      ]
    };
  },
  components: {
    appStock: Stock
  }
};
</script>
