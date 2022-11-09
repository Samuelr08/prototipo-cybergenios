import { DetailsIconEnum } from "../../models/enums/details-enums"

const {electric, people, speed, year} = DetailsIconEnum

export const detailsList = [
    {
        text: "2015",
        icon: year 
    },
    {
        text: "180 Km/h",
        icon: speed
    },
    {
        text: "9/10",
        icon: electric
    },
    {
        text: "9/10",
        icon: people
    },
]