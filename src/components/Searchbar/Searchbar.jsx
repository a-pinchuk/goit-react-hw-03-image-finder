import React, { PureComponent } from 'react';
import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends PureComponent {
  state = {
    inputValue: '',
    isMoviesShown: false,
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  onSearch = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <SearchHeader>
          <SearchForm onSubmit={this.submitHandler}>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onSearch}
            />
          </SearchForm>
        </SearchHeader>
      </div>
    );
  }
}
