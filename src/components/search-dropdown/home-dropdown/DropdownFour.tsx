"use client"
import dropdoun_data from "@/data/home-data/DropdownData";
import NiceSelect from "@/ui/NiceSelect";
import { useState } from "react";

const tab_title: string[] = ["Buy", "Rent", "Sell"];

const DropdownFour = () => {

   const selectHandler = (e: any) => { };
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   const searchHandler = () => {
      window.location.href = '/listing_01';
   };

   return (
      <div className="search-wrapper-two position-relative ms-xl-5 ms-lg-4 ps-xxl-4 md-mt-60">
         <nav className="search-filter-nav-two d-inline-flex">
            <div className="nav nav-tabs border-0" role="tablist">
               {tab_title.map((tab, index) => (
                  <button key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`} id="buy-tab" type="button">{tab}</button>
               ))}
            </div>
         </nav>

         <div className="bg-wrapper position-relative z-1">
            <h4 className="mb-35 xl-mb-30">Find & Buy Now!</h4>
            <div className="tab-content">
               <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                     <div className="row gx-0 align-items-center">
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-25">
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
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-25">
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
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-50 lg-mb-30">
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
                        <div className="col-12">
                           <div className="input-box-one">
                              <button className="btn-five text-uppercase rounded-0 w-100">Search</button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>

               <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                     <div className="row gx-0 align-items-center">
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-25">
                              <div className="label">I’m looking to...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 options={[
                                    { value: "plots", text: "Rent Apartments" },
                                    { value: "apartments", text: "Buy Apartments" },
                                   
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-25">
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
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-50 lg-mb-30">
                              <div className="label">Price Range</div>
                              <NiceSelect
                                 className="nice-select fw-normal"
                                 options={[
                                    { value: "1", text: "KES10,000 - KES200,000" },
                                    { value: "2", text: "KES20,000 -  KES300,000" },
                                    { value: "3", text: "KES30,000 - KES400,000" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="input-box-one">
                              <button className="btn-five text-uppercase rounded-0 w-100">Search</button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>

               <div className={`tab-pane show ${activeTab === 2 ? "active" : ""}`} id="buy">
                  <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                     <div className="row gx-0 align-items-center">
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-25">
                              <div className="label">I’m looking to...</div>
                              <NiceSelect className="nice-select fw-normal"
                                 options={[
                                    { value: "plots", text: "Rent Apartments" },
                                    { value: "apartments", text: "Buy Apartments" },
                                   
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-25">
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
                        <div className="col-12">
                           <div className="input-box-one bottom-border mb-50 lg-mb-30">
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
                        <div className="col-12">
                           <div className="input-box-one">
                              <button className="btn-five text-uppercase rounded-0 w-100">Search</button>
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

export default DropdownFour
