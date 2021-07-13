fetch('http://localhost:5000/api/questions').then(res => res.json())
    .then(res => {
        for (var i = 0; i < 10; i++) {
            const question = res.questions[i].question;
            const questionsCollection = document.getElementById("ques");
            questionsCollection.innerHTML = `<label class="question">${question}`;
            const choices = res.questions[i].choices;
            for (var j = 0; j < choices.length; j++) {
                const choicesCollection = document.getElementById("ans");
                choicesCollection.innerHTML = `
                    <div class="mdc-chip" role="row">
                        <span role="gridcell">
                        <span role="checkbox" tabindex="0" aria-checked="false" class="mdc-chip__primary-action">
                        <span class="mdc-chip__text">${choices[j]}</span>
                        </span>
                        </span>
                    </div>
                        `;
            }
        }
    });