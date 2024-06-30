import HeaderApp from "@/components/header-app/HeaderApp";
import { Outlet } from "react-router-dom";

function HeaderWrapper() {
  return (
    <HeaderApp>
      <Outlet />
    </HeaderApp>
  );
}
export default HeaderWrapper;
