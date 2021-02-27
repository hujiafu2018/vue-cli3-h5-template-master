/*
   项目中关于时间的处理一般时间戳转字符串 && 格式化时间
*/


/*
   todo   yy-mm-dd hh:mm:ss   输出相应时间格式
          输出今天星期几
*/


export class DATE {
    constructor (date) {
        this._time = date || new Date()  // 默认格式化当前时间  可以传递相应的时间戳 eg new Date(2019)
    }
    getYear() {
        let date = this._time
        return date.getFullYear()
    }
    getMouth() {
        let date = this._time
        let mouth = date.getMonth()
        return addZero(mouth)
    }
    getDate() {
        let date = this._time
        let day = date.getDate()
        return addZero(day)
    }
    getHours() {
        let date = this._time
        let hours = date.getHours()
        return addZero(hours)
    }
    getMinutes() {
        let date = this._time
        let minute = date.getMinutes()
        return addZero(minute)
    }
    getSeconds() {
        let date = this._time
        let second = date.getSeconds()
        return addZero(second)
    }
    getWeekDay(flag) { // flag 为真去掉星期两字
        let weekArr = ['日','一','二','三','四','五','六'],date = this._time
        let today = !flag ? '星期' + weekArr[date.getDay()] : weekArr[date.getDay()]
        return today
    }
    //格式化时期时间
    fomat({rank = 'ss',cutTypeYear = '-',cutTypeHours = ":"} = {}) {
        /*  年月日时分秒
           @parmas  Object
                    @rank  MM | dd | hh | mm | ss  String
                    @cutTypeYear  |  String
                    @cutTypeHours :  String
           @return String  相应格式的时间字符串
        */
       let dateStr = ''
        switch(rank) {
            case 'MM': 
                dateStr = this.getYear() +cutTypeYear+ this.getMouth();
            break;
            case 'dd':
                dateStr = this.getYear() +cutTypeYear+ this.getMouth() + cutTypeYear + this.getDate();
            break;
            case 'hh':
                dateStr = this.getYear() +cutTypeYear+ this.getMouth() + cutTypeYear + this.getDate()+' '+ this.getHours();
            break;
            case 'mm':
                dateStr = this.getYear() + cutTypeYear+ this.getMouth() + cutTypeYear + this.getDate()+ ' '+ this.getHours() + cutTypeHours + this.getMinutes();
            break;
            case 'ss':
                dateStr = this.getYear() + cutTypeYear+ this.getMouth() + cutTypeYear + this.getDate()+ ' '+ this.getHours() + cutTypeHours + this.getMinutes() +cutTypeHours+ this.getSeconds();
            break;
            default : dateStr = this.getYear()
        }
        return dateStr
    }
}

// 数据不足两位补零
/*
   @parmas number  Number
   @return String | Number 
*/
export const addZero = function(number) {
    if(typeof number === 'number'){
        if(number < 10 && number >= 0){
            return '0' + number
        }else {
            return number
        }
    }else{
        throw new Error('非法数字')
    }
}







