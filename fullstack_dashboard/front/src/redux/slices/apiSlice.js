import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_VISITORS_API_URL, GET_REVENUE_API_URL } from "../../constants/apiUrls";
import { getRequest } from "../../constants/requestMethods";

// 공통된 비동기 액션 생성 로직을 별도의 함수로 분리
const createFetchThunk = (ActionType, apiUrl) => {
    return createAsyncThunk(ActionType, async () => {
        return await getRequest(apiUrl);
    })
};

export const fetchVisitors = createFetchThunk('fetchVisitors', GET_VISITORS_API_URL);

const handleFulfilled = (stateKey) => (state, action) => {
    state[stateKey] = action.payload;
}  // 이중 화살표 함수

const handleRejected = (state, action) => {
    console.log('Error', action.payload)
    state.isError = true
}

cosnt apisSlice = createSlice({
    name: 'apis',
    initialState: {
        visitorsData: null,

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchVisitors.fulfilled, handleFulfilled('visitorsData'))
        .addCase(fetchVisitors.rejected, handleRejected)


    }
});