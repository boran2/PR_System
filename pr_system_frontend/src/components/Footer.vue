<template>
  <footer class="absolute w-full bottom-0 bg-gray-900 pb-4">
    <div class="container mx-auto px-4">
      <hr class="mb-4 border-b-1 border-gray-700" />
      <p class="text-xs text-center text-white font-semibold py-1">
        Copyright © {{ date }} Branislav Boráň
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>
