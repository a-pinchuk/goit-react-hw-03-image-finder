import PropTypes from 'prop-types';
import { List, PreviewImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, openModal }) => {
  return (
    <List
      onClick={() => {
        openModal(images.largeImageURL);
      }}
    >
      <PreviewImg src={images.webformatURL} alt="" />
    </List>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
