import styles from './EditableText.module.css'

export interface EditableTextProps {
    defaultValue?: string,
    editable: boolean,
}

const EditableText = (props: EditableTextProps) => (
    <div 
        contentEditable={props.editable}
        suppressContentEditableWarning={true}
        className={`${styles.editable} ${props.editable ? styles.enabled : ''}`}
    >
        {props.defaultValue}
    </div>
)

export default EditableText