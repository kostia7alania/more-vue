<template>
    <!-- Sidebar Holder -->
    <nav id="sidebar">
        <div class="sidebar-header">
    
            <div class="nav-header">
                <div class="logo-ship"></div>
                <h3>СУДА</h3>
            </div>
    
        </div>
    
        <ul class="list-unstyled components">
    
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li><a href="#">Home 1</a></li>
                    <li><a href="#">Home 2</a></li>
                    <li><a href="#">Home 3</a></li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                </ul>
            </li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {}
        },
        computed:{
            links() {
                let pref = "/ptl/web/mcc/";
               let arr = [
                    {text: "МЕСТОПОЛОЖЕНИЕ СУДНА", url: "position" },
                    {text: "ИСТОРИЯ ДВИЖЕНИЯ СУДНА",url: "track" },
                    {text: "ДАННЫЕ О СУДНЕ",url: "vessel" },
                    {text: "РЕЧНОЙ ФЛОТ (МОРИНФОЦЕНТР)",url: "90" },
                    {text: "БАЗА ДАННЫХ РОССИЙСКОГО РЕЧНОГО РЕГИСТРА",url: "rrr" },
                    {text: "БАЗА ДАННЫХ РОССИЙСКОГО МОРСКОГО РЕГИСТРА",url: "rmrs" },
                    {text: "РЕГИСТРАЦИЯ ССОО",url:"ssoo"},
                    {text: "РЕГИСТРАЦИЯ ОСДР",url:"osdr"},
                    {text: "РЕГИСТРАЦИЯ АРБ",url:"arb"}
                ]
                arr.map((el,i)=>arr[i].url=pref+arr[i].url);
                return arr;
            }
        }
    }
</script>

<style>
.sidebar-header{
        background: #78BBF0 !important;
}
.nav-header{
    display: flex;
    align-items: flex-end; 
    
    color: #032066;
    height: inherit;
    font-family: arial;
    font-size: 13pt;
    font-weight: bold;
}
.logo-ship {
    float: left;
    margin: 2px 10px 0 5px;
    background-image: url(../../../assets\sectionSprite.png);
    background-repeat: no-repeat;
    width: 55px;
    height: 55px;
}









    /*
                DEMO STYLE
            */
    
    @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
    body {
        font-family: 'Poppins', sans-serif;
        background: #fafafa;
    }
    
    p {
        font-family: 'Poppins', sans-serif;
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
        padding: 15px 10px;
        background: #fff;
        border: none;
        border-radius: 0;
        margin-bottom: 40px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .navbar-btn {
        box-shadow: none;
        outline: none !important;
        border: none;
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
    
    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
        perspective: 1500px;
    }
    
    #sidebar {
        min-width: 250px;
        max-width: 250px;
        background: #7386D5;
        color: #fff;
        transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
        transform-origin: bottom left;
    }
    
    #sidebar.active {
        margin-left: -250px;
        transform: rotateY(100deg);
    }
    
    #sidebar .sidebar-header {
        padding: 20px;
        background: #6d7fcc;
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
    
    #sidebar ul li a:hover {
        color: #7386D5;
        background: #fff;
    }
    
    #sidebar ul li.active>a,
    a[aria-expanded="true"] {
        color: #fff;
        background: #6d7fcc;
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
    
    a.download {
        background: #fff;
        color: #7386D5;
    }
    
    a.article,
    a.article:hover {
        background: #6d7fcc !important;
        color: #fff !important;
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
    
    #sidebarCollapse {
        width: 40px;
        height: 40px;
        background: #f5f5f5;
        cursor: pointer;
    }
    
    #sidebarCollapse span {
        width: 80%;
        height: 2px;
        margin: 0 auto;
        display: block;
        background: #555;
        transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
        transition-delay: 0.2s;
    }
    
    #sidebarCollapse span:first-of-type {
        transform: rotate(45deg) translate(2px, 2px);
    }
    
    #sidebarCollapse span:nth-of-type(2) {
        opacity: 0;
    }
    
    #sidebarCollapse span:last-of-type {
        transform: rotate(-45deg) translate(1px, -1px);
    }
    
    #sidebarCollapse.active span {
        transform: none;
        opacity: 1;
        margin: 5px auto;
    }
    
    
    /* ---------------------------------------------------
                MEDIAQUERIES
            ----------------------------------------------------- */
    
    @media (max-width: 768px) {
        #sidebar {
            margin-left: -250px;
            transform: rotateY(90deg);
        }
        #sidebar.active {
            margin-left: 0;
            transform: none;
        }
        #sidebarCollapse span:first-of-type,
        #sidebarCollapse span:nth-of-type(2),
        #sidebarCollapse span:last-of-type {
            transform: none;
            opacity: 1;
            margin: 5px auto;
        }
        #sidebarCollapse.active span {
            margin: 0 auto;
        }
        #sidebarCollapse.active span:first-of-type {
            transform: rotate(45deg) translate(2px, 2px);
        }
        #sidebarCollapse.active span:nth-of-type(2) {
            opacity: 0;
        }
        #sidebarCollapse.active span:last-of-type {
            transform: rotate(-45deg) translate(1px, -1px);
        }
    }
</style>
