<template>
  <div>
    <web-header id="web-main-header">
    </web-header>
    <div id="web-main-area"
         :class="layoutClass">
      <div id="web-main-content">
        <div class="box-shadow">
          <lte-box header="vue-adminlte"
                   class="content-block"
                   solid
                   icon="fa fa-info">
  
          </lte-box>
        </div>
        <div class="box-shadow">
          <lte-box header="vue-adminlte"
                   class="content-block"
                   solid
                   icon="fa fa-info">
  
          </lte-box>
        </div>
        <div class="box-shadow">
          <lte-box header="vue-adminlte"
                   class="content-block"
                   solid
                   icon="fa fa-info">
  
          </lte-box>
        </div>
        <div class="box-shadow">
          <lte-box header="vue-adminlte"
                   class="content-block"
                   solid
                   icon="fa fa-info">
  
          </lte-box>
        </div>
      </div>
      <div id="web-right-bar"
           class="hidden-sm hidden-xs">
        <div id="img-logo">
          <img src="../assets/logo.png"
               alg="logo">
        </div>
        <lte-box header="vue-adminlte group"
                 solid
                 expandable
                 variant="success">
          <lte-link-item href="">vue-adminlte</lte-link-item>
          <lte-link-item href="">vue-adminlte-starter</lte-link-item>
          <lte-link-item href="">vue-adminlte-sample</lte-link-item>
        </lte-box>
        <lte-box header="based on"
                 solid
                 expandable
                 variant="success">
          <lte-link-item>vue-cli</lte-link-item>
          <lte-link-item>vue</lte-link-item>
          <lte-link-item>vue-router</lte-link-item>
          <lte-link-item>vuex</lte-link-item>
          <lte-link-item>AdminLTE</lte-link-item>
        </lte-box>
        <lte-box header="vue UI"
                 solid
                 expandable
                 variant="success">
          <lte-link-item href=""
                         badgeText="cool"
                         badgeBg="yellow">Element</lte-link-item>
        </lte-box>
        <lte-box header="vue UI"
                 solid
                 expandable
                 variant="success">
          <lte-link-item href=""
                         badgeText="cool"
                         badgeBg="yellow">Element</lte-link-item>
        </lte-box>
        <lte-box header="vue UI"
                 solid
                 expandable
                 variant="success">
          <lte-link-item href=""
                         badgeText="cool"
                         badgeBg="yellow">Element</lte-link-item>
        </lte-box>
      </div>
    </div>
    <footer id="web-main-footer">
      <div>copyright@ 2017</div>
      <div>based on: vue-cli, vue, vue-router, vuex, AdminLTE</div>
    </footer>
  </div>
</template>

<script>
import WebHeader from './shared/WebHeader.vue'

export default {
  computed: {
    layoutClass() {
      return this.$store.state.layout
    }
  },
  components: {
    WebHeader
  }
}
</script>

<style>
#web-main-header {
  /*box-shadow: 0px 3px 6px #000000;*/
}

#web-main-area {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

#web-right-bar {
  width: 250px;
}

#web-main-content {
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
}

#img-logo {
  text-align: center
}

#web-main-footer {
  background: #35495e;
  color: darkgray;
  padding: 30px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.box-shadow{
  /*box-shadow: 5px 10px 20px #000000;  */
}
</style>