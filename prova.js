function FloatingWindow (html) {
    this.container = html;
}
FloatingWindow.prototype.visible = function visible() {
    this.container.style.visibility = "visible";
    document.body.style.overflow = "hidden";
};

FloatingWindow.prototype.hide = function hide() {
    this.container.style.visibility = "hidden";
    document.body.style.overflow = "scroll";
}


var floatingwindow = new FloatingWindow(document.getElementById('primo'))

floatingwindow.visible();


var floatingwindowLeft = new FloatingWindow(document.getElementById('sinistra'))
floatingwindowLeft.visible()