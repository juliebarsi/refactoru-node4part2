
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Seville, Spain' });
};

// exports.canary = function(req, res){
//   res.render('canary', { title: 'Canary Islands' });
// }; -- not here, but could to this in its own file