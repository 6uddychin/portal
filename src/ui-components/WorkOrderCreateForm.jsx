/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createWorkOrder } from "../graphql/mutations";
const client = generateClient();
export default function WorkOrderCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sfID: "",
    requestDate: "",
    scheduledDate: "",
    completedDate: "",
    locationName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    latitude: "",
    longitude: "",
    link: "",
    owner: "",
    type: "",
    status: "",
  };
  const [sfID, setSfID] = React.useState(initialValues.sfID);
  const [requestDate, setRequestDate] = React.useState(
    initialValues.requestDate
  );
  const [scheduledDate, setScheduledDate] = React.useState(
    initialValues.scheduledDate
  );
  const [completedDate, setCompletedDate] = React.useState(
    initialValues.completedDate
  );
  const [locationName, setLocationName] = React.useState(
    initialValues.locationName
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [postalCode, setPostalCode] = React.useState(initialValues.postalCode);
  const [country, setCountry] = React.useState(initialValues.country);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [longitude, setLongitude] = React.useState(initialValues.longitude);
  const [link, setLink] = React.useState(initialValues.link);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [type, setType] = React.useState(initialValues.type);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSfID(initialValues.sfID);
    setRequestDate(initialValues.requestDate);
    setScheduledDate(initialValues.scheduledDate);
    setCompletedDate(initialValues.completedDate);
    setLocationName(initialValues.locationName);
    setAddress(initialValues.address);
    setCity(initialValues.city);
    setState(initialValues.state);
    setPostalCode(initialValues.postalCode);
    setCountry(initialValues.country);
    setLatitude(initialValues.latitude);
    setLongitude(initialValues.longitude);
    setLink(initialValues.link);
    setOwner(initialValues.owner);
    setType(initialValues.type);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    sfID: [{ type: "Required" }],
    requestDate: [{ type: "Required" }],
    scheduledDate: [{ type: "Required" }],
    completedDate: [],
    locationName: [{ type: "Required" }],
    address: [{ type: "Required" }],
    city: [],
    state: [],
    postalCode: [],
    country: [],
    latitude: [{ type: "Required" }],
    longitude: [{ type: "Required" }],
    link: [],
    owner: [{ type: "Required" }],
    type: [{ type: "Required" }],
    status: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          sfID,
          requestDate,
          scheduledDate,
          completedDate,
          locationName,
          address,
          city,
          state,
          postalCode,
          country,
          latitude,
          longitude,
          link,
          owner,
          type,
          status,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createWorkOrder.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "WorkOrderCreateForm")}
      {...rest}
    >
      <TextField
        label="Sf id"
        isRequired={true}
        isReadOnly={false}
        value={sfID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID: value,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.sfID ?? value;
          }
          if (errors.sfID?.hasError) {
            runValidationTasks("sfID", value);
          }
          setSfID(value);
        }}
        onBlur={() => runValidationTasks("sfID", sfID)}
        errorMessage={errors.sfID?.errorMessage}
        hasError={errors.sfID?.hasError}
        {...getOverrideProps(overrides, "sfID")}
      ></TextField>
      <TextField
        label="Request date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={requestDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate: value,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.requestDate ?? value;
          }
          if (errors.requestDate?.hasError) {
            runValidationTasks("requestDate", value);
          }
          setRequestDate(value);
        }}
        onBlur={() => runValidationTasks("requestDate", requestDate)}
        errorMessage={errors.requestDate?.errorMessage}
        hasError={errors.requestDate?.hasError}
        {...getOverrideProps(overrides, "requestDate")}
      ></TextField>
      <TextField
        label="Scheduled date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={scheduledDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate: value,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.scheduledDate ?? value;
          }
          if (errors.scheduledDate?.hasError) {
            runValidationTasks("scheduledDate", value);
          }
          setScheduledDate(value);
        }}
        onBlur={() => runValidationTasks("scheduledDate", scheduledDate)}
        errorMessage={errors.scheduledDate?.errorMessage}
        hasError={errors.scheduledDate?.hasError}
        {...getOverrideProps(overrides, "scheduledDate")}
      ></TextField>
      <TextField
        label="Completed date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={completedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate: value,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.completedDate ?? value;
          }
          if (errors.completedDate?.hasError) {
            runValidationTasks("completedDate", value);
          }
          setCompletedDate(value);
        }}
        onBlur={() => runValidationTasks("completedDate", completedDate)}
        errorMessage={errors.completedDate?.errorMessage}
        hasError={errors.completedDate?.hasError}
        {...getOverrideProps(overrides, "completedDate")}
      ></TextField>
      <TextField
        label="Location name"
        isRequired={true}
        isReadOnly={false}
        value={locationName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName: value,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.locationName ?? value;
          }
          if (errors.locationName?.hasError) {
            runValidationTasks("locationName", value);
          }
          setLocationName(value);
        }}
        onBlur={() => runValidationTasks("locationName", locationName)}
        errorMessage={errors.locationName?.errorMessage}
        hasError={errors.locationName?.hasError}
        {...getOverrideProps(overrides, "locationName")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address: value,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city: value,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state: value,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Postal code"
        isRequired={false}
        isReadOnly={false}
        value={postalCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode: value,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.postalCode ?? value;
          }
          if (errors.postalCode?.hasError) {
            runValidationTasks("postalCode", value);
          }
          setPostalCode(value);
        }}
        onBlur={() => runValidationTasks("postalCode", postalCode)}
        errorMessage={errors.postalCode?.errorMessage}
        hasError={errors.postalCode?.hasError}
        {...getOverrideProps(overrides, "postalCode")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country: value,
              latitude,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Latitude"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={latitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude: value,
              longitude,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.latitude ?? value;
          }
          if (errors.latitude?.hasError) {
            runValidationTasks("latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("latitude", latitude)}
        errorMessage={errors.latitude?.errorMessage}
        hasError={errors.latitude?.hasError}
        {...getOverrideProps(overrides, "latitude")}
      ></TextField>
      <TextField
        label="Longitude"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={longitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude: value,
              link,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.longitude ?? value;
          }
          if (errors.longitude?.hasError) {
            runValidationTasks("longitude", value);
          }
          setLongitude(value);
        }}
        onBlur={() => runValidationTasks("longitude", longitude)}
        errorMessage={errors.longitude?.errorMessage}
        hasError={errors.longitude?.hasError}
        {...getOverrideProps(overrides, "longitude")}
      ></TextField>
      <TextField
        label="Link"
        isRequired={false}
        isReadOnly={false}
        value={link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link: value,
              owner,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.link ?? value;
          }
          if (errors.link?.hasError) {
            runValidationTasks("link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("link", link)}
        errorMessage={errors.link?.errorMessage}
        hasError={errors.link?.hasError}
        {...getOverrideProps(overrides, "link")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={true}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner: value,
              type,
              status,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Survey"
          value="SURVEY"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Install"
          value="INSTALL"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Activation"
          value="ACTIVATION"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Removal"
          value="REMOVAL"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sfID,
              requestDate,
              scheduledDate,
              completedDate,
              locationName,
              address,
              city,
              state,
              postalCode,
              country,
              latitude,
              longitude,
              link,
              owner,
              type,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Open"
          value="OPEN"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Canceled"
          value="CANCELED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Failed"
          value="FAILED"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
