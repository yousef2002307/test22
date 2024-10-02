
String.prototype.capitalizefirstletter = function(){
    let x = this;
    let y = x.split(' ');
    let chars = [];
    for(let i =0; i< y.length;i++){
    chars.push(y[i].charAt(0).toUpperCase() + y[i].slice(1));
    }
    return chars.join(' ');
    
    
    
    };
   // var z = document.getElementById("h11").textContent.capitalizefirstletter();
   // document.getElementById("h11").textContent = z;
    
var strobj = document.getElementsByClassName("str1-obj");
console.log(strobj.length);
for(var i =0; i < strobj.length; i++){
    var beforecapitalize = strobj[i].textContent.capitalizefirstletter();
    strobj[i].textContent = beforecapitalize;
    
}






let scrolltop = document.getElementById("scroll");

class scrolltotop{
constructor(button){
this.button = button;
this.button.onclick = () => window.scrollTo(0,0);
this.buttonstyle = function(){

    
    
    this.button.style.position = 'fixed';
    this.button.style.right = '6px';
    this.button.style.bottom = '6px';
   this.button.style.display = 'none';
    
};
}
}


scrolltotop.prototype.hideandshoeonscroll = function(){
    
    window.onscroll = () => {
    if(window.pageYOffset > 800){
        this.button.style.display = 'block';
    }else{
        this.button.style.display = 'none';
    }
    
};

}

let button1 = new scrolltotop(scrolltop);
button1.buttonstyle();
button1.hideandshoeonscroll();



/////////////////////////////////////////
