import { connect } from 'dva';
import styles from './index.css';
import { getGameId } from '../utils';

const HomePage = ({
  home,
  dispatch,
}) => {
  return (
    <div>
      <h1>智能合约发布</h1>
      <h5>当前 gameId: {getGameId()}</h5>
      <button
        onClick={() => {
          dispatch({ type: 'home/addGame' });
        }}
      >
        发布
      </button>
    </div>
  );
}

export default connect(({ home }) => ({ home }))(HomePage);
