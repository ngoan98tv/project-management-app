const Auth = {
    isAuthenticated: false,
    signIn(email, password, action) {
        this.isAuthenticated = true;
        console.log(email + " | " + password);
        action();
    },
    signOut(action) {
        this.isAuthenticated = false;
        action();
    }
};

export default Auth;