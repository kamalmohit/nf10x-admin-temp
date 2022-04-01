import React, {useRef} from 'react';

const FileUpload = (props) => {
    const uploadImageRef = useRef(null);
    const handleCustomButtonClick = () => {
        uploadImageRef.current.click();
    }
    return (
        <div className="mt-4 bg-form p-4 h-40 flex justify-center items-center">
            <input onChange={e => props.setfieldvalue('eventImage', e.currentTarget.files[0])} className="hidden" ref={uploadImageRef} type="file" {...props.field} {...props} />
            <button className="w-full h-full opacity-50 text-sm flex justify-center items-center" onClick={handleCustomButtonClick} {...props.field} {...props}>{props.placeholder}</button>
        </div>
    )
}

export default FileUpload;