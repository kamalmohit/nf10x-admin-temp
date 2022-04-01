import React, {useRef} from 'react';
import Button from 'globals/UIComponents/Button/Button';

const CSVUploader = ({onFileUpload}) => {
    const uploadButton = useRef(null);
    const uploadCSVHandler = () => {
        uploadButton.current.click();
    }
    return (
        <React.Fragment>
            <input className="hidden" ref={uploadButton} type="file" onChange={(e) => onFileUpload(e.target.files[0])} />
            <Button classes="w-[225px] text-[16px] mt-6" onClick={uploadCSVHandler}>
                Upload CSV
            </Button>
        </React.Fragment>
    )
};

export default CSVUploader;