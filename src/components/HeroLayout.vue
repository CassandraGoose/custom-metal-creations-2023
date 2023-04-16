<template>
  <section class="flex flex-col md:flex-row place-content-between">
    <div class="flex flex-col place-content-start flex-1 justify-evenly">
      <slot name="left-content"></slot>
    </div>
    <div class="flex place-content-center flex-1">
      <slot name="right-content"></slot>
    </div>
  </section>
</template>