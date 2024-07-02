import HeaderApp from "@/components/header-app/HeaderApp";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TokensContext } from "@/assets/utils/context/TokensContext.jsx";
import { ProjectsContext } from "@/assets/utils/context/ProjectsContext.jsx";


function HeaderWrapper() {
  const { setFakeToken, setToken, } = useContext(TokensContext);
  const { setProjects } = useContext(ProjectsContext);

  if (sessionStorage.getItem("fakeToken"))
    setFakeToken(sessionStorage.getItem("fakeToken"));
  if (sessionStorage.getItem("token"))
    setToken(sessionStorage.getItem("token"));
  if (sessionStorage.getItem("projects"))
    setProjects(sessionStorage.getItem("projects"));

  return (
    <HeaderApp>
      <Outlet />
    </HeaderApp>
  );
}
export default HeaderWrapper;
