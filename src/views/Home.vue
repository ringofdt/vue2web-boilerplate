<template>
  <div class="home">
    <h1>Home</h1>
    <b-alert variant="danger" show v-if="ping.err">{{ ping.err }}</b-alert>
    <b-button variant="info" @click="callPing">ping</b-button>
    <pre>{{ ping.pong }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("app", ["ping"]),
  },
  methods: {
    ...mapActions("app", ["callPing"]),
  },
  mounted() {
    this.callPing();
  },
};
</script>
