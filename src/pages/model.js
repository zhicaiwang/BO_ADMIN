import TronWeb from 'tronweb';
import {
  getContractServer,
} from './server';
import {
  getGameId,
  getStartTime,
  getEndTime,
} from '../utils';

// 合约地址
const contractAddress = 'TM9xckCzJuZEznHNhED4yfzQzTFXr5L5tu';

export default {
  namespace: 'home',
  state: {
    gameId: getGameId(),
    address: '',
    totalAmount: 0,
    upPoolAmount: 0,
    downPoolAmount: 0,
    upBettersCount: 0,
    downBettersCount: 0,
    result: 0,
    contract: null,
  },
  subscriptions: {
    steup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({ type: 'getContract' });
        }
      });
    },
  },
  effects: {
    *getContract(_, { call, put }) {
      const contractData = yield call(getContractServer, contractAddress);
      if (contractData) {
        yield put({ type: 'setContract', payload: contractData });
      }
    },
    *addGame(_, { call, put, select }) {
      const { contract } = yield select((state) => (state.home));
      const gameId = getGameId();
      const startTime = getStartTime();
      const endTime = getEndTime();
      // console.log(contract, gameId, startTime, endTime);
      contract.addGame(gameId, startTime, endTime).send({
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.error(err);
      }).then(() => {
      });
      contract.getUpAmount(gameId).call({

      }).then((res) => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  reducers: {
    // 设置合约
    setContract(state, action) {
      return {
        ...state,
        contract: action.payload,
      };
    },
  },
};
