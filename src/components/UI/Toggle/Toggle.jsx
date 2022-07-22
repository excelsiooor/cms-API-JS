import {useState} from 'react';
import cl from './Toggle.module.css'

function Toggle({movies, scrollRef}) {

    const [statusLeft, setStatusLeft] = useState('none');
    const [statusRight, setStatusRight] = useState('');
    const [start, setStart] = useState(0);

    const widthCard = 350;
    const widthContent = movies.length * widthCard;
    const toScroll = scrollRef.current

    const moveLeft = () => {
        let startNotState
        if (start > 0) {
            startNotState = start - widthCard
            setStart(startNotState);
            setStatusRight ('flex')
        } 
        if (startNotState === 0) {
            setStatusLeft ('none')
        }
        toScroll.scroll({
            left: startNotState,
            behavior: 'smooth'
        })
    }
    const moveRight = () => {
        let startNotState
        if (widthContent > start + document.documentElement.clientWidth) {
            startNotState = start + widthCard
            setStart(startNotState);
            setStatusLeft('flex')
        } 
        if (widthContent < start + document.documentElement.clientWidth + widthCard) {
            setStatusRight ('none')
        }
        toScroll.scroll({
            left: startNotState,
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