<template>
    <footer class="footer text-light">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="logo"><img src="/assets/img/footer_logo.png"></div>
                    <div class="social">
                        <a><img src="/assets/img/footer_facebook.png"></a>
                        <a><img src="/assets/img/footer_instagram.png"></a>
                    </div>
                    <div class="copyright">服務時間 星期一至五 上午10點至晚上7點<br>
                        © Copyright 2024 RIYAR Co., Ltd.</div>
                </div>
                <div class="col-4">
                    <ul>
                        <li><a>聯絡我們</a></li>
                        <li><a>司機招募</a></li>
                        <li><a>隱私權聲明</a></li>
                        <li><a>服務條款</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    setup() {
    }
}
</script>

<style scoped>
.footer {
    padding: 20px 0;
    color: #fff;
}
</style>
