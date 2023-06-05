import React from 'react'
import styles from './styles.module.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({placeholder}) => {
  return (
    <div className={styles.search_field}>
    <SearchRoundedIcon className={styles.search_icon}/>
    <input 
        placeholder={placeholder}
        type="text" />
</div>
  )
}

export default Search;
