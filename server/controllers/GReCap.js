// Description: This code defines a function to verify Google reCAPTCHA tokens.
const GReCap = async (req, res) => {
    const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
    const { token } = req.body;
    
    if (!token) {
        return res.status(400).json({ success: false, message: "Token is missing" });
    }

    try {
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
            {
                method: "POST",
            }
        );

        const data = await response.json(); // Debugging log


        if (data.success) {
            return res.status(200).json({ success: true, message: "Verification successful" });
        } else {
            return res.status(400).json({ success: false, message: "Verification failed" });
        }
    } catch (error) {
        console.error("Error verifying reCAPTCHA:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export default GReCap