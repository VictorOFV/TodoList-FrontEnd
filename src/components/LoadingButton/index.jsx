import { LoadingButton as LoadingButtonMui } from "@mui/lab"

function LoadingButton({ children, loading, onClick, variant = "contained", colorMuiButton = "success", colorSpinProgress = "#fff" }) {
    return (
        <LoadingButtonMui
            variant={variant}
            color={colorMuiButton}
            type="submit"
            loading={loading}
            onClick={onClick}
            sx={{
                ".MuiCircularProgress-svg": {
                    color: colorSpinProgress
                }
            }}
        >
            {children}
        </LoadingButtonMui>
    )
}

export default LoadingButton