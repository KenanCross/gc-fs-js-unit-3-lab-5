const randomDamage = () => {
    return Math.floor(Math.random() * 11);
}
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 1);
    return (randNum === 0) ? opt1 : opt2;
}
function attackPlayer(health) {
    return health - randomDamage();
}