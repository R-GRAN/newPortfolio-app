import AddProject from "@/components/addProject/AddProject"
import Playground from "@/components/playground/Playground";
import { useContext } from "react";
import {TokensContext} from "@/assets/utils/context/TokensContext.jsx"


function AddProjectPage(){

    const {fakeToken}=useContext(TokensContext)

    
    return (<section>
        {fakeToken ? <AddProject/> :<Playground/>}
       
    </section>)
}

export default AddProjectPage