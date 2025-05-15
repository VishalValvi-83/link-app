import React, { useState, useEffect } from "react";
import Profile, { ProfileDesktop } from "./Profile";


const ProfileResponsive = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 638);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 638);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isDesktop ? <ProfileDesktop /> : <Profile />;
};

export default ProfileResponsive;