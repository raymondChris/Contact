                        
                        /* COSTRUTTORE BOTTONE */

/**
 * @param {HTMLEment} btnNew        //<div class="btnNew"></div>
 * @param {HTMLEment} frmWindow     //<div class="formWindow"></div
 * @param {HTMLEment} frmButtonX
 * @param {HTMLEment} frmButtonOK
 */

 function ButtonCons(btnNew,frmWindow,frmButtonX,frmButtonOK) {
     this.pBtnNew = btnNew;
     this.pFrmWindow = frmWindow;
     this.pButtonX = frmButtonX;
     this.pButtonOK = frmButtonOK;
 };

ButtonCons.prototype.init = function init() {
    this.pButtonX.addEventListener ('click', () => {this.hide()});
    this.pButtonOK.addEventListener ('click', () => {this.hide()});
    this.pBtnNew.addEventListener ('click', () => {this.visible()});
};

ButtonCons.prototype.visible = function visible() {
    this.pFrmWindow.style.visibility = "visible";
    document.body.style.overflow = "hidden";
};

ButtonCons.prototype.hide = function hide() {
    this.pFrmWindow.style.visibility = "hidden";
    document.body.style.overflow = "scroll";
}

