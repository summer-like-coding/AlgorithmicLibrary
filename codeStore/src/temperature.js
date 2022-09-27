var temperatureTrend = function(temperatureA, temperatureB) {
    const arr1 = changeArr(temperatureA);
    const arr2 = changeArr(temperatureB);
    let day = 0;
    let index = 0;
    let dayList = []
    while(index<arr1.length){
        if(arr1[index] === arr2[index]){
            day++
        }else{
            // dayList.push(day)
            day = 0
        }
        dayList.push(day)
        index++
    }
    dayList.sort((a,b)=>b-a)
    return dayList[0]
    // return day 
};

var changeArr = (temperature)=>{
    let arr = []
    for(let i = 0;i<temperature.length-1;i++){
        let left = temperature[i]
        let right = temperature[i+1]
        if(left < right){
            arr.push(1)
        }else if(left === right){
            arr.push(0)
        }else{
            arr.push(-1)
        }
    }
    return arr
}
console.log(temperatureTrend([-14,7,-19,9,13,40,19,15,-18],[3,16,28,32,25,12,13,-6,4]));