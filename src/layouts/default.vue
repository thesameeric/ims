<template>
  <div class="flex column col-lg-6">
    <defaultAside/>
    <defaultHeader/>
    <router-view></router-view>
  </div>
</template>
<script>
import defaultHeader from '@/components/header.vue';
import defaultAside from '@/components/sidebar.vue';

export default {
  components: {
    defaultHeader,
    defaultAside,
  },
};
</script>
