import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    show,
    onClose,
    onSave,
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Сигурни ли сте, че искате да изтриете статията?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="danger" onClick={onSave}>Изтриване</Button>
                <Button variant="secondary" onClick={onClose}>Отказ</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;