<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <br>
        <button class="btn btn-primary" @click="selectedTemplate = 'appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectedTemplate = 'appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectedTemplate = 'appRed'">Load Red Template</button>
        <hr>
        <keep-alive>
          <component :is="selectedTemplate">
            <h2 slot="title" v-if="selectedTemplate === 'appBlue'">{{ blueHeadline }}</h2>
            <h2 slot="title" v-if="selectedTemplate === 'appGreen'">{{ greenHeadline }}</h2>
            <h2 slot="title" v-if="selectedTemplate === 'appRed'">{{ redHeadline }}</h2>
            <p slot="content" v-if="selectedTemplate === 'appBlue'">{{ blueContent }}</p>
            <p slot="content" v-if="selectedTemplate === 'appGreen'">{{ greenContent }}</p>
            <p slot="content" v-if="selectedTemplate === 'appRed'">{{ redContent }}</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  data() {
    return {
      selectedTemplate: 'appBlue',
      blueHeadline: 'Blue Template',
      blueContent: ' Hello! I am a nice blue template. I hope blue is your favorite color. If blue is not your favorite color, please try the green or red template.',
      greenHeadline: 'Green Template',
      greenContent: ' Hello! I am a nice green template. I hope green is your favorite color. If green is not your favorite color, please try the blue or red template.',
      redHeadline: 'Red Template',
      redContent: ' Hello! I am a nice red template. I hope red is your favorite color. If red is not your favorite color, please try the blue or green template.',
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>

<style lang="scss"></style>
