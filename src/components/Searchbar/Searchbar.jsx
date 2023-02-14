import React, { PureComponent } from 'react';
import {
  SearchHeader,
  SearchForm,
  SearchForm_button,
  SearchForm_button_label,
  SearchForm_input,
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
            <SearchForm_button type="submit">
              <SearchForm_button_label>Search</SearchForm_button_label>
            </SearchForm_button>

            <SearchForm_input
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
