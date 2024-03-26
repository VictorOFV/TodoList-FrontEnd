import { FormControl, InputLabel, Select as SelectMui } from "@mui/material"

function Select({ id, name, label, onChange, value, children }) {
    return (
        <FormControl variant="filled" fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <SelectMui
                name={name}
                value={value}
                onChange={onChange}
                label={label}
                labelId={id}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: "12rem",
                            background: "#02022C",
                            color: "#fff",
                        },
                    },
                }}
                sx={{
                    color: "#fff",
                    maxHeight: "5rem",
                    backgroundColor: "#02022B",
                    "& .MuiSelect-icon": {
                        fill: "#fff"
                    },
                    "&:hover": {
                        backgroundColor: "#02022B"
                    }
                }}
            >
                {children}
            </SelectMui>
        </FormControl>
    )
}

export default Select