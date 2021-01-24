import Loader from 'react-loader-spinner';

import style from './LoaderWithTitle.module.css';

const LoaderWithTitle = () => {
  return (
    <div className={style.loaderWrapper}>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={40}
        width={40}
        timeout={4000}
      />
      <h2>LOADING...</h2>
    </div>
  );
};

export default LoaderWithTitle;
