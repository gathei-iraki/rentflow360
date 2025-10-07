import DashboardMessage from "@/components/dashboard/message";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Dashboard Message RentFlow 360",
};
const index = () => {
   return (
      <Wrapper>
         <DashboardMessage />
      </Wrapper>
   )
}

export default index