export const userData = ()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}