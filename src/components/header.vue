<template>
    <div class="">
      <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <div class="wrHeader">
      <div class="wrHeaderLeft">
        <div class="wrImg">
          <img src="../img/logo.png" alt="logo">
        </div>
        <div class="wrText">
          <p><span>FREE</span>  See our PRO version for more design components & coded in React follow this link:  <a href="https://devias.io/products/devias-kit-pro" target="_blank">https://devias.io/products/devias-kit-pro</a></p>
        </div>
      </div>
      <div class="wrHeaderRight">
        <img class="headerImg1" src="../img/header1.png" alt="logo">
        <img class="headerImg2" src="../img/header2.png" alt="logo">
      </div>
    </div>

    <aside class="">
      <div class="wrAsideProfile">
        <div class="wrAsideProfileImg">
        <img src="../img/ava.jpg" alt="Profile photo">
        </div>
        <p class="asideProfileName" >Arsen Sirkovych</p>
        <p class="asideProfilePosition">Brain Director</p>
        <span class="asideLine"></span>
      </div>

      <hr >
      <div class="wrAsideNav">
        <!-- <p class="asideProfileName">Menu</p> -->

        <ul>
          <li><a href="#"><img src="../img/Dashboard.jpeg" class="asideNavImg" alt=""><p>Dashboard</p></a></li>
          <!-- <li><router-link to="home"><img src="../img/Dashboard.jpeg" class="asideNavImg" alt=""><p>Dashboard</p></router-lin></li> -->
          <li><router-link to="/page2"><img src="../img/Users.jpeg" alt=""><p>Users</p></router-link></li>
          <!-- <li><a href="#"><img src="/img/Products.jpeg"><p>Products</p></a></li> -->
          <li><a href="#"><img src="../img/Products.jpeg" alt="" ><p>Products</p></a></li>
          <li><a href="#"><img src="../img/Authentification.jpeg"><p>Authentification</p></a></li>
          <li><a href="#"><img src="../img/Typography.jpeg"><p>Typography</p></a></li>
          <li><a href="#"><img src="../img/Icons.jpeg"><p>Icon & Images</p></a></li>

        </ul>
      </div>
      <hr>
      <div class="wrAsideSupport">
        <p class="">Support</p>
        <ul>
          <li><a href="#"><img src="../img/Support.jpeg" class="asideNavImg" alt=""><p>Support</p></a></li>

        </ul>
      </div>

    </aside>
    </div>
</template>

<script>


</script>

<style lang="scss">
@import "../assets/mixin/mixin.scss";
  .wrHeader{
    height: 64px;
    background: #3F51B5;//blue
    @include flex-prop(row,space-between);

    .wrHeaderLeft{
       @include flex-prop(row,space-between);

      .wrImg{
        margin:   auto;
        margin-left: 24px;
        margin-right: 10px;

        &:hover{
          cursor: pointer;
        }
      }

      img{
        margin: auto;
        width: 133px;
        height: 36px;
      }

      .wrText{
        p{
          color:#CDD1EA;
          padding: 8px 8px;
          background-color: rgba(0, 0, 0, 0.23);//lifht blue
          border-radius: 4px;

          span{
            border-radius: 4px;
            color: white;
            background: #26A69A; //green
            padding: 2px 4px;
            margin-right: 10px;
          }

          a{
            text-decoration: none;
            color:white;
          }
        }
      }
    }

    .wrHeaderRight{
      @include flex-prop(row,space-between);
      padding:10px;
      margin: auto;
      margin-right: 0px;

      img{
        margin:10px;
        &:hover{
          cursor: pointer;
        }
      }

      .headerImg1{
        width: calc(16.01px);
        height: calc(19.51px);
      }
      .headerImg2{
        width: calc(18.96px);
        height: calc(18.96px);
      }
    }
  }

  aside{
    padding: 16px;
    background: #FFFFFF;//white
    width:calc(238px);//270-32=padding
    height:625px;
    float:left;
    border:solid 1px #E4E7EB;
    border-top: none;

    .wrAsideProfileImg{
      margin:69px;
      margin-top: 24px;
      margin-bottom: 20px;

    }

    img{
      width: 100px;
      height: 100px;
      margin:auto;
      object-position: center center;
      border-radius: 50%;


    }

    .asideProfileName{
      @include font-prop(Roboto,normal,normal,16px,20px);
      text-align: center;
      letter-spacing: -0.05px;
      color: #3A3B3F;//black
      margin:4px 0px;
    }

  .asideProfilePosition{
    height: 16px;
    @include font-prop(Roboto,normal,normal,12px,16px);
    text-align: center;
    color: #9EA0A5;//grey
    margin:4px 0px;
    }
    hr{
      width:238px;
      height:1px;
      background: #E4E7EB;//gray
      border: 0.5px solid #E4E7EB;
    }


      ul{
        padding-left: 15px;

        li{
          @include flex-prop(row,space-between);
          margin:20px 5px;
          padding:2px;

          a{
            width:100%;
            text-decoration: none;
            @include font-prop(Roboto,normal,500,14px,20px);
            letter-spacing: -0.05px;
            color: #66788A;
            margin: 0px 10px;

            @include flex-prop(row,flex-start);


            p{
              margin: 0px 10px ;
            }
          }

          img{
            width: 18.96px;
            height: 18.96px;
            margin: 0px 5px;
          }
          &:hover{
            background: #dfdeff;
            border-radius: 10px;
          }
        }

      }
      .wrAsideSupport{
        & p:first-child {
          @include font-prop(Roboto,normal,500,13px,15px);
          color: rgba(0, 0, 0, 0.328974);
          margin-left: 20px;
        }
      }

  }

</style>
