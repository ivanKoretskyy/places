import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from '../../shared';

import styles from './NewPlaceForm.module.scss';

type FormInputsForm = {
    title: string;
    lastName: string;
  };

export const NewPlaceForm: React.FC<{}> = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputsForm>();
    const onSubmit: SubmitHandler<FormInputsForm> = data => console.log(data);
    console.log(watch('title')) // watch input value by passing the name of it
    
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <Input defaultValue="" {...register("title",{ required: true }) }/>
            {errors.title && <span>This field is required</span>}
            </div>
            
            <Button type="submit" className={styles.submitButton}>Submit</Button>
        </form>
    </div>
    )
}