import { PendingAttention } from "./list/attentionList"
import { AboutUser } from "./about/about"
import { Button } from "react-bootstrap"

export const HomeUser = () => {
   
    return(
        <div>
            <div>
                <AboutUser user={data.full_name}/>
            </div>
            <div>
                <Button>SOLICITAR</Button>
            </div>
            <div>
                {data.map(data => <PendingAttention key={data.id}{...data} />)}
            </div>
        </div>
        
    )
}