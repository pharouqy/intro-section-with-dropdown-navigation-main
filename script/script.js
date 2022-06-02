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

const dropDown = document.querySelector('#header>div>nav>ul>li:nth-child(2)');
const dropDownList = document.querySelector(
	'#header>div>nav>ul>li:nth-child(2)>ul',
);
dropDown.addEventListener('click', () => {
	if (dropDownList.style.display === 'block') {
		dropDownList.style.display = 'none';
	} else {
		dropDownList.style.display = 'block';
	}
});
const dropDownF = document.querySelector('#header>div>nav>ul>li:nth-child(1)');
const dropDownFList = document.querySelector(
	'#header>div>nav>ul>li:nth-child(1)>ul',
);
dropDownF.addEventListener('click', () => {
	if (dropDownFList.style.display === 'block') {
		dropDownFList.style.display = 'none';
	} else {
		dropDownFList.style.display = 'block';
	}
});
