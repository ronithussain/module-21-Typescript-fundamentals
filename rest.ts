const device = {
    name: 'iPhone',
    type: 'Smartphone',
    price: 999,
    color: 'black',
    storage: '128GB',
}
const {name:deviceName, ...deviceInfo} = device;