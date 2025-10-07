import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/images/icon/icon_69.svg";
import serviceIcon_2 from "@/assets/images/icon/icon_70.svg";
import serviceIcon_3 from "@/assets/images/icon/icon_71.svg";

interface DataType {
   id: number;
   page: string;
   icon: StaticImageData;
   title: string;
   desc: string;
   data_delay_time?: string;
   btn: string;
}[]

const service_data: DataType[] = [
   {
      id: 1,
      page: "service_1",
      icon: serviceIcon_1,
      title: "Buy an Apartment",
      btn: "Buy Apartment",
      desc: "Explore Rentflow 360 homes and uncover your ideal living space.",
   },
   {
      id: 2,
      page: "service_1",
      icon: serviceIcon_2,
      title: "Rent an Apartment",
      btn: "Rent Apartment",
      desc: "Discover a rental you'll love on Rentflow 360, thanks to 35+ filters.",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      page: "service_1",
      icon: serviceIcon_3,
      title: "Buy an Apartment",
      btn: "Buy Apartment",
      desc: "List, sell, thrive – with our top-notch real estate agency.",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      page: "service_1",
      icon: serviceIcon_1,
      title: "Buy an Apartment",
      btn: "Buy Apartment",
      desc: "Explore Rentflow 360 homes and uncover your ideal living space.",
   },
   {
      id: 5,
      page: "service_1",
      icon: serviceIcon_2,
      title: "Rent an Apartment",
      btn: "Rent Apartment",
      desc: "Discover a rental you'll love on RentFlow 360, thanks to 35+ filters.",
      data_delay_time: "0.1s",
   },
   {
      id: 6,
      page: "service_1",
      icon: serviceIcon_3,
      title: "Buy an Apartment",
      btn: "Buy Apartment",
      desc: "thrive – with our top-notch real estate agency.",
      data_delay_time: "0.2s",
   },
   
]

export default service_data;