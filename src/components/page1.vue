<template>
  <div class="wrPage1">

    <div class="wrPage1MenuUl">
      <ul class="page1MenuUl">
        <li class="active">Profile</li>
        <li>Account</li>
        <li>Price Plans</li>
      </ul>
    </div>

    <div class="wrMainInfo">
      <page1ProfileCard/>
      <div class="wrProfileRight">
        <page1BasicProf/>
        <page1Notif/>
      </div>
    </div>
  </div>

</template>

<script>
import page1ProfileCard from '@/components/Page1/page1ProfileCard.vue'
import page1BasicProf from '@/components/Page1/page1BasicProf.vue'
import page1Notif from '@/components/Page1/page1Notif.vue'
export default {
  name: 'page2',
  components: {
    page1BasicProf,
    page1Notif,
    page1ProfileCard,
  }
}
</script>

<style lang="scss" >
@import "../assets/mixin/mixin.scss";

  div.wrPage1{
  float: left;
  $a: 100%;
  $b: 272px;
  width: calc(#{$a} - #{$b});
  padding-top:  19px 24px;
  height:500px;
  display:flex;
  flex-direction: column;

  ul.page1MenuUl{
    @include flex-prop(row,space-around);
    list-style-type: none;
    margin:0px;
    padding: 0px;
    width:314px;
    float: left;
    margin:0px 24px;

    li{
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      @include font-prop(Roboto,normal,500,16px,20px);
      letter-spacing: -0.05px;
      color: #3A3B3F;//black
      padding: 19px 16px;
      &.active{
      border-bottom: 3px solid #1665D8; //blue
      }
      &:hover{
        cursor:pointer;
        color:#1665D8;
      }
    }

  }

  .wrMainInfo{
    @include flex-prop(row,space-between);
////+
    .profileRightBorderSet{
      background: #FFFFFF;
      border: 1px solid rgba(63, 63, 68, 0.005);
      box-shadow: 0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15);
      border-radius: 4px;
      padding: 24px;
    }



    .wrProfileRight{
      margin: 24px;
      $a: 70%;
      $b: 48px;
      width: 70%;

    }// end wrProfileRight

  }

  }

</style>
