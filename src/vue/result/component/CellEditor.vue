<template>
  <div>
    <template v-if="type=='date'">
      <el-date-picker value-format="yyyy-MM-dd" :value="value" @input="sync"></el-date-picker>
    </template>
    <template v-else-if="type=='time'">
      <el-time-picker value-format="HH:mm:ss" :value="value" @input="sync"></el-time-picker>
    </template>
    <template v-else-if="type=='datetime'">
      <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" :value="value" @input="sync"></el-date-picker>
    </template>
    <el-input v-else="type" :value="value" @input="sync"></el-input>
  </div>
</template>

<script>
import { METHODS } from "http"
export default {
  props: ["type", "value"],
  methods: {
    sync(value) {
      // console.log(value)
      this.$emit("input", value)
    },
  },
}
</script>

<style scoped>
.el-icon-time {
  line-height: 35px;
}

.el-date-editor {
  width: 100% !important;
}
.el-date-editor input {
  text-align: center;
}
</style>