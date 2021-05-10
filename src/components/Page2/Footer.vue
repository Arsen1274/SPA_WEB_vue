<template lang="html">
  <div class="page2Bottom">
    <p>© Devias Io. 2019</p>
    <p>This is a free version of an end product which will be launched soon. If you want to get a free copy of the end product subscribe to our personal email list</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" >
.wrPage2{
  .page2Bottom{
   margin-top:60px;
   border-top: solid 2px #c7cdd5 ;//red //#DFE3E8 ;


   & >p{
     @import "../../assets/mixin/mixin.scss";
     @include font-prop(Roboto,normal,normal,14px,22px);
     color: #616161;
     margin: 0px;
     margin-top:20px;
     text-align: left;

     &:last-child{
       margin-top:4px;
       font-size: 12px;
       line-height: 18px;
       color: #6B6C6F;
       mix-blend-mode: normal;
       opacity: 0.5;

     }
   }

 }//.page2Bottom
}

</style>
