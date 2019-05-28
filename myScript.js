                        
                        /* COSTRUTTORE BOTTONE */

/**
 * @param {HTMLElement} btnNew        //<div class="btnNew"></div>
 * @param {HTMLElement} frmWindow     //<div class="formWindow"></div
 * @param {HTMLElement} frmButtonX
 * @param {HTMLElement} frmButtonOK
 * @param {HTMLElement} listContact
 */

 function ButtonCons(btnNew, frmWindow, frmButtonX, frmButtonOK, listContact) {
     this.pListContact = listContact;
     this.pBtnNew = btnNew;
     this.pFrmWindow = frmWindow;
     this.pButtonX = frmButtonX;
     this.pButtonOK = frmButtonOK;
     this.contact = [];
     
     //this.pFrmContact =  frmContact;
 };

ButtonCons.prototype.init = function init() {
    this.pButtonX.addEventListener ('click', () => {this.hide()});
    this.pButtonOK.addEventListener ('click', () => {   this.newContact(),
                                                        this.hide(),
                                                        this.clear()});
    this.pBtnNew.addEventListener ('click', () => { this.visible(),
                                                    this.clear()});
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
    let name = document.forms["newContactForm"]["firstName"].value;
    let lastname = document.forms["newContactForm"]["lastName"].value;
    let phnumber = document.forms["newContactForm"]["phoneNumber"].value;
    let card = document.createElement("div");
    let data = document.createElement("data");
    let contact = { Name: name,
                    Lastname: lastname,
                    Phone: phnumber};

    this.contact.push(contact);

    
    card.classList.add("card");
    card.innerHTML = "Name: " + this.createData(contact.Name).outerHTML + '<br/>' + "Last Name: " + this.createData(contact.Lastname).outerHTML + '<br/>' +"Phone Number: " + this.createData(contact.Phone).outerHTML;
    
    
    this.pListContact.appendChild(card);
    
}

ButtonCons.prototype.createData = function createData (valore) {
    let data = document.createElement('div')
    data.classList.add("data");
    data.innerHTML = valore;
    return data;
}

ButtonCons.prototype.clear = function clear() {
    document.forms["newContactForm"]["firstName"].value = "";
    document.forms["newContactForm"]["lastName"].value= "";
    document.forms["newContactForm"]["phoneNumber"].value = "";
}

// altro file