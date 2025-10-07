import ListingDropdownModal from "@/modals/ListingDropdownModal"
import NiceSelect from "@/ui/NiceSelect"
import Link from "next/link"

const DropdownTwo = ({
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
   handleStatusChange, 
   handlePriceDropChange }: any) => {
   return (
      <>
         <form onSubmit={(e) => e.preventDefault()}>
            <div className="row gx-0 align-items-center">
               <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one border-left">
                     <div className="label">I’m looking to...</div>
                     <NiceSelect className="nice-select"
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
               <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one border-left">
                     <div className="label">Location</div>
                     <NiceSelect className="nice-select location"
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
               <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one border-left border-lg-0">
                     <div className="label">Price Range</div>
                     <NiceSelect
                        className="nice-select"
                        options={[
                           { value: "1", text: "KES10,000 - KES200,000" },
                           { value: "2", text: "KES20,000 - KES300,000" },
                           { value: "3", text: "KES30,000 - KES400,000" },
                        ]}
                        defaultCurrent={0}
                        onChange={(event) => handlePriceDropChange(event.target.value)}
                        name=""
                        placeholder=""
                     />
                  </div>
               </div>
               <div className="col-xl-3">
                  <div className="input-box-one lg-mt-20">
                     <div className="d-flex align-items-center">
                        <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn sm tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                           <i className="fa-light fa-sliders-up"></i>
                        </Link>
                        <button className="fw-500 text-uppercase tran3s search-btn">Search</button>
                     </div>
                  </div>
               </div>
            </div>
         </form>
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

export default DropdownTwo
