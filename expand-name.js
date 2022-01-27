const h1 = document.querySelector('h1');
const spanElements = h1.getElementsByTagName('span')

let expanded = false;

// uppercase
h1.addEventListener('click', () => {
  for(let i = (expanded ? 1 : 0); i<spanElements.length; i+=(expanded ? 2 : 1)){
    spanElements[i].style.letterSpacing = (expanded ? '' : '0');
  }
  spanElements[0].innerText = (expanded ? 'ni' : 'Ni');
  spanElements[2].style.textTransform = (expanded ? '' : 'uppercase');
  expanded = !expanded;
});
