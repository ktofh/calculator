const firNumber = Number(prompt('первое число')) ;
const ope = prompt('операция (*/+-)');
const lasNumber = Number( prompt('второе число'));

if (ope === '-'){
    alert(firNumber - lasNumber)
} else if( ope === '+'){
    alert(firNumber + lasNumber)
}else if(ope === '*'){
    alert(firNumber * lasNumber)
}else if( ope === '/'){
    alert(firNumber / lasNumber)
}else{
    alert('Такой операции не существует')
}