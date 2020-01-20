<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-bind:id="'gg-'+id" v-html="tip"></h2>
    <input v-model.lazy="t" @keyup.enter="valut" />
    <input type="button" value="te" @click="showmessage" />
    <p>{{ t }}</p>
    <ol>
      <li v-for="(p,i) in arrs" :key=" i ">
        <a v-bind:href=" i ">{{ p.a }}</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Masschip云应用框架",
      tip: "<p>hhkk</p>",
      id: 1,
      t: "",
      arrs: [{ a: "微信商城" }, { a: "钱包" }, { a: "购物车" }]
    };
  },
  methods: {
    showmessage: function() {
      alert(this.t);
      alert("ff");
    },
    valut: function() {
      alert("dd");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
