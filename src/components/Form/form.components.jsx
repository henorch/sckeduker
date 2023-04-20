import { Group, Input } from './form.style'


const FormInput = ({label, ...otherProps}) => {
    return(
        <Group>
            {
            label &&
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
           }   
            <Input {...otherProps}/>
        </Group>
    )
}

export default FormInput;