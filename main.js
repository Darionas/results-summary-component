'Use strict';
/*jshint esversion: 8*/

const evaluation = document.querySelector('.evaluation');

getJSON('data.json');

async function getJSON(file) {
    const myObject = await fetch(file);
    try {
        const myData = await myObject.text();
        const get = JSON.parse(myData);

        for (const item of get) {
            const results = document.createElement('div');
            evaluation.appendChild(results);
            results.innerHTML =
                `<div class="evaluation-container">
                         <img class="evaluation-container__img" src="${item.icon}" alt="${item.category}" />
                         <h3 class="evaluation-container__title">${item.category}</h3>
                         <div class="evaluation-container__value"><span class="score">${item.score}</span><span class="from"> / 100</span></div>
                </div>`;
            const title = document.getElementsByClassName('evaluation-container__title');
            let categories = '';
            for (let a = 0; a < title.length; a++) {
                categories = title[a];
                let evaluation_container = document.getElementsByClassName('evaluation-container')[a];
                let evaluation_containerTitle = document.getElementsByClassName('evaluation-container__title')[a];
                if (categories.innerHTML === 'Reaction') {
                    evaluation_container.classList.add('reaction-bgCol');
                    evaluation_containerTitle.classList.add('reaction-col');
                }
                if (categories.innerHTML === 'Memory') {
                    evaluation_container.classList.add('memory-bgCol');
                    evaluation_containerTitle.classList.add('memory-col');
                }
                if (categories.innerHTML === 'Verbal') {
                    evaluation_container.classList.add('verbal-bgCol');
                    evaluation_containerTitle.classList.add('verbal-col');
                }
                if (categories.innerHTML === 'Visual') {
                    evaluation_container.classList.add('visual-bgCol');
                    evaluation_containerTitle.classList.add('visual-col');
                }
            }
        }
        const button = document.createElement('div');
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
