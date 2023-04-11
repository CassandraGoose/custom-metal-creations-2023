<template>
  <section class="flex flex-col md:flex-row place-content-evenly">
    <div class="flex flex-col place-content-start">
      <slot name="left-content"></slot>
    </div>
    <div class="flex place-content-center">
      <slot name="right-content"></slot>
    </div>
  </section>
</template>