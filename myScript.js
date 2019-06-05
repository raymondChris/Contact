                        
                                        /* COSTRUTTORE BOTTONE */

/**
 * @param {HTMLElement} btnNew          //<div class="btnNew"></div>
 * @param {HTMLElement} frmWindow       //<div class="formWindow"></div
 * @param {HTMLElement} frmButtonX      //<div class="btn">X</div>
 * @param {HTMLElement} frmButtonOK     //<div class="btn">OK</div>
 * @param {HTMLElement} listContact     //<div class="listWindow"></div>
 * @param {HTMLElement} fltrButton      //<div class="fltrButton"></div>
 * @param {HTMLElement} backButtonVar
 * @param {HTMLElement} dataNumber
 * @param {HTMLElement} btnSearch
 * @param {HTMLElement} windowName
 * @param {HTMLElement} inputSearch
 * @param {HTMLElement} colorPalette
 * @param {HTMLElement} btnColor
 */

 function ButtonCons(btnNew, frmWindow, frmButtonX, frmButtonOK, listContact, fltrButton, backButtonVar, dataNumber, btnSearch, windowName, inputSearch, colorPalette, btnColor) {
     this.pListContact = listContact;
     this.pBtnNew = btnNew;
     this.pFrmWindow = frmWindow;
     this.pButtonX = frmButtonX;
     this.pButtonOK = frmButtonOK;
     this.pFltrButton = fltrButton;
     this.pBackButton = backButtonVar;
     this.pDataNumber = dataNumber;
     this.pBtnSearch = btnSearch;
     this.pWindowName = windowName;
     this.pInputSearch = inputSearch;
     this.pClrPalette = colorPalette;
     this.pBtnColor = btnColor;
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
                                                    this.hideBackButton();
                                                    this.allCard()});

    for(let i = 0; i < this.pFltrButton.length; i++) {
        this.pFltrButton[i].addEventListener ('click', () => {  this.allCard();
                                                                this.filter(this.pFltrButton[i].innerText);
                                                                });
        }

    this.pDataNumber.addEventListener ('keyup', (e) => {this.checkNumber (e)});

    window.addEventListener ('click', (e) => {  this.animSearchWidth(e)
                                                this.paletteVisible(e)});

    this.pInputSearch.addEventListener ('input', () => {this.filterSearch()});
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


ButtonCons.prototype.paletteVisible = function paletteVisible(e) {
    if (this.pBtnColor.contains(e.target)) {
        this.pClrPalette.style.visibility = "visible";
        document.body.style.overflow = "hidden";
    } else {
        this.pClrPalette.style.visibility = "hidden";
        document.body.style.overflow = "scroll";
    }
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
    var that = this;
    if (name=="" && lastname=="" && phnumber=="") {
        return;
    } else {
    let card = document.createElement("div");
    let contact = { Name: name,
                    Lastname: lastname,
                    Phone: phnumber};
    this.contact.push(contact);    
    card.classList.add("card");
    
    let y = this.addEditCancelbutton();
    card.innerHTML = "Name: " + this.createData(contact.Name).outerHTML + '<br/>' +             //this.createData(contact.Name) passa il valore
                     "Last Name: " + this.createData(contact.Lastname).outerHTML + '<br/>' +    // di Name dell'oggeto contact a createData()
                     "Phone Number: " + this.createData(contact.Phone).outerHTML + '<br/>' + y.outerHTML;
    this.pListContact.appendChild(card);
    }
};


ButtonCons.prototype.addEditCancelbutton = function addEditCancelbutton() {
    var that = this;
    let buttons = document.createElement('div');
    buttons.classList.add("cardButtons");
    buttons.innerHTML = that.createEdit().outerHTML + that.createCancel().outerHTML;
    return buttons;
}

ButtonCons.prototype.createEdit = function createEdit() {
    var that = this;
    let edit = document.createElement('div');
    edit.classList.add("editButton");
    edit.innerHTML = "E";
    edit.addEventListener('click', () => {document.getElementsByClassName("formWindow")[0].style.visibility = "visible"});
    return edit;
}

ButtonCons.prototype.createCancel = function createCancel() {
    let cancel = document.createElement('div');
    cancel.classList.add("cancelButton");
    cancel.innerHTML = "X";
    return cancel;
}

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


                                        /* FUNZIONE CHE FILTRA I CONTATTI PER L'INIZIALE DEL NOME */

ButtonCons.prototype.filter = function filter(label) {             //label è la variabile di appoggio 
    let card;
    if (this.pListContact.children.length > 0) {
        card = this.pListContact.children;
        for ( let j=0; j< card.length; j++) {
            if  (card[j].children[0].innerText.charAt(0)!=label) {
                card[j].style.display = "none";
            }
        }
        this.showBackButton();
    }
    else {
             alert("nessun contatto")
    }
    
}

                                            /* FUNZIONE CHE MI FA VEDERE LA LISTA INTERA */

ButtonCons.prototype.allCard = function allCard () {
    let card = this.pListContact.children;
    for ( let j=0; j< card.length; j++) {
        card[j].style.display = "block";
    }
}


                                        /* METODO DI CONTROLLO NUMERO DI TELEFONO NEL FORM */

ButtonCons.prototype.checkNumber = function checkNumber (e) {
    let key = e.keyCode;
    if (key < 48 || key > 57) {
        x = this.pDataNumber.value.slice(0,this.pDataNumber.value.length-1);
        this.pDataNumber.value = x;
    }
    else {
        return;
    }

}


                                        /* FUNZIONI DI ANIMAZIONE DELL'INPUT DI RICERCA */

ButtonCons.prototype.animSearchWidth = function animSearchWidth (e) {
    if  (this.pBtnSearch.contains(e.target) || this.pInputSearch.contains(e.target)) {
        let frmW = 0;
        let x = this.pInputSearch.style.width;
        this.pInputSearch.style.display = 'block';
        if (x=="160px") {
            return;
            } else {
                let anim = setInterval(long, 3);
                function long() {
                
                if (frmW == 160) {
                    clearInterval(anim);
                } else {
                    frmW++;
                    document.getElementById("search").style.width = frmW + "px";
                }
            }
            this.pInputSearch.style.border = "1px solid black";
        }
    } else {
        let frmW = 160;
        let x = this.pInputSearch.style.width;
        if (x==="" || x=="0px") {
            return;
            } else {
                let anim = setInterval(short, 3);
                function short() {
                
                if (frmW == 0) {
                    clearInterval(anim);
                } else {
                    frmW--;
                    document.getElementById("search").style.width = frmW + "px";
                }
            }
            setTimeout(() => {  this.pInputSearch.style.border = "none";
                                this.pInputSearch.style.display = "none";}, 700);
            this.pInputSearch.value ="";
            this.allCard();
        }
    }
}



                                        /* METODO DI FILTRO PER LA FUNZIONE SEARCH */

ButtonCons.prototype.filterSearch = function filterSearch() {
    let key = this.pInputSearch.value;
    let card = this.pListContact.children;
    let x;
    for (let i=0; i < card.length; i++) {
        x = card[i].children[0].innerHTML.slice(0,key.length);
        if (x != key) {
            card[i].style.display = "none";
        }
        else {
            card[i].style.display = "block"
        }
    }
}