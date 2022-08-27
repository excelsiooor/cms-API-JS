import {useState} from 'react';
import cl from './Toggle.module.css'

function Toggle({movies, scrollRef}) {

    const [statusLeft, setStatusLeft] = useState('none');
    const [statusRight, setStatusRight] = useState('');
    const [start, setStart] = useState(0);

    let step
    const widthCard = 350;
    const widthContent = movies.length * widthCard;

    const moveLeft = () => {
        if (start > 0) {
            step = start - widthCard
            setStart(step);
            setStatusRight ('flex')
        } 
        if (step === 0) {
            setStatusLeft ('none')
        }
        scrollRef.current.scroll({
            left: step,
            behavior: 'smooth'
        })
    }
    const moveRight = () => {
        if (widthContent > start + document.documentElement.clientWidth) {
            step = start + widthCard
            setStart(step);
            setStatusLeft('flex')
        } 
        if (widthContent < start + document.documentElement.clientWidth + widthCard) {
            setStatusRight ('none')
        }
        scrollRef.current.scroll({
            left: step,
            behavior: 'smooth'
        })
    }

    return(
        <div>
            <div 
                style={{display:statusLeft}}
                className={cl.left}
                onClick={moveLeft}
            ></div>
            <div 
                style={{display:statusRight}}
                className={cl.right}
                onClick={moveRight}
            ></div>
        </div>
    )
}

export default Toggle;