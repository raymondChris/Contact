                        
                        /* COSTRUTTORE BOTTONE */

/**
 * @param {HTMLElement} btnNew        //<div class="btnNew"></div>
 * @param {HTMLElement} frmWindow     //<div class="formWindow"></div
 * @param {HTMLElement} frmButtonX
 * @param {HTMLElement} frmButtonOK
 *
 */

 function ButtonCons(btnNew,frmWindow,frmButtonX,frmButtonOK) {
     this.pBtnNew = btnNew;
     this.pFrmWindow = frmWindow;
     this.pButtonX = frmButtonX;
     this.pButtonOK = frmButtonOK;
     //this.pFrmContact =  frmContact;
 };

ButtonCons.prototype.init = function init() {
    this.pButtonX.addEventListener ('click', () => {this.hide()});
    this.pButtonOK.addEventListener ('click', () => {   this.newContact(),
                                                        this.hide()});
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

ButtonCons.prototype.newContact = function newContact() {
    console.log(this.pFrmWindow);

}
