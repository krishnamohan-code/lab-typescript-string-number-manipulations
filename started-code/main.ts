import { StringManipulationService, NumberManipulationService } from "./main-service";
//progression 2
class StringManipulations implements StringManipulationService
{
    print(word: string): void {
        console.log(word);
        console.log(" uppercase "+word.toUpperCase());
        console.log("Lower case "+word.toLowerCase());
        console.log("char at position 2 "+word.charAt(2));
        console.log("Concat "+word.concat(" FacePrep"));
        console.log("Slice "+word.slice(1,3));
        console.log("Length "+word.length);
        
        
    }
    printWithSpace(sentence: string): void {
        console.log("letters with space "+sentence.split("").join(" "));
        
    }
    findVowel(str: string): void {
      for(var i=0;i<str.length;++i)
      {      
      
          if(str[i].toLowerCase()=="a"||str[i].toLowerCase()=="e"||str[i].toLowerCase()=="i"||str[i].toLowerCase()=="o"||str[i].toLowerCase()=="u")
          {
              console.log(str[i]);
              
          }
      }
    }
    
}
let ref= new StringManipulations();
ref.print("ProGrads");
ref.printWithSpace("ProGrads");
ref.findVowel("ProGrads");

//progression 4
class  NumbersManipulations implements NumberManipulationService
{
    findPrime(num: number): void {
        var m:number =Math.floor(num/2);
        var flag=0;
        if(num==0||num==1)
        {
            console.log("not prime");
            
        }
        else{
        for(var i =2;i<=m;++i)
        {
            if(num%i==0)
            {
                console.log(num+" : is not prime number");      
                flag=1;      
                break; 
            }
        }
        }
        if(flag==0)
        {
            console.log(num+" : is prime number ");
            
        }
    }
    findMagic(num: number): void
     {
        if(num%9==1)
         {
            console.log(num+" is Magic number");
        }
      else
      {
        console.log(num+" is not Magic number");    
      }
    } 
}
let ref1=new NumbersManipulations()
ref1.findMagic(114);
ref1.findPrime(114);