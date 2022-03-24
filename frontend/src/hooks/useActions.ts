import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";



export const useActions = () => {
    const dispatch = useDispatch();
    //return bindActionCreators(!!!! не забути потім прописати екшен креаторс, dispatch);
}