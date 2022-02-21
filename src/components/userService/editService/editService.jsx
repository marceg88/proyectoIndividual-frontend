import { Button } from "react-bootstrap"
import { PendingAttention } from "../../home/user/list/attentionList"

export const EditServices = () => {
    return(
        <div>
            <PendingAttention />
            <Button>ELIMINAR</Button>
            <Button>MODIFICAR</Button>
        </div>
        
    )
}