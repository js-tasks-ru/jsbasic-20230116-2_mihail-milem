function highlight(table) {
  const tableRow = table.querySelectorAll('tr');
  let statusPosition;
  let genderPosition;
  let agePosition;

  // Цикл для добавлении номера позиции
  for(let i = 0; i < tableRow[0].children.length; i++){
    if(tableRow[0].children[i].innerHTML === 'Status'){
      statusPosition = i
    }
    if(tableRow[0].children[i].innerHTML === 'Gender'){
      genderPosition = i
    }
    if(tableRow[0].children[i].innerHTML === 'Age'){
      agePosition = i
    }
  }

  // Цикл для работы с классами и аттрибутами
  for(let i = 1; i < tableRow.length; i++){
    for(let j = 0; j < tableRow[i].children.length; j++){
    
      // Цвет ряда, в зависимости от значения data-available
      if(tableRow[i].children[j].dataset.available === 'true'){
        tableRow[i].classList.add('available')
      }
      if(tableRow[i].children[j].dataset.available === 'false'){
        tableRow[i].classList.add('unavailable')
      }
      if(!tableRow[i].children[statusPosition].hasAttribute('data-available')){
        tableRow[i].setAttribute('hidden', 'hidden')
      }

      //Класс male/female в зависимости от содержимого ячейки Gender
      if(tableRow[i].children[genderPosition].innerHTML === 'm'){
        tableRow[i].classList.add('male')
      }else{
        tableRow[i].classList.add('female')
      }

      //Добавление inline-стиля если значение ячейки Age меньше 18. 
      if(tableRow[i].children[agePosition].innerHTML < 18){
        tableRow[i].style.textDecoration = 'line-through'
      }
    }
  }
}
