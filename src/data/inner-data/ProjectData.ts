import { StaticImageData } from "next/image";

import projectThumb_1 from "@/assets/images/project/img_01.jpg"
import projectThumb_2 from "@/assets/images/project/img_02.jpg"
import projectThumb_3 from "@/assets/images/project/img_03.jpg"
import projectThumb_4 from "@/assets/images/project/img_04.jpg"
import projectThumb_5 from "@/assets/images/project/img_05.jpg"
import projectThumb_6 from "@/assets/images/project/img_06.jpg"
import projectThumb_7 from "@/assets/images/project/img_07.jpg"
import projectThumb_8 from "@/assets/images/project/img_08.jpg"
import projectThumb_9 from "@/assets/images/project/img_09.jpg"

import projectThumb_10 from "@/assets/images/project/img_10.jpg"
import projectThumb_11 from "@/assets/images/project/img_11.jpg"
import projectThumb_12 from "@/assets/images/project/img_12.jpg"
import projectThumb_13 from "@/assets/images/project/img_13.jpg"
import projectThumb_14 from "@/assets/images/project/img_14.jpg"
import projectThumb_15 from "@/assets/images/project/img_15.jpg"

import projectThumb_16 from "@/assets/images/project/img_16.jpg"
import projectThumb_17 from "@/assets/images/project/img_17.jpg"
import projectThumb_18 from "@/assets/images/project/img_18.jpg"
import projectThumb_19 from "@/assets/images/project/img_19.jpg"
import projectThumb_20 from "@/assets/images/project/img_20.jpg"
import projectThumb_21 from "@/assets/images/project/img_21.jpg"

import projectThumb_22 from "@/assets/images/project/img_22.jpg"
import projectThumb_23 from "@/assets/images/project/img_23.jpg"
import projectThumb_24 from "@/assets/images/project/img_24.jpg"
import projectThumb_25 from "@/assets/images/project/img_25.jpg"
import projectThumb_26 from "@/assets/images/project/img_26.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   category: string;
   title?:string;
   date?:string;
   desc?:string;
   tag?:string;
   fancybox?:string;
}

const project_data: DataType[] = [
   {
      id: 1,
      page: "project_1",
      thumb: projectThumb_1,
      category: "apartments"
   },
   {
      id: 2,
      page: "project_1",
      thumb: projectThumb_2,
      category: "plots"
   },
   {
      id: 3,
      page: "project_1",
      thumb: projectThumb_3,
      category: "apartments"
   },
   {
      id: 4,
      page: "project_1",
      thumb: projectThumb_4,
      category: "plots"
   },
   {
      id: 5,
      page: "project_1",
      thumb: projectThumb_5,
      category: "apartments"
   },
   {
      id: 6,
      page: "project_1",
      thumb: projectThumb_6,
      category: "plots"
   },
   {
      id: 7,
      page: "project_1",
      thumb: projectThumb_7,
      category: "apartments"
   },
   {
      id: 8,
      page: "project_1",
      thumb: projectThumb_8,
      category: "plots"
   },
   {
      id: 9,
      page: "project_1",
      thumb: projectThumb_9,
      category: "apartments"
   },

   // project_2

   {
      id: 1,
      page: "project_2",
      thumb: projectThumb_10,
      category: "plots"
   },
   {
      id: 2,
      page: "project_2",
      thumb: projectThumb_11,
      category: "apartments"
   },
   {
      id: 3,
      page: "project_2",
      thumb: projectThumb_12,
      category: "plots"
   },
   {
      id: 4,
      page: "project_2",
      thumb: projectThumb_13,
      category: "apartments"
   },
   {
      id: 5,
      page: "project_2",
      thumb: projectThumb_14,
      category: "plots"
   },
   {
      id: 6,
      page: "project_2",
      thumb: projectThumb_15,
      category: "apartments"
   },

   // project_3
   
   {
      id: 1,
      page: "project_3",
      thumb: projectThumb_16,
      category: "apartments",
      title:"Blue Duplex Apartments",
      date:"1 Sep, 25",
      tag:"APARTMENT",
      fancybox:"16",
   },
   {
      id: 2,
      page: "project_3",
      thumb: projectThumb_17,
      category: "plots",
      title:"2B Katheu Apartment",
      date:"15 Jan, 25",
      tag:"APARTMENT",
      fancybox:"17",
   },
   {
      id: 3,
      page: "project_3",
      thumb: projectThumb_18,
      category: "apartments",
      title:"Mugendi Sky Touch",
      date:"2 Feb, 25",
      tag:"APARTMENTS",
      fancybox:"18",
   },
   {
      id: 4,
      page: "project_3",
      thumb: projectThumb_19,
      category: "plots",
      title:"Vintage Kirui City",
      date:"19 Mar, 25",
      tag:"APARTMENT",
      fancybox:"19",
   },
   {
      id: 5,
      page: "project_3",
      thumb: projectThumb_20,
      category: "apartments",
      title:"Jamii House",
      date:"15 May, 25",
      tag:"APARTMENT",
      fancybox:"20",
   },
   {
      id: 6,
      page: "project_3",
      thumb: projectThumb_21,
      category: "apartments",
      title:"Kitenge Villa",
      date:"2 Jun, 25",
      tag:"APARTMENT",
      fancybox:"21",
   },

   // project_4
   
   {
      id: 1,
      page: "project_4",
      thumb: projectThumb_22,
      fancybox:"22",
      category: "plots",
      title:"Apartments On Vintage Kirui City.",
      desc:"Your leading real estate advocate, transforming houses into dreams. Trust",
   },
   {
      id: 2,
      page: "project_4",
      thumb: projectThumb_23,
      fancybox:"23",
      category: "apartments",
      title:"Mugendi Sky Touch Sky.",
      desc:"Your leading real estate advocate, transforming houses into dreams. Trust",
   },
   {
      id: 3,
      page: "project_4",
      thumb: projectThumb_24,
      category: "apartments",
      fancybox:"24",
      title:"Blue Duplex Apartments.",
      desc:"Your leading real estate advocate, transforming houses into dreams. Trust",
   },
   {
      id: 4,
      page: "project_4",
      thumb: projectThumb_25,
      category: "plots",
      fancybox:"25",
      title:"2B Katheu Apartments.",
      desc:"Your leading real estate advocate, transforming houses into dreams. Trust",
   },
   {
      id: 5,
      page: "project_4",
      thumb: projectThumb_26,
      category: "apartments",
      fancybox:"26",
      title:"Kitenge Villa.",
      desc:"Your leading real estate advocate, transforming houses into dreams. Trust",
   },
]

export default project_data;