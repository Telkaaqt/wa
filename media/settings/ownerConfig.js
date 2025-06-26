
const fs = require('fs')
// gausah di ubah rek karna
// udh ada request pas di scan pairing
global.ownername = "telka";
global.owner = "6283120230553";
global.botname = "Telkaabot";

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
