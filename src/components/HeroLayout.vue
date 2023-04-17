<template>
  <section class="flex lg:flex-row place-content-between flex-col-reverse">
    <div class="flex flex-col place-content-start flex-1 justify-evenly">
      <slot name="left-content"></slot>
    </div>
    <div class="flex place-content-center flex-1 sm:mb-16">
      <slot name="right-content"></slot>
    </div>
  </section>
</template>
