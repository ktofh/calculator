const firNumber = Number(prompt('первое число')) ;
const ope = prompt('операция (*/+-)');
const lasNumber = Number( prompt('второе число'));
parseFloat(firNumber);
parseFloat(lasNumber);
if (ope === '-'){
    alert(`Ваш результат ${firNumber - lasNumber} `)
} else if( ope === '+'){
    alert(`Ваш результат ${firNumber + lasNumber} `)
}else if(ope === '*'){
    alert(`Ваш результат  ${firNumber * lasNumber} `)
}else if( ope === '/'){
    alert(`Ваш результат  ${firNumber / lasNumber} `)
}else{
    alert('Такой операции не существует')
}