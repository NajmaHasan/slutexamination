const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const planets = document.querySelectorAll(`button`)
const sectionElm =document.querySelector(`.show`)
const mainElmt = document.querySelector(`main`)
const h1Elm =document.querySelector(`h1`)
const h2Elm =document.querySelector(`h2`)

let sol_system= ``;




// API nyckel att använda ifall man enbart siktar på godkänt: solaris-vKkkQHqQboi7c6JF


async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    // return.data
    console.log(data);
}

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        method:`GET`,
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF' // data.key
        }  
    });
    const data = await response.json();
    sol_system = data.bodies
    console.log(data);
    console.log(sol_system);
}



   function planetArticel(sol_system){
    sectionElm.innerHTML=``;
    let template=`
        <article>
                <h1>${sol_system.name}</h1>
                 <h4>${sol_system.latinName}</h4>
                 <p class="desc">${sol_system.desc}</p>
                 <hr class=" hr1">
                 <h3 class="omkrets"> OMKRETS </h3>
                 <p class="omkret">${sol_system.circumference} km</p>
                 <h3 class="maxtemp"> Max TEMPRETUR </h3>
                 <p class="max">${sol_system.temp.day} C</p>
                 <h3 class="mintemp"> MIN TEMPRETUR </h3>
                 <p class="min">${sol_system.temp.night} C</p>
                 <h3 class="km"> KM FRÅN SOLEN</h3>
                 <p class="kilo">${sol_system.distance} </p>
                 <hr class=" hr2">
                 <h3 class="moons">MÅNAR</h3>
                 <p class="moon"> ${sol_system.moons} </p>
                 <figure class="bluesun"</figure>
                 <figure class="lightsun"</figure>
                 <figure class="lighter"</figure>

            </article>  
            <footer class="backtoplanet">Back To First Page</footer> 

            `
            console.log('planetArticel')

            sectionElm.insertAdjacentHTML('afterbegin', template);
            const backtoPlanet=document.querySelector(`.backtoplanet`)
            backtoPlanet.addEventListener(`click`, () => {
                sectionElm.style.display=`none`
                mainElmt.style.display=`flex`
                h1Elm.style.display=`flex`
                h2Elm.style.display=`block`
                console.log(`funkar`);
            })
   }
    
            
        

    planets.forEach((planets, i) => {      /// hämtar alla mina knappar på en och samma plats
        planets.addEventListener(`click`,()=> {
            const buttonPlanets = sol_system[i]
            planetArticel(buttonPlanets)
            console.log(`knapptyrck`);
            sectionElm.style.display=`block`
            mainElmt.style.display=`none`
            h1Elm.style.display=`none`
            h2Elm.style.display=`none`

            

    })
             })

     console.log(planets);


 

 async function getKod(){ /// för att köra key och planet 
    await getKey();
   await getPlanets();
   
 }       
 getKod();
  

