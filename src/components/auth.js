const Auth = {
    isAuthenticated: true,
    role: 'admin',
    name: 'Jack',
    email: '',
    signIn(email, password, action) {
        this.isAuthenticated = true;
        this.email = email;
        action();
    },
    signOut(action) {
        this.isAuthenticated = false;
        action();
    }
};

export default Auth;