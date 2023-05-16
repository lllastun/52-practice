import { Main } from './main/Main';
import { SideBar } from './sidebar/SideBar';
import style from './App.module.css';


export const App = () => {
  return (
    <div className={style.body}>
      <SideBar />
      <Main />
    </div>
  );
};
