"use client"
import { useState } from "react";
import NiceSelect from "@/ui/NiceSelect";

const tab_title: string[] = ["Buy", "Rent",];

const DropdownFive = () => {

   const selectHandler = (e: any) => { };
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   const searchHandler = () => {
      window.location.href = '/listing_05';
   };

   return (
      <div className="search-wrapper-one layout-one mt-60 lg-mt-40 position-relative">
         <nav className="search-filter-nav-one d-flex">
            <div className="nav nav-tabs border-0" role="tablist">
               {tab_title.map((tab, index) => (
                  <button key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`} id="buy-tab" type="button">{tab}</button>
               ))}
            </div>
         </nav>

         <div className="bg-wrapper p0 border-0 rounded-0">
            <div className="tab-content">
               <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }} className="md-pt-20">
                     <div className="row gx-0 align-items-center">
                        <div className="col-lg-3">
                           <div className="input-box-one border-left">
                              <div className="label">I’m looking to...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 options={[
                                    { value: "apartments", text: "Buy Apartments" },
                                    { value: "plots", text: "Rent Apartments" },
                                  
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-lg-4">
                           <div className="input-box-one border-left">
                              <div className="label">Location</div>
                              <NiceSelect className="nice-select location fw-normal"
                                 options={[
                                   { value: "nairobi", text: "Nairobi" },
                                                { value: "juja", text: "Juja" },
                                                { value: "mombasa", text: "Mombasa" },
                                                { value: "kisumu", text: "Kisumu" },
                                                { value: "nyeri", text: "Nyeri" },
                                                { value: "kisii", text: "Kisii" },
                                                { value: "meru", text: "Meru" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                           <div className="input-box-one">
                              <div className="label">Price Range</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
                                 options={[
                                    { value: "1", text: "$10,000 - $200,000" },
                                    { value: "2", text: "$20,000 - $300,000" },
                                    { value: "3", text: "$30,000 - $400,000" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-1">
                           <div className="input-box-one p0 ms-xl-5 md-mt-20">
                              <button className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100 pt-45 lg-pt-30 md-pt-20 pb-45 lg-pb-30 md-pb-20 fs-2"><i className="fa-light fa-magnifying-glass"></i></button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>

               <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }} className="md-pt-20">
                     <div className="row gx-0 align-items-center">
                        <div className="col-lg-3">
                           <div className="input-box-one border-left">
                              <div className="label">I’m looking to...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 options={[
                                    { value: "apartments", text: "Rent Apartments" },
                                    { value: "apartments", text: "Buy Apartments" },
                                   
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-lg-4">
                           <div className="input-box-one border-left">
                              <div className="label">Location</div>
                              <NiceSelect className="nice-select location fw-normal"
                                 options={[
                                     { value: "nairobi", text: "Nairobi" },
                                                { value: "juja", text: "Juja" },
                                                { value: "mombasa", text: "Mombasa" },
                                                { value: "kisumu", text: "Kisumu" },
                                                { value: "nyeri", text: "Nyeri" },
                                                { value: "kisii", text: "Kisii" },
                                                { value: "meru", text: "Meru" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                           <div className="input-box-one">
                              <div className="label">Price Range</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
                                 options={[
                                    { value: "1", text: "KES10,000 - KES200,000" },
                                    { value: "2", text: "KES20,000 - KES300,000" },
                                    { value: "3", text: "KES30,000 - KES400,000" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-xl-2 col-lg-1">
                           <div className="input-box-one p0 ms-xl-5 md-mt-20">
                              <button className="fw-500 text-uppercase tran3s search-btn-two w-100 h-100 pt-45 lg-pt-30 md-pt-20 pb-45 lg-pb-30 md-pb-20 fs-2"><i className="fa-light fa-magnifying-glass"></i></button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DropdownFive
