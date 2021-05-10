<template lang="html">
  <div class="wrPprofileNotification profileRightBorderSet">
    <div class="wrProfileTitle">
      <p>Notifications</p>
      <p>Mange the notifications emailing</p>
    </div>
    <div class="wrProfileForm">
      <div class="wrProfileFormTitle">
        <p>Notifications</p>
        <p>Messages</p>
      </div>
      <form class="" action="index.html" method="post">
        <input type="checkbox" id="Email" ><p  class="checkboxP"> Email</p>
        <input type="checkbox" id="Email2" name="Email"><p  class="checkboxP"> Email</p><br>
        <input type="checkbox" id="Push" value="Push notification"><p  class="checkboxP"> Push notification</p>
        <input type="checkbox" id="Push2" value="Push notification"><p  class="checkboxP"> Push notification</p><br>
        <input type="checkbox" id="Text" value="Text Messages"><p  class="checkboxP"> Text Messages</p>
        <input type="checkbox" id="Text2" value="Text Messages"><p  class="checkboxP"> Text Messages</p><br>
        <input type="checkbox" id="Phone" value="Phone Calls"> <p  class="checkboxP"> Phone Calls</p>

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

<style lang="scss">
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
    @include font-prop(Roboto,normal,500,14px,16px);
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
      @include font-prop(Roboto,normal,500,16px,20px);
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
/////////
.wrPprofileNotification{
  margin-top: 24px;
  background: white;
  height: auto;
  input{
    width:20px;
  }
  p.checkboxP{
    display: inline-block;
    margin:0px 10px;
    padding: 0px;
    width: 30%;
    @include font-prop(Roboto,normal,normal,16px,24px);
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.6);

  }

  .wrProfileFormBtn{
    width:140px;
    height: 40px;
    background: white;
    @include font-prop(Roboto,normal,500,14px,16px);
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #1665D8;//blue
    padding:10px;;
    border:#1665D8 solid 1px;
    border-radius: 4px;

    &:hover{
      cursor:pointer;
    }
  }

}//end .wrPprofileNotification
</style>
