import PropertyList from "@/components/dashboard/properties-list";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Dashboard Property List RentFlow 360",
};
const index = () => {
   return (
      <Wrapper>
         <PropertyList />
      </Wrapper>
   )
}

export default index