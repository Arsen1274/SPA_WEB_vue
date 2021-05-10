<template lang="html">
  <div class="wrProfileLeft">
    <div class="wrProfileLeftTop">
      <div class="wrProfileLeftTopLeft">
        <p class="wrProfileLeftTopLeftName">Adrian Stefan</p>
        <p class="wrProfileLeftTopLeftPlace">Rm. Valcea, Romania</p>
        <p class="wrProfileLeftTopLeftPlace">4:32PM (GMT-4)</p>
      </div>
      <img class="wrProfileLeftTopRight" src="@/img/ava.jpg" alt="">
    </div>
    <hr>
    <div class="wrProfileLeftBottom">
      <form class="wrProfileLeftBottomPicForm" action="index.html" method="post">
        <div class="wrInputFile">
          <label class="inputFileLabel" for="image_uploads">upload picture</label>
          <input class="inputFile" type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>

        </div>
        <input class="inputSubmit" type="submit" name="" value="REMOVE PICTURE">
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
.wrProfileLeft{
  background: white;
  background: #FFFFFF;
  border: 1px solid rgba(63, 63, 68, 0.005);
  box-shadow: 0px 1px 3px rgba(63, 63, 68, 0.15);
  border-radius: 4px;
  width: calc(27%-24px);
  height: 200px;
  padding: 24px;
  margin:24px;

  .wrProfileLeftTop{
    @include flex-prop(row,space-between);
    @include font-prop(Roboto,normal,normal,12px,20px);
    letter-spacing: -0.05px;
    color: #9EA0A5;

    .wrProfileLeftTopLeftName{
      @include font-prop(Roboto,normal,700,20px,28px);
      letter-spacing: -0.06px;
      color: #212529;
      margin-bottom: 10px;
    }

    img{
      border-radius: 13px;
      width:120px;
      height: 120px;
    }

    p{
      margin:0px;
    }

  }//end wrProfileLeftTop

  hr{
    width:100%;
    background: #E4E7EB;//gray
    border: 0.5px solid #E4E7EB;
  }

  .wrProfileLeftBottom{

    .wrProfileLeftBottomPicForm{
      @include flex-prop(row,space-between);

      .wrInputFile{
        width: 100px;
        margin: 0px;
        margin-top:9px;
      }
      input, label{
        @include font-prop(Roboto,normal,500,10px,16px);
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: #425A70;//grey

        background: white;
        width: 100px;
        height:  40px;
        border: none;
        margin:0px;
        padding:0px;
        &:hover{
          cursor:pointer;
        }
      }


      .inputFileLabel{
        width: 100px;
        color:#1665D8;//blue
        padding-top: 10px ;
        height: 30px;//calc(40px-10px);
      }
      #image_uploads{
        width:0px;
      }
    }
  }//end .wrProfileLeftBottom

}
//end .wrProfileLeft
</style>
