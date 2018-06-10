<template>
  <div class="col-sm-6 col-md-4 clearfix">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{ stock.name }} <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="float-right">
          <button class="btn btn-info" @click="sellStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
        this.quantity = 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/bootstrap/scss/bootstrap.scss';

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .card {
    margin-bottom: 30px;
    border-color: transparentize($info, 0.6);
  }

  .card-header {
    background-color: transparentize($info, 0.5);
  }

  .card-title {
    color: darken($info, 10%);
    font-size: 1.2rem;
    margin-bottom: 0;

    small {
      color: darken($info, 15%);
      font-size: 0.8rem;
    }
  }
</style>
