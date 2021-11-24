import store from './store';
import * as actionCreator from './actions';


//store.dispatch(actionCreator.itemRemove(5));

console.log('Get store state ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Get updated store state ', store.getState()));

store.dispatch(actionCreator.addItemTwo('BHumi', 'bhjb'));
store.dispatch(actionCreator.itemAdd('reducer one'));

unsubscribe();

const MyStore = () => {
    return (
        <div> Hello    </div>
    );
};

export default MyStore;

//{firstReducer:{name:'', descrption:''}}{secondReducer:{name:'', descrption:''}}