<script setup lang="ts"></script>

<template>
  <div class="flex justify-center items-center h-1/2 spin">
    <img src="../assets/images/pokeball.png" alt="loading pokeball" width="150" height="150" />
  </div>
</template>

<style>
  .spin {
    animation: spin 0.8s infinite ease-in-out;
    animation-delay: 0.5s;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(360deg)
    }
  }
</style>