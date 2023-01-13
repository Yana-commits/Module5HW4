import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material"
import {FC, ReactElement} from "react";
import {IResource} from "../../../interfaces/resources";
import {useNavigate} from "react-router-dom";

const ResourceCard: FC<IResource> = (props): ReactElement => {

    const navigate = useNavigate()

     return (
        <Card sx={{ maxWidth: 350 }}>
             <CardActionArea onClick={() => navigate(`/resource/${props.id}`)}>
               
                 <CardContent>
                     <Typography variant="body2" color="text.secondary" >
                         {props.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                         {props.year}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                         {props.color}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                         {props.pantone_value}
                     </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ResourceCard