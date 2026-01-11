import { Style_Script, Instrument_Serif, Roboto } from "next/font/google"

export const lato = Roboto({
     weight: ["100" , "300" , "400" , "700" , "900" ],
    style: ["normal" , "italic"],
    subsets: ["latin"]
})
export const instrumental = Instrument_Serif({
     weight: ["400"],
    subsets: ["latin"]
})
export const styleScript = Style_Script({
     weight: "400",
    subsets: ["latin"]
})

