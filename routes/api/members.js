const express = require("express");
const router = express.Router();
const members = require("../../members");

//Gets all members
router.get("/", (req, res) => res.json(members));

//get single member
router.get("/:idNum", (req, res) => {
	if (members.some((member) => member.id === parseInt(req.params.idNum))) {
		res.json(
			members.filter((member) => member.id === parseInt(req.params.idNum))
		);
	} else {
		res.status(400).json({
			msg: `no member with the id of ${req.params.idNum}`,
		});
	}
});

module.exports = router;
