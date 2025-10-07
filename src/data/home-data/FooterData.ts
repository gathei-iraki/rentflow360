interface DataType {
   id: number;
   page: string;
   widget_title: string;
   widget_class?: string;
   widget_class2?: string;
   footer_link: {
      link: string;
      link_title: string;
   }[];

}

const footer_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      widget_class: "xs-mt-50",
      widget_title: "Links",
      footer_link: [{ link: "/", link_title: "Home" },  { link: "/dashboard/dashboard-index", link_title: "Dashboard" },]
   },
   {
      id: 2,
      widget_class: "xs-mt-30",
      page: "home_1",
      widget_title: "Legal",
      footer_link: [{ link: "/", link_title: "Terms & conditions" }, { link: "/", link_title: "Cookie" }, { link: "/", link_title: "Privacy policy" }, { link: "/", link_title: "Faq’s" },]
   },
   {
      id: 3,
      widget_class: "xs-mt-30",
      page: "home_1",
      widget_title: "New Listing",
      footer_link: [{ link: "/", link_title: "​Buy Apartments" }, { link: "/", link_title: "Rent Apartments" }, ]
   },

   // home two

   {
      id: 1,
      page: "home_3",
      widget_title: "Links",
      footer_link: [{ link: "/", link_title: "Home" }, { link: "/dashboard/dashboard-index", link_title: "Dashboard" },]
   },
   {
      id: 2,
      widget_class: "col-xxl-3 col-xl-4",
      page: "home_3",
      widget_title: "Legal",
      footer_link: [{ link: "/", link_title: "Terms & conditions" }, { link: "/", link_title: "Cookie" }, { link: "/", link_title: "Privacy policy" }, { link: "/", link_title: "/" },]
   },
   {
      id: 3,
      page: "home_3",
      widget_title: "New Listing",
      footer_link: [{ link: "/", link_title: "​Buy Apartments" }, { link: "/", link_title: "Buy Condos" }, { link: "/", link_title: "Rent Houses" }, { link: "/", link_title: "Rent Industrial" }, { link: "/", link_title: "Buy Villas" }, { link: "/", link_title: "Rent Office" },]
   },

   // home four

   {
      id: 1,
      page: "home_4",
      widget_class: "col-lg-2",
      widget_title: "Links",
      footer_link: [{ link: "/", link_title: "Home" }, { link: "/dashboard/dashboard-index", link_title: "Dashboard" },]
   },
   {
      id: 2,
      widget_class: "col-xl-2 col-lg-3",
      page: "home_4",
      widget_title: "New Listing",
      footer_link: [{ link: "/", link_title: "​Buy Apartments" }, { link: "/", link_title: "Rent Apartments" }, ]
   },
   {
      id: 3,
      widget_class: "col-xl-2 col-lg-3",
      page: "home_4",
      widget_title: "Legal",
      footer_link: [{ link: "/", link_title: "Terms & conditions" }, { link: "/", link_title: "Cookie" }, { link: "/", link_title: "Privacy policy" }, { link: "/", link_title: "Faq’s" },]
   },

   // home five

   {
      id: 1,
      page: "home_5",
      widget_class: "col-lg-3 ms-auto",
      widget_class2: "ps-xl-5",
      widget_title: "Links",
      footer_link: [{ link: "/", link_title: "Home" }, { link: "/dashboard/dashboard-index", link_title: "Dashboard" },]
   },
   {
      id: 2,
      widget_class: "col-lg-3",
      page: "home_5",
      widget_title: "Legal",
      footer_link: [{ link: "/", link_title: "Terms & conditions" }, { link: "/", link_title: "Cookie" }, { link: "/", link_title: "Privacy policy" }, { link: "/", link_title: "Faq’s" },]
   },
   {
      id: 3,
      widget_class: "col-lg-2",
      page: "home_5",
      widget_title: "New Listing",
      footer_link: [{ link: "/", link_title: "​Buy Apartments" }, { link: "/", link_title: "Rent Apartments" }, ]
   },
]

export default footer_data;