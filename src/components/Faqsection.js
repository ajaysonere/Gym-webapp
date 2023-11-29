import { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Faqsection = ({question , answer})=>{
    const [isAnswerShowing , setAnswerShowing] = useState(false);
    return (
      <article className="faq" onClick={() => setAnswerShowing(prev => !prev)}>
        <div>
          <h4>{question}</h4>
          <button className="faq__icon">
            {
              isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
            }
          </button>
        </div>
        <p>{isAnswerShowing && answer}</p>
      </article>
    );
};

export default Faqsection;