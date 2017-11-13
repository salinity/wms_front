<<template>
  <div :model="model" label-width="80px">
    <input type="checkbox" v-model="form.fist_name" label="线上品牌商赞助" name="type" :true-value="true" :false-value="false"/>
    <input v-model.trim="form.second_name"/>
    <span>{{ form.fist_name.join('|') }}</span>
    <span>{{ form.second_name }}</span>
    <span>{{ form.second_name }}</span>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        model: {
          fist_name: '',
          second_name: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    },
    mounted: {

    }
  }
</script>