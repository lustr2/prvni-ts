import { useState } from "react";

interface FormProps {
    onSubmitForm: (data: FormDataStructure) => void;
};

export interface FormDataStructure {
    name: string;
    type: string;
};

export const Form: React.FC<FormProps> = ({onSubmitForm}) => {
    const [formData, setFormData] = useState<FormDataStructure>({
        name: '',
        type: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData, 
           [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitForm(formData);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Your Name: </p>
                <input name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label>
                <p>Select type of Activities: </p>
                <select name="type" value={formData.type} onChange={handleChange}>
                <option value=""></option>
                <option value="education">Education</option>
                <option value="relaxation">Relaxation</option>
                </select>
            </label>
            <button type="submit">Submit</button>
            </form>
        </>
    );
}