const accounts = [{
    user: 'Youssef', pass: 5555
},
{
    user: 'Mostafa', pass: 1234
}];


export function getToken(user , pass) {
    let ss = -1;
    accounts.forEach((account) => {
        console.log(account.user , account.pass);
        if (account.user === user && account.pass === +pass) {
            ss= Math.random() * accounts.length;
        }
    });
    console.log(user);
    console.log(pass);
    return ss === -1 ? null : ss ;
}
 
