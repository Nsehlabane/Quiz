import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//VARIABLES
"/5":string
ScoreCat1=0;
ScoreCat2=0;
ScoreCat3=0;

TotalScore1=0;
TotalScore2=0;
TotalScore3=0;

Answer1="Kryptonite";
Answer2="None";
Answer3="Friday";
Answer4="70";
Answer5="Vibranium";

Answer6="3"
Answer7="11"
Answer8="9"
Answer9="Rovos"
Answer10="1961"

Answer11="directly"
Answer12="Nucleus"
Answer13="100"
Answer14="4"
Answer15="9.8"

SP1:String;
SP2:String;
SP3:String;
SP4:String;
SP5:String;

SA1:String;
SA2:String;
SA3:String;
SA4:String;
SA5:String;

SC1:String;
SC2:String;
SC3:String;
SC4:String;
SC5:String;




  constructor(public navCtrl: NavController) {
  }

  CheckQ1():number{
   if (this.SP1==this.Answer1){
    this.ScoreCat1=1;
   }

   return this.ScoreCat1
  }

  CheckQ2():number{
    if (this.SP2==this.Answer2){
     this.ScoreCat1=1;
    }
 
    return this.ScoreCat1
   }

   CheckQ3():number{
    if (this.SP3==this.Answer3){
     this.ScoreCat1=1;
    }
 
    return this.ScoreCat1
   }

   CheckQ4():number{
    if (this.SP4==this.Answer4){
     this.ScoreCat1=1;
    }
 
    return this.ScoreCat1
   }
   
   CheckQ5():number{
    if (this.SP5==this.Answer5){
     this.ScoreCat1=1;
    }
 
    return this.ScoreCat1
   }

   CalculateAll1():void{
     this.TotalScore1 = this.CheckQ1() + this.CheckQ2() + this.CheckQ3() + this.CheckQ4() + this.CheckQ5();
   }





   CheckQ6():number{
    if (this.SA1==this.Answer6){
     this.ScoreCat2=1;
    }
 
    return this.ScoreCat2
   }
 
   CheckQ7():number{
     if (this.SA2==this.Answer7){
      this.ScoreCat2=1;
     }
  
     return this.ScoreCat2
    }
 
    CheckQ8():number{
     if (this.SA3==this.Answer4){
      this.ScoreCat2=1;
     }
  
     return this.ScoreCat2
    }
 
    CheckQ9():number{
     if (this.SA4==this.Answer4){
      this.ScoreCat2=1;
     }
  
     return this.ScoreCat2
    }
    
    CheckQ10():number{
     if (this.SA5==this.Answer5){
      this.ScoreCat2=1;
     }
  
     return this.ScoreCat2
    }
 
    CalculateAll2():void{
      this.TotalScore2 = this.CheckQ6() + this.CheckQ7() + this.CheckQ8() + this.CheckQ9() + this.CheckQ10();
    }

    
   CheckQ11():number{
    if (this.SC1==this.Answer11){
     this.ScoreCat3=1;
    }
 
    return this.ScoreCat3
   }
 
   CheckQ12():number{
     if (this.SC2==this.Answer12){
      this.ScoreCat3=1;
     }
  
     return this.ScoreCat3
    }
 
    CheckQ13():number{
     if (this.SC3==this.Answer13){
      this.ScoreCat3=1;
     }
  
     return this.ScoreCat3
    }
 
    CheckQ14():number{
     if (this.SC4==this.Answer14){
      this.ScoreCat3=1;
     }
  
     return this.ScoreCat3
    }
    
    CheckQ15():number{
     if (this.SC5==this.Answer15){
      this.ScoreCat3=1;
     }
  
     return this.ScoreCat3
    }
 
    CalculateAll3():void{
      this.TotalScore3 =this.CheckQ11() + this.CheckQ12() + this.CheckQ13() + this.CheckQ14() + this.CheckQ15();
    }
}
