fetch('http://localhost:5000/api/questions').then(res => res.json())
    .then(res => {
        // console.log(res.questions);
        // var questionsCollection = document.getElementById("ques");
        // console.log(questionsCollection.innerHTML)
        var questions = res.questions;
        for (var i = 0; i < 10; i++) {
            var qnum = questions[i].question;
            console.log(qnum);
            // const choicesCollection = document.getElementById("ans");
            for (var j = 0; j < questions[i].choices.length; j++) {
                // console.log("item: " + i + ": " + j)
                console.log(questions[i].choices[j]);
                // choicesCollection.innerHTML +=
                //     `
                //         <div class="mdc-chip" role="row">
                //             <span role="gridcell">
                //             <span role="checkbox" tabindex="0" aria-checked="false" class="mdc-chip__primary-action">
                //             <span class="mdc-chip__text">${questions[i].choices[j]}</span>
                //             </span>
                //             </span>
                //         </div>
                //     `;
            }

        }
    });