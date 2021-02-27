/*
    产生一个随机数据和一个随机颜色
*/

/*
生成随机数
@parmas mixNumber    Number   最小值
        maxNumber    Number   最大值
        counts       Number   0~20之间尽量 小数数位
@return randomNumber Number
*/

export const randomNumber = function(minNumber,maxNumber,counts = 0) {
    if(typeof minNumber === 'number' && typeof maxNumber) {
        let random = Math.random()* (maxNumber - minNumber + 1)
        return random.toFixed(counts)  //四舍五入保留小数位
    }else {
        throw new Error('非法数字')
    }
}
/*
生成随机颜色
@parmas empty
@return randomColor String  16进制颜色
*/
export const randomColor = function(){
    let random16 = Math.random().toString(16)
    return '#' + random16.slice(-6)
}