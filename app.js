
       
            
            class Ship{
    constructor(hull,firepower,accuracy){
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy=accuracy;
        this.alive=true;
    }
}
        class USS extends Ship{
            constructor(hull,firepower,accuracy){
                super(hull,firepower,accuracy)
            }
                attack(ar){
                    if(this.accuracy>=Math.random())
                    {
                        ar.hull -=this.firepower;
                        alert("USS hit")
                    if(ar.hull<=0){
                        ar.alive=false;
                        alert("Alien killed")
                    }
                }
                    else{
                        alert("USS missed");
                    }
            }
        }
        class Alien1 extends Ship {
            constructor(hull,firepower,accuracy){
            super(hull,firepower,accuracy)
                this.hull=Math.floor(Math.random() * 4) + 3;
                this.firepower = Math.floor(Math.random() * 3) + 2;
                this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
            }
            attack(player){
                if(this.accuracy>=Math.random())
                {
                    player.hull -=this.firepower;
                    alert("Alien hit")
                if(player.hull<=0){
                    player.alive=false;
                    alert("USS killed")
                }
            }
                else{
                    alert("Alien missed");
                }
        }
    }
    let ar= [];
    for(let i=0; i < 6; i++)
    {
        ar[i]=new Alien1;
    }
let hero= new USS(20,5,0.7);
function continuebattle()
{
    let cont = prompt("would you like to attack or retreat? Y or NO","Y")
    if(cont.toLowerCase()==="y"&& hero.hull>0)
    {
return true
    }
    else{
        (cont.toLowerCase()==="no")
        alert("retreat results")
        return false
    }
}
                function spacebattle(hero,ar)
                {
                for(i=0;i<ar.length;i++){
                  document.querySelector('#battle1').innerHTML =`Hull : ${hero.hull} <br> FirePower : ${hero.firepower} <br> Accuracy : ${hero.accuracy}`;
                   document.querySelector('#battle2').innerHTML =`Hull : ${ar[i].hull} <br> FirePower : ${ar[i].firepower} <br> Accuracy : ${ar[i].accuracy}`;
                    if(hero.alive){
                        alert("battle "+(i+1));
                    }
                    if(continuebattle()===true)
                    {
            while(hero.alive && ar[i].alive)
            {
                hero.attack(ar[i]);
                document.querySelector('#battle2').innerHTML =`Hull : ${ar[i].hull} <br> FirePower : ${ar[i].firepower} <br> Accuracy : ${ar[i].accuracy}`;
                if(ar[i].alive==true)
                {
                    ar[i].attack(hero)
                    document.querySelector('#battle1').innerHTML =`Hull : ${hero.hull} <br> FirePower : ${hero.firepower} <br> Accuracy : ${hero.accuracy}`;
                }
            }
                    }
                    else
                    {
                     break;
                    }
                }
            }
            spacebattle(hero,ar);