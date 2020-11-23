<template>
  <div class="backtop">
    <div class="text">回到顶部</div>
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.backtop {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: blanchedalmond;
  position: fixed;
  right: 10px;
  bottom: 80px;
  color: red;
}

.text{
  margin: 0 auto;
  margin-top: 10px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  vertical-align:middle;
}
</style>