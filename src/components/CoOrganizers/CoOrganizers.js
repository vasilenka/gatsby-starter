import styles from './CoOrganizers.module.scss';
import React from 'react';
import cx from 'classnames';
import Box from '../Box/Box';

const CoOrganizers = ({
  children,
  id,
  photo,
  className,
  ...restProps
  }) => {
  return (
    <Box column alignStart className={cx(styles.root)} {...restProps}>
      <div id={id} className={styles.hack}></div>
      <div className={styles.photo}>
        {photo}
      </div>
      {children}
    </Box>
  )
}

export default CoOrganizers