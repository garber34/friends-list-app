const { Friends } = require("../db/index.js");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const friends = await Friends.findAll({ order: [["rating", "DESC"]] });
  res.json(friends);
});

router.put('/:id', async(req,res,next)=>{

  const record= await Friends.findOne({where:{id:req.params.id}});

  record.rating=req.body.rating;
  await record.save();
  res.sendStatus(200);

})

router.delete('/:id', async(req,res,next)=>{

  const record= await Friends.findOne({where:{id:req.params.id}});
  await record.destroy();
  res.sendStatus(200);

})


module.exports = router;
