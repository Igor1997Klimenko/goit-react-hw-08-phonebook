const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const isFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    isFetchingCurrent,
};
export default authSelectors;