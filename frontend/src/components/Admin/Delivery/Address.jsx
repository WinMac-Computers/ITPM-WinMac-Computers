import React from 'react'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/react-toastify.esm';

import "./address.css";

toast.configure()

export default function Address() {

    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        axios.post("http://localhost:8070/address/create", data).then( res => 
        console.log(res.data))
        toast.success('Order Success');
   }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Name</label>
                    <input
                        placeholder='Enter Full Name'
                        type="text"
                        {...register("name", { required: true })}
                    />
                </Form.Field>
                {errors.name && <p>Please check the Full Name</p>}

                <Form.Field>
                    <label>Phone</label>
                    <input
                        placeholder='Enter Phone Number'
                        type="number"
                        {...register("phone", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.phone && <p>Please check the Phone </p>}

                <Form.Field>
                    <label>Province</label>
                    <input
                        placeholder='Enter Province'
                        type="text"
                        {...register("province",
                            {
                                required: true,
                                 })}
                    />
                </Form.Field>
                {errors.province && <p>Please check the Province</p>}

                <Form.Field>
                    <label>City</label>
                    <input
                        placeholder='Enter Your City'
                        type="text"
                        {...register("city", {
                            required: true,
                        })}
                    />
                </Form.Field>
                {errors.city && <p>Please check the City</p>}

                <Form.Field>
                    <label>Address</label>
                    <input
                        placeholder='Enter Your Home Address'
                        type="text"
                        {...register("address", {
                            required: true,
                        })}
                    />
                </Form.Field>
                {errors.address && <p>Please check the Address</p>}

                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
