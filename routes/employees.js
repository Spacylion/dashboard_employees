const express = require('express');
const router = express.Router(); // сначала тут пустой объект {}
const { add, all, remove, edit, employee } = require("../controllers/employees");
const { auth } = require('../middleware/auth');
// тперь в этот объект добавляем get + /
// если такой объект есть, то выполни функцию
router.get("/", auth, all);
router.get("/:id", auth, employee);
router.post("/add", auth, add);
router.post("/remove/:id", remove);
router.put("/edit/:id", auth, edit);

module.exports = router;