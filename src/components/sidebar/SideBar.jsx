import universityLogo from '../../img/heroicons-solid_academic-cap.svg';
import facultetsLogo from '../../img/heroicons-solid_book-open.svg';
import userLogo from '../../img/heroicons-solid_user-circle.svg';
import style from './SideBar.module.css';

export function SideBar() {
  return (
    <div>
      <aside>
        <div className={style.topBlock}>123</div>
        <nav>
          <ul>
            <li>
              <img src={universityLogo} alt="" /> Университет
            </li>
            <li>
              <img src={facultetsLogo} alt="" />
              Факультеты
            </li>
          </ul>
        </nav>
        <div>
          <img src={userLogo} alt="" />
          user
        </div>
      </aside>
          </div>
  );
}
