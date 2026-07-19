import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {

        const bearer = req.headers.authorization;

        if (!bearer || !bearer.startsWith('Bearer')) {
            return res.status(400).json({ message: 'Invalid token.' });
        }

        const token = bearer.split(' ')[1];

        try {
            if (!token) return res.status(400).json({ message: "Token not provided." });

            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            return next();
        } catch (error) {
            if (error.name == 'TokenExpiredError') {
                return res.status(400).json({ message: 'Please Login.' });
            }
            return res.status(500).json(error);
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const verifyUser = (req, res, next) => {
    try {
        const { id } = req.params;

        if (req.user.id != id) return res.status(401).json({ message: "unauthorized" });

        return next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const adminAuth = (req, res, next) => {
    try {
        if (req.user.role != 'admin') return res.status(401).json({ message: "Admin access only." });
        return next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}