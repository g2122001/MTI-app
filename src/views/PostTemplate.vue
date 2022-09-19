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
    async postRequestTemplate() {
      // headerを指定する
      const headers = {'Authorization' : 'mtiToken'};
      // リクエストボディを指定する
      const requestBody = {
        value1: 'value1',
        value2: 'value2'
      };
      
      try {
        const res = await axios.post(baseUrl + '/test', requestBody, { headers });
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