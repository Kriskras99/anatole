// initialize default value
function getTheme() {
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
}

function setTheme(style) {
    document.documentElement.setAttribute('data-theme', style);
    localStorage.setItem('theme', style);
}

function init() {
    // initialize default value
    var theme = getTheme();

    // check if a prefered color theme is set for users that have never been to our site
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === null) {
        if (userPrefersDark) {
            setTheme('dark');
        } else if (!document.documentElement.getAttribute('data-theme')) {
            setTheme('light');
        } else {
            setTheme(document.documentElement.getAttribute('data-theme'));
        }
    } else {
        // load a stored theme
        if (theme == 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
}


// switch themes
function switchTheme(e) {
    var theme = getTheme();
    if (theme == 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var themeSwitcher = document.querySelector('.theme-switch');
    themeSwitcher.addEventListener('click', switchTheme, false);
}, false);

document.addEventListener("DOMContentLoaded", function() {
    // Get all "navbar-toggle" elements
    var $navbarToggles = Array.prototype.slice.call(document.querySelectorAll(".navbar-toggle"), 0);
    // Check if there are any navbar toggles
    if ($navbarToggles.length > 0) {
        // Add a click event on each of them
        $navbarToggles.forEach(function($el) {
            $el.addEventListener("click", function() {
                var untarget = $el.dataset.untarget;
                var $untarget = document.getElementById(untarget);
                $untarget.classList.remove("is-active");
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                $target.classList.toggle("is-active");
            });
        });
    }
});

init();
