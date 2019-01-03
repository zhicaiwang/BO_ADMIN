import { connect } from 'dva';
import { Input, Button } from 'antd';
import styles from './index.css';
import { getGameId } from '../utils';

const HomePage = ({
  home,
  dispatch,
}) => {

  const {
    resultGameId,
    resultAmount,
  } = home;

  return (
    <div>
      <h1>智能合约发布</h1>
      <h5>当前 gameId: {getGameId()}</h5>
      <Button
        onClick={() => {
          dispatch({ type: 'home/addGame' });
        }}
      >
        发布
      </Button>
      <br/><br/>
      <hr/>
      <div>
        <h1>合约结果发布</h1>
        <h5>gameId: </h5>
        <div style={{ width: 300, margin: '0 auto' }}>
          <Input
            type="number"
            value={resultGameId}
            onChange={(e) => {
              dispatch({ type: 'home/updateGameId', payload: e.target.value });
            }}/>
        </div>
        <br/>
        <h5>输入结果：</h5>
        <div style={{ width: 300, margin: '0 auto' }}>
          <Input
            type="number"
            value={resultAmount}
            onChange={(e) => {
              dispatch({ type: 'home/updateResult', payload: e.target.value });
            }}
          />
          <br/><br/>
          <Button
            onClick={() => {
              dispatch({ type: 'home/setResult', payload: { resultGameId, resultAmount } })
            }
          }>发布</Button>
        </div>
      </div>
    </div>
  );
}

export default connect(({ home }) => ({ home }))(HomePage);
