import DashboardReview from "@/components/dashboard/review";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Dashboard Review RentFlow 360",
};
const index = () => {
   return (
      <Wrapper>
         <DashboardReview />
      </Wrapper>
   )
}

export default index