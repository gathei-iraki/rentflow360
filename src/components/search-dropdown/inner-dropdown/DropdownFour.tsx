"use client"
import NiceSelect from "@/ui/NiceSelect";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import ListingDropdownModal from "@/modals/ListingDropdownModal";

import titleShape from "@/assets/images/shape/title_shape_02.svg"

const tab_title: string[] = ["Buy", "Rent", "Sell"];

const DropdownFour = ({
   handleBathroomChange,
   handleBedroomChange,
   handleSearchChange,
   handlePriceChange,
   maxPrice,
   priceValue,
   handleResetFilter,
   selectedAmenities,
   handleAmenityChange,
   handleLocationChange,
   handleStatusChange, }: any) => {

   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <>
         <div className="inner-banner-two inner-banner z-1 pt-170 xl-pt-150 md-pt-130 pb-100 xl-pb-80 md-pb-50 position-relative" style={{ backgroundImage: `url(/assets/images/media/img_49.jpg)` }}>
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="title-one mb-30 md-mb-20">
                        <h3>Find Your <span>Home <Image src={titleShape} alt="" className="lazy-img" /></span></h3>
                     </div>
                     <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                        <li><Link href="/">Home</Link></li>
                        <li>/</li>
                        <li><Link href="#">Pages</Link></li>
                        <li>/</li>
                        <li>Listing</li>
                     </ul>
                  </div>
                  <div className="col-lg-6">
                     <p className="sub-heading">Over 745,000 listings, apartments, lots and  plots available now!</p>
                  </div>
               </div>
               <div className="search-wrapper-one layout-one position-relative mt-80 xl-mt-50">
                  <nav className="search-filter-nav-one d-flex">
                     <div className="nav nav-tabs border-0" role="tablist">
                        {tab_title.map((tab, index) => (
                           <button key={index} onClick={() => handleTabClick(index)} className={`nav-link m0 ${activeTab === index ? "active" : ""}`} id="buy-tab" type="button">{tab}</button>
                        ))}
                     </div>
                  </nav>

                  <div className="bg-wrapper border-0 rounded-0">
                     <div className="tab-content">
                        <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`} id="buy">
                           <form onSubmit={(e) => e.preventDefault()}>
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
                                          onChange={handleStatusChange}
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
                                          onChange={handleLocationChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-lg-5">
                                    <div className="input-box-one">
                                       <div className="d-flex align-items-center justify-content-center justify-content-lg-end md-mt-10">
                                          <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                             <span>ADVANCE Search</span>
                                             <i className="fa-light fa-sliders-up"></i>
                                          </Link>
                                          <button className="fw-500 text-uppercase tran3s search-btn-four w-auto">
                                             <span>Search</span>
                                             <i className="fa-light fa-magnifying-glass"></i>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                        <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`} id="buy">
                           <form onSubmit={(e) => e.preventDefault()}>
                              <div className="row gx-0 align-items-center">
                                 <div className="col-lg-3">
                                    <div className="input-box-one border-left">
                                       <div className="label">I’m looking to...</div>
                                       <NiceSelect className="nice-select fw-normal"
                                          options={[
                                             { value: "plots", text: "Sell Apartments" },
                                             { value: "apartments", text: "Buy Apartments" },
                                            
                                          ]}
                                          defaultCurrent={0}
                                          onChange={handleStatusChange}
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
                                          onChange={handleLocationChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-lg-5">
                                    <div className="input-box-one">
                                       <div className="d-flex align-items-center justify-content-center justify-content-lg-end md-mt-10">
                                          <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                             <span>ADVANCE Search</span>
                                             <i className="fa-light fa-sliders-up"></i>
                                          </Link>
                                          <button className="fw-500 text-uppercase tran3s search-btn-four w-auto">
                                             <span>Search</span>
                                             <i className="fa-light fa-magnifying-glass"></i>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                        <div className={`tab-pane show ${activeTab === 2 ? "active" : ""}`} id="buy">
                           <form onSubmit={(e) => e.preventDefault()}>
                              <div className="row gx-0 align-items-center">
                                 <div className="col-lg-3">
                                    <div className="input-box-one border-left">
                                       <div className="label">I’m looking to...</div>
                                       <NiceSelect className="nice-select fw-normal"
                                          options={[
                                             { value: "plots", text: "Rent Apartments" },
                                             { value: "houses", text: "Sell Apartments" },
                                            
                                          ]}
                                          defaultCurrent={0}
                                          onChange={handleStatusChange}
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
                                          onChange={handleLocationChange}
                                          name=""
                                          placeholder="" />
                                    </div>
                                 </div>
                                 <div className="col-lg-5">
                                    <div className="input-box-one">
                                       <div className="d-flex align-items-center justify-content-center justify-content-lg-end md-mt-10">
                                          <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                             <span>ADVANCE Search</span>
                                             <i className="fa-light fa-sliders-up"></i>
                                          </Link>
                                          <button className="fw-500 text-uppercase tran3s search-btn-four w-auto">
                                             <span>Search</span>
                                             <i className="fa-light fa-magnifying-glass"></i>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ListingDropdownModal
            handleSearchChange={handleSearchChange}
            handleBedroomChange={handleBedroomChange}
            handleBathroomChange={handleBathroomChange}
            handlePriceChange={handlePriceChange}
            maxPrice={maxPrice}
            priceValue={priceValue}
            handleResetFilter={handleResetFilter}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
            handleLocationChange={handleLocationChange}
            handleStatusChange={handleStatusChange}
         />
      </>
   )
}

export default DropdownFour
