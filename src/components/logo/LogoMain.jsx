// material-ui
import logoText from '../../assets/images/logo/logo-text.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  return (
    <>
      <img src={logoText} alt="" height="35" width={'150'} style={{ fill: 'none' }} />
    </>
  );
};

export default Logo;
