/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkOrderUpdateFormInputValues = {
    sfID?: string;
    requestDate?: string;
    scheduledDate?: string;
    completedDate?: string;
    locationName?: string;
    address?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
    link?: string;
    owner?: string;
    type?: string;
    status?: string;
};
export declare type WorkOrderUpdateFormValidationValues = {
    sfID?: ValidationFunction<string>;
    requestDate?: ValidationFunction<string>;
    scheduledDate?: ValidationFunction<string>;
    completedDate?: ValidationFunction<string>;
    locationName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    postalCode?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    latitude?: ValidationFunction<number>;
    longitude?: ValidationFunction<number>;
    link?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkOrderUpdateFormOverridesProps = {
    WorkOrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sfID?: PrimitiveOverrideProps<TextFieldProps>;
    requestDate?: PrimitiveOverrideProps<TextFieldProps>;
    scheduledDate?: PrimitiveOverrideProps<TextFieldProps>;
    completedDate?: PrimitiveOverrideProps<TextFieldProps>;
    locationName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    postalCode?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type WorkOrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkOrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workOrder?: any;
    onSubmit?: (fields: WorkOrderUpdateFormInputValues) => WorkOrderUpdateFormInputValues;
    onSuccess?: (fields: WorkOrderUpdateFormInputValues) => void;
    onError?: (fields: WorkOrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkOrderUpdateFormInputValues) => WorkOrderUpdateFormInputValues;
    onValidate?: WorkOrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkOrderUpdateForm(props: WorkOrderUpdateFormProps): React.ReactElement;
