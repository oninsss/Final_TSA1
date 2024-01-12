var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('click', function(){
	darkMode.classList.toggle('active');
	content.classList.toggle('night');
})