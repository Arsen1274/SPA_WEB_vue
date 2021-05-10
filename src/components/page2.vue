<template>
  <div class="wrPage2">
  <div class="page2Header">
    <div class="page2HeaderLeft">
      <div class="page2HeaderLeftBtn">
        <img src="../img/Filter.png" alt="">
        FILTER
      </div>
      <form class="page2HeaderLeftSearch" action="index.html" method="post">
        <input type="source" name="" value="" placeholder="Search users by name, id">
      </form>
    </div>
    <div class="page2HeaderRight">
      <div class="page2HeaderRightBtn">
        +  ADD USER
      </div>
    </div>
  </div>
  <div class="page2Table">
    <div class="tableRow">
      <form class="" action="index.html" method="post">
        <input type="checkbox"  name="" value="">
      </form>
      <p>Selected 2 users</p>
      <p>User ID</p>
      <p>Phone Number</p>
      <p>Email Address</p>
      <p>Account Created</p>
    </div>


    <tableRow  v-for="user in users" :key="user.id"   v-bind:user="user"/>


    <!-- <div class="tableRow"> -->
      <div class="tableRow">
        <p>Rows per page :</p>
        <select>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
        <p>1-10 of 100</p>
        <div class="arrow">
          <p> ( </p>
        </div>
        <div class="arrow">
          <p>></p>
        </div>
    </div>
  </div>

  <Footer/>

</div>

</template>

<script>
import tableRow from '@/components/Page2/tableRow.vue'
import Footer from '@/components/Page2/Footer.vue'

export default {
  name: 'page2',
  components: {
    tableRow,
    Footer,
  },
  data() {
    return {
      users:[]
    }
  },
  mounted(){
    //fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => this.users = data)
        .then(data => console.log("App1 : data =",data))
  }

}

</script>

<style lang="scss" scoped>
@import "../assets/mixin/mixin.scss";
  .wrPage2{
  float: left;
  background:#E5E5E5;
  $a: 100%;
  $b: 272px+48px;
  width: calc(#{$a} - #{$b});
  height:auto;
  padding:  19px 24px;

  .page2Header{
    @include flex-prop(row,space-between);
    margin-bottom: 24px;

    .page2HeaderLeft{
      @include flex-prop(row,flex-start);
      width:70%;

      .page2HeaderLeftBtn{
        padding-top: 10px;
        background: white;
        width: 106px;
        height:26px;
        @include flex-prop(row,center);
        align-content: center;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        @include font-prop(Roboto,normal,500,14px,16px);
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: #3A3B3F;
        &:hover{
          cursor: pointer;
        }

        img{
          width: 14px;
          height: 14px;
          margin-right: 5px;
        }
      }

      form{
        width:70%;
        input{
          margin-left: 15px;
          width:70%;
          height:36px;
          padding: 0px 10px;
          border: none;
          border-radius: 4px;
          background: #FFFFFF;
          float:left;
        }
      }
    }//end .page2HeaderLeft

    .page2HeaderRightBtn{
      color:white;
      width:140px;
      height:26px;
      text-align: center;
      padding-top: 10px;
      background: #1665D8;//blue
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
      border-radius: 4px;

      &:hover{
        cursor: pointer;
      }
    }


  }//end .page2Header

  .page2Table{
    .tableRow{
      &>div{
        width:5%;
      }
      &:last-child{
        padding-right: 5%;
        // background: red;
      }
    }
    .arrow  {
      &:hover{
        background: #ccddf4;//#F6F9FD;//white with blue
      }
      & > p {
        font-size: 24px;
        color:black;
        width: 10px;
        margin: auto;
        margin-top: 10px;

      }

    }

  }

  }

</style>
