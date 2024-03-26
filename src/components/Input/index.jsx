import { TextField } from "@mui/material"
import "./styles.scss"

function Input(props) {
    return (
        <>
            <TextField
                {...props}
                variant="filled"
                helperText=""
                error={false}
                sx={
                    {
                        backgroundColor: "#00000030"
                    }
                }
            />
        </>
    )
}

export default Input