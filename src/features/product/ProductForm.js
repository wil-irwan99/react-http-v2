import React, { Component } from 'react'
import FormButton from '../../shared/components/FormButton/FormButton';
import FormContainer from '../../shared/components/FormContainer/FormContainer';
import FormInput from '../../shared/components/FormInput/FormInput';
import { ProductServiceRft } from '../../services/ProductServiceRft';

export default class ProductForm extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isLoading: false,
            data: {
                id: '',
                productName: ''
            },
            error: null
        }
        this.productService = context.productService;
    }

    handleInputChange = (key, value) => {
        this.setState({
            data: {
                ...this.state.data,
                [key]: value
            }
        })
    }

    handleSaveProduct = async () => {
        this.setState({
            isLoading: true,
            error: null
        })
        try {
            const result = await this.productService.addProduct({
                id: this.state.data.id,
                productName: this.state.data.productName,
            });
            if (result) alert(result)
            this.setState({
                isLoading: false,
                error: null,
                data: { id: '', productName: '' }
            })
        } catch (e) {
            this.setState({
                isLoading: false,
                error: e,
                data: { id: '', productName: '' }
            })
        }
    }
    render() {
        return (
            <FormContainer errorMessage={this.state.error ? 'Oops' : ''}>
                <FormInput id='id' label='ID' value={this.state.data.id} onChange={this.handleInputChange}></FormInput>
                <FormInput id='productName' label='Product Name' value={this.state.data.productName} onChange={this.handleInputChange}></FormInput>
                <FormButton label='Save' onClick={this.handleSaveProduct} disabled={this.state.isLoading}/>
            </FormContainer>
        )
    }
}

// ProductForm.contextType