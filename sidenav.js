function openNav() {
			document.getElementById("sideNav").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
			document.body.style.backgroundColor = "#323b50";
			document.getElementById("main").style.opacity = "0.3";
		}
		function closeNav() {
			document.getElementById("sideNav").style.width = "0";
			document.getElementById("main").style.marginLeft = "0";
			document.body.style.backgroundColor = "#323b44";
			document.getElementById("main").style.opacity = "1";
		}