                        
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
 * @param {HTMLElement} editFrmWindow
 * @param {HtmLElement} editFrm
 */

 function ButtonCons(btnNew, frmWindow, frmButtonX, frmButtonOK, listContact, fltrButton, backButtonVar, dataNumber, btnSearch, windowName, inputSearch, colorPalette, btnColor, editFrmWindow, editFrm) {
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
     this.pEditFrmWindow = editFrmWindow;
     this.pEditFrm = editFrm;
     this.contact = [];
 };


                                         /* FUNZIONE DOVE INIZIALIZZO I BOTTONI */

ButtonCons.prototype.init = function init() {
    let index = 0;
    this.pBackButton.addEventListener ('click', () => { this.hideBackButton();
                                                        this.allCard()});

    this.pButtonX.addEventListener ('click', () => {this.hide()});

    this.pButtonOK.addEventListener ('click', () => {  index =  this.newContact(index);
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




                                        /* FUNZIONE PER RENDERE VISIBILE IL FORM */

ButtonCons.prototype.visible = function visible() {
    this.pFrmWindow.style.visibility = "visible";
    this.pFrmWindow.style.overflow = "hidden";
};


                            /* FUNZIONE PER RENDERE VISIBILE IL FORM PER CAMBIARE DATI*/

ButtonCons.prototype.editContact = function editContact (e) {
    let x = e.target.parentElement.parentElement;
    this.pEditFrmWindow.style.visibility = "visible";
    this.pEditFrmWindow.style.overflow = "hidden";
    this.pEditFrm["editfName"].value = x.getElementsByClassName("cName")[0].innerHTML;
    this.pEditFrm["editlName"].value = x.getElementsByClassName("cLastName")[0].innerHTML;
    this.pEditFrm["editpNumber"].value = x.getElementsByClassName("cPhoneNumber")[0].innerHTML;
}



ButtonCons.prototype.editCard = function editCard(frm) {
    let card = this.pListContact.children;
    console.log(card);
    //for ( let j=0; j< card.length; j++) {
      //  if (x.getElementById("index").innerHTML==)
}


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

ButtonCons.prototype.newContact = function newContact(index) {
    let x = document.forms["newContactForm"];
    let name = x["firstName"].value;
    let lastname = x["lastName"].value;
    let phnumber = x["phoneNumber"].value;
    if (name=="" && lastname=="" && phnumber=="") {
        return index;
    } else {
    let card = document.createElement("div");
    let that = this;
    let contact = { Name: name,
                    Lastname: lastname,
                    Phone: phnumber};
    let i = that.createData(index,'index');
    let title1 = that.createTitle('NAME');
    let title2 = that.createTitle('LAST NAME');
    let title3 = that.createTitle('PHONE NUMBER');
    let data1 = that.createData(contact.Name,'cName');
    let data2 = that.createData(contact.Lastname,'cLastName');
    let data3 = that.createData(contact.Phone, 'cPhoneNumber');
    let panelButtons = that.addEditCancelbutton();
    let edit = that.createEdit();
    let cancel = that.createCancel();

    card.classList.add("card");
    card.appendChild(i);
    card.appendChild(title1);
    card.appendChild(data1);
    card.appendChild(title2);
    card.appendChild(data2);
    card.appendChild(title3);
    card.appendChild(data3);
    panelButtons.appendChild(edit);
    panelButtons.appendChild(cancel);
    card.appendChild(panelButtons);
    
    edit.addEventListener('click',(e) => {that.editContact(e)});
    this.pListContact.appendChild(card);
    index += 1;
    return index;
    }
};


ButtonCons.prototype.addEditCancelbutton = function addEditCancelbutton() {
    let buttons = document.createElement('div');
    buttons.classList.add("cardButtons");
    return buttons;
}

ButtonCons.prototype.createEdit = function createEdit() {
    let edit = document.createElement('div');
    edit.classList.add("editButton");
    edit.innerHTML = "E";
    return edit;
}

ButtonCons.prototype.createCancel = function createCancel() {
    let cancel = document.createElement('div');
    cancel.classList.add("cancelButton");
    cancel.innerHTML = "X";
    return cancel;
}

ButtonCons.prototype.createTitle = function createTitle(valore) {        
    let title = document.createElement('div');                          
    title.classList.add("title");                                        
    title.innerHTML = valore;                                           
    return title;                                                       
} 

                                        /* FUNZIONE PER METTERE I VALORI IN UN DIV PER ALLINEARLI A DESTRA */

ButtonCons.prototype.createData = function createData(valore, pClass) { 
    let data = document.createElement('div');                          
    data.classList.add(pClass);                                         
    data.innerHTML = valore;                                            
    return data;                                    
}                                                                      


                                        /* FUNZIONE CHE CANCELLA I VALORI ALL'NTERNO DEL FORM */

ButtonCons.prototype.clear = function clear() {
    let x = document.forms["newContactForm"];
    x["firstName"].value = "";
    x["lastName"].value= "";
    x["phoneNumber"].value = "";
}


                                        /* FUNZIONE CHE FILTRA I CONTATTI PER L'INIZIALE DEL NOME */

ButtonCons.prototype.filter = function filter(label) {              
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


                                                /* FUNZIONE CHE NASCONDE IL BOTTONE BACK*/

ButtonCons.prototype.hideBackButton = function hideBackButton() {
    this.pBackButton.style.display = "none";
}

                
                                                /* FUNZIONE CHE FA APPARIRE IL BOTTONE BACK*/
                                                        
ButtonCons.prototype.showBackButton = function showBackButton() {
    this.pBackButton.style.display = "block";
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


                                            /* FUNZIONE DI ANIMAZIONE DELL'INPUT DI RICERCA */

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
        x = card[i].getElementsByClassName("cName")[0].innerHTML.slice(0,key.length);
        if (x != key) {
            card[i].style.display = "none";
        }
        else {
            card[i].style.display = "block"
        }
    }
}