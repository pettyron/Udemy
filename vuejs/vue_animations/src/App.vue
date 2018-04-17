<template>
  <div class="container">
    <div class="row">
      <div class="default-break">
        <h1>Animations</h1>
        <hr>
        <div class="form-group">
          <select class="form-control form-control-sm" v-model="alertAnimation">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <transition :name="alertAnimation">
          <div class="alert alert-info mt-3" v-if="show">
            This is some info
          </div>
        </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-info mt-3" v-if="show">
            This is some info
          </div>
        </transition>
        <transition appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
          <div class="alert alert-info mt-3" v-if="show">
            This is some info
          </div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <!-- Must use v-if and v-else here, use key and mode to help
        hr
      hr
     -->
          <div class="alert alert-info mt-3" v-if="show" key="info">
            This is some info
          </div>
          <div class="alert alert-warning mt-3" v-else key="warning">
            This is some warning
          </div>
        </transition>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="default-break">
        <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
        <br><br>
        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"> <!-- tell vue not to look for css classes for css animation -->
          <div class="box-go" v-if="load"></div>
        </transition>
      </div>
    </div>
    <div class="row">
      <div class="default-break">
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <ul class="list-group mt-3">
          <!-- Always have to key a transition-group -->
          <transition-group name="slide">
            <li class="list-group-item cursor-pointer"
                v-for="(number, index) in numbers"
                @click="removeItem(index)"
                :key="number">
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        load: false,
        alertAnimation: 'fade',
        elementWidth: 100,
        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      beforeEnter(el) {
        console.log('beforeEnter')
        this.elementWidth = 100
        el.style.width = `${this.elementWidth}px`
      },
      enter(el, done) {
        console.log('enter')
        let round = 1
        const interval = setInterval(() => {
          el.style.width = `${(this.elementWidth + round * 10)}px`
          round++
          if (round > 20) {
            clearInterval(interval)
            done() // need to tell vue when it animtion is done
          }
        }, 20)
      },
      afterEnter(el) {
        console.log('afterEnter')
      },
      enterCancelled(el) {
        console.log('enterCancelled')
      },
      beforeLeave(el) {
        console.log('beforeLeave')
        this.elementWidth = 300
        el.style.width = `${this.elementWidth}px`
      },
      leave(el, done) {
        console.log('leave')
        let round = 1
        const interval = setInterval(() => {
          el.style.width = `${(this.elementWidth - round * 10)}px`
          round++
          if (round > 20) {
            clearInterval(interval)
            done() // need to tell vue when the animtion is done
          }
        }, 20)
      },
      afterLeave(el) {
        console.log('afterLeave')
      },
      leaveCancelled(el) {
        console.log('leaveCancelled')
      },
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length)
        this.numbers.splice(pos, 0, this.numbers.length + 1)
      },
      removeItem(index) {
        this.numbers.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap';
  .default-break {
    @extend .col-12;
    @extend .col-sm-8;
    @extend .offset-sm-2;
    @extend .col-md-6;
    @extend .offset-md-3;
  }

  .cursor {

    &-pointer {
      cursor: pointer;
    }
  }

  .box {

    &-go {
      width: 300px;
      height: 100px;
      background-color: lightgreen;
    }
  }

  .fade {

    &-enter {
      opacity: 0;

      &-active {
        transition: opacity 1s cubic-bezier(0.470,  0.000, 0.745, 0.715);
      }
    }

    &-leave {

      &-active {
        transition: opacity 1s cubic-bezier(0.390,  0.575, 0.565, 1.000);
        opacity: 0;
      }
    }
  }

  .slide {

    &-enter {
      opacity: 0;

      &-active {
        animation: slide-in 1s cubic-bezier(0.455,  0.030, 0.515, 0.955) forwards;
        transition: opacity 0.5s;
      }
    }

    &-leave {

      &-active {
        animation: slide-out 1s cubic-bezier(0.250,  0.460, 0.450, 0.940) forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
      }
    }

    &-move {
      transition: transform 1s;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
