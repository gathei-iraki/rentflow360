import { StaticImageData } from "next/image";

import propertyThumb_1 from "@/assets/images/listing/img_01.jpg";
import propertyThumb_2 from "@/assets/images/listing/img_02.jpg";
import propertyThumb_3 from "@/assets/images/listing/img_03.jpg";
import propertyThumb_4 from "@/assets/images/listing/img_04.jpg";
import propertyThumb_5 from "@/assets/images/listing/img_05.jpg";
import propertyThumb_6 from "@/assets/images/listing/img_06.jpg";

import property2Thumb_1 from "@/assets/images/listing/img_07.jpg";
import property2Thumb_2 from "@/assets/images/listing/img_08.jpg";
import property2Thumb_3 from "@/assets/images/listing/img_09.jpg";

import property3Thumb_1 from "@/assets/images/listing/img_13.jpg";
import property3Thumb_2 from "@/assets/images/listing/img_14.jpg";
import property3Thumb_3 from "@/assets/images/listing/img_15.jpg";
import property3Thumb_4 from "@/assets/images/listing/img_16.jpg";

import propertyLargThumb_1 from "@/assets/images/listing/img_large_01.jpg";
import propertyLargThumb_2 from "@/assets/images/listing/img_large_02.jpg";
import propertyLargThumb_3 from "@/assets/images/listing/img_large_03.jpg";
import propertyLargThumb_4 from "@/assets/images/listing/img_large_04.jpg";
import propertyLargThumb_5 from "@/assets/images/listing/img_large_05.jpg";
import propertyLargThumb_6 from "@/assets/images/listing/img_large_06.jpg";

import propertyIcon_1 from "@/assets/images/icon/icon_04.svg";
import propertyIcon_2 from "@/assets/images/icon/icon_05.svg";
import propertyIcon_3 from "@/assets/images/icon/icon_06.svg";

interface DataType {
   id: number;
   page: string;
   tag: string;
   tag_bg?: string;
   thumb?:StaticImageData
   carousel_thumb: {
      id?:string;
      img: StaticImageData;
      active?: string;
   }[];
   title: string;
   address: string;
   property_info: {
      icon: StaticImageData;
      feature: string;
      total_feature: number;
   }[];
   data_delay_time?: string;
   price: number;
   price_text?: string;
   carousel?: string;
}[];

const property_data: DataType[] = [
   {
    id: 1,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Bandas villa Apartments",
      address: "Westlands, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 3280,
      carousel: "1",
   },
   {
      id: 2,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
      title: "White House Apartments",
      address: "Statehouse Rd, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 28100.00,
      price_text: "m",
      carousel: "2",
     
   },
   {
      id: 3,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
      title: "Fresh lake Apratments.",
      address: "Milimani, Kisumu",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],      price: 42500.00,
      carousel: "3",
    
   },
   {
      id: 4,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
      title: "Blueberry villas",
      address: "Kisauni, Meru.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 15280,
      price_text: "m",
      carousel: "4",
     
   },
   {
      id: 5,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
      title: "White House villa",
      address: "Statehouse Rd, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 28100.00,
      carousel: "5",
     
   },
   {
      id: 6,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Luxury villa in Dal lake.",
      address: "110015. Taluk, New Delhi, India",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 42500.00,
      carousel: "6",
     
   },
   {
      id: 7,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Kiriri Homes.",
      address: "Karatina, Nyeri",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      price_text: "m",
      carousel: "3",
      
   },
   {
      id: 8,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Mombo Houses",
      address: "Njiri, Kisii.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 3280,
      carousel: "4",
     
   },
   {
      id: 9,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
      title: "Ndoni villa",
      address: "juja, Juja",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 28100.00,
      carousel: "5",

   },
   {
      id: 10,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Luxury villas.",
      address: "Westlands, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 42500.00,
      carousel: "6",
    
   },
   {
      id: 11,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Mitini Complex.",
      address: "Tetu, Nyeri",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      price_text: "m",
      carousel: "3",
  
   },
   {
      id: 12,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Bobi House",
      address: "Kisumu, Kisumu.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 3280,
      carousel: "4",
   
   },
   {
      id: 13,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Kitana Homes",
      address: "Njari, Kisii",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],      price: 3280,
      carousel: "1",
    
   },
   {
      id: 14,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
      title: "White Aprtments",
      address: "Parklands, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 28100.00,
      price_text: "m",
      carousel: "2",
      
   },
   {
      id: 15,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
      title: "Lusaka Palace.",
      address: "Kona, Juja",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      carousel: "3",
     
   },
   {
      id: 16,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
      title: "Royal Homes",
      address: "Msitu, Kisumu.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 3280,
      price_text: "m",
      carousel: "4",
     
   },
   {
      id: 17,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Pavhka Apartments",
      address: "Town, Meru",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 3280,
      carousel: "1",
     
   },
   {
      id: 18,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
      title: "Rudisha Villas",
      address: "Kasarani, Nairobi",
      data_delay_time: "0.1s",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 28100.00,
      price_text: "m",
      carousel: "2",
    
   },
   {
      id: 19,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
      title: "Kathumbi Homes.",
      address: "Dokki, Nyeri",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      carousel: "3",
     
   },
   {
      id: 20,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
      title: "Kisauni villa",
      address: "juji, Kisumu.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 3280,
      price_text: "m",
      carousel: "4",
     
   },

   // listing_2

   {
      id: 1,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Bandas villa Apartments",
      address: "Westlands, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 3280,
      carousel: "1",
     
   },
   {
       id: 2,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
      title: "White House Apartments",
      address: "Statehouse Rd, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 28100.00,
      price_text: "m",
      carousel: "2",
      
   },
   {
     id: 3,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
      title: "Fresh lake Apratments.",
      address: "Milimani, Kisumu",
 property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
      price: 42500.00,
      carousel: "3",
      
   },
   {
      id: 4,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
      title: "Blueberry villas",
      address: "Kisauni, Meru.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 15280,
      price_text: "m",
      carousel: "4",
      
   },
   {
      id: 5,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
      title: "White House villa",
      address: "Statehouse Rd, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 28100.00,
      carousel: "5",
     
   },
   {
      id: 6,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Luxury villa in Dal lake.",
      address: "110015. Taluk, New Delhi, India",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 42500.00,
      carousel: "6",
     
   },
   {
      id: 7,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Kiriri Homes.",
      address: "Karatina, Nyeri",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],      price: 42500.00,
      price_text: "m",
      carousel: "3",
      
   },
   {
      id: 8,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Mombo Houses",
      address: "Njiri, Kisii.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],      data_delay_time: "0.1s",
      price: 3280,
      carousel: "4",
      
   },
   {
      id: 9,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
      title: "Ndoni villa",
      address: "juja, Juja",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],      price: 28100.00,
      carousel: "5",
      
   },
   {
      id: 10,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Luxury villas.",
      address: "Westlands, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 42500.00,
      carousel: "6",
   
   },
   {
      id: 11,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Mitini Complex.",
      address: "Tetu, Nyeri",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      price_text: "m",
      carousel: "3",
     
   },
   {
      id: 12,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Bobi House",
      address: "Kisumu, Kisumu.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 3280,
      carousel: "4",
      
   },
   {
      id: 13,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Kitana Homes",
      address: "Njari, Kisii",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 3280,
      carousel: "1",
   
   },
   {
      id: 14,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
      title: "White Aprtments",
      address: "Parklands, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 28100.00,
      price_text: "m",
      carousel: "2",
    
   },
   {
      id: 15,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
      title: "Lusaka Palace.",
      address: "Kona, Juja",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      carousel: "3",
   
   },
   {
      id: 16,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
      title: "Royal Homes",
      address: "Msitu, Kisumu.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 3280,
      price_text: "m",
      carousel: "4",
   
   },
   // listing_3

   {
      id: 1,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Bandas villa Apartments",
      address: "Westlands, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],      price: 3280,
      carousel: "1",
     
   },
   {
      id: 2,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
      title: "White House Apartments",
      address: "Statehouse Rd, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 28100.00,
      price_text: "m",
      carousel: "2",
   
   },
   {
      id: 3,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
      title: "Fresh lake Apratments.",
      address: "Milimani, Kisumu",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      carousel: "3",
   
   },
   {
      id: 4,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
      title: "Blueberry villas",
      address: "Kisauni, Meru.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 15280,
      price_text: "m",
      carousel: "4",
   
   },
   {
      id: 5,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
      title: "White House villa",
      address: "Statehouse Rd, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 28100.00,
      carousel: "5",
     
   },
   
   {
      id: 7,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Kiriri Homes.",
      address: "Karatina, Nyeri",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      price_text: "m",
      carousel: "3",
     
   },
   {
      id: 8,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Mombo Houses",
      address: "Njiri, Kisii.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 3280,
      carousel: "4",
     
   },
   {
      id: 9,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
      title: "Ndoni villa",
      address: "juja, Juja",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 28100.00,
      carousel: "5",
      
   },
   {
      id: 10,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Luxury villas.",
      address: "Westlands, Nairobi",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 42500.00,
      carousel: "6",
     
   },
   {
      id: 11,
      page: "listing_1",
      tag: "FOR RENT",
      tag_bg: "rent",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Mitini Complex.",
      address: "Tetu, Nyeri",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        price: 42500.00,
      price_text: "m",
      carousel: "3",
      
   },
   {
      id: 12,
      page: "listing_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Bobi House",
      address: "Kisumu, Kisumu.",
  property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
        data_delay_time: "0.1s",
      price: 3280,
      carousel: "4",
     
   },

   // listing_4

]

export default property_data;