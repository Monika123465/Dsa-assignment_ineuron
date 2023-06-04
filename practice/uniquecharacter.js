
var firstUniqueChar=function(s){
    for(let i=0;i<s.length;i++){
        let flag=true
        for(let j=i+1;j<s.length;j++){
            if(s[i]==s[j]){
                flag=false
                break
            }
        }
        if(flag==true){
            return i
        }
    }
    return -1
}

let s = "leetcode"
console.log(firstUniqueChar(s))