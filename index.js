const onNotifClick = () => {
    const panel = document.getElementById("notification-panel");
    const header = document.getElementsByClassName("header")[0];
    panel.classList.add("moving")
    header.classList.add("to-top")
}



let element = '';
let newsteller = '';
let visited = 0;

// check if element is in view
const inView = () => {
    newsteller = document.getElementById("newsteller")
    element = document.getElementById("footer");
    const elementHeight = element.offsetHeight;
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition >= elementPosition) {
        return true;
    }

    return false;
}

// animate element when it is in view
const animate = () => {
    // is element in view?
    if (inView() && visited===0 ) {
        // element is in view, add class to element
        newsteller.classList.add('slide-in');
        visited =1

    }
}

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

const slideOut = () => {
    newsteller = document.getElementById("newsteller");
    newsteller.classList.add('slide-out');
    setTimeout(() => { newsteller.classList.remove('slide-in'); }, 400);
    
}