<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="info">
      <div class="container">
        <b-navbar-brand to="/">{{ title }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>-->

          <!-- Right aligned nav items -->
          <b-navbar-nav class>
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="#!login">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "Title",
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>