const articles = document.querySelectorAll('article')
// 모든 아티클 요소 찾기

articles.forEach((article, index) => {
    article.addEventListener('mouseenter', e => {
        e.currentTarget.querySelector('video').play();
        // 역시 비디오 태그 찾는
    })

    article.addEventListener('mouseleave', e => {
        e.currentTarget.querySelector('video').pause();
    })

})