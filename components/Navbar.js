import Link from 'next/link';
import style from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={style.container}>
      <Link href="/customers">
        <a className={style.btn}>Customers</a>
      </Link>
      <Link href="/jobs">
        <a className={style.btn}>Jobs</a>
      </Link>
    </div>
  )
}
