import styles from './inputRegister.module.css'

function InputRegister({ type, text, name, placeholder, handleOnChange, value, required }) {
    return (
        <div className={styles.form_group}>
            <label htmlFor={name} className={styles.label}>{text}:</label>
            <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            required = {required}
            />
            </div>
    )
}

export default InputRegister