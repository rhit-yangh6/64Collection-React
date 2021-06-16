import PropTypes from "prop-types";
import Logo1024 from "../images/logo1024.png"

const LogoHeader = ({title, collapsed}) => {

  return (
    <div className='header'>
      <img className='logo' src={Logo1024} alt='Logo'/>
      <span style={{display: collapsed ? 'none' : 'block'}}>{title}</span>
    </div>
  );
};

LogoHeader.defaultProps =
{
  title: '64Collection'
}

LogoHeader.propTypes =
{
  title: PropTypes.string.isRequired
}

export default LogoHeader;
