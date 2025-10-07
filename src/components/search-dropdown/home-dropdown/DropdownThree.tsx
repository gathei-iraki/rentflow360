import NiceSelect from "@/ui/NiceSelect";

const DropdownOne = () => {

   const selectHandler = (e: any) => { };

   const searchHandler = () => {
      window.location.href = '/listing_07';
   };

   return (
      <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
         <div className="row gx-0 align-items-center">
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left">
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
            <div className="col-xl-3 col-lg-4">
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
               <div className="input-box-one border-left border-lg-0">
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
            <div className="col-xl-3">
               <div className="input-box-one lg-mt-10">
                  <button className="fw-500 w-100 tran3s search-btn-three">Search Now</button>
               </div>
            </div>
         </div>
      </form>
   );
};

export default DropdownOne;
