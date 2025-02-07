<script setup>
import { useAppStore } from "@/stores/app";

const $ = useAppStore();

if (!$.banners) $.getBanners();
</script>

<template>
  <div>
    <ul>
      <li v-for="banner in $.banners" :key="banner.id">{{ banner.name }}</li>
    </ul>
  </div>
</template>
