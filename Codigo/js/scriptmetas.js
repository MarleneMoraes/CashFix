var btn = document.getElementById('#nova-meta');
var container1 = document.querySelector('.container1');

btn.addEventListener('click', function() {
    
  if(container1.style.display === 'block') {
      container1.style.display = 'none';
  } else {
      container1.style.display = 'block';
  }
});

var btn = document.getElementById('editar-meta');
var container2 = document.querySelector('.container2');

btn.addEventListener('click', function() {
    
  if(container2.style.display === 'block') {
      container2.style.display = 'none';
  } else {
      container2.style.display = 'block';
  }
});