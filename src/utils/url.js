/*  处理url参数 
    具体包括：
    agreement：
        @parmas empty
        @return String
    host：
        @parmas empty
        @return String
    port:
        @parmas empty
        @return String
    path:
        @parmas empty
        @return String
    query:
        @parmas key?
        @return String || Obj
*/

export default class URL {
    constructor(url){

        this.url = url || 'http://www.baidu.html:8080/index.html/user?key1=value1&key2=value2'
    }
    //获取协议 及http或者https
    getAgreement() {
        let agreement = '',url = this.url;
        let index = url.indexOf(':')
        agreement = url.substring(0,index)
        return agreement
    }
    //获取主机名
    getHost() {
        let host = '',url = this.url;
        let noAgrUrl = url.split('//')[1]
        let index = noAgrUrl.indexOf('/');
        host = noAgrUrl.substring(0,index).split(':')[0];
        return host
    }
    //获取端口号
    getPort() {
        let port = '',url = this.url;
        let noAgrUrl = url.split('//')[1]
        let index = noAgrUrl.indexOf('/');
        port = noAgrUrl.substring(0,index).split(':')[1];
        return port
    }
    //获取路径名 path
    getPath() {
        let path = '',url = this.url;
        let noAgrUrl = url.split('//')[1]
        let index1 = noAgrUrl.indexOf('/');
        let index2 = noAgrUrl.indexOf('?');
        path = noAgrUrl.substring(index1+1,index2);
        return path
    }
    // 获取query  return Object
    // 如果携带key获取query将返回响应的value值
    getQuery(key) {
        let query = null,url = this.url;
        let queryStr = decodeURIComponent(url.split('?')[1])
        let newQuery = '{"'+queryStr.replace(/=/g,":").replace(/&/g,",").replace(/:/g,'":"').replace(/,/g,'","')+'"}'
        query = key ? JSON.parse(newQuery)[key] : JSON.parse(newQuery)
        return query
    }
}
