import './Logo.css'
import P from '../assets/P.png';
import A from '../assets/A.png';
import L from '../assets/L.png';
import O from '../assets/O.png';
import M from '../assets/M.png';

const Logo: React.FC = () => {
  

  return (
    <div className='logo-container'>
      <img src={P} alt="P" className='logo-letters'/>
      <img src={A} alt="A" className='logo-letters'/>
      <img src={L} alt="L" className='logo-letters'/>
      <img src={O} alt="O" className='logo-letters'/>
      <img src={M} alt="M" className='logo-letters'/>
      <img src={A} alt="A" className='logo-letters'/>
    </div>
  );
};

export default Logo;
