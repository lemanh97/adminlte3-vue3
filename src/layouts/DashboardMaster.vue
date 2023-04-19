<template>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <Preloader></Preloader>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div class="content-wrapper">
        <section class="content">
          <div class="container-fluid">
            <ExampleForm></ExampleForm>
            
          </div>
        </section>
      </div>
      <Footer></Footer>
      <ControlSidebar></ControlSidebar>

    </div>
  </body>
</template>

<script>


import Preloader from "../components/Preloader.vue"
import ExampleForm from "../components/ExampleForm.vue"
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
import ControlSidebar from "../components/ControlSide.vue";


export default {
  components: {
    Preloader,
    Navbar,
    Sidebar,
    Footer,
    ControlSidebar,
    ExampleForm
  },
 

};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
</style>
