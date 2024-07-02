import AddProject from "@/components/addProject/AddProject"
import FakeTokenForm from "@/components/fakeTokenForm/FakeTokenForm"
import { useContext } from "react";
import {TokensContext} from "@/assets/utils/context/TokensContext.jsx"


function AddProjectPage(){

    const {fakeToken}=useContext(TokensContext)
    return (<section>
        {fakeToken ? <AddProject/> :<FakeTokenForm/>}
       
    </section>)
}

export default AddProjectPage