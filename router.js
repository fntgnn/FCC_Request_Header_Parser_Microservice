const get_ip = require('ipware')().get_ip;

module.exports = function(app){
    app.get("/", function (request, response) {
      const ipaddress = get_ip(request).clientIp;
      const language = request.acceptsLanguages()[0];
      var software = request.headers['user-agent'];
      const init = software.indexOf('(');
      const fin = software.indexOf(')');

      response.json({
        ipaddress,
        language,
        software: software.substr(init+1,fin-init-1)
      });
    });

}
