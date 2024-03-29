import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const SocialButton = ({ icon }) => {
  let IconComponent;
  switch (icon) {
    case 'facebook':
      IconComponent = FaFacebook;
      break;
    case 'github':
      IconComponent = FaGithub;
      break;
    case 'linkedin':
      IconComponent = FaLinkedinIn;
      break;
    default:
      IconComponent = null;
  }

  return (
    <button className="btn btn-outline-secondary mx-1">
      {IconComponent ? <IconComponent size={24} /> : null}
    </button>
  );
};


export default SocialButton;
