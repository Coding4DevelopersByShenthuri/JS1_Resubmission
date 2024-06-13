function registerUser(users, newUser) {
    
    const existingUser = users.find(user => user.username === newUser.username);
    
    
    if (!existingUser) {
        users.push(newUser);
        console.log(`User ${newUser.username} has been registered.`)
    } else {
        console.log(`Username ${newUser.username} already exists.`)
    }
    
    
    return users
}


const users = [
    { username: 'john_doe', email: 'john@example.com' },
    { username: 'jane_smith', email: 'jane@example.com' }
];

const newUser1 = { username: 'john_doe', email: 'john.doe@example.com' }
const newUser2 = { username: 'alex_smith', email: 'alex@example.com' }

console.log(registerUser(users, newUser1)); 
console.log(registerUser(users, newUser2)); 