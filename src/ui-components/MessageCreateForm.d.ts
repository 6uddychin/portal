/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MessageCreateFormInputValues = {
    from?: string;
    subject?: string;
    summary?: string;
    relatedLocation?: string;
    related?: string;
    date?: string;
    seen?: boolean;
    replied?: boolean;
    sfid?: string;
};
export declare type MessageCreateFormValidationValues = {
    from?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    relatedLocation?: ValidationFunction<string>;
    related?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    seen?: ValidationFunction<boolean>;
    replied?: ValidationFunction<boolean>;
    sfid?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessageCreateFormOverridesProps = {
    MessageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    relatedLocation?: PrimitiveOverrideProps<TextFieldProps>;
    related?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    seen?: PrimitiveOverrideProps<SwitchFieldProps>;
    replied?: PrimitiveOverrideProps<SwitchFieldProps>;
    sfid?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MessageCreateFormProps = React.PropsWithChildren<{
    overrides?: MessageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MessageCreateFormInputValues) => MessageCreateFormInputValues;
    onSuccess?: (fields: MessageCreateFormInputValues) => void;
    onError?: (fields: MessageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MessageCreateFormInputValues) => MessageCreateFormInputValues;
    onValidate?: MessageCreateFormValidationValues;
} & React.CSSProperties>;
export default function MessageCreateForm(props: MessageCreateFormProps): React.ReactElement;
