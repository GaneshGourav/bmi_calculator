const mongoose = require("mongoose");
const BlockListSchema = mongoose.Schema({
  token: { type: String, required: true },
  refreshToken: { type: String, required: true },
});

const BlockListModel = mongoose.model("blocklist", BlockListSchema);

module.exports = { BlockListModel };
