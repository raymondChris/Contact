                        
                                        /* COSTRUTTORE BOTTONE */

/**
 * @param {HTMLElement} btnNew          //<div class="btnNew"></div>
 * @param {HTMLElement} frmWindow       //<div class="formWindow"></div
 * @param {HTMLElement} frmButtonX      //<div class="btn">X</div>
 * @param {HTMLElement} frmButtonOK     //<div class="btn">OK</div>
 * @param {HTMLElement} listContact     //<div class="listWindow"></div>
 * @param {HTMLElement} fltrButton      //<div class="fltrButton"></div>
 * @param {HTMLElement} backButtonVar
 */

 function ButtonCons(btnNew, frmWindow, frmButtonX, frmButtonOK, listContact, fltrButton, backButtonVar) {
     this.pListContact = listContact;
     this.pBtnNew = btnNew;
     this.pFrmWindow = frmWindow;
     this.pButtonX = frmButtonX;
     this.pButtonOK = frmButtonOK;
     this.pFltrButton = fltrButton;
     this.pBackButton = backButtonVar;
     this.contact = [];
 };


                                         /* FUNZIONE DOVE INIZIALIZZO I BOTTONI */

ButtonCons.prototype.init = function init() {
    this.pBackButton.addEventListener ('click', () => { this.hideBackButton();
                                                        this.allCard()});
    this.pButtonX.addEventListener ('click', () => {this.hide()});
    this.pButtonOK.addEventListener ('click', () => {   this.newContact();
                                                        this.hide();
                                                        this.clear()});
    this.pBtnNew.addEventListener ('click', () => { this.visible();
                                                    this.clear();
                                                    this.allCard()});
    for(let i = 0; i < this.pFltrButton.length; i++) {
        this.pFltrButton[i].addEventListener ('click', () => {  this.allCard();
                                                                this.filter(this.pFltrButton[i].innerText)
                                                                this.showBackButton()});
        }
    
};

ButtonCons.prototype.hideBackButton = function hideBackButton() {
    this.pBackButton.style.display = "none";
}

ButtonCons.prototype.showBackButton = function showBackButton() {
    this.pBackButton.style.display = "block";
}


                                        /* FUNZIONE PER RENDERE VISIBILE IL FORM */

ButtonCons.prototype.visible = function visible() {
    this.pFrmWindow.style.visibility = "visible";
    document.body.style.overflow = "hidden";
};


                                        /* FUNZIONE PER RENDERE INVISIBILE IL FORM */

ButtonCons.prototype.hide = function hide() {
    this.pFrmWindow.style.visibility = "hidden";
    document.body.style.overflow = "scroll";
};


                                    /* FUNZIONE PER AGGIUNGERE IL CONTATTO E CREARE LA CARTA */

ButtonCons.prototype.newContact = function newContact() {
    let x = document.forms["newContactForm"];
    let name = x["firstName"].value;
    let lastname = x["lastName"].value;
    let phnumber = x["phoneNumber"].value;
    if (name)
    let card = document.createElement("div");
    let contact = { Name: name,
                    Lastname: lastname,
                    Phone: phnumber};
    this.contact.push(contact);    
    card.classList.add("card");
    card.innerHTML = "Name: " + this.createData(contact.Name).outerHTML + '<br/>' +             //this.createData(contact.Name) passa il valore
                     "Last Name: " + this.createData(contact.Lastname).outerHTML + '<br/>' +    // di Name dell'oggeto contact a createData()
                     "Phone Number: " + this.createData(contact.Phone).outerHTML;
    this.pListContact.appendChild(card);
};

                                    /* FUNZIONE PER METTERE I VALORI IN UN DIV PER ALLINEARLI A DESTRA */

ButtonCons.prototype.createData = function createData(valore) {        //Questa funzione prende il valore di Name
    let data = document.createElement('div');                           // e lo associa a valore
    data.classList.add("data");                                         //Poi crea una varibile data dove crea
    data.innerHTML = valore;                                            // <div class="data"></div> e mette dentro
    return data;                                                        // valore => <div class="data">valore</div>
}                                                                       // e con return la restituisce

ButtonCons.prototype.clear = function clear() {
    let x = document.forms["newContactForm"];
    x["firstName"].value = "";
    x["lastName"].value= "";
    x["phoneNumber"].value = "";
}

ButtonCons.prototype.filter = function filter(label) {             //label è la variabile di appoggio 
    let card;
    if (this.pListContact.children.length > 0) {
        card = this.pListContact.children;
        for ( let j=0; j< card.length; j++) {
            if  (card[j].children[0].innerText.charAt(0)!=label) {
                card[j].style.display = "none";
            }
        }
    }
    else {
             alert("nessuna carta")
    }
}

ButtonCons.prototype.allCard = function allCard () {
    let card = this.pListContact.children;
    for ( let j=0; j< card.length; j++) {
        card[j].style.display = "block";
    }
}
//della lettera che attiva al filtro
    // let capLet;                                                 //this.pListContact.children array delle carte
  /* if (listcard == undefined)                                          //del label clickato
        {
            alert("Contact list is empty");
        }
        else {*/
     //           for (let j = 0; j < listCard.length; j++) {
       //             capLet = listCard[j].children[0].innerText.charAt(0);
         //           if (capLet == fltrVar) {
           //             this.pNewList.appendChild(listCard[j]);
             //       }
                //}
        
            //}                     
// Per arrivare al nome di ogni carta
//document.getElementsByClassName("card")[i].children[i].innerText

//document.getElementsByClassName("card")[0] se è undefined alert("lista vuota")