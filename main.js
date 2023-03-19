'Use strict';
/*jshint esversion: 8*/

let evaluation = document.querySelector('.evaluation');
let title, categories;


getJSON('data.json');

    async function getJSON(file) {
         let myObject = await fetch(file);
        try {
            let myData = await myObject.text();
            let get = JSON.parse(myData);
                
            for(let i=0; i < get.length; i++) {
                let results = document.createElement('div');
                evaluation.appendChild(results);
                results.innerHTML = 
                    `<div class="evaluation-container">
                         <img class="evaluation-container__img" src="${get[i].icon}" alt="${get[i].category}" />
                         <div class="evaluation-container__title">${get[i].category}</div>
                         <div class="evaluation-container__value"><span class="score">${get[i].score}</span><span class="from"> / 100</span></div>
                    </div>`;
                title = document.getElementsByClassName('evaluation-container__title');        
                categories = '';
                for(let a=0; a < title.length; a++) {
                    categories = title[a];
                    let evaluation_container =  document.getElementsByClassName('evaluation-container')[a];
                    let evaluation_containerTitle = document.getElementsByClassName('evaluation-container__title')[a];
                    if(categories.innerHTML == 'Reaction') {
                        evaluation_container.classList.add('reaction-bgCol');
                        evaluation_containerTitle.classList.add('reaction-col');
                    }
                    if(categories.innerHTML == 'Memory') {
                        evaluation_container.classList.add('memory-bgCol');
                        evaluation_containerTitle.classList.add('memory-col');
                    }
                    if(categories.innerHTML == 'Verbal') {
                        evaluation_container.classList.add('verbal-bgCol');
                        evaluation_containerTitle.classList.add('verbal-col');
                    }
                    if(categories.innerHTML == 'Visual') {
                        evaluation_container.classList.add('visual-bgCol');
                        evaluation_containerTitle.classList.add('visual-col');
                   }
                }
            }
            let button = document.createElement('div');
            //button.classList.add('btn-container');
            evaluation.appendChild(button);
                button.innerHTML = 
                    `<div class="btn-container">
                        <button class="btn">Continue</button>
                    </div>`;

        } catch (error) {
            console.log(error);
       }
    }