import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './Club_internal_page.css';
import picture from '../../images/img-1.jpg';

function Club_internal_page() {
    const [click,setClick] = useState(false);
    const [button,setButton] =useState(true);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () =>setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize',showButton);

  return (
    <div className='club-int-container'>
      <p></p>
       <h1> Club Name </h1>
       <p></p>
        {/* src='../../images/img-1.jpg' */}
        <img src={picture} />
        {/* <video src='/videos/video-2.mp4' autoPlay loop muted/> */}
        <div className='club-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path_name='edit-info' 
        >
          Edit Info
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path_name='members'
        >
          Members
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path_name='approved-quiz'
        >
          Approved Quiz
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path_name='events'
        >
          Events
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path_name='host-event'
        >
          Host Event
        </Button>
        </div> 
        <p></p>
        <h1> About Club</h1>
        <p>This is a distinguised club with some higher quality contents.</p>
    </div>
  );
}

export default Club_internal_page
