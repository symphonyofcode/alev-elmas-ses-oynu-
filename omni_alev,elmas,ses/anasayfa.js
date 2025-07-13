alert("Hoş geldin üstteki kağıdlar düşman kardları seçemezsin altakiler senin ilk 10'a ulaşan kazanır");

let dusmanskor=0;
let oyuncuskor=0;

function skor(){document.getElementById("skor").textContent = `Sen: ${oyuncuskor} / Düşman: ${dusmanskor} `;}

function play(secim)
{
  const dusman=["güç", "lazer", "balçık"]
  const dusmansecim=dusman[Math.floor(Math.random()*3)] 



  let result="";

        if((dusmansecim === "balçık" && secim  === "alev"))
            {
                 result="kaybettin düşman " + dusmansecim + " seçti";
                 alert(result);
                 dusmanskor++;
            }
         if((dusmansecim === "lazer" && secim  === "alev"))
            {
                 result="berabere düşman " + dusmansecim + " seçti";
                 alert(result);
            }    
        if((dusmansecim === "güç" && secim  === "alev"))
            {
                 result="kazandın düşman " + dusmansecim + " seçti";
                 alert(result);
                 oyuncuskor++;
            } 
            
            
          if((dusmansecim === "güç" && secim  === "elmas"))
            {
                 result="kaybettin düşman " + dusmansecim + " seçti";
                 alert(result);
                 dusmanskor++;
            }
         if((dusmansecim === "balçık" && secim  === "elmas"))
            {
                 result="berabere düşman " + dusmansecim + " seçti";
                 alert(result);

            }    
        if((dusmansecim === "lazer" && secim  === "elmas"))
            {
                 result="kazandın düşman " + dusmansecim + " seçti";
                 alert(result);
                 oyuncuskor++;
            }  

            if((dusmansecim === "güç" && secim  === "ses"))
            {
                 result="berabere düşman " + dusmansecim + " seçti";
                 alert(result);
            }
         if((dusmansecim === "balçık" && secim  === "ses"))
            {
                 result="kazandın düşman " + dusmansecim + " seçti";
                 alert(result);
                 oyuncuskor++;
            }    
        if((dusmansecim === "lazer" && secim  === "ses"))
            {
                 result="kaybettin düşman " + dusmansecim + " seçti";
                 alert(result);
                 dusmanskor++;
            }      

        

            let maxskor=10;

         if((oyuncuskor===maxskor))
            {
                alert("Oyun bitti kazandınız");
                oyuncuskor=0; 
                dusmanskor=0;
            }   

        if((dusmanskor===maxskor))
            {
                alert("Oyun bitti kaybettiniz");
                oyuncuskor=0; 
                dusmanskor=0;
            }   
                 skor(); 
}
