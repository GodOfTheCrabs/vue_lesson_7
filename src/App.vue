<template>
  <div class="container" style="width: 1000px; margin: 0 auto">
    <Task1>
      This is basic slot
    </Task1>
    <Task2>
      <template v-slot:header>
        Slot header
      </template>

      <template v-slot:footer>
        Slot footer
      </template>
    </Task2>
    <Task3 :items="itemList">
      <template v-slot="slotProps">
        <p>{{ slotProps.item.name }}$</p>
      </template>
    </Task3>
    <button @click="openWindow" class="btn btn-primary">Open Modal window</button>
    <Task4 :isVisible="isWindowVisible">
      <template v-slot:header>
        Modal Header
      </template>
      <template v-slot:main>
        Modal main
      </template>
      <template v-slot:footer>
        <button @click="closeWindow" class="btn btn-primary">Close</button>
      </template>
    </Task4>
    <Task5_7/> 
    <Task8/> 
    <Task9/> 
    <Task12/>
  </div>
</template>

<script>
import Task1 from '@/components/Task1.vue'
import Task2 from '@/components/Task2.vue'
import Task3 from '@/components/Task3.vue'
import Task4 from '@/components/Task4.vue'
import Task5_7 from '@/components/Task5_7.vue'
import Task8 from '@/components/Task8.vue'
import Task9_11 from '@/components/Task9_11.vue'
import Task12 from '@/components/Task12.vue'

export default {
  name: 'App',
  components: {
    Task1,
    Task2,
    Task3,
    Task4,
    Task5_7,
    Task8,
    Task9_11,
    Task12
  },
  data() {
    return {
      itemList: [
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'}
      ],
      isWindowVisible: false
    }
  },
  methods: {
    openWindow() {
      this.isWindowVisible = true
    },
    closeWindow() {
      this.isWindowVisible = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.task-border {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin-top: 25px;
    display: inline-block;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center
}
</style>
