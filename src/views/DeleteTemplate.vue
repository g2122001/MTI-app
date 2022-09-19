<template>
  <div></div>
</template>
<script>
import { baseUrl } from '@/assets/config.js';
import axios from "axios";

export default {
  name: 'Template',
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {
    async deleteRequestTemplate() {
      // bodyに渡すデータを指定する
      const data = {
        value1: "value1" 
      }
      // headerを指定する
      const headers = {'Authorization' : 'mtiToken'};
      
      try {
        await axios.delete(baseUrl + '/test', { data, headers });
        // 成功時の処理
      }catch(e){
        // エラー時の処理
      }
    }
  },
}
</script>
<style scoped>

</style>