import { Fab, Zoom } from "@mui/material";
import { MdAddTask } from "react-icons/md";

function FloatingButton({ onClick }) {
    return (
        <Zoom in={true} style={{transitionDelay: ".3s"}}>
            <Fab
                onClick={onClick}
                color="primary"
                sx={{ position: "fixed", left: "90%", top: "78vh" }}
            >
                <MdAddTask size={25} />
            </Fab>
        </Zoom>
    )
}

export default FloatingButton