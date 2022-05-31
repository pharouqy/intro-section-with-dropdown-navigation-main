const humburger = document.getElementById('humburger');
const overlay = document.getElementById('overlay');
const header = document.getElementById('header');
humburger.addEventListener('click', () => {
	if (header.style.right === '0px') {
		header.style.right = '-210px';
		overlay.style.display = 'none';
	} else {
		header.style.right = '0px';
		overlay.style.display = 'block';
	}
});
overlay.addEventListener('click', () => {
	header.style.right = '-210px';
	overlay.style.display = 'none';
});

