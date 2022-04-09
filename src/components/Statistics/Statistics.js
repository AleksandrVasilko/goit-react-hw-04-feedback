import { useState } from "react";
import Controls from './Controls';
import StaticRes from './StaticRes'
import s from './Controls.module.css'



export default function Statistics () {
    
    const [good, setGood] = useState(0);
    const[neutral, setNeutral] = useState(0); 
    const [bad, setBad] = useState(0); 
    

    const handleClick = control => {
        switch (control) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
	};
    
    
    const countTotalFeedback = () => {
        return (good + bad + neutral)
    }

    const countPositiveFeedbackPercentage = () => {
        let result = (good / (good + bad + neutral) * 100);
        return (isNaN(result) ? 0 : result)
    }
        
    const total = countTotalFeedback();
    const rating = Math.round(countPositiveFeedbackPercentage());
       
        
    return (
        <div className="Statistics">
            <p className={s.title}>Please leave feetback</p>
            <Controls
                options={['good', 'neutral', 'bad']}
                onHandleClick={handleClick}
            />
            <p className={s.title}>Statistics</p>
            <StaticRes
                good={good}
                bad={bad}
                neutral={neutral}
                totalFeedback={total}
                goodPercent={rating}
            />  
        </div>
    )
}



