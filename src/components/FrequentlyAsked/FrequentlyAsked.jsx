import React from 'react'
import Accordian from './Accordian/Accordian'
import "./FrequentlyAsked.css"
const frequent=[
    {
        question:'What does an educational consultant do?',
        answer:'An educational consultant, also called a higher education consultant, assists students and their parents in planning for college and financial aid. '
    },
    {
        question:'When should we meet an educational consultant??',
        answer:'While we can step in to help a family at any point in their planning journey, the best time to contact an educational consultant is after the student has qualified for pre-college/junior college/11-th standard. '
    },
    {
        question:'Can you guarantee that my child will get into their first choice school?',
        answer:'No one can ethically offer this guarantee. However, we can work with your child to shape their activities and application to give them their very best chance. '
    },
    {
        question:'What does a financial consultant do?',
        answer:'A financial consultant will help you manage your finances in a better way and to grow them as per the market condition, your goals, and your risk appetite. Along with managing your finances, our consultants will help you learn the concepts of finance and financial planning. '
    },
    {
        question:'When should we meet a financial consultant?',
        answer:'Right from the point, you start earning any money, you need to manage your finances in an organized manner. For this, you need some financial consultation and that is the time you might want to meet a financial consultant. '
    },
]
const FrequentlyAsked = () => {
    return (
        <div className='frequentlyContainer'>
          <div className="frequentlyHeading">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <p>Please contact us if you cannot find an answer to your question.</p>
          </div>  
          {frequent.map((qna,index)=>(
            <Accordian question={qna.question} answer={qna.answer} key={index} />
          ))}
        </div>
    )
}

export default FrequentlyAsked
