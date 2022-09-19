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
    async getRequestTemplate() {
      // headerを指定する
      const headers = {'Authorization' : 'mtiToken'};
  
      try{
        const res = await axios.get(baseUrl + '/test',  { headers });
        // 成功時の処理
      }catch(e) {
        // エラー時の処理
      }
    }
  },
}
</script>
<style scoped>

</style>