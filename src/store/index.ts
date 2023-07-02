import {createSlice, configureStore, PayloadAction} from "@reduxjs/toolkit";
import {searchInitState} from "../interfaces/";

const initialState: searchInitState = { searchParameter: '', page: 1 }
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.searchParameter = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        search: searchSlice.reducer
    }
});
const searchAction = searchSlice.actions;
export { store, searchAction }
export default store;