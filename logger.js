(function() {
    console.log(Date.now())

    // fetch('https://game-sport.s3-ap-east-1.amazonaws.com/static/analysis-json/domains-2q.json')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json(); // 解析 JSON 数据
    //     })
    //     .then(data => {
    //         const list = data.list;
    //         sessionStorage.setItem('base-url', `${list[1].api_url}/member`);
    //         console.log(data.list); // 处理数据
    //     })
    //     .catch(error => {
    //         console.error('Fetch error:', error); // 处理错误
    //     });
    function isMobile() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    }

    if (isMobile()) {
        // console.log("当前是H5模式");
        if (window.location.host.at(0) !== 'm') {
            window.location.href = "https://m.2q.fit";
        }
    }
    // else {
    //     // console.log("当前是PC模式");
    //     if (window.location.host.at(0) === 'm') {
    //         window.location.href = "https://2q.fit";
    //     }
    // }
})()
