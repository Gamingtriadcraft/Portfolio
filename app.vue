<script setup>
const route = useRoute();

useHead({
  title: `My Nuxt.js App | ${route.name}`,
  meta: [
    { name: "description", content: "My Nuxt.js application" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});
</script>
<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
  <DevOnly>
    <p>Current route: {{ route.path }}</p>
  </DevOnly>
</template>

<style lang="css">
body {
  font-family: Inter;
}
html.dark {
  background-color: black;
  color: white;
}
</style>
