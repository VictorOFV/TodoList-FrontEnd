import { Fab } from "@mui/material";
import { MdAddTask } from "react-icons/md";

function FloatingButton({ onClick }) {
    return (
        <Fab
            onClick={onClick}
            color="primary"
            sx={{ position: "fixed", left: "90%", top: "78vh" }}
        >
            <MdAddTask size={25} />
        </Fab>
    )
}

export default FloatingButton