import Sectionheader from "./Sectionheader";
import Faqsection from "./Faqsection";
import { faqs } from "../data";
import { FaQuestion } from "react-icons/fa6";


const Faqsections = () => {
    return (
      <section className="faqs">
        <div className="container faqs__container">
          <Sectionheader icons={<FaQuestion />} title="FAQs"></Sectionheader>

          <div className="faqs__wrapper">
            {faqs.map(({ id, question, answer } , index) => {
              return (
                <Faqsection key={id} question={question} answer={answer} />
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default Faqsections;