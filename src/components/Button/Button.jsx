import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ text, clickHandler }) => {
  return (
    <LoadMore type="button" onClick={clickHandler}>
      {text}
    </LoadMore>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  showModal: PropTypes.func,
};
