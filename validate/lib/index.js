var iap = require('in-app-purchase');

iap.config({
    verbose: true
});

module.exports.validate = function(event, cb) {
  console.log(event);
  var platform;

  if (event.platform == 'apple') {
    platform = iap.APPLE
  } else if (event.platform == 'android') {
    platform = iap.GOOGLE
  } else if (event.platform == 'windows') {
    platform = iap.WINDOWS
  } else if (event.platform == 'amazon') {
    platform = iap.AMAZON
  } else {
    cb("platform param is invalid");
  }

  iap.validate(platform, event.receipt, function (error, response) {
    if (error) {
      cb(null, { success: false, error: error });
    } else {
      cb(null, { success: iap.isValidated(response), error: null });
    }
	});
}
