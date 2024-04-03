
const step = document.querySelectorAll(".step");

// // remove d-none for step-?
const removeStep = (step) => {
  step.forEach((el, index) => {
    el.classList.add("d-none");
  });
};
// document.querySelectorAll(`.step-${st}`).forEach((el) => {
//     el.classList.remove("d-none");
// });

//get btn-step-...
const btnSteps = document.querySelectorAll(".btn-step");
btnSteps.forEach((btnStep) => {
    btnStep.addEventListener("click", () => {
        removeStep(step);
        const stepNumber = btnStep.dataset.step;
        document.querySelectorAll(`.step-${stepNumber}`).forEach((el) => {
            el.classList.remove("d-none");
        });
    });
});
