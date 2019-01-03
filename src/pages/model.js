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
const contractAddress = 'TXtZYYQJHKdMYH5D2d3zZQFHwUfPMpoSfJ';

export default {
  namespace: 'home',
  state: {
    gameId: getGameId(),
    result: 0,
    contract: null,

    resultGameId: '',
    resultAmount: '',
  },
  subscriptions: {
    steup({ dispatch, history }) {
      window.addEventListener('load', function() {
        if (typeof tronPay !== 'undefined') {
          tronWeb = tronPay.tronWeb || tronWeb
          if (tronWeb.isTronPay && tronWeb.ready) {
            dispatch({ type: 'getContract' });
          }
        } else {
          console.log('No tronWeb? You should install TronPay!')
        }
      })
    },
  },
  effects: {
    *getContract(_, { call, put }) {
      const contractData = yield call(getContractServer, contractAddress);
      if (contractData) {
        yield put({ type: 'setContract', payload: contractData });
        console.log(contractData);
      }
    },
    *addGame(_, { call, put, select }) {
      const { contract } = yield select((state) => (state.home));
      const gameId = getGameId();
      const startTime = getStartTime();
      const endTime = getEndTime();
      console.log(contract, gameId, startTime, endTime);
      contract.addGame(gameId, startTime, endTime).send({
      }).then(res => {
        console.log(res);
        alert('发布成功！');
      }).catch(err => {
        console.error(err);
      }).then(() => {
      });
    },
    *setResult({ payload }, { put, select }) {
      const { contract } = yield select((state) => (state.home));
      const {
        resultGameId,
        resultAmount
      } = payload;
      console.log(resultGameId, resultAmount);
      const res = yield contract.setGameResult(resultGameId, resultAmount).send({
        callValue: 0,
        shouldPollResponse: true,
      });
      if (res) {
        alert('设置成功！');
      } else {
        alert('设置失败，请联系开发者！');
      }
    },
  },
  reducers: {
    // 设置合约
    setContract(state, action) {
      return {
        ...state,
        contract: action.payload,
      };
    },
    updateGameId(state, action) {
      return {
        ...state,
        resultGameId: action.payload,
      };
    },
    updateResult(state, action) {
      return {
        ...state,
        resultAmount: action.payload,
      };
    }
  },
};
