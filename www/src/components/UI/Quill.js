import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';

const Quill = (props) => {
    const {onChange, id, value, style, onFocus, onBlur} = props;
    

    const handleChange = (value) => {
        onChange(id, value)
    }

    return (
        <ReactQuill theme="bubble" style={style} onFocus={onFocus} onBlur={onBlur} value={value} onChange={handleChange} />
    )
}

export default Quill;