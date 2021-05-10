<template lang="html">
  <div class="wrProfileBasic profileRightBorderSet">
    <div class="wrProfileTitle">
      <p>Basic Profile</p>
      <p>The information can be edited from yuor profile page</p>
    </div>
    <div class="wrProfileForm">
      <form class="wrProfileFormFirstForm" action="index.html" method="post">
        <input type="text" name="" value="" placeholder="First Name">
        <input type="text" name="" value="" placeholder="Last Name">
        <input type="email" name="" value="" placeholder="E-Mail">
        <input type="tel" name="" value="" placeholder="Phone">
        <input type="text" name="" value="" placeholder="Country">
        <input type="text" name="" value="" placeholder="City">
         <hr>
        <button class="wrProfileFormBtn" type="Save Settings" name="button">Submit</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" >
@import "../../assets/mixin/mixin.scss";

.wrProfileBasic, .wrPprofileNotification{

  background: white;
  height:auto;

  .wrProfileFormTitle{
    @include font-prop(Roboto,normal,500,16px,20px);
    letter-spacing: -0.05px;
    color: #3A3B3F;//black

    @include flex-prop(row,flex-start);
    margin-bottom: 10px;
    p{
      margin: 0px 0px;
      padding: 0px;
      width: 36%;
    }

  }

}//end .wrProfileBasic
  .wrProfileTitle{
    @include flex-prop(row,left);
    @include font-prop(Roboto,normal,300,14px,16px);
    color: #66788A;//gray
   text-align: center;
    vertical-align:center;
    align-items: baseline;
    border-bottom: 1px solid #E4E7EB;

    p{
      margin: 0;
      text-align: center;
      vertical-align:bottom;
    }

    & :first-child{
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.05px;
      color: #3A3B3F;//black
      margin-right: 15px;
    }

  }// end wrProfileBasicTitle
  .wrProfileForm{
    padding-top:24px;
    text-align: left;
    .wrProfileFormFirstForm{
      input{
        margin-right:4%;
      }
    }

    input, button{
      padding: 16px;
      margin: 0px;
      background: white;
      border:1px grey solid;
      border-radius: 4px;
      width: 30%;
      margin-bottom: 24px;
      outline:none;

      &:active,&:focus{
        border-color: blue;
      }
    }

    button:hover{
      cursor:pointer;
    }
    hr{
      background: #E4E7EB;//gray
      border: 0.5px solid #E4E7EB;
    }
    .wrProfileFormBtn{
      margin: 24px;
      text-transform: uppercase;
      background: #1665D8;//blue
      color:white;
      width: 158px;
      height: 46px;
    }
  }
</style>
