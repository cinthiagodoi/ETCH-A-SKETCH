document.body.onload = createElements();

function createElements(){
  let container = document.createElement('div');
  container.setAttribute('class', 'container');
  document.body.appendChild(container);
    for (let j = 0; j < 16; j++) {
      let row = document.createElement("div");
        row.setAttribute('class','row')
        container.appendChild(row);
          for (let i = 0; i < 16; i++) {
            let column = document.createElement("div");
            column.setAttribute('class', 'column') 
            row.appendChild(column)
          }
    }
}

let gridSpace = document.getElementsByClassName('column')

  for(h=0; h < gridSpace.length; h++){
    gridSpace[h].addEventListener("mouseover", function(event){
      event.target.style.backgroundColor = "black"
      console.log('abacaxi') 
    },false );
  } 

  let button = document.getElementById('clean')
    button.addEventListener("click", function cleanGridArea(){
      
      prompt ('Put a new grid number')
    },false)
	