<script setup lang="ts">
import {computed, onMounted, ref, type Ref} from "vue";
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {useWasm, type WasmUtil} from "@/composables/wasm";
import {Point2D} from "@/assets/ttr";

const wasm_loaded = ref(false);

let cd: (p1: Point2D, p2: Point2D) => number = () => {
};

const p1: Ref<Point2D> = ref(null);
const p2: Ref<Point2D> = ref(null);

const my_distance = ref(0);

onMounted(async () => {
  useWasm().then(({greet, Point2D, calculate_distance, add_points}: WasmUtil) => {
    wasm_loaded.value = true;
    cd = calculate_distance;

    console.log(greet('taro'));

    p1.value = new Point2D(0.0, 0.0);
    p2.value = new Point2D(3.0, 4.0);
    // const distance = calculate_distance(point1, point2);

    // console.log(distance);

    const point3 = add_points(p2.value, p2.value);
    const d13 = calculate_distance(p1.value, point3);
    console.log(d13);
  });
});

const create_int = () => {
  return Math.floor(Math.random() * 400);
};


const random_calc = () => {
  p1.value = new Point2D(create_int(), create_int());
  p2.value = new Point2D(create_int(), create_int());
  // my_distance.value = cd(p1.value, p2.value);
}

const distance = computed(() => {
  return cd(p1.value, p2.value).toFixed(5);
})

</script>

<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
      <div class="wrapper">
        <HelloWorld msg="You did it!"/>
        <div class="border">
          <button @click="random_calc">ランダム再生成</button>
          <br>
          <table v-if="wasm_loaded">
            <colgroup>
              <col style="width: 100px;" />
              <col style="width: 100px;" />
            </colgroup>
            <thead>
            <tr>
              <th>X</th>
              <th>Y</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="right">{{ p1.x }}</td>
              <td class="right">{{ p1.y }}</td>
            </tr>
            <tr>
              <td class="right">{{ p2.x }}</td>
              <td class="right">{{ p2.y }}</td>
            </tr>
            <tr>
              <td colspan="2" class="right">距離: {{ distance }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView/>
  </div>
</template>

<style scoped>
.border {
  border: 1px solid grey;
  width: 400px;
  height: 140px;
  background-color: lightblue;
}

.right {
  text-align: right;
}


table {
  table-layout: fixed;
  border-collapse: collapse;
}

th, td {
  padding: 0 10px 0 10px;
  border: 1px solid black;
}

th {
  background-color: darkgrey;
  color: white;
}

td {
  background-color: white;
  color: black;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
