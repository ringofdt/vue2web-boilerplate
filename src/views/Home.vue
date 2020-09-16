<template>
  <div class="home">
    <b-alert show>Alert: This is home</b-alert>
    <b-alert variant="danger" show v-if="err">{{err}}</b-alert>
    <pre>{{msg}}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiService from "@/services/api.service";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      msg: "",
      err: "",
    };
  },
  methods: {
    ping() {
      const self = this;
      const requestData = {
        method: "get",
        url: "/ping",
      };
      ApiService.customRequest(requestData)
        .then((response) => {
          self.msg = response.data;
        })
        .catch((e) => {
          self.err = e;
        });
    },
  },
  mounted() {
    this.ping();
  },
};
</script>
