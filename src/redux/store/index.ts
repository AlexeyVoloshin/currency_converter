import { configureStore } from '@reduxjs/toolkit';
import { currency } from '../../pages/CurrencySelectionPage/slice';

export const store = configureStore({
    reducer: {
        currency,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
