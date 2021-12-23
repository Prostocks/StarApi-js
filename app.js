const Api = require("./lib/NorenRestApi");

let { authparams } = require("./cred");

api = new Api({});

api.login(authparams)
.then((res) => {        
        
        console.log('Reply: ', res);
        return;

    }).catch((err) => {
        console.error(err);
    });

