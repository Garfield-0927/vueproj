<template>
  <div class="navibar">
    <div class="left-item">
      <slot name="left"></slot>
    </div>
    <div class="mid-item">
      <slot name="mid"></slot>
    </div>
    <div class="right-item">
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NaviBar'
}
</script>

<style>
.navibar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}
.left-item, .right-item{
  width: 60px;
}
.mid-item{
  flex: 1;
}

</style>