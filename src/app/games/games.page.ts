import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

jsonData:any=[];



  constructor() {

this.initializaJSONData();


   }
FilterJSONData(ev:any)
{
this.initializaJSONData();
const val = ev.target.value;
if(val && val.trim() != '')
{
  this.jsonData = this.jsonData.filter((item)=>{
    return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
  })
}
}
selectVal(val)
{
  alert("wda ="+val);
}


  initializaJSONData(){
    this.jsonData =[
         
      {
        "name":"FunMath101",
        "code":"Fn"
       
  },
      {
        "name":"FunMaze",
        "code":"Fnm"
  
  },
      {
        "name":"FunColorgate",
        "code":"Fnc"
  
  },
      {
          "name":"chess",
          "code":"ch"
    
    }];
  }

  ngOnInit() {
  }

}
