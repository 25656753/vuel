<template>
  <div>
    <el-row :gutter="40">
      <el-col :span="16">
        <div class="grid-content bg-purple">f</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">f</div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="16">
        <div class="grid-content bg-purple">g</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">g</div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #0663e6;
}
.bg-purple {
  background: #06d876;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<script>
export default {
  name: 't2',
  props: ['message'],
  data: function () {
    return {
      picked: 'Runoob'
    }
  }
}
</script>
