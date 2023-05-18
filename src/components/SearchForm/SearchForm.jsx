import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  FormSearch,
  SearchButton,
  SearchInput,
  SearchButtonLabel,
} from './SearchForm.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchForm = ({ searchWord, handleSubmit }) => {
  return (
    <Formik initialValues={{ searchWord }} onSubmit={handleSubmit}>
      <FormSearch>
        <SearchButton type="submit">
          <AiOutlineSearch
            className="img"
            style={{ width: '80%', height: 'auto' }}
          />
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>
        <SearchInput type="text" name="searchWord" />
      </FormSearch>
    </Formik>
  );
};

SearchForm.propTypes = {
  searchWord: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
