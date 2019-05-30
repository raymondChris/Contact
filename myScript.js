                        
                                        /* COSTRUTTORE BOTTONE */

/**
 * @param {HTMLElement} btnNew          //<div class="btnNew"></div>
 * @param {HTMLElement} frmWindow       //<div class="formWindow"></div
 * @param {HTMLElement} frmButtonX      //<div class="btn">X</div>
 * @param {HTMLElement} frmButtonOK     //<div class="btn">OK</div>
 * @param {HTMLElement} listContact     //<div class="listWindow"></div>
 */

 function ButtonCons(btnNew, frmWindow, frmButtonX, frmButtonOK, listContact) {
     this.pListContact = listContact;
     this.pBtnNew = btnNew;
     this.pFrmWindow = frmWindow;
     this.pButtonX = frmButtonX;
     this.pButtonOK = frmButtonOK;
     this.contact = [];
 };


                                         /* FUNZIONE DOVE INIZIALIZZO I BOTTONI */

ButtonCons.prototype.init = function init() {
    this.pButtonX.addEventListener ('click', () => {this.hide()});
    this.pButtonOK.addEventListener ('click', () => {   this.newContact(),
                                                        this.hide(),
                                                        this.clear()});
    this.pBtnNew.addEventListener ('click', () => { this.visible(),
                                                    this.clear()});
};


                                        /* FUNZIONE PER RENDERE VISIBILE IL FORM */

ButtonCons.prototype.visible = function visible() {
    this.pFrmWindow.style.visibility = "visible";
    document.body.style.overflow = "hidden";
};


                                        /* FUNZIONE PER RENDERE INVISIBILE IL FORM */

ButtonCons.prototype.hide = function hide() {
    this.pFrmWindow.style.visibility = "hidden";
    document.body.style.overflow = "scroll";
}


                                    /* FUNZIONE PER AGGIUNGERE IL CONTATTO E CREARE LA CARTA */

ButtonCons.prototype.newContact = function newContact() {
    let x = document.forms["newContactForm"];
    let name = x["firstName"].value;
    let lastname = x["lastName"].value;
    let phnumber = x["phoneNumber"].value;
    let card = document.createElement("div");
    let contact = { Name: name,
                    Lastname: lastname,
                    Phone: phnumber};
    this.contact.push(contact);    
    card.classList.add("card");
    card.innerHTML = "Name: " + this.createData(contact.Name).outerHTML + '<br/>' +
                     "Last Name: " + this.createData(contact.Lastname).outerHTML + '<br/>' +
                     "Phone Number: " + this.createData(contact.Phone).outerHTML;
    this.pListContact.appendChild(card);
}

                                    /* FUNZIONE PER METTERE I VALORI IN UN DIV PER ALLINEARLI A DESTRA */

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

// Per arrivare al nome di ogni carta
//document.getElementsByClassName("card")[i].children[i].innerText

//document.getElementsByClassName("card")[0] se è undefined alert("lista vuota")