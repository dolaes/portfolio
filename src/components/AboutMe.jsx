import { Typography } from "@material-tailwind/react";

export function AboutMe() {
    return (
        <div>
            <div id="home" className="scroll-mt-24 pt-[85px]">
                <img
                    src="/assets/portfolio_pfp.png"
                    alt="Profile"
                    className="w-full max-w-[700px] h-auto"
                />
            </div>

            <Typography
                variant="h1"
                className="text-black font-neuepower font-[700] text-8xl relative z-10 -mt-[130px] ml-[120px]">
                Hello,
            </Typography>
            <Typography
                variant="h1"
                className="text-black font-neuepower font-[700] text-8xl relative z-10 -mt-[130px] ml-[120px]">
                I'm Daniel Olaes
            </Typography>
        </div>
    );
}
