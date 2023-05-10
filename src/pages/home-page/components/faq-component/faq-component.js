export const FaqComponent = () => {
  // Get a reference to the .faq-component element
  const faqComponent = document.querySelector(".faq-component");

  // Get all .faq-question-partial elements within the .faq-component element
  const faqAllQuestions = faqComponent.querySelectorAll(
    ".faq-question-partial"
  );

  function listenToQuestionResize(faqQuestionToListen) {
    const faqQuestion = faqQuestionToListen[0].target;

    const faqAnswer = faqQuestion.querySelector(
      ".faq-question-partial__answer"
    );

    faqQuestion.style.setProperty(
      "--faq-answer-height",
      `${faqAnswer.scrollHeight}px`
    );
  }

  faqAllQuestions.forEach((faqSingleQuestion) => {
    new ResizeObserver(listenToQuestionResize).observe(faqSingleQuestion);
    faqSingleQuestion.addEventListener("click", () => {
      faqSingleQuestion.toggleAttribute("data-question-expanded");
    });
  });
};
