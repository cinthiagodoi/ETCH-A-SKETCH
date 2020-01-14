document.body.onload = createElements(16);

function createElements(gridNumber){
  let containerWrapper = document.getElementById('container-wrapper')
  let gridArea = gridNumber * gridNumber;
  let container = document.createElement('div')
  container.setAttribute('class', 'container');
  container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
  container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`
  containerWrapper.appendChild(container);
   
  for(let i = 0; i < gridArea; i++){
    let item = document.createElement('div')
    container.appendChild(item); 
    item.addEventListener("mouseover", generateColor);
  } 
}

function generateColor(){
  let opacity = Number(this.style.backgroundColor.slice(-4,-1));
  if(opacity < 0.9){
    this.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1}`;
  }
}

function showGrid() {
  let wrapper = document.getElementById('container-wrapper')
  while(wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  } 
}

function resetPage() {
  let gridSize = document.getElementById('grid-size')
  let gridNumber = gridSize.value;
  showGrid();
  createElements(gridNumber)

}
  let button = document.getElementById('resize')
    button.addEventListener("click", resetPage)



