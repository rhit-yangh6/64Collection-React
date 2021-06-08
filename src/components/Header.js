import PropTypes from "prop-types";
import Button from "./Button";
import Logo1024 from "../images/logo1024.png"

const Header = ({title}) => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <header className='header'>
      <img className='logo' src={Logo1024} alt='Logo'/>
      <h1>{title}</h1>
      <Button text='Button' onClick={onClick}/>
    </header>
  );
};

Header.defaultProps =
{
  title: '64Collection'
}

Header.propTypes =
{
  title: PropTypes.string.isRequired
}

export default Header;
