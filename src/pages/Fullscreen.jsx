import screenfull from "screenfull";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand} from '@fortawesome/free-solid-svg-icons'

const FullScreen = () => {
    const handleClick = ()=>{
       if(screenfull.isEnabled){
         if(screenfull.isFullscreen){
            screenfull.exit();
         } else{
            screenfull.request();
            
         }
       }
    }
    return (
        <div>
        <button onClick={handleClick}>
        <FontAwesomeIcon className='hover:text-amber-500  opacity-50 absolute top-[10px] right-[9px]' icon={faExpand} size='lg'  />
       </button>
        </div>
    );
};

export default FullScreen;