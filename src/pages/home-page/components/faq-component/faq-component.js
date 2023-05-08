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
  });
};
