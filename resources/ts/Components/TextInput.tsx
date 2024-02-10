import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

type InputItemComponentProps<T extends FieldValues> = UseControllerProps<T> & {placeholder?: string}

export const TextInput = <T extends FieldValues>(props: InputItemComponentProps<T>) => {
    const { name, control, rules, placeholder } = props;
    const { field, fieldState } = useController<T>({ name, control, rules });
    const { error } = fieldState;

    return (
        <div className="mb-3">
            <input
                { ...field }
                className="form-control"
                placeholder={placeholder}
            />
            <small className="text-danger">{error ? error.message : ''}</small>
        </div>
    );
};
