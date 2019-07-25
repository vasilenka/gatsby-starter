import styles from './Navbar.module.scss'
import React from 'react'
import cx from 'classnames'
import {Link} from 'gatsby'

import NavbarBrand from '../NavbarBrand/NavbarBrand'
import NavbarSecondary from '../NavbarSecondary/NavbarSecondary'
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Button from '../../primitives/Button/Button'
import Container from '../../layouts/Container/Container'
import Popout from '../../primitives/Popout/Popout';
import Text from '../../primitives/Text/Text';

const Navbar = ({ children, narrow, bleed, className, ...restProps }) => {
  return (
    <>
      <nav
        className={cx({
          [styles.root]: true,
        })}
        {...restProps}>
        <div className={styles.pattern}></div>
        <Container
          narrow={narrow}
          bleed={bleed}
          className={cx({
            [styles.container]: true,
            [className]: className,
          })}
          >
          <NavbarPrimary>
            <NavbarBrand/>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/">Home</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/about/">About</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/venue/">Venue</NavbarMenu>
            <Popout
              bottom
              content={() =>
                <>
                  <NavbarMenu containerClassName={styles.dropdown} to="/organizers">Organizers</NavbarMenu>
                  <NavbarMenu containerClassName={styles.dropdown} to="/organizers#funding-partners">Funding Partners</NavbarMenu>
                </>
              }>
              {(
                setVisible,
                visible,
              ) =>
                <button type='button' className={styles.dropdownTrigger} onClick={() => setVisible(!visible)}>
                  <Text heading5Alt className={styles.item} style={{fontWeight: '700'}}>
                    Organizers
                  </Text>
                </button>
              }
            </Popout>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/programs/">Programs</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/speakers/">Speakers</NavbarMenu>
            <NavbarMenu containerClassName={styles.primaryMenu} to="/faqs/">FAQs</NavbarMenu>
          </NavbarPrimary>
          <NavbarSecondary
            className={cx({
              [styles.secondaryMenu]: true,
            })}
            style={{paddingRight: '24px'}}>
            <Link to="/join-participant">
              <Button primary>JOIN AS A PARTICIPANT</Button>
            </Link>
          </NavbarSecondary>
        </Container>
      </nav>
    </>
  )
}

export default Navbar
