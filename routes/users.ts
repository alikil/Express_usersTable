var express = require('express');
var router = express.Router();

router.get('/', function(req: any, res: { send: (arg0: string) => void; }, next: any) {
  res.send('respond with a resource');
});

export default router;
