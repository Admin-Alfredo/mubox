import {fv_musicas} from '../../../test_api'
export default {
  template: "#search-template",
  data(){
    return{
      searchText:"",
      result:[]
    }
  },
  methods: {
    getFetch() {
      
    }
  },
  watch: {
    searchText(newValue, oldValue) {
      const __result = fv_musicas.filter((v)=> v.author.includes(this.searchText))
      this.result = newValue === '' ? [] : __result
    },
  },
  mounted(){
    this.$refs.inputSearch.focus()
  }
}