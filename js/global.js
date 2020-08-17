var toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
  console.log("Automagical dark mode switching is supported");

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    toggleSwitch.checked = true;
    console.log(`Switch is ${toggleSwitch.checked ? "true" : "false"}.`);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    toggleSwitch.checked = false;
    console.log(`Switch holds ${toggleSwitch.checked ? "true" : "false"}.`);
  }

  window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
    if (e.matches) {
      toggleSwitch.checked = true;
      console.log("dark mode is enabled");
    } else {
      toggleSwitch.checked = false;
      console.log("dark mode is disabled");
    }

    console.log(`Switch holds ${toggleSwitch.checked ? "true" : "false"}.`);
  });
}

if (window.matchMedia("(prefers-color-scheme)").media === "not all") {
  // check for user preference 'darkMode' in localStorage
  let darkMode = localStorage.getItem("darkMode");
  console.log("nope");

  //code snippet to swap css files using toggle()
  function toggle() {
    var el = document.getElementById("light");
    if (el.href.match("light.css")) {
      el.href = "dark.css";
    } else {
      el.href = "light.css";
    }
    alert("<link> href is now: " + el.href);
  }
}

//TODO
/*  1. Add fallback functionality for switch to be able to invoke toggle() in incompatible browsers 
	2. Add code to allow saving of preferences for media-query compatible browsers */

/** OLD CODE: 
	const enableDarkMode = () => {
	  // 1. Add the class to the body - this snippet might allow swapping to next stylesheet
	  function switchTheme(e) {
			if (e.target.checked) {
				var previousStyle = cssStyle.href;

				if(previousStyle.endsWith(listStyles[0]))
					newStyle = listStyles[1];
				
				cssStyle.href = newStyle;

				if(localStorage)
				localStorage.setItem("style", newStyle);
			}
			
			console.log(cssStyle.href);
	  // 2. Update darkMode in localStorage
	  localStorage.setItem('darkMode', 'enabled');
	  //3. click on
	  toggleSwitch.checked = true;
	}

	const disableDarkMode = () => {
	  // 1. Remove the class from the body
	  document.body.classList.remove('darkmode');
	  // 2. Update darkMode in localStorage 
	  localStorage.setItem('darkMode', 'disabled');
	  //3. click off
	  toggleSwitch.checked = false;
	}


	// If localStorage stores enabled darkMode, turn on
	if (darkMode === 'enabled') {
	  enableDarkMode();
	  console.log(darkMode);
	}

	if (darkMode === 'disabled') { //if sysprefs enable darkmode, turn on
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			localStorage.setItem('darkMode', 'enabled');
			enableDarkMode();
			console.log(darkMode);
		}
	}

	// When someone clicks the button
	toggleSwitch.addEventListener('click', () => {
	  // get their darkMode setting
	  darkMode = localStorage.getItem('darkMode'); 
	  
	  // if it not enabled, enable it
	  if (darkMode !== 'enabled') {
		enableDarkMode();
	  // if enabled, disable  
	  } else {  
		disableDarkMode(); 
	  }
	});
	
		toggleSwitch.addEventListener('click', switchTheme, false);
}

**/
