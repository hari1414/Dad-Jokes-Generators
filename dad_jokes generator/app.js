const btnele = document.getElementById("btn");
const jokeEle=document.getElementById("joke");
const apikey= "k+UEqtviYI2tLvASrfhMNQ==SZLU6O61sdgz6pDG";

const options= {
    method: "GET",
    headers:{
    "X-Api-Key" : apikey,

    },

};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";


    async function getjoke(){

 
        jokeEle.innerText= "Updating...";
        btnele.disabled=true;
        btnele.innerText="Loading...";
        
        const response= await fetch(apiURL , options)
        const data= await response.json();
        btnele.disabled=false;
        btnele.innerText="TELL  ME  A  JOKE";
        
        jokeEle.innerText=data[0].joke;
        
        }



btnele.addEventListener("click", getjoke);



    
