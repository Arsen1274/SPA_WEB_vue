<template>
  <div class="tableRow">


    <div class="tableRowName" style="  display:flex;  flex-direction: row;  justify-content: left;">
      <form class="" action="index.html" method="post">
        <input type="checkbox" id="" name="" value="">
      </form>
      <img :src="user.avatar_url" style="width:40px; height:40px; border-radius:50%; margin-top:7px"/>
      <p>{{userInfo.name}}</p>
    </div>
    <!-- <p>DEV6300000{{user.id}}</p>
    <p>{{user.phone}}</p> -->
    <p>{{userInfo.node_id}}</p>
    <p>{{userInfo.location}}</p>
    <p>{{userInfo.blog}}</p>
    <p>{{userInfo.created_at}}</p>
</div>
</template>

<script>
export default {

 props:['user'],
  components: {

  },
  data() {
    return {
      userInfo:[]
    }
  },
  mounted(){

    fetch(this.user.url)
        .then(response => response.json())
        .then(data => this.userInfo = data)
        .then(data => console.log("Table row",this.user.login, "\t : userInfo =",data))
  },

}

</script>

<style lang="scss">
@import "../../assets/mixin/mixin.scss";
  .tableRow{
  background: #FFFFFF;
  @include flex-prop(row,space-between);
  align-content: center;
  border-top:0.5px #E4E7EB solid;//gray
  border-bottom:0.5px #E4E7EB solid;//gray
    div{
      &:last-child{
        .arrowLeft .arrowRight{
          width:5%;
          color: red;
          background: red;
        }
    }
    p{
      margin-right: 10px;

    }
  }
  & > div{
    width:18%;
      &:first-child {
        width: 25%;
        p {
          margin-left: 15px;
        }
    }
  }

  form{
    width:20px;
    margin:0px;
    padding: 15px;
  }

  .tableRowName{
    float:left;

    .tableRowNameIcon {
      width: 22px;
      height:22px;
      color:white;
      background: #1070CA;//blue
      border-radius: 50%;
      text-align: center;
      vertical-align: inherit;
      padding: 5px;
      margin:10px;
    }
  }

  & > p{
    padding: 15px;
    margin:0px;
    @include font-prop(Roboto,normal,normal,14px,20px);
    letter-spacing: -0.05px;
    color: #3A3B3F;
    width:16%;


  }
  &:last-child{
    @include flex-prop(row,flex-end);
    padding-right: 5%;
    padding: 10px;
    align-content: center;
    height:36px;

    p{
      font-size: 24px;
      color:#9EA0A5;//lite grey
      width:7%;
      vertical-align: middle;
      @include font-prop(Roboto,normal,normal,12px,14px);
      color: #000000;
      mix-blend-mode: normal;
      opacity: 0.54;
    }

    select{
      height:40.2px;
      border: 0px grey solid;
    }
  }

  }

</style>
