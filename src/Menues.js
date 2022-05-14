import useSound from 'use-sound';
import sound from './sounds/sound.mp3'
import './Menues.css'
function MenuBar(){

    const [play] = useSound(sound);
    const url = '#';

    return(
        <div className="container">
            <ul>
                <li><a href={url} onClick={play}>Menu 1</a></li>
                <li><a href={url} onClick={play}>Menu 2</a></li>
                <li><a href={url} onClick={play}>Menu 3</a></li>
                <li><a href={url} onClick={play}>Menu 4</a></li>
            </ul>
        </div>
    )
};

export default MenuBar;