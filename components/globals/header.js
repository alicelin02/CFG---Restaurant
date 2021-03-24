import Image from 'next/image'

import styles from '../../styles/Header.module.css';

const Header = () => {
  return (

    <div className={styles.headerWrapper}>
      <header className={styles.header}>


        <h1 className={styles.title}>
          <a href="/">Team Yellow</a>
        </h1>
        
        <ul className={styles.primaryMenu}>
          <li className={styles.menuItem}><a href="/games">Games</a></li>
          {/* <li className={styles.menuItem}><a href="/stories">Stories</a></li> */}
          {/* <li className={styles.menuItem}><a href="/map">Map</a></li> */}
          <li className={styles.menuItem}><a href="/support">Support</a></li>

          <li className={styles.menuItem}><a href="/manage-stash" className={styles.stash}>
            <Image 
              src="/svg/jewel.svg"
              alt="Image of jewel"
              width={18}
              height={18}
            />
            312
            </a></li>

          <li className={styles.menuItem}><a href="/store">
            <Image 
              src="/svg/store.svg"
              alt="Image of store"
              width={24}
              height={24}
            />
          </a></li>

          <li className={styles.menuItem}><a href="log-in">Log in</a></li>
          <li className={styles.menuItem}><a href="sign-up">Sign up</a></li>

        </ul>

      </header>
    </div>

  )
}

export default Header;