import { Group, Input } from './form.style'


const FormInput = ({label, ...otherProps}) => {
    return(
        <Group>
            <Input {...otherProps}/>
            {
            label &&
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
           }   
            
        </Group>
    )
}

export default FormInput;