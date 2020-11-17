const app = new Vue({
  el: '#root',
  data: {
    imgSrc: data.map((e, i) => e.url),
    sourceCount : 0
  },
  methods:{
    prevImg: function(){
      if(this.sourceCount === 0){

        this.sourceCount = this.imgSrc.length - 1;

      } else{

        this.sourceCount--;

      }
    },
    nextImg: function(){
      if(this.sourceCount === this.imgSrc.length - 1){

        this.sourceCount = 0;

      } else{

        this.sourceCount++;

      }
    }
  }
});
