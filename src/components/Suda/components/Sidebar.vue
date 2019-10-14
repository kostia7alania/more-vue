<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
        <!-- Sidebar Holder -->
        <nav id="sidebar"> 
                <div :class="{active: toggle}" class=" sidebar2 sidebar-header">
                    <div class="nav-header">
                        <div class="logo-ship"></div>
                        <h3>СУДА</h3>
                    </div>
                </div>
            <div class="ship-sidebar">
                <ul :class="{active: toggle}" class=" sidebar2 list-unstyled components">
                    <li v-for="el in links" :class="{active: curPath(el.path)}" :key="el.path">
                        <a @click="$router.push(el.path)" :href="'#'+el.path">{{el.text}}</a>
                    </li>
                </ul> 
                <div @click="sidebarCollapse"  :class="{active: toggle}" class="sidebarCollapseDiv">
                    <span  class="sidebarCollapse">
                    <span :class="{left: toggle,right: !toggle}"> <i  style="color:green" class="fas fa-angle-double-left"></i> </span></span>
                </div>
            </div>
        </nav>
      
    
    </nav>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                toggle: false
            };
        },
        mounted() { 
            window.r = this.$router; 
        },
        methods: {
            sidebarCollapse(){
                this.toggle=!this.toggle;
                /*
                $(".sidebar2").toggleClass("active");
                $(this).toggleClass("active");*/
            },
            curPath(e) {
                return e == router.history.current.fullPath;
            }
        },
        computed: {
            links() {
                return window.SudaSidebarLinks;
            }
        }
    };
</script>

<style scoped>
    #sidebar{z-index:999} 
</style>

<style> 
.sidebar2.active ~ .ship-sidebar .sidebarCollapseDiv { 
    background-image: url(https://stickeroid.com/uploads/pic/thumb/stickeroid_5992b5178918d.png);
}
.sidebar2.active ~ .ship-sidebar .sidebarCollapseDiv:hover {
    background-image: url(https://stickeroid.com/uploads/pic/thumb/stickeroid_5992b5178918d.png);
}


#sidebar{transition: 1s;  }
#sidebar:hover{
     box-shadow: 4px 3px 20px 0px #6c757d5c
}
.sidebarCollapseDiv:hover {     transition: 1s; 
   box-shadow:   4px 3px 20px 0px rgb(143, 165, 176);
} 
.sidebarCollapseDiv {   
    background-size: contain;
    background-repeat: round;
    
    box-shadow:  15px 0px 20px 0px rgba(143, 165, 155, 0.23);
    background-image: url(https://stickeroid.com/uploads/pic/thumb/stickeroid_598d8099d06ae.png);
    transition: 1s; 
    cursor: pointer;
}
  .ship-sidebar{
     display: flex;
     flex:-ms-input; 
   }
    .logo-ship {
        float: left;
        margin: 2px 10px 0 5px;
        background-image: url(../../../assets\sectionSprite.png);
        background-repeat: no-repeat;
        width: 55px;
        height: 55px;
    }
     
    .sidebar-header {
        background: #78bbf0 !important;
    }
    
    .nav-header {
        display: flex;
        align-items: flex-end;
        color: #032066;
        height: inherit;
        font-family: arial;
        font-size: 13pt;
        font-weight: bold;
    }
    
    
    /*  DEMO STYLE   */
    
    @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
    body {
        font-family: "Poppins", sans-serif;
        background: #fafafa;
    }
    
    p {
        font-family: "Poppins", sans-serif;
        font-size: 1.1em;
        font-weight: 300;
        line-height: 1.7em;
        color: #999;
    }
    
    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }
    
    .navbar {  
        display: contents;
        padding: 0px 0px;
        background: #fff;
        border: none;
        border-radius: 0;
        margin-bottom: 40px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }
     
    .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #ddd;
        margin: 40px 0;
    }
    
    
    /* ---------------------------------------------------
                                    SIDEBAR STYLE
                                ----------------------------------------------------- */
nav#sidebar{ 
    background:#78bbf0 !important;
}


.ship-sidebar{ 
    height: 100%;
}

    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
        perspective: 1500px;
    }
    .sidebar2  {
        min-width: 250px;
        max-width: 250px; 
        background: #8fa5b0;
        color: #fff;
        transition: all 0.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);
        transform-origin: bottom left;
    }
    .sidebar2.active  {
        margin-left: -250px;
        transform: rotateY(100deg);
    }
    
    #sidebar .sidebar-header {
        padding: 20px; 
    }
    
    #sidebar ul.components {
        padding: 20px 0;
        border-bottom: 1px solid #47748b;
    }
    
    #sidebar ul p {
        color: #fff;
        padding: 10px;
    }
    
    #sidebar ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
    }
    
    #sidebar ul li a {
        color: black;
    }    
    #sidebar ul li a:hover {
        color: #7386d5;
        background: #fff;
    }
    #sidebar ul li.active>a,
    a[aria-expanded="true"] {
        color: green; 
    }
    
    a[data-toggle="collapse"] {
        position: relative;
    }
    
    .dropdown-toggle::after {
        display: block;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
    
    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: #6d7fcc;
    }
    
    ul.CTAs {
        padding: 20px;
    }
    
    ul.CTAs a {
        text-align: center;
        font-size: 0.9em !important;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
    }
      
    
    /* ---------------------------------------------------
                                    CONTENT STYLE
                                ----------------------------------------------------- */
    
    #content {
        width: 100%;
        padding: 20px;
        min-height: 100vh;
        transition: all 0.3s;
    }
    
    .sidebarCollapse {
        width: 40px; 
        background: #f5f5f5;
        cursor: pointer;
    }
    
    .sidebarCollapse span {
        width: 80%;
        height: 2px;
        margin: 0 auto;
        display: block;
       /* background: #555;*/
        transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);
        transition-delay: 0.2s;
    }
     
   
    /*.sidebarCollapse span:nth-of-type(2) {
        opacity: 0;
    }
    
    .sidebarCollapse span:last-of-type {
        transform: rotate(-90deg) translate(-90px, -1px);
    }
    */
    .sidebarCollapse .right  {
        transform: none;
        opacity: 1;
        margin: 5px auto;
        transform:translate(0px, -40px);
    }
    .sidebarCollapse .left { 
        transform: rotate(180deg) translate(-3px, 24px);
    }
    
    /* ---------------------------------------------------
                                    MEDIAQUERIES
                                ----------------------------------------------------- */
 
    @media (max-width: 768px) {
   /*     .sidebar2{
            margin-left: -250px;
            transform: rotateY(90deg);
        }
        .sidebar2.active,  {
            margin-left: 0;
            transform: none;
        } 
 */
        .sidebarCollapse span {
            transform: none;
            opacity: 1;
            margin: 5px auto;
        }
        .sidebarCollapse .right {
            margin: 0 auto;
        }

         
    }
</style>
