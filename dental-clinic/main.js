const menu = document.getElementById("dc-menu");
const header = document.getElementById("dc-header");
const buttonMenus = menu.getElementsByTagName("button");

const indexPages = {
	dashboard: {
		headerTemplate: `<h1>Dental<img width="100" src="./assets/icons/teeth.svg" align="center" />Clinic</h1>`,
		path: "./pages/dashboard.html"
	},
	about: {
		headerTemplate: `<h1>Sobre <img width="50" src="./assets/icons/about.svg" align="center" /></h1>`,
		path: "./pages/about.html",
	},
	contact: {
		headerTemplate : `<h1>Contato <img width="50" src="./assets/icons/contact.svg" align="center" /></h1>`,
		path: "./pages/contact.html"
	},
	timesheet: {
		headerTemplate: '<h1>Horário de atendimento <img width="50" src="./assets/icons/simple-schedule.svg" align="center" /></h1>',
		path: "./pages/timesheet.html"
	}
}

function changeContent(element, keyPage) {
	const page = indexPages[keyPage];
	for(let index = 0; index < buttonMenus.length; index++) {
		buttonMenus.item(index).classList.remove("selected");
	}
	element.classList.add("selected");
	let iFrameContent = document.getElementById("dc-content");
	header.innerHTML = page.headerTemplate;
	iFrameContent.src = page.path;
}