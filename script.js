'use strict';

const key1 = document.querySelector('.one');
const key2 = document.querySelector('.two');
const key3 = document.querySelector('.three');
const key4 = document.querySelector('.four');
const key5 = document.querySelector('.five');
const key6 = document.querySelector('.six');
const key7 = document.querySelector('.seven');
const key8 = document.querySelector('.eight');
const key9 = document.querySelector('.nine');
const key0 = document.querySelector('.zero');

const keyC = document.querySelector('.c');
const keyPoint = document.querySelector('.point');

const keyPlus = document.querySelector('.plus');
const keyMinus = document.querySelector('.minus');
const keyMultiply = document.querySelector('.multiply');
const keyDivide = document.querySelector('.divide');
const keyEqual = document.querySelector('.equal');

const currentValue = document.getElementById('value');

let arrayNumbers = [0];
let value = 0;
let textInfo = '0';
let res = 0;
let stringifyRes = '';

document.addEventListener('keydown', function (e) {

    if(e.key === '1') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '1');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '1';
        textInfo += 1;
    }else{
        currentValue.textContent += 1;
        textInfo += 1;
    }
}

    if(e.key === '2') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '2');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '2';
        textInfo += 2;
    }else{
        currentValue.textContent += 2;
        textInfo += 2;
    }
}

    if(e.key === '3') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '3');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '3';
        textInfo += 3;
    }else{
        currentValue.textContent += 3;
        textInfo += 3;
    }
}

    if(e.key === '4') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '4');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '4';
        textInfo += 4;
    }else{
        currentValue.textContent += 4;
        textInfo += 4;
    }
}

    if(e.key === '5') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '5');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '5';
        textInfo += 5;
    }else{
        currentValue.textContent += 5;
        textInfo += 5;
    }
}

    if(e.key === '6') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '6');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '6';
        textInfo += 6;
    }else{
        currentValue.textContent += 6;
        textInfo += 6;
    }
}

    if(e.key === '7') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '7');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '7';
        textInfo += 7;
    }else{
        currentValue.textContent += 7;
        textInfo += 7;
    }
}

    if(e.key === '8') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '8');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '8';
        textInfo += 8;
    }else{
        currentValue.textContent += 8;
        textInfo += 8;
    }
}

    if(e.key === '9') {
        if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '9');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '9';
        textInfo += 9;
    }else{
        currentValue.textContent += 9;
        textInfo += 9;
    }
}

    if(e.key === '0') {
        if(textInfo != '0')
           {
            if(currentValue.textContent === stringifyRes){
                res = 0;
                arrayNumbers.pop();
                currentValue.textContent = "" + 0;
                textInfo += 0;
            }else{     
            arrayNumbers.pop();
            currentValue.textContent += 0;
            textInfo += 0;
        }  
    }
}

    if(e.key === 'C' || e.key === 'c') {
        if(currentValue.textContent != 0){
            currentValue.textContent = 0;
            arrayNumbers = [0];
            textInfo = '0';
            res = 0;
         }
    }

    if(e.key === '.') {
        if(!textInfo.includes('.') && textInfo == '0'){
            currentValue.textContent += ",";
            textInfo += '.';
        }else if(!textInfo.includes('.') && textInfo != ''){
            currentValue.textContent += ",";
            textInfo += '.';
         }
    }

    if(e.key === '+') {
        if((currentValue.textContent != "Not a number" &&  !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")) && currentValue.textContent == res){
            if(!currentValue.textContent.includes("-")){
                textInfo = '';
                currentValue.textContent += "+";
                res = 0;
            }else if(res <= 0){
                textInfo = '';
                currentValue.textContent += "+";
                res = 0;
            }
         }else if(currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")){
            if(!currentValue.textContent.includes("-")){
                value = textInfo;
                arrayNumbers.push(Number(value));
                textInfo = '';
                currentValue.textContent += "+";
            }
         }
    }

    if(e.key === '-') {
        if(currentValue.textContent != "Not a number" && (!currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")) && currentValue.textContent == res){
            if(!currentValue.textContent.includes("-")){
                textInfo = '';
                currentValue.textContent += "-";
                res = 0;
            }else if(res <= 0){
                textInfo = '';
                currentValue.textContent += "-";
                res = 0;
            }
         }else if(currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")){
            if(!currentValue.textContent.includes("-")){
                value = textInfo;
                arrayNumbers.push(Number(value));
                textInfo = '';
                currentValue.textContent += "-";
            }
         }
    }

    if(e.key === '*' || e.key === 'x' || e.key === 'X') {
        if((currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")) && currentValue.textContent == res && res != 0){
            if(!currentValue.textContent.includes("-")){
                textInfo = '';
                currentValue.textContent += "x";
                res = 0;
            }else if(res <= 0){
                textInfo = '';
                currentValue.textContent += "x";
                res = 0;
            }
         }else if(currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷") && textInfo != 0){
            if(!currentValue.textContent.includes("-")){
                value = textInfo;
                arrayNumbers.push(Number(value));
                textInfo = '';
                currentValue.textContent += "x";
            }
         }
    }

    if(e.key === '/') {
        if((currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")) && currentValue.textContent == res){
            if(!currentValue.textContent.includes("-")){
                textInfo = '';
                currentValue.textContent += "÷";
                res = 0;
            }else if(res <= 0){
                textInfo = '';
                currentValue.textContent += "÷";
                res = 0;
            }
         }else if(currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("-") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")){
            if(!currentValue.textContent.includes("-")){
                value = textInfo;
                arrayNumbers.push(Number(value));
                textInfo = '';
                currentValue.textContent += "÷";
            }
         }        
    }

    if(e.key === '=' || e.key === 'Enter') {
        if(currentValue.textContent.includes("+")){
            value = textInfo;
            arrayNumbers.push(Number(value));
            for(let i = 0; i < arrayNumbers.length; i++){
                res += arrayNumbers[i];
                stringifyRes = `${res}`;
            }
            if(stringifyRes.includes('.')){
                stringifyRes = `${res.toFixed(3)}`;
                stringifyRes = stringifyRes.replace('.', ','); 
            }
            arrayNumbers = [];
            currentValue.textContent = stringifyRes;
            arrayNumbers.push(res);
            textInfo = '';
         }else if(currentValue.textContent.includes("-")){
            value = textInfo;
            arrayNumbers.push(Number(value));
            for(let i = 0; i < arrayNumbers.length-1; i++){
                if(currentValue.textContent.includes("x")){
                    res = arrayNumbers[i] * arrayNumbers[i+1];
                    stringifyRes = `${res}`;
                }else if(currentValue.textContent.includes("÷")){
                    res = arrayNumbers[i] / arrayNumbers[i+1];
                    stringifyRes = `${res}`;
                }else{
                    res = arrayNumbers[i] - arrayNumbers[i+1];
                    stringifyRes = `${res}`;
                }
            }
            if(stringifyRes.includes('.')){
                stringifyRes = `${res.toFixed(3)}`;
                stringifyRes = stringifyRes.replace('.', ',');
            }
            arrayNumbers = [];
            currentValue.textContent = stringifyRes;
            arrayNumbers.push(res);
            textInfo = '';
         }else if(currentValue.textContent.includes("x")){
            value = textInfo;
            arrayNumbers.push(Number(value));
            for(let i = 0; i < arrayNumbers.length-1; i++){
                res = arrayNumbers[i] * arrayNumbers[i+1];
                stringifyRes = `${res}`;
            }
            if(stringifyRes.includes('.')){
                stringifyRes = `${res.toFixed(3)}`;
                stringifyRes = stringifyRes.replace('.', ',');
            }
            arrayNumbers = [];
            currentValue.textContent = stringifyRes;
            arrayNumbers.push(res);
            textInfo = '';
         }else if(currentValue.textContent.includes("÷")){
            value = textInfo;
            arrayNumbers.push(Number(value));
            for(let i = 0; i < arrayNumbers.length-1; i++){
                res = arrayNumbers[i] / arrayNumbers[i+1];
                stringifyRes = `${res}`;
                console.log(res);
            }
            if(res == 'Infinity' || res == 0){
                currentValue.textContent = "Not a number";
                stringifyRes = currentValue.textContent;
                textInfo = '';
            }else{
                if(stringifyRes.includes('.')){
                    stringifyRes = `${res.toFixed(3)}`;
                    stringifyRes = stringifyRes.replace('.', ',');
                }
            arrayNumbers = [0];
            currentValue.textContent = stringifyRes;
            arrayNumbers.push(res);
            textInfo = '';
            }
         }
    }
});

key1.addEventListener('click', function (e) {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '1');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '1';
        textInfo += 1;
    }else{
        currentValue.textContent += 1;
        textInfo += 1;
    }
});

key2.addEventListener('click', function() {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '2');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '2';
        textInfo += 2;
    }else{
        currentValue.textContent += 2;
        textInfo += 2;
    }
});

key3.addEventListener('click', function() {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '3');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '3';
        textInfo += 3;
    }else{
        currentValue.textContent += 3;
        textInfo += 3;
    }
});

key4.addEventListener('click', function() {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '4');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '4';
        textInfo += 4;
    }else{
        currentValue.textContent += 4;
        textInfo += 4;
    }
});

key5.addEventListener('click', function() {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '5');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '5';
        textInfo += 5;
    }else{
        currentValue.textContent += 5;
        textInfo += 5;
    }
});

key6.addEventListener('click', function() {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '6');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '6';
        textInfo += 6;
    }else{
        currentValue.textContent += 6;
        textInfo += 6;
    }
});

key7.addEventListener('click', function() {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '7');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '7';
        textInfo += 7;
    }else{
        currentValue.textContent += 7;
        textInfo += 7;
    }
});

key8.addEventListener('click', function() {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '8');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '8';
        textInfo += 8;
    }else{
        currentValue.textContent += 8;
        textInfo += 8;
    }
});

key9.addEventListener('click', function() {
    if(textInfo == '0'){
        arrayNumbers.pop();
        textInfo = textInfo.replace('0', '9');
        currentValue.textContent = currentValue.textContent.slice(0, -1);
        currentValue.textContent += textInfo;
    }else if(currentValue.textContent === stringifyRes){
        res = 0;
        arrayNumbers.pop();
        currentValue.textContent = "" + '9';
        textInfo += 9;
    }else{
        currentValue.textContent += 9;
        textInfo += 9;
    }
});

key0.addEventListener('click', function() {
    if(textInfo != '0')
    {
     if(currentValue.textContent === stringifyRes){
         res = 0;
         arrayNumbers.pop();
         currentValue.textContent = "" + 0;
         textInfo += 0;
     }else{     
     arrayNumbers.pop();
     currentValue.textContent += 0;
     textInfo += 0;
 }  
}
});

keyC.addEventListener('click', function() {
    if(currentValue.textContent != 0){
        currentValue.textContent = 0;
        arrayNumbers = [0];
        textInfo = '0';
        res = 0;
     }
});

keyPoint.addEventListener('click', function() {
    if(!textInfo.includes('.') && textInfo == '0'){
        currentValue.textContent += ",";
        textInfo += '.';
    }else if(!textInfo.includes('.') && textInfo != ''){
        currentValue.textContent += ",";
        textInfo += '.';
     }
});

keyPlus.addEventListener('click', function() {
    if((currentValue.textContent != "Not a number" &&  !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")) && currentValue.textContent == res){
        if(!currentValue.textContent.includes("-")){
            textInfo = '';
            currentValue.textContent += "+";
            res = 0;
        }else if(res <= 0){
            textInfo = '';
            currentValue.textContent += "+";
            res = 0;
        }
     }else if(currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")){
        if(!currentValue.textContent.includes("-")){
            value = textInfo;
            arrayNumbers.push(Number(value));
            textInfo = '';
            currentValue.textContent += "+";
        }
     }
});

keyMinus.addEventListener('click', function() {
    if(currentValue.textContent != "Not a number" && (!currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")) && currentValue.textContent == res){
        if(!currentValue.textContent.includes("-")){
            textInfo = '';
            currentValue.textContent += "-";
            res = 0;
        }else if(res <= 0){
            textInfo = '';
            currentValue.textContent += "-";
            res = 0;
        }
     }else if(currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")){
        if(!currentValue.textContent.includes("-")){
            value = textInfo;
            arrayNumbers.push(Number(value));
            textInfo = '';
            currentValue.textContent += "-";
        }
     }
});

keyMultiply.addEventListener('click', function() {
    if((currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")) && currentValue.textContent == res && res != 0){
        if(!currentValue.textContent.includes("-")){
            textInfo = '';
            currentValue.textContent += "x";
            res = 0;
        }else if(res <= 0){
            textInfo = '';
            currentValue.textContent += "x";
            res = 0;
        }
     }else if(currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷") && textInfo != 0){
        if(!currentValue.textContent.includes("-")){
            value = textInfo;
            arrayNumbers.push(Number(value));
            textInfo = '';
            currentValue.textContent += "x";
        }
     }
});

keyDivide.addEventListener('click', function() {
    if((currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")) && currentValue.textContent == res){
        if(!currentValue.textContent.includes("-")){
            textInfo = '';
            currentValue.textContent += "÷";
            res = 0;
        }else if(res <= 0){
            textInfo = '';
            currentValue.textContent += "÷";
            res = 0;
        }
     }else if(currentValue.textContent != "Not a number" && !currentValue.textContent.includes("+") && !currentValue.textContent.includes("-") && !currentValue.textContent.includes("x") && !currentValue.textContent.includes("÷")){
        if(!currentValue.textContent.includes("-")){
            value = textInfo;
            arrayNumbers.push(Number(value));
            textInfo = '';
            currentValue.textContent += "÷";
        }
     }     
});


keyEqual.addEventListener('click', function() {
    if(currentValue.textContent.includes("+")){
        value = textInfo;
        arrayNumbers.push(Number(value));
        for(let i = 0; i < arrayNumbers.length; i++){
            res += arrayNumbers[i];
            stringifyRes = `${res}`;
        }
        if(stringifyRes.includes('.')){
            stringifyRes = `${res.toFixed(3)}`;
            stringifyRes = stringifyRes.replace('.', ',');
        }
        arrayNumbers = [];
        currentValue.textContent = stringifyRes;
        arrayNumbers.push(res);
        textInfo = '';
     }else if(currentValue.textContent.includes("-")){
        value = textInfo;
        arrayNumbers.push(Number(value));
        for(let i = 0; i < arrayNumbers.length-1; i++){
            if(currentValue.textContent.includes("x")){
                res = arrayNumbers[i] * arrayNumbers[i+1];
                stringifyRes = `${res}`;
            }else if(currentValue.textContent.includes("÷")){
                res = arrayNumbers[i] / arrayNumbers[i+1];
                stringifyRes = `${res}`;
            }else{
                res = arrayNumbers[i] - arrayNumbers[i+1];
                stringifyRes = `${res}`;
            }
        }
        if(stringifyRes.includes('.')){
            stringifyRes = `${res.toFixed(3)}`;
            stringifyRes = stringifyRes.replace('.', ',');
        }
        arrayNumbers = [];
        currentValue.textContent = stringifyRes;
        arrayNumbers.push(res);
        textInfo = '';
     }else if(currentValue.textContent.includes("x")){
        value = textInfo;
        arrayNumbers.push(Number(value));
        for(let i = 0; i < arrayNumbers.length-1; i++){
            res = arrayNumbers[i] * arrayNumbers[i+1];
            stringifyRes = `${res}`;
        }
        if(stringifyRes.includes('.')){
            stringifyRes = `${res.toFixed(3)}`;
            stringifyRes = stringifyRes.replace('.', ',');
        }
        arrayNumbers = [];
        currentValue.textContent = stringifyRes;
        arrayNumbers.push(res);
        textInfo = '';
     }else if(currentValue.textContent.includes("÷")){
        value = textInfo;
        arrayNumbers.push(Number(value));
        for(let i = 0; i < arrayNumbers.length-1; i++){
            res = arrayNumbers[i] / arrayNumbers[i+1];
            stringifyRes = `${res}`;
        }
        if(res == 'Infinity' || res == 0){
            currentValue.textContent = "Not a number";
            stringifyRes = currentValue.textContent;
            textInfo = '';
        }else{
            if(stringifyRes.includes('.')){
                stringifyRes = `${res.toFixed(3)}`;
                stringifyRes = stringifyRes.replace('.', ',');
            }
        arrayNumbers = [0];
        currentValue.textContent = stringifyRes;
        arrayNumbers.push(res);
        textInfo = '';
        }
     }
});

