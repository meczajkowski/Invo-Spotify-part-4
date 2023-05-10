export const FaqComponent = () => {
  // Get a reference to the .faq-component element
  const faqComponent = document.querySelector(".faq-component");

  // Get all .faq-question-partial elements within the .faq-component element
  const faqAllQuestions = faqComponent.querySelectorAll(
    ".faq-question-partial"
  );

  faqAllQuestions.forEach((faqSingleQuestion) => {
    // Add a click event listener to each question
    faqSingleQuestion.addEventListener("click", () => {
      // Toggle the 'data-question-expanded' attribute when the question is clicked
      faqSingleQuestion.toggleAttribute("data-question-expanded");
    });
    // Get the answer element for the current question
    const faqAnswer = faqSingleQuestion.querySelector('.faq-question-partial__answer');

    // Add the CSS custom property '--faq-answer-height' for the answer element
    // Set its value to the scrollHeight property of the answer element,
    // which shows the full height of the element even when its current height is 0
    faqSingleQuestion.style.setProperty('--faq-answer-height', `${faqAnswer.scrollHeight}px`);
  });
};
