
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"

import styles from "./WelcomeDialog.module.css"

function WelcomeDialog({ open, handleClose }) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            className="welcome-dialog"
        >
            <DialogTitle id="dialog-title" className={styles.dialogTitle}>
                Информация
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-description" className={styles.dialogContent}>
                    Это диалоговое окно, созданное с использованием компонентов Material UI. Вы можете закрыть его, нажав на
                    кнопку "Закрыть" или кликнув за пределами окна.
                </DialogContentText>
            </DialogContent>
            <DialogActions className={styles.dialogActions}>
                <Button onClick={handleClose} color="primary" className={styles.closeButton}>
                    Закрыть
                </Button>
                <Button onClick={handleClose} color="primary" variant="contained" className={styles.confirmButton}>
                    Подтвердить
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default WelcomeDialog;
