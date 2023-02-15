import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../services/api';
import Modal from './Modal/Modal';
import { InfinitySpin } from 'react-loader-spinner';
import { Button } from './Button/Button';

export class App extends React.Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    inputValue: '',
    currentPreview: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      this.setState({ images: [], page: 1 });
      this.getImages(this.state.inputValue);
      console.log('изменился input');
    }
    if (prevState.page !== this.state.page) {
      console.log('изменился page');
      this.getImages(this.state.inputValue);
    }
  }

  getImages = key => {
    this.setState({ isLoading: true });

    fetchImages(key, this.state.page)
      .then(({ data: { hits } }) => {
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...hits],
          };
        });
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  getInputValue = value => {
    this.setState({ inputValue: value });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  openModal = url => {
    this.setState({ currentPreview: url });
  };

  closeModal = () => {
    this.setState({ currentPreview: '' });
  };

  render() {
    const { images, currentPreview, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.getInputValue} />

        {images.length !== 0 && (
          <>
            <ImageGallery
              images={this.state.images}
              openModal={this.openModal}
            />
            {isLoading && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <InfinitySpin width="400" color="#4c2ef7" />
              </div>
            )}
            {!isLoading && (
              <Button text="Load more" clickHandler={this.loadMore} />
            )}
          </>
        )}
        {currentPreview && (
          <Modal closeModal={this.closeModal} showModal={currentPreview} />
        )}
      </>
    );
  }
}
