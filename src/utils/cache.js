

/*
   about   localstorage   cookies
*/
export const LocalStorage = {
    isLocalStorage(){
        if(!window.localStorage){
            throw new Error('你的浏览器暂不支持localStorage')
        }
    },
    get(key) {
        this.isLocalStorage()
        try{
            let jsonObj = JSON.parse(localStorage.getItem(key))
            if(typeof jsonObj === 'object' && jsonObj){//判断获取的缓存格式是否是json格式
                return jsonObj
            }else{
                return localStorage.getItem(key)
            }
        }catch{
            return localStorage.getItem(key)
        }
    },
    set(key,value){
        this.isLocalStorage()
        localStorage.setItem(key,value)
    },
    remove(key){
        this.isLocalStorage()
        localStorage.removeItem(key)
    }
}