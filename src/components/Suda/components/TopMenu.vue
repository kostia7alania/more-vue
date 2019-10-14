<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
    
            <!--
                <button type="button" id="sidebarCollapse" class="navbar-btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button> -->
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fas fa-align-justify"></i>
                                </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Карта</a></li>
                    <li class="nav-item active"><a class="nav-link" href="#">Суда</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Порты</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Силы и средства спасения</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Предупреждения</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Специальная информация</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Аналитика и статистика</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Документы</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Инспектор</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
      export default {
          name: 'TopMenu',
          data() {
              return {}
          },
          mounted() {}
      }
</script>

<style>
    #navbarSupportedContent {
        padding-left: 10px;
    }
</style>
 