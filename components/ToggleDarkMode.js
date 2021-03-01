import React from 'react';
import styles from '../styles/Home.module.css';
import useDarkMode from 'use-dark-mode';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
<div className={styles.toggle}>
	<input type="checkbox" className={styles.checkbox} id='chk' checked={darkMode.value} onChange={darkMode.toggle}/>
	<label className={styles.label} for="chk">
		<div className={styles.ball}></div>
        <FontAwesomeIcon icon={faMoon}/>
        <FontAwesomeIcon icon={faSun} style={{color:'white'}}/>

	</label>

</div>
);
};

export default DarkModeToggle;