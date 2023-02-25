const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING),
  {
    useNewURLParse: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
