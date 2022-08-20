const lengthele=document.getElementById("length");
const upperele=document.getElementById("upper");
const lowerele=document.getElementById("lower");
const numbericele=document.getElementById("numeric");
const symbolsele=document.getElementById("symbols");
const button1=document.getElementById("button1");
const result=document.getElementById("result");

const  uppercase=getArray("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
const lowercase=getArray("abcdefghijklmnopqrstuvwxyz")
const numbers=getArray("0123456789")
const symbollist=getArray("@_-#")

function getArray(strn){
    return strn.split("")
}


button1.addEventListener("click", () => {
    const length_pwd=lengthele.value;
    const upper_check=upperele.checked
    const lower_check=lowerele.checked
    const symbols_check=symbolsele.checked
    const numeric_check=numbericele.checked
    
    result.innerText=generatepassword(length_pwd,upper_check,lower_check,symbols_check,numeric_check);
});9


function generatepassword(length_pwd,upper_check,lower_check,symbols_check,numeric_check){
    if(length_pwd==0) {
        alert("Invalid length..!! Re-insert...")
        return "";
    }
    if(length_pwd>50){
        alert("Please choose length between 1-50..!!")
        return ""
    }
    let arr=[],count=0;
    if(upper_check){
        arr=arr.concat(uppercase);
        count++;
    } 
    if(lower_check) {
        arr=arr.concat(lowercase);
        count++;
    }
    if(numeric_check) {
        arr=arr.concat(numbers);
        count++;
    }
    if(symbols_check) {
        arr=arr.concat(symbollist);
        count++;
    }
    
    if(count > length_pwd) {
        alert("Please increase the length..")
        return ""
    }

    if(arr.length == 0) {
        alert("Please choose any option..!!")
        return ""
    }
    else{
        const res=[];
        if(upper_check) {
            const ele=Math.floor(Math.random()*uppercase.length)
            res.push(uppercase[ele]);
        }
        if(lower_check) {
            const ele=Math.floor(Math.random()*lowercase.length)
            res.push(lowercase[ele]);
        }
        if(numeric_check) {
            const ele=Math.floor(Math.random()*numbers.length)
            res.push(numbers[ele]);
        }
        if(symbols_check) {
            const ele=Math.floor(Math.random()*symbollist.length)
            res.push(symbollist[ele]);
        }
        for(let i=0;i<length_pwd-count;i++) {
            const ele=Math.floor(Math.random()*arr.length)
            res.push(arr[ele]);
        }
        var ans = shufflearray(res);


        return ans.join("");
    }
}
function shufflearray(res){
    for(var i=res.length-1;i>0;i--){
        var j= Math.floor(Math.random()*(i+1));
        var temp=res[i];
        res[i]=res[j];
        res[j]=temp;
    }
    return res;
}