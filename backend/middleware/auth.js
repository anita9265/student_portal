// const jwt = require('jsonwebtoken');
// const SECRET_KEY = "your_secret_key";

// const verifyToken = (req, res, next) => {
  //   const authHeader = req.headers.authorization;
  //   // console.log("Authorization header:", authHeader);
  //   if (!authHeader || !authHeader.startsWith("Bearer ")) {
    //     return res.status(401).json({ message: "Unauthorized" });
    //   }
    
    //   const token = authHeader.split(" ")[1];
    
    //   try {
      //     const decoded = jwt.verify(token, SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (err) {
  //     console.error("JWT Verify Error:", err.message);
//     return res.status(403).json({ message: "Invalid or expired token",errro:err.message });
//   }
// };

// module.exports = verifyToken;


const jwt = require("jsonwebtoken");
const SECRET_KEY = "your_secret_key";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // ✅ so req.user.id will be available
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = verifyToken;
