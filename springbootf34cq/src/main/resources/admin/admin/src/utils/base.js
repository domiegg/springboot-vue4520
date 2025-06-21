const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootf34cq/",
            name: "springbootf34cq",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootf34cq/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于vue的MOBA类游戏攻略分享平台"
        } 
    }
}
export default base
