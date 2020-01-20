<template>
  <div>
    <h1>ttttt</h1>
    <input v-aa />
    <el-button>鼠标滑过/点击背景变淡</el-button>
    <el-button type="primary">
      图标加文字按钮
      <i class="el-icon-upload el-icon--right"></i>
    </el-button>
    <el-button type="primary" :loading="true">加载中按钮</el-button>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">d</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">ds</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>ds`
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">fd</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>fd
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">df</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 't1'
}
</script>
<style scoped>
.bg-purple {
  background: #a00698;
}
</style>
